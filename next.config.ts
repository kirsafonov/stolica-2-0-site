import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.167"],
  async redirects() {
    return [
      {
        source: "/cases/sadovye-kvartaly",
        destination: "/cases/krylatskaya-23-dom-gorizontov",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;