import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // target: "serverless",
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
