/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {}, // must be object, not boolean
        netlify: {}, // must be included to enable Netlify runtime
    },
};

module.exports = nextConfig;
