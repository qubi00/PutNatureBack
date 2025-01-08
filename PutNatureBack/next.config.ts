import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/page2',
      },
    ];
  },
};

export default nextConfig;