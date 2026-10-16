import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { NextThemeProvider } from "@zbmui/ui/providers/next-theme-provider";

import { SiteHeader } from "@/layouts/site-header";

import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Solid foundation for a design system`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Base UI",
    "component library",
    "design system",
    "UI components",
    "accessible components",
    "copy-paste components",
    "ZBM UI",
  ],
  authors: [{ name: "ZBM", url: "https://zubayer.dev" }],
  creator: "ZBM",
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Solid foundation for a design system`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Solid foundation for a design system`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <NextThemeProvider>
          <div className="isolate">
            <SiteHeader />
            {children}
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
