import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md border-b border-gray-800">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-emerald-500">
            CyberShield
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-emerald-500 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-emerald-500 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-emerald-500 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-emerald-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-emerald-500 transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="p-2 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 