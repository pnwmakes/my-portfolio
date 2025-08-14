/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // <-- This enables static export (replaces `next export`)
    trailingSlash: true, // optional but helps avoid 404s for folder paths
};

module.exports = nextConfig;
