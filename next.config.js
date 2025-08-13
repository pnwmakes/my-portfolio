/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true, // or false — just must be a boolean
    },
    netlify: {
        functions: {
            included_files: ['.netlify/functions/forms.ts'],
        },
    },
};

module.exports = nextConfig;
