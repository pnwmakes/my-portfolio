/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    // Required by @netlify/plugin-nextjs v5+ to handle Netlify Functions properly
    netlify: {
        functions: {
            included_files: ['netlify/entrypoints/forms.ts'],
        },
    },
    // Optional: Set basePath, i18n, redirects, or rewrites here if needed
    // basePath: '',
    // i18n: { locales: ['en'], defaultLocale: 'en' },
};

module.exports = nextConfig;
