/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML 내보내기 설정
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig; 