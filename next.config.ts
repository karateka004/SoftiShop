import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Фиксируем корень воркспейса = эта папка (softi).
  // В домашней папке есть лишний package-lock.json, из-за которого Next
  // ошибочно выбирал C:\Users\User корнем и сканировал всю домашнюю директорию.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
