/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Habilita o modo estrito do React
  experimental: {
    appDir: true, // Ativa o suporte para a estrutura com o diretório `src/app`
  },
};

export default nextConfig;
