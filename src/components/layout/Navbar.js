"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const serviceDropdownItems = [
    { title: 'Penetration Testing', href: '/services/penetration-testing' },
    { title: 'Security Consulting', href: '/services/security-consulting' },
    { title: 'Incident Response', href: '/services/incident-response' },
    { title: 'Vulnerability Assessment', href: '/services/vulnerability-assessment' }
  ];

  const solutionsDropdownItems = [
    { title: 'Enterprise Security', href: '/solutions/enterprise-security' },
    { title: 'Cloud Security', href: '/solutions/cloud-security' },
    { title: 'Network Protection', href: '/solutions/network-protection' },
    { title: 'Compliance Solutions', href: '/solutions/compliance-solutions' }
  ];

  return (
    <nav className={`bg-black shadow-lg border-b border-gray-800 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-2xl text-emerald-500 glow-text">K-Infotech</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors">
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button 
                className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors flex items-center"
                onClick={() => toggleDropdown(0)}
              >
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-800 glow-border">
                <div className="py-1">
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-500">
                    Who We Are
                  </Link>
                  <Link href="/about/team" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-500">
                    Our Team
                  </Link>
                  <Link href="/about/mission" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-500">
                    Mission & Vision
                  </Link>
                  {/* <Link href="/careers" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-500">
                    Careers
                  </Link> */}
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors flex items-center"
                onClick={() => toggleDropdown(1)}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-60 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-800 glow-border">
                <div className="py-1">
                  {serviceDropdownItems.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href} 
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-500"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors flex items-center"
                onClick={() => toggleDropdown(2)}
              >
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-60 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-800 glow-border">
                <div className="py-1">
                  {solutionsDropdownItems.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href} 
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-500"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/blog" className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors">
              Blog
            </Link>

            <Link href="/contact" className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors">
              Contact
            </Link>

            <Link href="/contact" className="ml-2 btn-primary py-2 px-4 rounded-md pulse-glow">
              Get a Free Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-emerald-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 pb-4 border-t border-gray-800">
            <div className="flex flex-col pt-2 space-y-1">
              <Link href="/" className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors">
                Home
              </Link>
              
              {/* Mobile About Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown(0)}
                  className="w-full text-left py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors flex justify-between items-center"
                >
                  About Us
                  <svg className={`w-4 h-4 transform ${activeDropdown === 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeDropdown === 0 && (
                  <div className="pl-4 border-l border-gray-800 ml-4 mt-1">
                    <Link href="/about" className="block py-2 px-3 text-gray-400 hover:text-emerald-500">
                      Who We Are
                    </Link>
                    <Link href="/about/team" className="block py-2 px-3 text-gray-400 hover:text-emerald-500">
                      Our Team
                    </Link>
                    <Link href="/about/mission" className="block py-2 px-3 text-gray-400 hover:text-emerald-500">
                      Mission & Vision
                    </Link>
                    <Link href="/careers" className="block py-2 px-3 text-gray-400 hover:text-emerald-500">
                      Careers
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown(1)}
                  className="w-full text-left py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors flex justify-between items-center"
                >
                  Services
                  <svg className={`w-4 h-4 transform ${activeDropdown === 1 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeDropdown === 1 && (
                  <div className="pl-4 border-l border-gray-800 ml-4 mt-1">
                    {serviceDropdownItems.map((item, index) => (
                      <Link key={index} href={item.href} className="block py-2 px-3 text-gray-400 hover:text-emerald-500">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Solutions Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown(2)}
                  className="w-full text-left py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors flex justify-between items-center"
                >
                  Solutions
                  <svg className={`w-4 h-4 transform ${activeDropdown === 2 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {activeDropdown === 2 && (
                  <div className="pl-4 border-l border-gray-800 ml-4 mt-1">
                    {solutionsDropdownItems.map((item, index) => (
                      <Link key={index} href={item.href} className="block py-2 px-3 text-gray-400 hover:text-emerald-500">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="/blog" className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors">
                Blog
              </Link>
              
              <Link href="/contact" className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors">
                Contact
              </Link>
              
              <div className="pt-4">
                <Link href="/contact" className="block w-full btn-primary text-center py-3 pulse-glow">
                  Get a Free Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 