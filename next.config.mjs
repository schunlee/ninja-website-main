/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // 在构建期间忽略 ESLint 错误
    },
    typescript: {
        ignoreBuildErrors: true, // 在构建期间忽略 TypeScript 错误
    }
  };
  
  export default nextConfig;