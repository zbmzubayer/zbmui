export const siteConfig = {
  name: "ZBM UI",
  description: "A UI component library built with React, Next.js and Tailwind CSS.",
  navItems: [
    { label: "Docs", href: "/docs" },
    { label: "Blocks", href: "/blocks" },
  ],
  docs: {
    pages_new: ["/docs/components/number-field"],
  },
} as const;

export type SiteConfig = typeof siteConfig;
