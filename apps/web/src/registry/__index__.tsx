// @ts-nocheck

/**
 * GENERATED FILE — DO NOT EDIT.
 * Regenerate with `pnpm --filter web build:registry`.
 */

import React from "react";

export const Index: Record<string, any> = {
  accordion: {
    name: "accordion",
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/accordion.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/accordion.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  "alert-dialog": {
    name: "alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/alert-dialog.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/alert-dialog.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  alert: {
    name: "alert",
    description: "Displays a callout for user attention.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/alert.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/alert.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  autocomplete: {
    name: "autocomplete",
    description: "An input that suggests options as the user types.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn", "@zbmui/scroll-area"],
    files: [{ path: "src/registry/default/ui/autocomplete.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/autocomplete.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  avatar: {
    name: "avatar",
    description: "An image element with a fallback for representing the user.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/avatar.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/avatar.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  badge: {
    name: "badge",
    description: "Displays a badge or a component that looks like a badge.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/badge.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/badge.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  "button-group": {
    name: "button-group",
    description: "Groups related buttons together with shared borders.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/button-group.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/button-group.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  button: {
    name: "button",
    description: "Displays a button or a component that looks like a button.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/button.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/button.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  calendar: {
    name: "calendar",
    description: "A date field component for entering and editing dates.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/calendar.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/calendar.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  "checkbox-group": {
    name: "checkbox-group",
    description: "A group of checkboxes with shared state and labeling.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [
      { path: "src/registry/default/ui/checkbox-group.tsx", type: "registry:ui", target: "" },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/checkbox-group.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  checkbox: {
    name: "checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/checkbox.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/checkbox.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  collapsible: {
    name: "collapsible",
    description: "An interactive component which expands and collapses a panel.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/collapsible.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/collapsible.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  combobox: {
    name: "combobox",
    description: "An autocomplete input combined with a list of predefined options.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn", "@zbmui/scroll-area"],
    files: [{ path: "src/registry/default/ui/combobox.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/combobox.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  command: {
    name: "command",
    description: "A fast, composable command menu for quick search and actions.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/autocomplete", "@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/command.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/command.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  dialog: {
    name: "dialog",
    description: "A window overlaid on the primary window, rendering the content underneath inert.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/button", "@zbmui/cn", "@zbmui/scroll-area"],
    files: [{ path: "src/registry/default/ui/dialog.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/dialog.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  field: {
    name: "field",
    description: "A building block for form fields with label, description, and error message.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/field.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/field.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  form: {
    name: "form",
    description: "Form primitives wired for validation libraries.",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{ path: "src/registry/default/ui/form.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/form.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  "input-group": {
    name: "input-group",
    description: "An input with addons, icons, and buttons attached.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/button", "@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/input-group.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/input-group.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  input: {
    name: "input",
    description: "Displays a form input field.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/input.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/input.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  kbd: {
    name: "kbd",
    description: "Displays a keyboard key or shortcut.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/kbd.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/kbd.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  label: {
    name: "label",
    description: "Renders an accessible label associated with controls.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/label.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/label.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  menu: {
    name: "menu",
    description: "A menu of actions or links, triggered by a button.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn", "@zbmui/scroll-area"],
    files: [{ path: "src/registry/default/ui/menu.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/menu.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  meter: {
    name: "meter",
    description: "A graphical display of a numeric value within a known range.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/meter.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/meter.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  "navigation-menu": {
    name: "navigation-menu",
    description: "A collection of links for navigating websites.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [
      { path: "src/registry/default/ui/navigation-menu.tsx", type: "registry:ui", target: "" },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/navigation-menu.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  "number-field": {
    name: "number-field",
    description: "A number input with increment and decrement controls.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/number-field.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/number-field.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  "otp-field": {
    name: "otp-field",
    description: "A one-time-password input with individual character slots.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn", "@zbmui/separator"],
    files: [{ path: "src/registry/default/ui/otp-field.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/otp-field.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  popover: {
    name: "popover",
    description: "Displays rich content in a portal, triggered by a button.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/popover.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/popover.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  "scroll-area": {
    name: "scroll-area",
    description: "Augments native scroll functionality for custom, cross-browser styling.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/scroll-area.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/scroll-area.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  select: {
    name: "select",
    description: "Displays a list of options for the user to pick from, triggered by a button.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/select.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/select.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  separator: {
    name: "separator",
    description: "Visually or semantically separates content.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/separator.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/separator.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  sheet: {
    name: "sheet",
    description:
      "Extends the dialog component to display content that complements the main screen.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/button", "@zbmui/cn", "@zbmui/scroll-area"],
    files: [{ path: "src/registry/default/ui/sheet.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/sheet.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  sidebar: {
    name: "sidebar",
    description: "A composable, themeable application sidebar.",
    type: "registry:ui",
    registryDependencies: [
      "@zbmui/button",
      "@zbmui/cn",
      "@zbmui/input",
      "@zbmui/separator",
      "@zbmui/sheet",
      "@zbmui/skeleton",
      "@zbmui/tooltip",
      "@zbmui/use-mobile",
    ],
    files: [{ path: "src/registry/default/ui/sidebar.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/sidebar.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  skeleton: {
    name: "skeleton",
    description: "Used to show a placeholder while content is loading.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/skeleton.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/skeleton.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  slider: {
    name: "slider",
    description: "An input where the user selects a value from within a given range.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/slider.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/slider.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  spinner: {
    name: "spinner",
    description: "Indicates a loading state.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/spinner.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/spinner.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  switch: {
    name: "switch",
    description: "A control that allows the user to toggle between on and off.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/switch.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/switch.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  tabs: {
    name: "tabs",
    description:
      "A set of layered sections of content, known as tab panels, displayed one at a time.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/tabs.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/tabs.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  textarea: {
    name: "textarea",
    description: "Displays a form textarea or a component that looks like a textarea.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/textarea.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/textarea.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  "toggle-group": {
    name: "toggle-group",
    description: "A set of two-state buttons that can be toggled on or off.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn", "@zbmui/separator", "@zbmui/toggle"],
    files: [{ path: "src/registry/default/ui/toggle-group.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/toggle-group.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  toggle: {
    name: "toggle",
    description: "A two-state button that can be either on or off.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/toggle.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/toggle.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  tooltip: {
    name: "tooltip",
    description: "A popup that displays information related to an element when focused or hovered.",
    type: "registry:ui",
    registryDependencies: ["@zbmui/cn"],
    files: [{ path: "src/registry/default/ui/tooltip.tsx", type: "registry:ui", target: "" }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/ui/tooltip.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: undefined,
    meta: undefined,
  },
  "c-accordion-1": {
    name: "c-accordion-1",
    description: "Accordion with three items and one expanded by default.",
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
      const mod = await import("@/registry/default/components/accordion/c-accordion-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["accordion"],
    meta: undefined,
  },
  "c-accordion-2": {
    name: "c-accordion-2",
    description: "Accordion with multiple items expanded at once.",
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
      const mod = await import("@/registry/default/components/accordion/c-accordion-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["accordion"],
    meta: undefined,
  },
  "c-alert-dialog-1": {
    name: "c-alert-dialog-1",
    description: "Delete account confirmation dialog.",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert-dialog", "@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-dialog-2": {
    name: "c-alert-dialog-2",
    description: "Alert dialog with a muted footer.",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert-dialog"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-dialog-3": {
    name: "c-alert-dialog-3",
    description: "Controlled alert dialog with open state.",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert-dialog", "@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-dialog-4": {
    name: "c-alert-dialog-4",
    description: "Confirmation alert before closing an unsaved dialog.",
    type: "registry:component",
    registryDependencies: [
      "@zbmui/alert-dialog",
      "@zbmui/button",
      "@zbmui/dialog",
      "@zbmui/field",
      "@zbmui/form",
      "@zbmui/textarea",
    ],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-dialog-5": {
    name: "c-alert-dialog-5",
    description: "Backdrop blur, opaque, and transparent variants.",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert-dialog", "@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-dialog-6": {
    name: "c-alert-dialog-6",
    description: "Alert dialog popup position variants.",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert-dialog", "@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/alert-dialog/c-alert-dialog-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert-dialog/c-alert-dialog-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["alert-dialog"],
    meta: undefined,
  },
  "c-alert-1": {
    name: "c-alert-1",
    description: "A simple alert with title and description.",
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
      const mod = await import("@/registry/default/components/alert/c-alert-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["alert"],
    meta: undefined,
  },
  "c-alert-2": {
    name: "c-alert-2",
    description: "Alert variants with status icons.",
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
      const mod = await import("@/registry/default/components/alert/c-alert-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["alert"],
    meta: undefined,
  },
  "c-alert-3": {
    name: "c-alert-3",
    description: "Alert with icon and action buttons.",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert", "@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/alert/c-alert-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert/c-alert-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["alert"],
    meta: undefined,
  },
  "c-alert-4": {
    name: "c-alert-4",
    description: "Dismissible alert with a close button.",
    type: "registry:component",
    registryDependencies: ["@zbmui/alert", "@zbmui/button"],
    files: [
      {
        path: "src/registry/default/components/alert/c-alert-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/alert/c-alert-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["alert"],
    meta: undefined,
  },
  "c-autocomplete-1": {
    name: "c-autocomplete-1",
    description: "Autocomplete with filtering and an empty state.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-10": {
    name: "c-autocomplete-10",
    description: "Autocomplete with grouped items and labels.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-10.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-11": {
    name: "c-autocomplete-11",
    description: "Autocomplete with limited results and a more-status count.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-11.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-12": {
    name: "c-autocomplete-12",
    description: "Autocomplete with simulated async search, loading, and error states.",
    type: "registry:component",
    registryDependencies: ["@zbmui/autocomplete", "@zbmui/spinner"],
    files: [
      {
        path: "src/registry/default/components/autocomplete/c-autocomplete-12.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-12.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-2": {
    name: "c-autocomplete-2",
    description: "Autocomplete in all input sizes.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-3": {
    name: "c-autocomplete-3",
    description: "Disabled autocomplete.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-4": {
    name: "c-autocomplete-4",
    description: "Autocomplete with a form label.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-5": {
    name: "c-autocomplete-5",
    description: "Autocomplete with inline autocompletion in both mode.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-6": {
    name: "c-autocomplete-6",
    description: "Autocomplete with automatic first-item highlight.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-7": {
    name: "c-autocomplete-7",
    description: "Autocomplete with a clear button.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-7.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-8": {
    name: "c-autocomplete-8",
    description: "Autocomplete with clear and trigger buttons.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-8.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-autocomplete-9": {
    name: "c-autocomplete-9",
    description: "Autocomplete with a search icon start addon.",
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
      const mod = await import("@/registry/default/components/autocomplete/c-autocomplete-9.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["autocomplete"],
    meta: undefined,
  },
  "c-avatar-1": {
    name: "c-avatar-1",
    description: "Avatar with image and initials fallback.",
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
      const mod = await import("@/registry/default/components/avatar/c-avatar-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-2": {
    name: "c-avatar-2",
    description: "Avatar in three sizes.",
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
      const mod = await import("@/registry/default/components/avatar/c-avatar-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-3": {
    name: "c-avatar-3",
    description: "Avatar with a status badge.",
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
      const mod = await import("@/registry/default/components/avatar/c-avatar-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-4": {
    name: "c-avatar-4",
    description: "Avatar with an icon badge.",
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
      const mod = await import("@/registry/default/components/avatar/c-avatar-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-5": {
    name: "c-avatar-5",
    description: "Avatar group with stacked avatars.",
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
      const mod = await import("@/registry/default/components/avatar/c-avatar-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-6": {
    name: "c-avatar-6",
    description: "Avatar group with a +3 count.",
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
      const mod = await import("@/registry/default/components/avatar/c-avatar-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-avatar-7": {
    name: "c-avatar-7",
    description: "Avatar using the Next.js Image component.",
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
      const mod = await import("@/registry/default/components/avatar/c-avatar-7.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["avatar"],
    meta: undefined,
  },
  "c-badge-1": {
    name: "c-badge-1",
    description: "Basic badge demo.",
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
      const mod = await import("@/registry/default/components/badge/c-badge-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["badge"],
    meta: undefined,
  },
  "c-badge-2": {
    name: "c-badge-2",
    description: "Badge color and style variants.",
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
      const mod = await import("@/registry/default/components/badge/c-badge-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["badge"],
    meta: undefined,
  },
  "c-badge-3": {
    name: "c-badge-3",
    description: "Badge sizes small, default, and large.",
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
      const mod = await import("@/registry/default/components/badge/c-badge-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["badge"],
    meta: undefined,
  },
  "c-badge-4": {
    name: "c-badge-4",
    description: "Badges with leading and trailing icons.",
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
      const mod = await import("@/registry/default/components/badge/c-badge-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["badge"],
    meta: undefined,
  },
  "c-button-1": {
    name: "c-button-1",
    description: "Basic button demo.",
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
      const mod = await import("@/registry/default/components/button/c-button-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-button-2": {
    name: "c-button-2",
    description: "Button variants in all styles.",
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
      const mod = await import("@/registry/default/components/button/c-button-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-button-3": {
    name: "c-button-3",
    description: "Button sizes including icon-only buttons.",
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
      const mod = await import("@/registry/default/components/button/c-button-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-button-4": {
    name: "c-button-4",
    description: "Button rendered as a div element.",
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
      const mod = await import("@/registry/default/components/button/c-button-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-button-5": {
    name: "c-button-5",
    description: "Link styled as a button using buttonVariants.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/cn"],
    files: [
      {
        path: "src/registry/default/components/button/c-button-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/button/c-button-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-button-6": {
    name: "c-button-6",
    description: "Button with loading state and spinner.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/spinner"],
    files: [
      {
        path: "src/registry/default/components/button/c-button-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/button/c-button-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["button"],
    meta: undefined,
  },
  "c-calendar-1": {
    name: "c-calendar-1",
    description: "Calendar in single-date selection mode.",
    type: "registry:component",
    registryDependencies: ["@zbmui/calendar"],
    files: [
      {
        path: "src/registry/default/components/calendar/c-calendar-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/calendar/c-calendar-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["calendar"],
    meta: undefined,
  },
  "c-checkbox-group-1": {
    name: "c-checkbox-group-1",
    description: "Checkbox group with a default value.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/checkbox-group", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/checkbox-group/c-checkbox-group-1.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox-group"],
    meta: undefined,
  },
  "c-checkbox-group-2": {
    name: "c-checkbox-group-2",
    description: "Group labeled via aria-labelledby and a label element.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/checkbox-group", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/checkbox-group/c-checkbox-group-2.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox-group"],
    meta: undefined,
  },
  "c-checkbox-group-3": {
    name: "c-checkbox-group-3",
    description: "Disabled checkbox group.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/checkbox-group", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/checkbox-group/c-checkbox-group-3.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox-group"],
    meta: undefined,
  },
  "c-checkbox-group-4": {
    name: "c-checkbox-group-4",
    description: "Group with a single disabled item.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/checkbox-group", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/checkbox-group/c-checkbox-group-4.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox-group"],
    meta: undefined,
  },
  "c-checkbox-group-5": {
    name: "c-checkbox-group-5",
    description: "Controlled checkbox group showing the value.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/checkbox-group", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/checkbox-group/c-checkbox-group-5.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox-group"],
    meta: undefined,
  },
  "c-checkbox-group-6": {
    name: "c-checkbox-group-6",
    description: "Group with a parent select-all checkbox.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/checkbox-group", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/checkbox-group/c-checkbox-group-6.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox-group"],
    meta: undefined,
  },
  "c-checkbox-group-7": {
    name: "c-checkbox-group-7",
    description: "Nested groups with an indeterminate parent checkbox.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/checkbox-group", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox-group/c-checkbox-group-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/checkbox-group/c-checkbox-group-7.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox-group"],
    meta: undefined,
  },
  "c-checkbox-1": {
    name: "c-checkbox-1",
    description: "Checkbox with a label.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-2": {
    name: "c-checkbox-2",
    description: "Checkbox in five sizes.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-3": {
    name: "c-checkbox-3",
    description: "Disabled checkbox with a label.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-4": {
    name: "c-checkbox-4",
    description: "Indeterminate checkbox with a label.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-5": {
    name: "c-checkbox-5",
    description: "Controlled checkbox showing its checked state.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-6": {
    name: "c-checkbox-6",
    description: "Checkbox with title and description.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-checkbox-7": {
    name: "c-checkbox-7",
    description: "Checkbox styled as a card.",
    type: "registry:component",
    registryDependencies: ["@zbmui/checkbox", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/checkbox/c-checkbox-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/checkbox/c-checkbox-7.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["checkbox"],
    meta: undefined,
  },
  "c-collapsible-1": {
    name: "c-collapsible-1",
    description: "Collapsible panel revealing recovery keys.",
    type: "registry:component",
    registryDependencies: ["@zbmui/cn", "@zbmui/collapsible"],
    files: [
      {
        path: "src/registry/default/components/collapsible/c-collapsible-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/collapsible/c-collapsible-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["collapsible"],
    meta: undefined,
  },
  "c-combobox-1": {
    name: "c-combobox-1",
    description: "Basic single-selection combobox with a label.",
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
      const mod = await import("@/registry/default/components/combobox/c-combobox-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-10": {
    name: "c-combobox-10",
    description: "Multiple selection combobox with a start addon.",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-10.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-10.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-11": {
    name: "c-combobox-11",
    description: "Multiple selection combobox limiting visible chips.",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-11.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-11.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-12": {
    name: "c-combobox-12",
    description: "Combobox with its input rendered inside the popup.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/cn", "@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-12.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-12.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-2": {
    name: "c-combobox-2",
    description: "Combobox sizes from xs to xl.",
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
      const mod = await import("@/registry/default/components/combobox/c-combobox-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-3": {
    name: "c-combobox-3",
    description: "Combobox in a disabled state.",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-4": {
    name: "c-combobox-4",
    description: "Combobox with auto highlight enabled.",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-5": {
    name: "c-combobox-5",
    description: "Combobox with a clear button.",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-6": {
    name: "c-combobox-6",
    description: "Combobox with the item indicator at the start.",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-7": {
    name: "c-combobox-7",
    description: "Combobox with grouped framework items.",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-7.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-8": {
    name: "c-combobox-8",
    description: "Multiple selection combobox with removable chips.",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-8.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-8.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-combobox-9": {
    name: "c-combobox-9",
    description: "Combobox with a search icon start addon.",
    type: "registry:component",
    registryDependencies: ["@zbmui/combobox"],
    files: [
      {
        path: "src/registry/default/components/combobox/c-combobox-9.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/combobox/c-combobox-9.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["combobox"],
    meta: undefined,
  },
  "c-command-1": {
    name: "c-command-1",
    description: "Command list with keyboard shortcuts.",
    type: "registry:component",
    registryDependencies: ["@zbmui/command"],
    files: [
      {
        path: "src/registry/default/components/command/c-command-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/command/c-command-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["command"],
    meta: undefined,
  },
  "c-command-2": {
    name: "c-command-2",
    description: "Command list grouped with labels and separators.",
    type: "registry:component",
    registryDependencies: ["@zbmui/command"],
    files: [
      {
        path: "src/registry/default/components/command/c-command-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/command/c-command-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["command"],
    meta: undefined,
  },
  "c-command-3": {
    name: "c-command-3",
    description: "Command palette in a dialog with grouped items.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/command", "@zbmui/kbd"],
    files: [
      {
        path: "src/registry/default/components/command/c-command-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/command/c-command-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["command"],
    meta: undefined,
  },
  "c-command-4": {
    name: "c-command-4",
    description: "Command list inside a popover.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/command", "@zbmui/popover"],
    files: [
      {
        path: "src/registry/default/components/command/c-command-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/command/c-command-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["command"],
    meta: undefined,
  },
  "c-dialog-1": {
    name: "c-dialog-1",
    description: "Dialog with an edit profile form.",
    type: "registry:component",
    registryDependencies: [
      "@zbmui/button",
      "@zbmui/dialog",
      "@zbmui/field",
      "@zbmui/form",
      "@zbmui/input",
    ],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["dialog"],
    meta: undefined,
  },
  "c-dialog-2": {
    name: "c-dialog-2",
    description: "Dialog with a muted footer.",
    type: "registry:component",
    registryDependencies: [
      "@zbmui/button",
      "@zbmui/dialog",
      "@zbmui/field",
      "@zbmui/form",
      "@zbmui/input",
    ],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["dialog"],
    meta: undefined,
  },
  "c-dialog-3": {
    name: "c-dialog-3",
    description: "Dialog popup position variants.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["dialog"],
    meta: undefined,
  },
  "c-dialog-4": {
    name: "c-dialog-4",
    description: "Dialog without a close button.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["dialog"],
    meta: undefined,
  },
  "c-dialog-5": {
    name: "c-dialog-5",
    description: "Dialog with scrollable body content variants.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["dialog"],
    meta: undefined,
  },
  "c-dialog-6": {
    name: "c-dialog-6",
    description: "Dialog nested inside another dialog.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/dialog", "@zbmui/field", "@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["dialog"],
    meta: undefined,
  },
  "c-dialog-7": {
    name: "c-dialog-7",
    description: "Nested dialog with the parent kept visible.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/dialog", "@zbmui/field", "@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-7.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["dialog"],
    meta: undefined,
  },
  "c-dialog-8": {
    name: "c-dialog-8",
    description: "Backdrop blur, opaque, and transparent variants.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/dialog"],
    files: [
      {
        path: "src/registry/default/components/dialog/c-dialog-8.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/dialog/c-dialog-8.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["dialog"],
    meta: undefined,
  },
  "c-field-1": {
    name: "c-field-1",
    description: "Field with label, input, and description.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/field/c-field-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/field/c-field-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["field"],
    meta: undefined,
  },
  "c-field-2": {
    name: "c-field-2",
    description: "Required field with an indicator.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/field/c-field-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/field/c-field-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["field"],
    meta: undefined,
  },
  "c-field-3": {
    name: "c-field-3",
    description: "Optional field with an indicator.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/field/c-field-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/field/c-field-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["field"],
    meta: undefined,
  },
  "c-field-4": {
    name: "c-field-4",
    description: "Disabled field.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/field/c-field-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/field/c-field-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["field"],
    meta: undefined,
  },
  "c-field-5": {
    name: "c-field-5",
    description: "Field with an error message.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/field/c-field-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/field/c-field-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["field"],
    meta: undefined,
  },
  "c-form-1": {
    name: "c-form-1",
    description: "Email form with a submit loading state.",
    type: "registry:component",
    registryDependencies: [
      "@zbmui/button",
      "@zbmui/field",
      "@zbmui/form",
      "@zbmui/input",
      "@zbmui/spinner",
    ],
    files: [
      {
        path: "src/registry/default/components/form/c-form-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/form/c-form-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["form"],
    meta: undefined,
  },
  "c-form-2": {
    name: "c-form-2",
    description: "Form submitting to a server function with errors.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/field", "@zbmui/form", "@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/form/c-form-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/form/c-form-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["form"],
    meta: undefined,
  },
  "c-form-3": {
    name: "c-form-3",
    description: "Form validated with Zod.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/field", "@zbmui/form", "@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/form/c-form-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/form/c-form-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["form"],
    meta: undefined,
  },
  "c-input-group-1": {
    name: "c-input-group-1",
    description: "Search input group with icon and result count.",
    type: "registry:component",
    registryDependencies: ["@zbmui/input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["input-group"],
    meta: undefined,
  },
  "c-input-group-2": {
    name: "c-input-group-2",
    description: "Input group with icon at the start.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["input-group"],
    meta: undefined,
  },
  "c-input-group-3": {
    name: "c-input-group-3",
    description: "Input group with icon at the end.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["input-group"],
    meta: undefined,
  },
  "c-input-group-4": {
    name: "c-input-group-4",
    description: "Header addons above input and textarea.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["input-group"],
    meta: undefined,
  },
  "c-input-group-5": {
    name: "c-input-group-5",
    description: "Footer addons below input and textarea.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["input-group"],
    meta: undefined,
  },
  "c-input-group-6": {
    name: "c-input-group-6",
    description: "Input group in five sizes.",
    type: "registry:component",
    registryDependencies: ["@zbmui/input-group"],
    files: [
      {
        path: "src/registry/default/components/input-group/c-input-group-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input-group/c-input-group-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["input-group"],
    meta: undefined,
  },
  "c-input-1": {
    name: "c-input-1",
    description: "Simple email input with placeholder.",
    type: "registry:component",
    registryDependencies: ["@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/input/c-input-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input/c-input-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["input"],
    meta: undefined,
  },
  "c-input-2": {
    name: "c-input-2",
    description: "Input in five sizes.",
    type: "registry:component",
    registryDependencies: ["@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/input/c-input-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input/c-input-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["input"],
    meta: undefined,
  },
  "c-input-3": {
    name: "c-input-3",
    description: "File input with label.",
    type: "registry:component",
    registryDependencies: ["@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/input/c-input-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input/c-input-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["input"],
    meta: undefined,
  },
  "c-input-4": {
    name: "c-input-4",
    description: "Input in disabled state.",
    type: "registry:component",
    registryDependencies: ["@zbmui/input"],
    files: [
      {
        path: "src/registry/default/components/input/c-input-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/input/c-input-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["input"],
    meta: undefined,
  },
  "c-kbd-1": {
    name: "c-kbd-1",
    description: "Groups of keyboard keys and shortcuts.",
    type: "registry:component",
    registryDependencies: ["@zbmui/kbd"],
    files: [
      {
        path: "src/registry/default/components/kbd/c-kbd-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/kbd/c-kbd-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["kbd"],
    meta: undefined,
  },
  "c-kbd-2": {
    name: "c-kbd-2",
    description: "Shortcut keys inline in a sentence.",
    type: "registry:component",
    registryDependencies: ["@zbmui/kbd"],
    files: [
      {
        path: "src/registry/default/components/kbd/c-kbd-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/kbd/c-kbd-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["kbd"],
    meta: undefined,
  },
  "c-kbd-3": {
    name: "c-kbd-3",
    description: "Keyboard key inside a button.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/kbd"],
    files: [
      {
        path: "src/registry/default/components/kbd/c-kbd-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/kbd/c-kbd-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["kbd"],
    meta: undefined,
  },
  "c-kbd-4": {
    name: "c-kbd-4",
    description: "Keyboard shortcuts inside tooltips.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/button-group", "@zbmui/kbd", "@zbmui/tooltip"],
    files: [
      {
        path: "src/registry/default/components/kbd/c-kbd-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/kbd/c-kbd-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["kbd"],
    meta: undefined,
  },
  "c-kbd-5": {
    name: "c-kbd-5",
    description: "Keyboard shortcut inside an input group.",
    type: "registry:component",
    registryDependencies: ["@zbmui/input-group", "@zbmui/kbd"],
    files: [
      {
        path: "src/registry/default/components/kbd/c-kbd-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/kbd/c-kbd-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["kbd"],
    meta: undefined,
  },
  "c-label-1": {
    name: "c-label-1",
    description: "Label associated with an email input.",
    type: "registry:component",
    registryDependencies: ["@zbmui/input", "@zbmui/label"],
    files: [
      {
        path: "src/registry/default/components/label/c-label-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/label/c-label-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["label"],
    meta: undefined,
  },
  "c-menu-1": {
    name: "c-menu-1",
    description: "Menu with icons, submenus, shortcuts, and checkboxes.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["menu"],
    meta: undefined,
  },
  "c-menu-2": {
    name: "c-menu-2",
    description: "Menu that opens on hover.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["menu"],
    meta: undefined,
  },
  "c-menu-3": {
    name: "c-menu-3",
    description: "Menu with checkbox items.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["menu"],
    meta: undefined,
  },
  "c-menu-4": {
    name: "c-menu-4",
    description: "Menu with radio group items.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["menu"],
    meta: undefined,
  },
  "c-menu-5": {
    name: "c-menu-5",
    description: "Checkbox and radio items with switch variant and start indicators.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["menu"],
    meta: undefined,
  },
  "c-menu-6": {
    name: "c-menu-6",
    description: "Menus with different popup sides and alignments.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["menu"],
    meta: undefined,
  },
  "c-menu-7": {
    name: "c-menu-7",
    description: "Menu items that close the menu on click.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-7.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["menu"],
    meta: undefined,
  },
  "c-menu-8": {
    name: "c-menu-8",
    description: "Dialog opened from a menu.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/dialog", "@zbmui/menu"],
    files: [
      {
        path: "src/registry/default/components/menu/c-menu-8.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/menu/c-menu-8.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["menu"],
    meta: undefined,
  },
  "c-meter-1": {
    name: "c-meter-1",
    description: "Meter with label and value.",
    type: "registry:component",
    registryDependencies: ["@zbmui/meter"],
    files: [
      {
        path: "src/registry/default/components/meter/c-meter-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/meter/c-meter-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["meter"],
    meta: undefined,
  },
  "c-meter-2": {
    name: "c-meter-2",
    description: "Meter without a label.",
    type: "registry:component",
    registryDependencies: ["@zbmui/meter"],
    files: [
      {
        path: "src/registry/default/components/meter/c-meter-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/meter/c-meter-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["meter"],
    meta: undefined,
  },
  "c-meter-3": {
    name: "c-meter-3",
    description: "Meter with a formatted value.",
    type: "registry:component",
    registryDependencies: ["@zbmui/meter"],
    files: [
      {
        path: "src/registry/default/components/meter/c-meter-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/meter/c-meter-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["meter"],
    meta: undefined,
  },
  "c-navigation-menu-1": {
    name: "c-navigation-menu-1",
    description: "Navigation menu with link dropdowns.",
    type: "registry:component",
    registryDependencies: ["@zbmui/navigation-menu"],
    files: [
      {
        path: "src/registry/default/components/navigation-menu/c-navigation-menu-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/navigation-menu/c-navigation-menu-1.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["navigation-menu"],
    meta: undefined,
  },
  "c-navigation-menu-2": {
    name: "c-navigation-menu-2",
    description: "Navigation menu with nested submenus.",
    type: "registry:component",
    registryDependencies: ["@zbmui/navigation-menu"],
    files: [
      {
        path: "src/registry/default/components/navigation-menu/c-navigation-menu-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/navigation-menu/c-navigation-menu-2.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["navigation-menu"],
    meta: undefined,
  },
  "c-navigation-menu-3": {
    name: "c-navigation-menu-3",
    description: "Navigation menu with nested inline submenus.",
    type: "registry:component",
    registryDependencies: ["@zbmui/navigation-menu"],
    files: [
      {
        path: "src/registry/default/components/navigation-menu/c-navigation-menu-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/navigation-menu/c-navigation-menu-3.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["navigation-menu"],
    meta: undefined,
  },
  "c-navigation-menu-4": {
    name: "c-navigation-menu-4",
    description: "Navigation menu with a large scrollable menu.",
    type: "registry:component",
    registryDependencies: ["@zbmui/navigation-menu"],
    files: [
      {
        path: "src/registry/default/components/navigation-menu/c-navigation-menu-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import(
        "@/registry/default/components/navigation-menu/c-navigation-menu-4.tsx"
      );
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["navigation-menu"],
    meta: undefined,
  },
  "c-number-field-1": {
    name: "c-number-field-1",
    description: "Number field with label and placeholder.",
    type: "registry:component",
    registryDependencies: ["@zbmui/number-field"],
    files: [
      {
        path: "src/registry/default/components/number-field/c-number-field-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/number-field/c-number-field-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["number-field"],
    meta: undefined,
  },
  "c-number-field-2": {
    name: "c-number-field-2",
    description: "Number field sizes.",
    type: "registry:component",
    registryDependencies: ["@zbmui/number-field"],
    files: [
      {
        path: "src/registry/default/components/number-field/c-number-field-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/number-field/c-number-field-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["number-field"],
    meta: undefined,
  },
  "c-number-field-3": {
    name: "c-number-field-3",
    description: "Controlled number field with min and max.",
    type: "registry:component",
    registryDependencies: ["@zbmui/number-field"],
    files: [
      {
        path: "src/registry/default/components/number-field/c-number-field-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/number-field/c-number-field-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["number-field"],
    meta: undefined,
  },
  "c-otp-field-1": {
    name: "c-otp-field-1",
    description: "Basic six-digit OTP field.",
    type: "registry:component",
    registryDependencies: ["@zbmui/otp-field"],
    files: [
      {
        path: "src/registry/default/components/otp-field/c-otp-field-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/otp-field/c-otp-field-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["otp-field"],
    meta: undefined,
  },
  "c-otp-field-2": {
    name: "c-otp-field-2",
    description: "Large OTP field size.",
    type: "registry:component",
    registryDependencies: ["@zbmui/otp-field"],
    files: [
      {
        path: "src/registry/default/components/otp-field/c-otp-field-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/otp-field/c-otp-field-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["otp-field"],
    meta: undefined,
  },
  "c-otp-field-3": {
    name: "c-otp-field-3",
    description: "OTP field with a label.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/otp-field"],
    files: [
      {
        path: "src/registry/default/components/otp-field/c-otp-field-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/otp-field/c-otp-field-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["otp-field"],
    meta: undefined,
  },
  "c-otp-field-4": {
    name: "c-otp-field-4",
    description: "OTP field with grouped separator.",
    type: "registry:component",
    registryDependencies: ["@zbmui/otp-field"],
    files: [
      {
        path: "src/registry/default/components/otp-field/c-otp-field-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/otp-field/c-otp-field-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["otp-field"],
    meta: undefined,
  },
  "c-otp-field-5": {
    name: "c-otp-field-5",
    description: "Alphanumeric OTP field for recovery codes.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/otp-field"],
    files: [
      {
        path: "src/registry/default/components/otp-field/c-otp-field-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/otp-field/c-otp-field-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["otp-field"],
    meta: undefined,
  },
  "c-otp-field-6": {
    name: "c-otp-field-6",
    description: "OTP field with custom normalization and validation.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/otp-field"],
    files: [
      {
        path: "src/registry/default/components/otp-field/c-otp-field-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/otp-field/c-otp-field-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["otp-field"],
    meta: undefined,
  },
  "c-otp-field-7": {
    name: "c-otp-field-7",
    description: "OTP field with placeholder characters.",
    type: "registry:component",
    registryDependencies: ["@zbmui/otp-field"],
    files: [
      {
        path: "src/registry/default/components/otp-field/c-otp-field-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/otp-field/c-otp-field-7.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["otp-field"],
    meta: undefined,
  },
  "c-otp-field-8": {
    name: "c-otp-field-8",
    description: "Masked OTP field obscuring typed characters.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/otp-field"],
    files: [
      {
        path: "src/registry/default/components/otp-field/c-otp-field-8.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/otp-field/c-otp-field-8.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["otp-field"],
    meta: undefined,
  },
  "c-popover-1": {
    name: "c-popover-1",
    description: "Popover with a feedback form.",
    type: "registry:component",
    registryDependencies: [
      "@zbmui/button",
      "@zbmui/field",
      "@zbmui/form",
      "@zbmui/popover",
      "@zbmui/textarea",
    ],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["popover"],
    meta: undefined,
  },
  "c-popover-2": {
    name: "c-popover-2",
    description: "Popovers with different alignments.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["popover"],
    meta: undefined,
  },
  "c-popover-3": {
    name: "c-popover-3",
    description: "Popovers opening on different sides.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["popover"],
    meta: undefined,
  },
  "c-popover-4": {
    name: "c-popover-4",
    description: "Popover with close buttons.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["popover"],
    meta: undefined,
  },
  "c-popover-5": {
    name: "c-popover-5",
    description: "Popover with an arrow pointing to the trigger.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["popover"],
    meta: undefined,
  },
  "c-popover-6": {
    name: "c-popover-6",
    description: "Tooltip-style popover opened on hover.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/input-group", "@zbmui/popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["popover"],
    meta: undefined,
  },
  "c-popover-7": {
    name: "c-popover-7",
    description: "Animated popover shared between multiple triggers.",
    type: "registry:component",
    registryDependencies: ["@zbmui/avatar", "@zbmui/button", "@zbmui/cn", "@zbmui/popover"],
    files: [
      {
        path: "src/registry/default/components/popover/c-popover-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/popover/c-popover-7.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["popover"],
    meta: undefined,
  },
  "c-scroll-area-1": {
    name: "c-scroll-area-1",
    description: "Scroll area with vertical scrolling.",
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
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["scroll-area"],
    meta: undefined,
  },
  "c-scroll-area-2": {
    name: "c-scroll-area-2",
    description: "Scroll area with horizontal scrolling.",
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
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["scroll-area"],
    meta: undefined,
  },
  "c-scroll-area-3": {
    name: "c-scroll-area-3",
    description: "Scroll area scrolling both horizontally and vertically.",
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
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["scroll-area"],
    meta: undefined,
  },
  "c-scroll-area-4": {
    name: "c-scroll-area-4",
    description: "Scroll area with edge fade effect.",
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
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["scroll-area"],
    meta: undefined,
  },
  "c-scroll-area-5": {
    name: "c-scroll-area-5",
    description: "Scroll area with scrollbar gutter.",
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
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["scroll-area"],
    meta: undefined,
  },
  "c-scroll-area-6": {
    name: "c-scroll-area-6",
    description: "Scroll area with custom scrollbar size and margin.",
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
      const mod = await import("@/registry/default/components/scroll-area/c-scroll-area-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["scroll-area"],
    meta: undefined,
  },
  "c-select-1": {
    name: "c-select-1",
    description: "Simple select with a disabled option.",
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
      const mod = await import("@/registry/default/components/select/c-select-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-select-10": {
    name: "c-select-10",
    description: "Built-in and native popup scrolling.",
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
      const mod = await import("@/registry/default/components/select/c-select-10.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-select-11": {
    name: "c-select-11",
    description: "Select controlled with React state.",
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
      const mod = await import("@/registry/default/components/select/c-select-11.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-select-2": {
    name: "c-select-2",
    description: "Select trigger sizes.",
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
      const mod = await import("@/registry/default/components/select/c-select-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-select-3": {
    name: "c-select-3",
    description: "A disabled select.",
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
      const mod = await import("@/registry/default/components/select/c-select-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-select-4": {
    name: "c-select-4",
    description: "Select popup aligned with the trigger item.",
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
      const mod = await import("@/registry/default/components/select/c-select-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-select-5": {
    name: "c-select-5",
    description: "Select with grouped options.",
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
      const mod = await import("@/registry/default/components/select/c-select-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-select-6": {
    name: "c-select-6",
    description: "Select with multiple selection.",
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
      const mod = await import("@/registry/default/components/select/c-select-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-select-7": {
    name: "c-select-7",
    description: "Select with an icon in the trigger.",
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
      const mod = await import("@/registry/default/components/select/c-select-7.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-select-8": {
    name: "c-select-8",
    description: "Select with icons in the options.",
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
      const mod = await import("@/registry/default/components/select/c-select-8.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-select-9": {
    name: "c-select-9",
    description: "Select with object values and descriptions.",
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
      const mod = await import("@/registry/default/components/select/c-select-9.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["select"],
    meta: undefined,
  },
  "c-sheet-1": {
    name: "c-sheet-1",
    description: "Sheet with an edit profile form.",
    type: "registry:component",
    registryDependencies: [
      "@zbmui/button",
      "@zbmui/field",
      "@zbmui/form",
      "@zbmui/input",
      "@zbmui/sheet",
    ],
    files: [
      {
        path: "src/registry/default/components/sheet/c-sheet-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/sheet/c-sheet-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["sheet"],
    meta: undefined,
  },
  "c-slider-1": {
    name: "c-slider-1",
    description: "Default slider.",
    type: "registry:component",
    registryDependencies: ["@zbmui/slider"],
    files: [
      {
        path: "src/registry/default/components/slider/c-slider-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/slider/c-slider-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["slider"],
    meta: undefined,
  },
  "c-slider-2": {
    name: "c-slider-2",
    description: "Slider with label and current value.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/slider"],
    files: [
      {
        path: "src/registry/default/components/slider/c-slider-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/slider/c-slider-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["slider"],
    meta: undefined,
  },
  "c-slider-3": {
    name: "c-slider-3",
    description: "Range slider with label and values.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/slider"],
    files: [
      {
        path: "src/registry/default/components/slider/c-slider-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/slider/c-slider-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["slider"],
    meta: undefined,
  },
  "c-slider-4": {
    name: "c-slider-4",
    description: "Vertical slider.",
    type: "registry:component",
    registryDependencies: ["@zbmui/slider"],
    files: [
      {
        path: "src/registry/default/components/slider/c-slider-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/slider/c-slider-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["slider"],
    meta: undefined,
  },
  "c-spinner-1": {
    name: "c-spinner-1",
    description: "Default spinner.",
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
      const mod = await import("@/registry/default/components/spinner/c-spinner-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["spinner"],
    meta: undefined,
  },
  "c-switch-1": {
    name: "c-switch-1",
    description: "Switch with a descriptive label.",
    type: "registry:component",
    registryDependencies: ["@zbmui/label", "@zbmui/switch"],
    files: [
      {
        path: "src/registry/default/components/switch/c-switch-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/switch/c-switch-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["switch"],
    meta: undefined,
  },
  "c-switch-2": {
    name: "c-switch-2",
    description: "Switch sizes, including a custom thumb size.",
    type: "registry:component",
    registryDependencies: ["@zbmui/label", "@zbmui/switch"],
    files: [
      {
        path: "src/registry/default/components/switch/c-switch-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/switch/c-switch-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["switch"],
    meta: undefined,
  },
  "c-switch-3": {
    name: "c-switch-3",
    description: "Disabled switch.",
    type: "registry:component",
    registryDependencies: ["@zbmui/label", "@zbmui/switch"],
    files: [
      {
        path: "src/registry/default/components/switch/c-switch-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/switch/c-switch-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["switch"],
    meta: undefined,
  },
  "c-switch-4": {
    name: "c-switch-4",
    description: "Switch in an invalid state.",
    type: "registry:component",
    registryDependencies: ["@zbmui/label", "@zbmui/switch"],
    files: [
      {
        path: "src/registry/default/components/switch/c-switch-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/switch/c-switch-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["switch"],
    meta: undefined,
  },
  "c-switch-5": {
    name: "c-switch-5",
    description: "Switch with a label and description.",
    type: "registry:component",
    registryDependencies: ["@zbmui/label", "@zbmui/switch"],
    files: [
      {
        path: "src/registry/default/components/switch/c-switch-5.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/switch/c-switch-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["switch"],
    meta: undefined,
  },
  "c-switch-6": {
    name: "c-switch-6",
    description: "Switch styled as a selectable card.",
    type: "registry:component",
    registryDependencies: ["@zbmui/label", "@zbmui/switch"],
    files: [
      {
        path: "src/registry/default/components/switch/c-switch-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/switch/c-switch-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["switch"],
    meta: undefined,
  },
  "c-switch-7": {
    name: "c-switch-7",
    description: "Controlled switch showing its checked state.",
    type: "registry:component",
    registryDependencies: ["@zbmui/label", "@zbmui/switch"],
    files: [
      {
        path: "src/registry/default/components/switch/c-switch-7.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/switch/c-switch-7.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["switch"],
    meta: undefined,
  },
  "c-switch-8": {
    name: "c-switch-8",
    description: "Switch integrated with a react-hook-form form.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/field", "@zbmui/switch"],
    files: [
      {
        path: "src/registry/default/components/switch/c-switch-8.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/switch/c-switch-8.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["switch"],
    meta: undefined,
  },
  "c-tabs-1": {
    name: "c-tabs-1",
    description: "Tabs with three panels.",
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
      const mod = await import("@/registry/default/components/tabs/c-tabs-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["tabs"],
    meta: undefined,
  },
  "c-tabs-2": {
    name: "c-tabs-2",
    description: "Tabs with an underline list variant.",
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
      const mod = await import("@/registry/default/components/tabs/c-tabs-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["tabs"],
    meta: undefined,
  },
  "c-textarea-1": {
    name: "c-textarea-1",
    description: "Simple textarea with placeholder.",
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
      const mod = await import("@/registry/default/components/textarea/c-textarea-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["textarea"],
    meta: undefined,
  },
  "c-textarea-2": {
    name: "c-textarea-2",
    description: "Textarea in five sizes.",
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
      const mod = await import("@/registry/default/components/textarea/c-textarea-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["textarea"],
    meta: undefined,
  },
  "c-textarea-3": {
    name: "c-textarea-3",
    description: "Textarea in disabled state.",
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
      const mod = await import("@/registry/default/components/textarea/c-textarea-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["textarea"],
    meta: undefined,
  },
  "c-textarea-4": {
    name: "c-textarea-4",
    description: "Textarea in invalid state.",
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
      const mod = await import("@/registry/default/components/textarea/c-textarea-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["textarea"],
    meta: undefined,
  },
  "c-textarea-5": {
    name: "c-textarea-5",
    description: "Textareas with different resize options.",
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
      const mod = await import("@/registry/default/components/textarea/c-textarea-5.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["textarea"],
    meta: undefined,
  },
  "c-textarea-6": {
    name: "c-textarea-6",
    description: "Textarea integrated with Field components.",
    type: "registry:component",
    registryDependencies: ["@zbmui/field", "@zbmui/textarea"],
    files: [
      {
        path: "src/registry/default/components/textarea/c-textarea-6.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/textarea/c-textarea-6.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["textarea"],
    meta: undefined,
  },
  "c-tooltip-1": {
    name: "c-tooltip-1",
    description: "Tooltip on a button hover.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/tooltip"],
    files: [
      {
        path: "src/registry/default/components/tooltip/c-tooltip-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/tooltip/c-tooltip-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["tooltip"],
    meta: undefined,
  },
  "c-tooltip-2": {
    name: "c-tooltip-2",
    description: "Tooltip with a hidden arrow.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/tooltip"],
    files: [
      {
        path: "src/registry/default/components/tooltip/c-tooltip-2.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/tooltip/c-tooltip-2.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["tooltip"],
    meta: undefined,
  },
  "c-tooltip-3": {
    name: "c-tooltip-3",
    description: "Grouped tooltips on a toggle group.",
    type: "registry:component",
    registryDependencies: ["@zbmui/toggle-group", "@zbmui/tooltip"],
    files: [
      {
        path: "src/registry/default/components/tooltip/c-tooltip-3.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/tooltip/c-tooltip-3.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["tooltip"],
    meta: undefined,
  },
  "c-tooltip-4": {
    name: "c-tooltip-4",
    description: "Tooltip with content switching across button triggers.",
    type: "registry:component",
    registryDependencies: ["@zbmui/button", "@zbmui/button-group", "@zbmui/tooltip"],
    files: [
      {
        path: "src/registry/default/components/tooltip/c-tooltip-4.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/tooltip/c-tooltip-4.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["tooltip"],
    meta: undefined,
  },
  "c-react-hook-form-1": {
    name: "c-react-hook-form-1",
    description: "Bug report form using React Hook Form and Zod.",
    type: "registry:component",
    registryDependencies: [
      "@zbmui/button",
      "@zbmui/field",
      "@zbmui/input",
      "@zbmui/spinner",
      "@zbmui/textarea",
    ],
    files: [
      {
        path: "src/registry/default/forms/react-hook-form/c-react-hook-form-1.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/forms/react-hook-form/c-react-hook-form-1.tsx");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["react-hook-form"],
    meta: undefined,
  },
  "c-sidebar-1": {
    name: "c-sidebar-1",
    description: "Application shell with a sidebar provider, groups, and trigger.",
    type: "registry:component",
    registryDependencies: ["@zbmui/sidebar"],
    files: [
      {
        path: "src/registry/default/components/sidebar/c-sidebar-1/app-sidebar.tsx",
        type: "registry:component",
        target: "",
      },
      {
        path: "src/registry/default/components/sidebar/c-sidebar-1/layout.tsx",
        type: "registry:component",
        target: "",
      },
    ],
    component: React.lazy(async () => {
      const mod = await import("@/registry/default/components/sidebar/c-sidebar-1/app-sidebar");
      const exportName = Object.keys(mod).find(
        (key) =>
          key !== "default" && (typeof mod[key] === "function" || typeof mod[key] === "object")
      );
      return {
        default: (mod.default ?? (exportName ? mod[exportName] : undefined)) as React.ComponentType,
      };
    }),
    categories: ["sidebar"],
    meta: undefined,
  },
};
