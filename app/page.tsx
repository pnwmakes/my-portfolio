export default function HomePage() {
    return (
        <main className='flex flex-col items-center justify-center min-h-screen bg-animated-gradient px-4'>
            {/* Card with opposite gradient and glow */}
            <div className='card-gradient glow-container flex flex-col items-center backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 relative z-10'>
                {/* Headshot */}
                <img
                    src='/images/headshot.png'
                    alt='James Melzark'
                    className='w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white'
                />

                {/* Name */}
                <h1 className='mt-6 text-3xl font-bold text-center text-white mix-blend-difference drop-shadow-lg'>
                    James Melzark
                </h1>

                {/* Tagline */}
                <p className='mt-2 font-semibold text-center text-white mix-blend-difference drop-shadow'>
                    Full-Stack Developer · QA Specialist · Navy Veteran
                </p>

                {/* Buttons */}
                <div className='mt-4 flex space-x-4'>
                    <a
                        href='#projects'
                        className='px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'
                    >
                        View My Work
                    </a>
                    <a
                        href='#contact'
                        className='px-6 py-2 border border-gray-500 text-white rounded-lg shadow hover:bg-gray-100 hover:text-gray-900 transition'
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </main>
    );
}
