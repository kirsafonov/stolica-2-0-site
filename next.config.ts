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
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.stolica-msk.com",
          },
        ],
        destination: "https://stolica-msk.com/:path*",
        permanent: true,
      },
      {
        source: "/",
        has: [
          {
            type: "query",
            key: "pagelayer-template",
          },
        ],
        destination: "/",
        permanent: true,
      }
    ];
  },
};

export default nextConfig;