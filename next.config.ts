import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // App Router is enabled by default in Next.js 15
  // Ensure proper routing configuration
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
