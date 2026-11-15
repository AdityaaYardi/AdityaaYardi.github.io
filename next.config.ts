import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static: `npm run build` writes plain HTML, CSS and JS to `out/`,
  // which any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages) can serve.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
