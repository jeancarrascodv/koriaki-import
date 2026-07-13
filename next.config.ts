import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  images: {
    // Serve modern formats — AVIF first (smaller), WebP fallback
    formats: ["image/avif", "image/webp"],

    // Sensible device widths for responsive images
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],

    // Intermediate widths for fill/fixed images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Default quality — good balance of size and sharpness
    // (individual components can override with the quality prop)
    minimumCacheTTL: 31536000, // 1 year in seconds
  },

  // Experimental: use server components where possible
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
