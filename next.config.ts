import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // target: "serverless",
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    appIsrStatus: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
