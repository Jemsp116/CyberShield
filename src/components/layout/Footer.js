"use client"

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer ref={footerRef} className="bg-black text-white border-t border-gray-800">
      <div className={`container-custom py-12 ${footerInView ? 'fade-in' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-500 glow-text">K-Infotech</h3>
            <p className="text-gray-400">
              Empowering businesses with innovative IT solutions, cybersecurity services, and digital transformation consulting.
            </p>
            <div className="mt-6 digital-scan">
              <div className="h-1 w-48 bg-gradient-to-r from-emerald-900 via-emerald-500 to-emerald-900 pulse-glow"></div>
            </div>
          </div>
          
          <div className="slide-in-right" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/managed-soc" className="text-gray-400 hover:text-emerald-500 hover:glow-text transition-colors">Managed SOC as a Service</Link></li>
              <li><Link href="/services/penetration-testing" className="text-gray-400 hover:text-emerald-500 hover:glow-text transition-colors">Penetration Testing</Link></li>
              <li><Link href="/services/cyber-resilience" className="text-gray-400 hover:text-emerald-500 hover:glow-text transition-colors">Cyber Resilience Services</Link></li>
              <li><Link href="/services/digital-forensic" className="text-gray-400 hover:text-emerald-500 hover:glow-text transition-colors">Digital Forensic</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-emerald-500 hover:glow-text transition-colors">View All Services</Link></li>
            </ul>
          </div>
          
          <div className="slide-in-right" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-emerald-500 hover:glow-text transition-colors">About Us</Link></li>
              <li><Link href="/about/team" className="text-gray-400 hover:text-emerald-500 hover:glow-text transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-emerald-500 hover:glow-text transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-emerald-500 hover:glow-text transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="slide-in-right" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect with Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors hover:glow-text transform hover:scale-110 transition-transform">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors hover:glow-text transform hover:scale-110 transition-transform">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <div className="cyber-card mt-4 p-4 glow-border">
                <p className="text-gray-400 text-sm">24/7 Security Monitoring</p>
                <div className="w-full h-2 bg-gray-800 mt-2 rounded overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded animate-pulse digital-scan" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} K-Infotech Global Consulting Services. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-emerald-500 hover:glow-text transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-emerald-500 hover:glow-text transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 