/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    netlify: {
        functions: {
            included_files: ['.netlify/entrypoints/forms.ts'],
        },
    },
};

module.exports = nextConfig;
