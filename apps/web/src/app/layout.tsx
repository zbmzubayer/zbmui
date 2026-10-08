import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { NextThemeProvider } from "@zbmui/ui/providers/next-theme-provider";

import "@/styles/globals.css";

import { SiteHeader } from "@/layouts/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZBM UI - A UI component library",
  description: "A UI component library built with React, Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
