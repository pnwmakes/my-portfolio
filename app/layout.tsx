// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
    title: 'James Melzark | Portfolio',
    description: 'Full-Stack Developer | QA Specialist | Navy Veteran',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body className='antialiased bg-animated-gradient min-h-screen text-gray-900 relative'>
                {children}
            </body>
        </html>
    );
}
