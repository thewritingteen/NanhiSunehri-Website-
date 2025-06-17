import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kisskissgoodnight.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    {
      protocol: 'https',
      hostname: 'images.stockcake.com',
      pathname: '/**',
    },
  ],
},

      {
        protocol: 'https',
        hostname: 'cloud.squidex.io',
        port: '',
        pathname: '/api/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'mionza.com',
        port: '',
        pathname: '/cdn/shop/files/**',
      }
    ],
  },
};

export default nextConfig;
