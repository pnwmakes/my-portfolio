export default function HomePage() {
    return (
        <main className='min-h-screen flex flex-col items-center justify-center text-center p-8'>
            <h1 className='text-5xl font-bold mb-4'>
                Hi, I’m{' '}
                <span className='text-blue-600 dark:text-blue-400'>
                    James Melzark
                </span>
            </h1>
            <p className='text-lg max-w-xl text-gray-600 dark:text-gray-300 mb-8'>
                Navy Veteran • Full‑Stack Developer. I build clean, functional,
                and impactful web apps using React, Next.js, and Node.js.
            </p>
            <div className='flex gap-4'>
                <a
                    href='#projects'
                    className='px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition'
                >
                    View My Work
                </a>
                <a
                    href='/resume.pdf'
                    className='px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition'
                >
                    Download Resume
                </a>
            </div>
        </main>
    );
}
