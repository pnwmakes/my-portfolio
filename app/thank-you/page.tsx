'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function ThankYouPage() {
    useEffect(() => {
        // Fire confetti once
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });

        // Redirect after 5 seconds
        const timer = setTimeout(() => {
            window.location.href = '/';
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className='min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-4'>
            <h1 className='text-4xl font-bold mb-4'>Thank you!</h1>
            <p className='text-lg mb-4'>
                Your message has been sent. Redirecting you shortly...
            </p>
            <p className='text-sm'>
                If you're not redirected,{' '}
                <a
                    href='/'
                    className='underline text-blue-400 hover:text-blue-600'
                >
                    click here
                </a>
                .
            </p>
        </main>
    );
}
