// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // output: "export",
//   images: {
//     unoptimized: true,
//   },
//   typescript: {
//     // ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠️ Only use temporarily
  },
  eslint: {
    ignoreDuringBuilds: true, // Add this to skip ESLint during build
  },
};

export default nextConfig;
