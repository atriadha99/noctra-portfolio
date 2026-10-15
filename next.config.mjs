import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve('.'),
  },
  allowedDevOrigins: ['192.168.56.1', 'localhost', '*.localhost'],
};

export default nextConfig;
