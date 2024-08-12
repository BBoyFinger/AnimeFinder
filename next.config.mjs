import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ecommerce-tuvngdev.oneentry.cloud',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
