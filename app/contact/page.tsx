'use client';
import Link from 'next/link';

export default function ContactPage() {
    console.log('✅ Inside ContactPage component');
    return (
        <main className='bg-animated-gradient min-h-screen text-white px-4 flex flex-col items-center justify-center relative'>
            {/* <div className='bg-red-500 text-white p-4 mb-4'>
                Tailwind Test: This should be a red box if Tailwind is working.
            </div> */}

            <section className='card-gradient glow-container flex flex-col items-center backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 relative z-10 max-w-lg w-full'>
                <h1 className='text-3xl font-bold text-center text-white text-glow mb-4'>
                    Contact Me
                </h1>
                <p className='mb-6 text-center text-white text-glow'>
                    Have a question or want to work together? Fill out the form
                    below or connect with me via social media.
                </p>

                <form
                    name='contact'
                    method='POST'
                    data-netlify='true'
                    action='/thank-you'
                    className='w-full'
                >
                    <input type='hidden' name='form-name' value='contact' />

                    <div className='mb-4'>
                        <label
                            htmlFor='name'
                            className='block mb-2 font-semibold'
                        >
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            required
                            className='w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='email'
                            className='block mb-2 font-semibold'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            className='w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-600'
                        />
                    </div>

                    <div className='mb-6'>
                        <label
                            htmlFor='message'
                            className='block mb-2 font-semibold'
                        >
                            Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            rows={4}
                            required
                            className='w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-600'
                        ></textarea>
                    </div>

                    <button
                        type='submit'
                        className='w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition'
                    >
                        Send
                    </button>
                </form>

                <div className='mt-6 text-center'>
                    <Link
                        href='/'
                        className='inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition'
                    >
                        ← Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}
