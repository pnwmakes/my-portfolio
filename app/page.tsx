'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollIndicator(false);
            } else {
                setShowScrollIndicator(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className='bg-animated-gradient text-white relative'>
            <section className='flex flex-col items-center justify-center min-h-screen px-4 relative'>
                <a
                    href='#about'
                    className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-700 ${
                        showScrollIndicator ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className='flex flex-col items-center space-y-2 animate-bounce cursor-pointer'>
                        <span className='text-sm font-light tracking-wider'>
                            Scroll Down
                        </span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M19 9l-7 7-7-7'
                            />
                        </svg>
                    </div>
                </a>

                <div className='card-gradient glow-container flex flex-col items-center backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 relative z-10'>
                    <img
                        src='/images/headshot.png'
                        alt='James Melzark'
                        className='w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white'
                    />
                    <h1 className='mt-6 text-3xl font-bold text-center text-white text-glow'>
                        James Melzark
                    </h1>
                    <p className='mt-2 font-semibold text-center text-white text-glow'>
                        Full-Stack Developer · Navy Veteran
                    </p>

                    <a
                        href='https://www.linkedin.com/in/jamesmelzark'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition flex items-center space-x-2'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-5 h-5'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path d='M19 0h-14c-2.76 0-5 ... (linkedin path) ...' />
                        </svg>
                        <span>Connect on LinkedIn</span>
                    </a>
                    {/* Call to Action Buttons */}

                    <div className='mt-4 flex space-x-4'>
                        <a
                            href='#projects'
                            className='px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'
                        >
                            View My Work
                        </a>
                        <a
                            href='#contact'
                            className='px-6 py-2 border border-gray-500 text-white rounded-lg shadow hover:bg-gray-100 transition'
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>

            <section
                id='about'
                className='py-20 bg-white/10 backdrop-blur-sm px-4'
            >
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-4xl font-bold mb-6'>About Me</h2>
                    <p className='text-lg leading-relaxed'>
                        I’m a Full-Stack Developer, QA Specialist, and U.S. Navy
                        Veteran with a passion for building clean, user-friendly
                        applications. With a strong background in technology and
                        problem-solving, I bring precision and creativity to
                        every project I take on.
                    </p>
                </div>
            </section>

            <section
                id='projects'
                className='py-20 bg-black/30 backdrop-blur-sm px-4'
            >
                <div className='max-w-6xl mx-auto text-center'>
                    <h2 className='text-4xl font-bold mb-10'>Projects</h2>

                    <div className='grid md:grid-cols-3 gap-8'>
                        {/* Example Project Card */}
                        <div className='bg-white/10 p-6 rounded-xl shadow-lg'>
                            <h3 className='text-2xl font-bold mb-2'>
                                Project One
                            </h3>
                            <p className='mb-4'>
                                Short description of the project, what it does,
                                and the tech stack used.
                            </p>
                            <Link
                                href='/projects/coming-soon'
                                className='px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'
                            >
                                View Project →
                            </Link>
                        </div>
                        <div className='bg-white/10 p-6 rounded-xl shadow-lg'>
                            <h3 className='text-2xl font-bold mb-2'>
                                Project Two
                            </h3>
                            <p className='mb-4'>
                                Short description of the project, what it does,
                                and the tech stack used.
                            </p>
                            <a
                                href='#'
                                className='px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'
                            >
                                View Project →
                            </a>
                        </div>
                        <div className='bg-white/10 p-6 rounded-xl shadow-lg'>
                            <h3 className='text-2xl font-bold mb-2'>
                                Project Three
                            </h3>
                            <p className='mb-4'>
                                Short description of the project, what it does,
                                and the tech stack used.
                            </p>
                            <Link
                                href='/projects/coming-soon'
                                className='px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'
                            >
                                View Project →
                            </Link>
                        </div>
                    </div>

                    {/* View All Projects Button */}
                    <div className='mt-10'>
                        <Link
                            href='/projects'
                            className='px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'
                        >
                            View All Projects →
                        </Link>
                    </div>
                </div>
            </section>

            <section
                id='contact'
                className='py-20 bg-white/10 backdrop-blur-sm px-4'
            >
                <div className='max-w-4xl mx-auto text-center'>
                    <h2 className='text-4xl font-bold mb-6'>Contact Me</h2>
                    <p className='mb-6'>
                        Have a question or want to work together? Fill out the
                        form below or connect with me via social media.
                    </p>
                    <form
                        name='contact'
                        method='POST'
                        data-netlify='true'
                        action='/thank-you'
                    >
                        <input type='hidden' name='form-name' value='contact' />
                        <input type='text' name='name' required />
                        <input type='email' name='email' required />
                        <textarea name='message' required></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
