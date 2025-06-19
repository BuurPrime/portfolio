import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables `next export` (static build)
  distDir: "out",   // output folder for GitHub Pages
  images: {
    unoptimized: true, // required if using `next/image` with static export
  },
  trailingSlash: true, // optional: improves routing for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ Add this line
  },
};

export default nextConfig;
