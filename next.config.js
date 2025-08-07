/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        serverActions: {},
    },
    netlify: {
        functions: {
            included_files: ['netlify/entrypoints/forms.ts'],
        },
    },
};

module.exports = nextConfig;
