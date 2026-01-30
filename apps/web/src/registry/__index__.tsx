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
  "dialog-demo": {
    name: "dialog-demo",
    description: "Dialog demo",
    type: "registry:component",
    registryDependencies: ["@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/dialog-demo.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/dialog-demo");
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
