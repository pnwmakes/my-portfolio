// next.config.js
const netlifyPlugin = require('@netlify/next');

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverActions: true,
    },
};

module.exports = netlifyPlugin(nextConfig);
