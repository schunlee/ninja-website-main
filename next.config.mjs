/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/nativetrack", // 不带后缀的路径
        destination: "/nativetrack.html", // 实际的文件路径
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true, // 在构建期间忽略 ESLint 错误
  },
  typescript: {
    ignoreBuildErrors: true, // 在构建期间忽略 TypeScript 错误
  },
  reactStrictMode: false,
};

export default nextConfig;
