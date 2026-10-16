import { readFile } from "node:fs/promises";
import path from "node:path";

import {
  DEFAULT_REGISTRY_URL,
  type InitPayload,
  initPayloadSchema,
  normalizeRegistryDependency,
  type RegistryIndex,
  type RegistryItem,
  registryIndexSchema,
  registryItemSchema,
} from "@zbmui/registry";

import { assertSafeItemName } from "./paths.ts";

export interface RegistryClient {
  getItem(name: string): Promise<RegistryItem>;
  getInitPayload(): Promise<InitPayload>;
  listItems(): Promise<RegistryIndex>;
}

export class HttpRegistryClient implements RegistryClient {
  private baseUrl: string;

  constructor(baseUrl: string = DEFAULT_REGISTRY_URL) {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async fetchJson(resource: string): Promise<unknown> {
    const url = `${this.baseUrl}/${resource}.json`;

    let response: Response;
    try {
      response = await fetch(url);
    } catch (error) {
      throw new Error(
        `Could not reach the registry at ${url}: ${error instanceof Error ? error.message : String(error)}`
      );
    }

    if (response.status === 404) {
      throw new Error(
        `"${resource}" was not found in the registry. Run \`zbmui list\` to see available items.`
      );
    }
    if (!response.ok) {
      throw new Error(`Registry request failed with status ${response.status}: ${url}`);
    }

    return response.json();
  }

  async getItem(name: string): Promise<RegistryItem> {
    const normalized = normalizeRegistryDependency(name);
    assertSafeItemName(normalized);
    return registryItemSchema.parse(await this.fetchJson(normalized));
  }

  async getInitPayload(): Promise<InitPayload> {
    return initPayloadSchema.parse(await this.fetchJson("init"));
  }

  async listItems(): Promise<RegistryIndex> {
    return registryIndexSchema.parse(await this.fetchJson("index"));
  }
}

/** Reads registry JSON from a local directory — used for tests and local development. */
export class FileRegistryClient implements RegistryClient {
  constructor(private dir: string) {}

  private async readJson(resource: string): Promise<unknown> {
    try {
      return JSON.parse(await readFile(path.join(this.dir, `${resource}.json`), "utf8"));
    } catch {
      throw new Error(`"${resource}" was not found in the registry directory ${this.dir}.`);
    }
  }

  async getItem(name: string): Promise<RegistryItem> {
    const normalized = normalizeRegistryDependency(name);
    assertSafeItemName(normalized);
    return registryItemSchema.parse(await this.readJson(normalized));
  }

  async getInitPayload(): Promise<InitPayload> {
    return initPayloadSchema.parse(await this.readJson("init"));
  }

  async listItems(): Promise<RegistryIndex> {
    return registryIndexSchema.parse(await this.readJson("index"));
  }
}

export type RegistryClientOptions = {
  /** Registry base URL, or a local directory path containing registry JSON. */
  registry?: string;
};

/**
 * Resolution order: --registry flag > ZBMUI_REGISTRY_URL env var > default URL.
 * A non-URL value is treated as a local directory (FileRegistryClient).
 */
export function createRegistryClient(options: RegistryClientOptions = {}): RegistryClient {
  const base = options.registry ?? process.env.ZBMUI_REGISTRY_URL;
  if (base && !base.startsWith("http://") && !base.startsWith("https://")) {
    return new FileRegistryClient(base);
  }
  return new HttpRegistryClient(base);
}
