'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
                {/* Logo */}
                <Link href='/' className='text-lg font-bold tracking-tight'>
                    James Melzark
                </Link>

                {/* Desktop Nav */}
                <nav className='hidden md:flex gap-6 text-sm font-medium'>
                    <Link href='#projects' className='hover:text-blue-600'>
                        Projects
                    </Link>
                    <Link href='#about' className='hover:text-blue-600'>
                        About
                    </Link>
                    <Link href='#contact' className='hover:text-blue-600'>
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'>
                    <nav className='flex flex-col p-4 space-y-2'>
                        <Link href='#projects' onClick={() => setIsOpen(false)}>
                            Projects
                        </Link>
                        <Link href='#about' onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                        <Link href='#contact' onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
