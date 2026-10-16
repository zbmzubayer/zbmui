import type { Metadata } from "next";

import { siteConfig } from "@/config/site-config";
import { SiteFooter } from "@/layouts/site-footer";

import { CliSteps } from "@/components/landing/cli-steps";
import { ComponentMarquee } from "@/components/landing/component-marquee";
import { Cta } from "@/components/landing/cta";
import { FeatureBento } from "@/components/landing/feature-bento";
import { Hero } from "@/components/landing/hero";
import { StatsBand } from "@/components/landing/stats-band";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is a static build-time constant
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ComponentMarquee />
      <FeatureBento />
      <CliSteps />
      <StatsBand />
      <Cta />
      <div className="container mx-auto border-t px-4 py-10 sm:px-6">
        <SiteFooter />
      </div>
    </main>
  );
}
