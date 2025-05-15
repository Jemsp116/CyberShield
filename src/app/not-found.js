import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">404 - Page Not Found</h1>
        <p className="text-xl text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-col space-y-4">
          <Link href="/" className="btn-primary inline-block">
            Return to Homepage
          </Link>
          <Link href="/contact" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">
            Contact Support
          </Link>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-gray-400">
          <p>If you believe this is an error, please contact our security team.</p>
        </div>
      </div>
    </div>
  );
} 