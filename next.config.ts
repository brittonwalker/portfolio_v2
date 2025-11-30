import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.glsl': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
        '*.vert': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
        '*.frag': {
          loaders: ['raw-loader'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config) => {
    // Add rule to handle GLSL shader files (for production builds)
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: 'asset/source',
    });

    return config;
  },
};

export default nextConfig;
