import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProduction ? "/portfolio" : '',
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
