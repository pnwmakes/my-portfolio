/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/thank-you',
                headers: [
                    {
                        key: 'x-prerender-revalidate',
                        value: 'true',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
