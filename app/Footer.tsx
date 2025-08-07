export default function Footer() {
    return (
        <footer className='text-center py-6 bg-black/40 text-sm text-gray-300'>
            <p>
                © {new Date().getFullYear()} James Melzark. All rights reserved.
                ·{' '}
                <a
                    href='https://www.linkedin.com/in/jamesmelzark'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:text-blue-500 transition'
                >
                    LinkedIn
                </a>
            </p>
        </footer>
    );
}
