import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
