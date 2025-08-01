export default function Footer() {
    return (
        <footer className='w-full border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-gray-500 dark:text-gray-400'>
            © {new Date().getFullYear()} James Melzark. All rights reserved.
        </footer>
    );
}
