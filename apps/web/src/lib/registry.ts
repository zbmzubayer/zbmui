import fs from "node:fs/promises";
import path from "node:path";

import { fixImport } from "@/lib/registry-shared";
import { Index } from "@/registry/__index__";

export function getRegistryComponent(name: string) {
  return Index[name]?.component;
}

export async function getRegistryItem(name: string) {
  const item = Index[name];

  if (!item) {
    return null;
  }

  // Convert all file paths to object.
  // TODO: remove when we migrate to new registry.
  item.files = item.files.map((file: unknown) =>
    typeof file === "string" ? { path: file } : file
  );

  // Type assertion for now - TODO: implement proper validation
  const typedItem = item as any;

  const files = typedItem.files || [];
  const processedFiles = [];

  for (const file of files) {
    const content = await getFileContent(file);
    const relativePath = path.relative(process.cwd(), file.path);

    processedFiles.push({
      ...file,
      content,
      path: relativePath,
    });
  }

  // Fix file paths.
  const finalFiles = fixFilePaths(processedFiles);

  return {
    ...typedItem,
    files: finalFiles,
  };
}

async function getFileContent(file: { path: string; type?: string }) {
  const raw = await fs.readFile(file.path, "utf-8");

  return fixImport(raw.trim());
}

function getFileTarget(file: { path: string; type?: string; target?: string }) {
  let target = file.target;

  if (!target || target === "") {
    const fileName = file.path.split("/").pop();
    if (
      file.type === "registry:block" ||
      file.type === "registry:component" ||
      file.type === "registry:example"
    ) {
      target = `components/${fileName}`;
    }

    if (file.type === "registry:ui") {
      target = `components/ui/${fileName}`;
    }

    if (file.type === "registry:hook") {
      target = `hooks/${fileName}`;
    }

    if (file.type === "registry:lib") {
      target = `lib/${fileName}`;
    }
  }

  return target ?? "";
}

function fixFilePaths(
  files: Array<{
    path: string;
    type?: string;
    target?: string;
    content?: string;
  }>
) {
  if (!files) {
    return [];
  }

  // Resolve all paths relative to the first file's directory.
  const firstFilePath = files[0]?.path;
  if (!firstFilePath) {
    return [];
  }
  const firstFilePathDir = path.dirname(firstFilePath);

  return files.map((file) => {
    return {
      ...file,
      path: path.relative(firstFilePathDir, file.path),
      target: getFileTarget(file),
    };
  });
}

export type FileTree = {
  name: string;
  path?: string;
  children?: FileTree[];
};

export function createFileTreeForRegistryItemFiles(
  files: Array<{ path: string; target?: string }>
) {
  const root: FileTree[] = [];

  for (const file of files) {
    const path = file.target ?? file.path;
    const parts = path.split("/");
    let currentLevel = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;
      const existingNode = currentLevel.find((node) => node.name === part);

      if (existingNode) {
        if (isFile) {
          // Update existing file node with full path
          existingNode.path = path;
        } else if (existingNode.children) {
          // Move to next level in the tree
          currentLevel = existingNode.children;
        }
      } else if (part) {
        const newNode: FileTree = isFile ? { name: part, path } : { children: [], name: part };

        currentLevel.push(newNode);

        if (!isFile && newNode.children) {
          currentLevel = newNode.children;
        }
      }
    }
  }

  return root;
}
