export const siteConfig = {
  name: "ZBM UI",
  url: "https://ui.zubayer.dev",
  description:
    "A comprehensive, accessible component library and design system built with Base UI and Tailwind CSS. Copy the code, own the components.",
  navItems: [
    { label: "Docs", href: "/docs" },
    { label: "Blocks", href: "/blocks" },
  ],
  docs: {
    pages_new: ["/docs/components/number-field"],
  },
} as const;

export type SiteConfig = typeof siteConfig;
