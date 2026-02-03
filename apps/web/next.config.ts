import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/docs/:path*.md",
        destination: "/api/raw/docs/:path*",
      },
    ];
  },
};

export default withMDX(nextConfig);
