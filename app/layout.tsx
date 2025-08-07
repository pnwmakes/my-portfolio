import './globals.css';
import type { Metadata } from 'next';
import Footer from './Footer';

export const metadata: Metadata = {
    title: 'James Melzark | Portfolio',
    description: 'Full-Stack Developer | QA Specialist | Navy Veteran',
    icons: { icon: '/favicon.ico' },
    openGraph: {
        title: 'James Melzark | Portfolio',
        description: 'Full-Stack Developer | QA Specialist | Navy Veteran',
        url: 'https://jamesmelzark.com',
        siteName: 'James Melzark Portfolio',
        images: [
            {
                url: 'https://jamesmelzark.com/images/og-image-v2.png',
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
        images: ['https://jamesmelzark.com/images/og-image-v2.png'],
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
                <Footer /> {}
            </body>
        </html>
    );
}
