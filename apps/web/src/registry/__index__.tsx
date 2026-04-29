// @ts-nocheck

import React from "react";

export const Index: Record<string, any> = {
  accordion: {
    name: "accordion",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/accordion.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/accordion.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  alert: {
    name: "alert",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/alert.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/alert.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "alert-dialog": {
    name: "alert-dialog",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/alert-dialog.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/alert-dialog.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  autocomplete: {
    name: "autocomplete",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/autocomplete.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/autocomplete.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  avatar: {
    name: "avatar",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/avatar.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/avatar.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  badge: {
    name: "badge",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/badge.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/badge.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  button: {
    name: "button",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/button.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/button.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "button-group": {
    name: "button-group",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/button-group.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/button-group.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  checkbox: {
    name: "checkbox",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/checkbox.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/checkbox.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "checkbox-group": {
    name: "checkbox-group",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/checkbox-group.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/checkbox-group.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  collapsible: {
    name: "collapsible",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/collapsible.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/collapsible.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  combobox: {
    name: "combobox",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/combobox.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/combobox.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  dialog: {
    name: "dialog",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/dialog.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/dialog.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  field: {
    name: "field",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/field.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/field.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  input: {
    name: "input",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/input.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/input.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "input-group": {
    name: "input-group",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/input-group.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/input-group.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  kbd: {
    name: "kbd",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/kbd.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/kbd.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  label: {
    name: "label",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/label.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/label.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  menu: {
    name: "menu",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/menu.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/menu.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "number-field": {
    name: "number-field",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/number-field.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/number-field.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  popover: {
    name: "popover",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/popover.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/popover.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "scroll-area": {
    name: "scroll-area",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/scroll-area.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/scroll-area.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  select: {
    name: "select",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/select.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/select.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  sheet: {
    name: "sheet",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/sheet.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/sheet.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  spinner: {
    name: "spinner",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/spinner.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/spinner.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  tabs: {
    name: "tabs",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/tabs.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/tabs.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  textarea: {
    name: "textarea",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/textarea.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/textarea.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  tooltip: {
    name: "tooltip",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [
      {
        path: "src/registry/default/ui/tooltip.tsx",
        type: "registry:ui",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/tooltip.tsx");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },

  /* Components */
  "c-accordion-1": {
    name: "c-accordion-1",
    description: "Accordion demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/accordion"],
    files: [
      {
        path: "src/registry/default/components/accordion/c-accordion-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/accordion/c-accordion-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["accordion"],
    meta: undefined,
  },
  "c-accordion-2": {
    name: "c-accordion-2",
    description: "Accordion demo with multiple",
    type: "registry:component",
    registryDependencies: ["@zbmui/accordion"],
    files: [
      {
        path: "src/registry/default/components/accordion/c-accordion-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/accordion/c-accordion-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["accordion"],
    meta: undefined,
  },
  "c-alert-1": {
    name: "c-alert-1",
    description: "Alert demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert"],
    files: [
      {
        path: "src/registry/default/components/alert/c-alert-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert/c-alert-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["alert"],
    meta: undefined,
  },
  "c-alert-2": {
    name: "c-alert-2",
    description: "Alert with icon",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert"],
    files: [
      {
        path: "src/registry/default/components/alert/c-alert-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert/c-alert-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["alert"],
    meta: undefined,
  },
  "c-alert-3": {
    name: "c-alert-3",
    description: "Alert with icon",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert"],
    files: [
      {
        path: "src/registry/default/components/alert/c-alert-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert/c-alert-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["alert"],
    meta: undefined,
  },
  "c-alert-4": {
    name: "c-alert-4",
    description: "Alert with icon",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert"],
    files: [
      {
        path: "src/registry/default/components/alert/c-alert-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert/c-alert-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["alert"],
    meta: undefined,
  },
  "c-alert-dialog-1": {
    name: "c-alert-dialog-1",
    description: "Alert dialog demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-dialog-2": {
    name: "c-alert-dialog-2",
    description: "Alert dialog with muted footer",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-dialog-3": {
    name: "c-alert-dialog-3",
    description: "Alert dialog controlled",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-dialog-4": {
    name: "c-alert-dialog-4",
    description: "Alert dialog with close confirmation",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-dialog-5": {
    name: "c-alert-dialog-5",
    description: "Alert dialog with backdrop variants",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-dialog-6": {
    name: "c-alert-dialog-6",
    description: "Alert dialog with popup positions",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-autocomplete-1": {
    name: "c-autocomplete-1",
    description: "Autocomplete demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-2": {
    name: "c-autocomplete-2",
    description: "Autocomplete sizes",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-3": {
    name: "c-autocomplete-3",
    description: "Autocomplete disabled",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-4": {
    name: "c-autocomplete-4",
    description: "Autocomplete with label",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-5": {
    name: "c-autocomplete-5",
    description: "Autocomplete with inline autocomplete",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-6": {
    name: "c-autocomplete-6",
    description: "Autocomplete with autoHighlight item",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-7": {
    name: "c-autocomplete-7",
    description: "Autocomplete with clear button",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-7");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-8": {
    name: "c-autocomplete-8",
    description: "Autocomplete with clear and trigger buttons",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-8.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-8");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-9": {
    name: "c-autocomplete-9",
    description: "Autocomplete with start addon",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-9.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-9");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-10": {
    name: "c-autocomplete-10",
    description: "Autocomplete with grouped items",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-10.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-10");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-11": {
    name: "c-autocomplete-11",
    description: "Autocomplete with limit results",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-11.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-11");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-12": {
    name: "c-autocomplete-12",
    description: "Autocomplete with async search",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-12.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-12");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-avatar-1": {
    name: "c-avatar-1",
    description: "Avatar demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/avatar"],
    files: [
      {
        path: "src/registry/default/components/avatar/c-avatar-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/avatar/c-avatar-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-2": {
    name: "c-avatar-2",
    description: "Avatar sizes",
    type: "registry:component",
    registryDependencies: ["@zbmui/avatar"],
    files: [
      {
        path: "src/registry/default/components/avatar/c-avatar-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/avatar/c-avatar-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-3": {
    name: "c-avatar-3",
    description: "Avatar with badge",
    type: "registry:component",
    registryDependencies: ["@zbmui/avatar"],
    files: [
      {
        path: "src/registry/default/components/avatar/c-avatar-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/avatar/c-avatar-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-4": {
    name: "c-avatar-4",
    description: "Avatar with badge icon",
    type: "registry:component",
    registryDependencies: ["@zbmui/avatar"],
    files: [
      {
        path: "src/registry/default/components/avatar/c-avatar-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/avatar/c-avatar-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-5": {
    name: "c-avatar-5",
    description: "Avatar with group",
    type: "registry:component",
    registryDependencies: ["@zbmui/avatar"],
    files: [
      {
        path: "src/registry/default/components/avatar/c-avatar-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/avatar/c-avatar-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-6": {
    name: "c-avatar-6",
    description: "Avatar with group and count",
    type: "registry:component",
    registryDependencies: ["@zbmui/avatar"],
    files: [
      {
        path: "src/registry/default/components/avatar/c-avatar-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/avatar/c-avatar-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-7": {
    name: "c-avatar-7",
    description: "Avatar with Next.js Image",
    type: "registry:component",
    registryDependencies: ["@zbmui/avatar"],
    files: [
      {
        path: "src/registry/default/components/avatar/c-avatar-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/avatar/c-avatar-7");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-badge-1": {
    name: "c-badge-1",
    description: "Badge demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/badge"],
    files: [
      {
        path: "src/registry/default/components/badge/c-badge-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/badge/c-badge-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["badge"],
    meta: undefined,
  },
  "c-badge-2": {
    name: "c-badge-2",
    description: "Badge variants demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/badge"],
    files: [
      {
        path: "src/registry/default/components/badge/c-badge-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/badge/c-badge-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["badge"],
    meta: undefined,
  },
  "c-badge-3": {
    name: "c-badge-3",
    description: "Badge sizes demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/badge"],
    files: [
      {
        path: "src/registry/default/components/badge/c-badge-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/badge/c-badge-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["badge"],
    meta: undefined,
  },
  "c-badge-4": {
    name: "c-badge-4",
    description: "Badge with icon demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/badge"],
    files: [
      {
        path: "src/registry/default/components/badge/c-badge-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/badge/c-badge-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["badge"],
    meta: undefined,
  },
  "c-button-1": {
    name: "c-button-1",
    description: "Button basic demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/button/c-button-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/button/c-button-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-button-2": {
    name: "c-button-2",
    description: "Button variants demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/button/c-button-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/button/c-button-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-button-3": {
    name: "c-button-3",
    description: "Button sizes demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/button/c-button-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/button/c-button-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-button-4": {
    name: "c-button-4",
    description: "Button render as another tag",
    type: "registry:component",
    registryDependencies: ["@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/button/c-button-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/button/c-button-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-button-5": {
    name: "c-button-5",
    description: "Button as a link",
    type: "registry:component",
    registryDependencies: ["@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/button/c-button-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/button/c-button-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-button-6": {
    name: "c-button-6",
    description: "Button with loading state",
    type: "registry:component",
    registryDependencies: ["@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/button/c-button-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/button/c-button-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-checkbox-1": {
    name: "c-checkbox-1",
    description: "Checkbox demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-2": {
    name: "c-checkbox-2",
    description: "Checkbox sizes",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-3": {
    name: "c-checkbox-3",
    description: "Checkbox disabled",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-4": {
    name: "c-checkbox-4",
    description: "Checkbox indeterminate",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-5": {
    name: "c-checkbox-5",
    description: "Checkbox controlled",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-6": {
    name: "c-checkbox-6",
    description: "Checkbox with description",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-7": {
    name: "c-checkbox-7",
    description: "Checkbox with card style",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-7");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-group-1": {
    name: "c-checkbox-group-1",
    description: "Checkbox group demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox-group"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox-group/c-checkbox-group-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-group-2": {
    name: "c-checkbox-group-2",
    description: "Checkbox group labeling",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox-group"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox-group/c-checkbox-group-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-group-3": {
    name: "c-checkbox-group-3",
    description: "Checkbox group disabled",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox-group"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox-group/c-checkbox-group-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-group-4": {
    name: "c-checkbox-group-4",
    description: "Checkbox group with disabled option",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox-group"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox-group/c-checkbox-group-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-group-5": {
    name: "c-checkbox-group-5",
    description: "Checkbox group controlled",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox-group"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox-group/c-checkbox-group-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-group-6": {
    name: "c-checkbox-group-6",
    description: "Checkbox group with parent checkbox",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox-group"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox-group/c-checkbox-group-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-group-7": {
    name: "c-checkbox-group-7",
    description: "Checkbox group with nested parent checkbox",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox-group"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox-group/c-checkbox-group-7");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-collapsible-1": {
    name: "c-collapsible-1",
    description: "Collapsible demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/collapsible"],
    files: [
      {
        path: "src/registry/default/components/collapsible/c-collapsible-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/collapsible/c-collapsible-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-combobox-1": {
    name: "c-combobox-1",
    description: "Combobox demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-2": {
    name: "c-combobox-2",
    description: "Combobox sizes",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-dialog-1": {
    name: "c-dialog-1",
    description: "Dialog demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-dialog-2": {
    name: "c-dialog-2",
    description: "Dialog with muted footer",
    type: "registry:component",
    registryDependencies: ["@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-dialog-3": {
    name: "c-dialog-3",
    description: "Dialog with popup position",
    type: "registry:component",
    registryDependencies: ["@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-dialog-4": {
    name: "c-dialog-4",
    description: "Dialog with no close button",
    type: "registry:component",
    registryDependencies: ["@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-dialog-5": {
    name: "c-dialog-5",
    description: "Dialog with scrollable content",
    type: "registry:component",
    registryDependencies: ["@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-dialog-6": {
    name: "c-dialog-6",
    description: "Dialog with nested dialogs",
    type: "registry:component",
    registryDependencies: ["@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-dialog-7": {
    name: "c-dialog-7",
    description: "Dialog with showing parent dialog of nested dialog",
    type: "registry:component",
    registryDependencies: ["@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-7");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-dialog-8": {
    name: "c-dialog-8",
    description: "Dialog with different backdrop variants",
    type: "registry:component",
    registryDependencies: ["@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-8.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-8");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-field-1": {
    name: "c-field-1",
    description: "Field Basic",
    type: "registry:demo",
    registryDependencies: ["field"],
    files: [
      {
        path: "src/registry/default/components/field/c-field-1.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/field/c-field-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-field-2": {
    name: "c-field-2",
    description: "Field required",
    type: "registry:demo",
    registryDependencies: ["field"],
    files: [
      {
        path: "src/registry/default/components/field/c-field-2.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/field/c-field-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-field-3": {
    name: "c-field-3",
    description: "Field optional",
    type: "registry:demo",
    registryDependencies: ["field"],
    files: [
      {
        path: "src/registry/default/components/field/c-field-3.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/field/c-field-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-field-4": {
    name: "c-field-4",
    description: "Field optional",
    type: "registry:demo",
    registryDependencies: ["field"],
    files: [
      {
        path: "src/registry/default/components/field/c-field-4.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/field/c-field-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-field-5": {
    name: "c-field-5",
    description: "Field with error",
    type: "registry:demo",
    registryDependencies: ["field"],
    files: [
      {
        path: "src/registry/default/components/field/c-field-5.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/field/c-field-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-input-1": {
    name: "c-input-1",
    description: "Input Basic",
    type: "registry:demo",
    registryDependencies: ["input"],
    files: [
      {
        path: "src/registry/default/components/input/c-input-1.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input/c-input-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-input-2": {
    name: "c-input-2",
    description: "Input sizes",
    type: "registry:demo",
    registryDependencies: ["input"],
    files: [
      {
        path: "src/registry/default/components/input/c-input-2.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input/c-input-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-input-3": {
    name: "c-input-3",
    description: "Input file type",
    type: "registry:demo",
    registryDependencies: ["input"],
    files: [
      {
        path: "src/registry/default/components/input/c-input-3.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input/c-input-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-input-4": {
    name: "c-input-4",
    description: "Input disabled",
    type: "registry:demo",
    registryDependencies: ["input"],
    files: [
      {
        path: "src/registry/default/components/input/c-input-4.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input/c-input-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-input-group-1": {
    name: "c-input-group-1",
    description: "Input Group Basic",
    type: "registry:demo",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-1.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-input-group-2": {
    name: "c-input-group-2",
    description: "Input Group with inline-start align",
    type: "registry:demo",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-2.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-input-group-3": {
    name: "c-input-group-3",
    description: "Input Group with inline-end align",
    type: "registry:demo",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-3.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-input-group-4": {
    name: "c-input-group-4",
    description: "Input Group with block-start align",
    type: "registry:demo",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-4.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-input-group-5": {
    name: "c-input-group-5",
    description: "Input Group with block-end align",
    type: "registry:demo",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-5.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-input-group-6": {
    name: "c-input-group-6",
    description: "Input Group with block-end align",
    type: "registry:demo",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-6.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-kbd-1": {
    name: "c-kbd-1",
    description: "Kbd Basic",
    type: "registry:demo",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "src/registry/default/components/kbd/c-kbd-1.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/kbd/c-kbd-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-kbd-2": {
    name: "c-kbd-2",
    description: "Kbd Group",
    type: "registry:demo",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "src/registry/default/components/kbd/c-kbd-2.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/kbd/c-kbd-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-kbd-3": {
    name: "c-kbd-3",
    description: "Kbd with button",
    type: "registry:demo",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "src/registry/default/components/kbd/c-kbd-3.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/kbd/c-kbd-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-kbd-4": {
    name: "c-kbd-4",
    description: "Kbd with tooltip",
    type: "registry:demo",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "src/registry/default/components/kbd/c-kbd-4.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/kbd/c-kbd-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-kbd-5": {
    name: "c-kbd-5",
    description: "Kbd with input group",
    type: "registry:demo",
    registryDependencies: ["kbd"],
    files: [
      {
        path: "src/registry/default/components/kbd/c-kbd-5.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/kbd/c-kbd-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-label-1": {
    name: "c-label-1",
    description: "Label Basic",
    type: "registry:demo",
    registryDependencies: ["label"],
    files: [
      {
        path: "src/registry/default/components/label/c-label-1.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/label/c-label-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-menu-1": {
    name: "c-menu-1",
    description: "Menu Basic",
    type: "registry:demo",
    registryDependencies: ["menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-1.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-menu-2": {
    name: "c-menu-2",
    description: "Menu open on hover",
    type: "registry:demo",
    registryDependencies: ["menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-2.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-menu-3": {
    name: "c-menu-3",
    description: "Menu with checkbox items",
    type: "registry:demo",
    registryDependencies: ["menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-3.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-menu-4": {
    name: "c-menu-4",
    description: "Menu with radio items",
    type: "registry:demo",
    registryDependencies: ["menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-4.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-menu-5": {
    name: "c-menu-5",
    description: "Menu with variants and indicator positioned",
    type: "registry:demo",
    registryDependencies: ["menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-5.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-menu-6": {
    name: "c-menu-6",
    description: "Menu popup side and alignment",
    type: "registry:demo",
    registryDependencies: ["menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-6.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-menu-7": {
    name: "c-menu-7",
    description: "Menu checkbox and radio closeOnClick behavior",
    type: "registry:demo",
    registryDependencies: ["menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-7.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-7");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-menu-8": {
    name: "c-menu-8",
    description: "Menu with dialog",
    type: "registry:demo",
    registryDependencies: ["menu", "dialog"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-8.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-8");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-number-field-1": {
    name: "c-number-field-1",
    description: "Number Field Basic",
    type: "registry:demo",
    registryDependencies: ["number-field"],
    files: [
      {
        path: "src/registry/default/components/number-field/c-number-field-1.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/number-field/c-number-field-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-number-field-2": {
    name: "c-number-field-2",
    description: "Number Field sizes",
    type: "registry:demo",
    registryDependencies: ["number-field"],
    files: [
      {
        path: "src/registry/default/components/number-field/c-number-field-2.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/number-field/c-number-field-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-number-field-3": {
    name: "c-number-field-3",
    description: "Number Field controlled",
    type: "registry:demo",
    registryDependencies: ["number-field"],
    files: [
      {
        path: "src/registry/default/components/number-field/c-number-field-3.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/number-field/c-number-field-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-popover-1": {
    name: "c-popover-1",
    description: "Popover basic",
    type: "registry:demo",
    registryDependencies: ["popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-1.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-popover-2": {
    name: "c-popover-2",
    description: "Popover with different aligns",
    type: "registry:demo",
    registryDependencies: ["popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-2.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-popover-3": {
    name: "c-popover-3",
    description: "Popover with different sides",
    type: "registry:demo",
    registryDependencies: ["popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-3.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-popover-4": {
    name: "c-popover-4",
    description: "Popover with close button",
    type: "registry:demo",
    registryDependencies: ["popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-4.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-popover-5": {
    name: "c-popover-5",
    description: "Popover with arrow",
    type: "registry:demo",
    registryDependencies: ["popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-5.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-popover-6": {
    name: "c-popover-6",
    description: "Popover with tooltip style",
    type: "registry:demo",
    registryDependencies: ["popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-6.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-popover-7": {
    name: "c-popover-7",
    description: "Popover with animation",
    type: "registry:demo",
    registryDependencies: ["popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-7.tsx",
        type: "registry:demo",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-7");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-scroll-area-1": {
    name: "c-scroll-area-1",
    description: "Scroll Area basic",
    type: "registry:component",
    registryDependencies: ["@zbmui/scroll-area"],
    files: [
      {
        path: "src/registry/default/components/scroll-area/c-scroll-area-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-scroll-area-2": {
    name: "c-scroll-area-2",
    description: "Scroll Area horizontal",
    type: "registry:component",
    registryDependencies: ["@zbmui/scroll-area"],
    files: [
      {
        path: "src/registry/default/components/scroll-area/c-scroll-area-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-scroll-area-3": {
    name: "c-scroll-area-3",
    description: "Scroll Area horizontal",
    type: "registry:component",
    registryDependencies: ["@zbmui/scroll-area"],
    files: [
      {
        path: "src/registry/default/components/scroll-area/c-scroll-area-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-scroll-area-4": {
    name: "c-scroll-area-4",
    description: "Scroll Area with fade effect",
    type: "registry:component",
    registryDependencies: ["@zbmui/scroll-area"],
    files: [
      {
        path: "src/registry/default/components/scroll-area/c-scroll-area-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-scroll-area-5": {
    name: "c-scroll-area-5",
    description: "Scroll Area with gutter",
    type: "registry:component",
    registryDependencies: ["@zbmui/scroll-area"],
    files: [
      {
        path: "src/registry/default/components/scroll-area/c-scroll-area-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-scroll-area-6": {
    name: "c-scroll-area-6",
    description: "Scroll Area with custom scrollbar size and margin",
    type: "registry:component",
    registryDependencies: ["@zbmui/scroll-area"],
    files: [
      {
        path: "src/registry/default/components/scroll-area/c-scroll-area-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-1": {
    name: "c-select-1",
    description: "Select basic",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-2": {
    name: "c-select-2",
    description: "Select sizes",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-3": {
    name: "c-select-3",
    description: "Select disabled",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-4": {
    name: "c-select-4",
    description: "Select align item with trigger",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-5": {
    name: "c-select-5",
    description: "Select with groups",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-6": {
    name: "c-select-6",
    description: "Select multiple options",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-7": {
    name: "c-select-7",
    description: "Select with icon",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-7");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-8": {
    name: "c-select-8",
    description: "Select with options icon",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-8.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-8");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-9": {
    name: "c-select-9",
    description: "Select with object values",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-9.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-9");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-10": {
    name: "c-select-10",
    description: "Select with scrolling",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-10.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-10");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-select-11": {
    name: "c-select-11",
    description: "Select controlled",
    type: "registry:component",
    registryDependencies: ["@zbmui/select"],
    files: [
      {
        path: "src/registry/default/components/select/c-select-11.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/select/c-select-11");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-sheet-1": {
    name: "c-sheet-1",
    description: "Sheet basic",
    type: "registry:component",
    registryDependencies: ["@zbmui/sheet"],
    files: [
      {
        path: "src/registry/default/components/sheet/c-sheet-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/sheet/c-sheet-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-spinner-1": {
    name: "c-spinner-1",
    description: "Spinner basic",
    type: "registry:component",
    registryDependencies: ["@zbmui/spinner"],
    files: [
      {
        path: "src/registry/default/components/spinner/c-spinner-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/spinner/c-spinner-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-tabs-1": {
    name: "c-tabs-1",
    description: "tabs basic",
    type: "registry:component",
    registryDependencies: ["@zbmui/tabs"],
    files: [
      {
        path: "src/registry/default/components/tabs/c-tabs-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/tabs/c-tabs-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-tabs-2": {
    name: "c-tabs-2",
    description: "tabs underline",
    type: "registry:component",
    registryDependencies: ["@zbmui/tabs"],
    files: [
      {
        path: "src/registry/default/components/tabs/c-tabs-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/tabs/c-tabs-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-textarea-1": {
    name: "c-textarea-1",
    description: "textarea basic",
    type: "registry:component",
    registryDependencies: ["@zbmui/textarea"],
    files: [
      {
        path: "src/registry/default/components/textarea/c-textarea-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/textarea/c-textarea-1");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: [""],
    meta: undefined,
  },
  "c-textarea-2": {
    name: "c-textarea-2",
    description: "textarea sizes",
    type: "registry:component",
    registryDependencies: ["@zbmui/textarea"],
    files: [
      {
        path: "src/registry/default/components/textarea/c-textarea-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/textarea/c-textarea-2");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: [""],
    meta: undefined,
  },
  "c-textarea-3": {
    name: "c-textarea-3",
    description: "textarea disabled",
    type: "registry:component",
    registryDependencies: ["@zbmui/textarea"],
    files: [
      {
        path: "src/registry/default/components/textarea/c-textarea-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/textarea/c-textarea-3");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: [""],
    meta: undefined,
  },
  "c-textarea-4": {
    name: "c-textarea-4",
    description: "textarea invalid",
    type: "registry:component",
    registryDependencies: ["@zbmui/textarea"],
    files: [
      {
        path: "src/registry/default/components/textarea/c-textarea-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/textarea/c-textarea-4");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: [""],
    meta: undefined,
  },
  "c-textarea-5": {
    name: "c-textarea-5",
    description: "textarea resize",
    type: "registry:component",
    registryDependencies: ["@zbmui/textarea"],
    files: [
      {
        path: "src/registry/default/components/textarea/c-textarea-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/textarea/c-textarea-5");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: [""],
    meta: undefined,
  },
  "c-textarea-6": {
    name: "c-textarea-6",
    description: "textarea with field",
    type: "registry:component",
    registryDependencies: ["@zbmui/textarea"],
    files: [
      {
        path: "src/registry/default/components/textarea/c-textarea-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/textarea/c-textarea-6");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: [""],
    meta: undefined,
  },
  "tooltip-demo": {
    name: "tooltip-demo",
    description: "Tooltip Basic",
    type: "registry:component",
    registryDependencies: ["@zbmui/tooltip"],
    files: [
      {
        path: "src/registry/default/components/tooltip/tooltip-demo.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/tooltip/tooltip-demo");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "tooltip-animation-demo": {
    name: "tooltip-animation-demo",
    description: "Tooltip Animation Demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/tooltip"],
    files: [
      {
        path: "src/registry/default/components/tooltip/tooltip-animation-demo.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/tooltip/tooltip-animation-demo");
      const exportName =
        Object.keys(mod).find(
          (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
        ) || item.name;
      return { default: mod.default || mod[exportName] };
    }),
    categories: ["button"],
    meta: undefined,
  },
};
