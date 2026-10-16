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

export const metadata: Metadata = {
  title: "ZBM UI - A UI component library",
  description: "A UI component library built with React, Next.js and Tailwind CSS.",
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
