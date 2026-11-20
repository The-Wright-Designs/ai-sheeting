import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [425, 800, 1280],
    qualities: [75],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
