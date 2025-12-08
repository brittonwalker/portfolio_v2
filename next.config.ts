import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.glsl': {
        loaders: ['raw-loader'], // Or similar loader for raw text content
        as: '*.js', // Treat it as a JavaScript module
      },
    },
  },
  webpack: (config, { isServer }) => {
    // For client-side code (where shaders typically run), add a rule
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/, // Regex to match shader files
      type: 'asset/source', // or use: ['raw-loader'] after installing it
    });

    return config;
  },
};

export default nextConfig;
