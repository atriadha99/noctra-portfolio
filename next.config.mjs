/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Next 15+ may require experimental or it's top-level. I'll put it top level.
  },
  allowedDevOrigins: ['192.168.56.1', 'localhost', '*.localhost'],
};

export default nextConfig;
