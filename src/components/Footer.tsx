import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p>&copy; 2025 MentalEdge. All rights reserved.</p>
          <p className="mt-1">Disclaimer: Not financial advice. Educational purposes only.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/terms" className="hover:text-gray-900 dark:hover:text-gray-100">Terms</Link>
          <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-gray-100">Privacy</Link>
          <Link href="/contact" className="hover:text-gray-900 dark:hover:text-gray-100">Contact</Link>
        </div>
      </div>
    </footer>
  );
} 