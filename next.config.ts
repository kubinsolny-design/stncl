import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { remotePatterns: [{ protocol: "https", hostname: "static.wixstatic.com", pathname: "/media/**" }] },
  async redirects() {
    return [
      { source: "/mezinárodní-autodprava", destination: "/mezinarodni-autodoprava", permanent: true },
      { source: "/mezin%C3%A1rodn%C3%AD-autodprava", destination: "/mezinarodni-autodoprava", permanent: true },
    ];
  },
};

export default nextConfig;
