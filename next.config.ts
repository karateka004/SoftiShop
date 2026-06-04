import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Фиксируем корень воркспейса = эта папка (softi).
  // В домашней папке есть лишний package-lock.json, из-за которого Next
  // ошибочно выбирал C:\Users\User корнем и сканировал всю домашнюю директорию.
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

export default nextConfig;
