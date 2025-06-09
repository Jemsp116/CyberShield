"use client"

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import MatrixRain from '../layout/MatrixRain';

const Hero = () => {
  const headerRef = useRef(null);
  
  useEffect(() => {
    // Typing effect animation for header
    const header = headerRef.current;
    const text = header.textContent;
    header.textContent = '';
    
    const typeText = async () => {
      for (let i = 0; i < text.length; i++) {
        header.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, 30));
      }
    };
    
    typeText();
  }, []);

  return (
    <section className="bg-black text-white min-h-screen flex items-center relative">
      {/* Matrix Rain in background */}
      <div className="absolute inset-0 z-0">
        <MatrixRain />
      </div>
      
      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 ref={headerRef} className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-emerald-500">
              Protecting Your Digital Assets in an Evolving Threat Landscape
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-10">
              Comprehensive cybersecurity solutions to safeguard your business from sophisticated threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="/contact" className="btn-primary text-center text-base sm:text-lg py-3 px-6 sm:px-8 w-full sm:w-auto">
                Get a Security Assessment
              </Link>
              <Link href="/services" className="btn-secondary text-center text-base sm:text-lg py-3 px-6 sm:px-8 w-full sm:w-auto">
                Explore Our Services
              </Link>
            </div>
          </div>
          
          {/* Stats grid - now responsive instead of hidden */}
          <div className="mt-8 md:mt-0">
            <div className="relative">
              <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm rounded-xl p-4 sm:p-8 relative z-10 border border-gray-800">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-black bg-opacity-70 rounded-lg p-4 sm:p-6 border border-gray-800">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-emerald-500">99.9%</div>
                    <div className="text-sm sm:text-base text-gray-300">Threat Detection</div>
                  </div>
                  <div className="bg-black bg-opacity-70 rounded-lg p-4 sm:p-6 border border-gray-800">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-emerald-500">24/7</div>
                    <div className="text-sm sm:text-base text-gray-300">Monitoring</div>
                  </div>
                  <div className="bg-black bg-opacity-70 rounded-lg p-4 sm:p-6 border border-gray-800">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-emerald-500">500+</div>
                    <div className="text-sm sm:text-base text-gray-300">Clients Protected</div>
                  </div>
                  <div className="bg-black bg-opacity-70 rounded-lg p-4 sm:p-6 border border-gray-800">
                    <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-emerald-500">15min</div>
                    <div className="text-sm sm:text-base text-gray-300">Response Time</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-full h-full bg-emerald-600 rounded-xl opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;