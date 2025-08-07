// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    netlify: {
        // 👇 tells Netlify where your form functions are
        functions: {
            included_files: ['.netlify/entrypoints/forms.ts'],
        },
    },
};

module.exports = nextConfig;
