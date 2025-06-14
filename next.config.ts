import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['thumbs.dreamstime.com', 'tse2.mm.bing.net','th.bing.com','i.ytimg.com'], // Replace with your allowed image domains
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  }
};

export default nextConfig;
