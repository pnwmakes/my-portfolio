// next.config.js
const { withNetlify } = require('@netlify/next');

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverActions: true,
    },
};

module.exports = withNetlify(nextConfig);
