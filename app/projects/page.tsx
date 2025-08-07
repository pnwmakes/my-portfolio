// app/projects/page.tsx

import Link from 'next/link';

export default function ProjectsPage() {
    return (
        <main className='bg-animated-gradient min-h-screen text-white px-6 py-20'>
            <section className='max-w-6xl mx-auto'>
                <h1 className='text-4xl font-bold mb-10 text-center'>
                    All Projects
                </h1>

                <div className='grid md:grid-cols-3 gap-8'>
                    {/* Project 1 */}
                    <div className='bg-white/10 p-6 rounded-xl shadow-lg'>
                        <h3 className='text-2xl font-bold mb-2'>Project One</h3>
                        <p className='mb-4'>
                            Short description of the project, what it does, and
                            the tech stack used.
                        </p>
                        <a href='#' className='text-blue-400 hover:underline'>
                            View Project →
                        </a>
                    </div>

                    {/* Project 2 */}
                    <div className='bg-white/10 p-6 rounded-xl shadow-lg'>
                        <h3 className='text-2xl font-bold mb-2'>Project Two</h3>
                        <p className='mb-4'>
                            Short description of the project, what it does, and
                            the tech stack used.
                        </p>
                        <a href='#' className='text-blue-400 hover:underline'>
                            View Project →
                        </a>
                    </div>

                    {/* Project 3 */}
                    <div className='bg-white/10 p-6 rounded-xl shadow-lg'>
                        <h3 className='text-2xl font-bold mb-2'>
                            Project Three
                        </h3>
                        <p className='mb-4'>
                            Short description of the project, what it does, and
                            the tech stack used.
                        </p>
                        <a href='#' className='text-blue-400 hover:underline'>
                            View Project →
                        </a>
                    </div>

                    {/* Project 4 */}
                    <div className='bg-white/10 p-6 rounded-xl shadow-lg'>
                        <h3 className='text-2xl font-bold mb-2'>
                            Project Four
                        </h3>
                        <p className='mb-4'>
                            Description of what the project solves and key
                            technologies used.
                        </p>
                        <a href='#' className='text-blue-400 hover:underline'>
                            View Project →
                        </a>
                    </div>

                    {/* Project 5 */}
                    <div className='bg-white/10 p-6 rounded-xl shadow-lg'>
                        <h3 className='text-2xl font-bold mb-2'>
                            Project Five
                        </h3>
                        <p className='mb-4'>
                            Description of what the project solves and key
                            technologies used.
                        </p>
                        <a href='#' className='text-blue-400 hover:underline'>
                            View Project →
                        </a>
                    </div>

                    {/* Project 6 */}
                    <div className='bg-white/10 p-6 rounded-xl shadow-lg'>
                        <h3 className='text-2xl font-bold mb-2'>Project Six</h3>
                        <p className='mb-4'>
                            Description of what the project solves and key
                            technologies used.
                        </p>
                        <a href='#' className='text-blue-400 hover:underline'>
                            View Project →
                        </a>
                    </div>
                </div>
                <div className='mt-10 text-center'>
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
