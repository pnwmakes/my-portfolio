// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'James Melzark | Portfolio',
    description: 'Full-Stack Developer | QA Specialist | Navy Veteran',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'James Melzark | Portfolio',
        description: 'Full-Stack Developer | QA Specialist | Navy Veteran',
        url: 'https://jamesmelzark.com',
        siteName: 'James Melzark Portfolio',
        images: [
            {
                url: 'https://jamesmelzark.com/images/og-image-v2.png', // FULL URL
                width: 1200,
                height: 630,
                alt: 'James Melzark Portfolio Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'James Melzark | Portfolio',
        description: 'Full-Stack Developer | QA Specialist | Navy Veteran',
        images: ['https://jamesmelzark.com/images/og-image.png'], // FULL URL
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='antialiased bg-animated-gradient min-h-screen text-gray-900 relative'>
                {children}
            </body>
        </html>
    );
}
