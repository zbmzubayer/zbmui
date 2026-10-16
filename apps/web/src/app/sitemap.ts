import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site-config";
import { source } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();

  return [
    { url: siteConfig.url },
    ...pages.map((page) => ({
      url: `${siteConfig.url}${page.url}`,
    })),
  ];
}
