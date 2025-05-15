"use client"

import Link from 'next/link';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">Leaders in Cybersecurity Excellence</h2>
            <p className="text-lg text-gray-400 mb-6">
              At CyberShield, we've been at the forefront of cybersecurity innovation for over 15 years, 
              protecting businesses of all sizes from increasingly sophisticated cyber threats.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              Our team of certified security experts brings decades of combined experience from various industries,
              allowing us to deliver tailored security solutions that address your specific challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="cyber-card">
                <div className="text-3xl font-bold text-emerald-500 mb-2">15+</div>
                <div className="text-gray-400">Years of Experience</div>
              </div>
              <div className="cyber-card">
                <div className="text-3xl font-bold text-emerald-500 mb-2">200+</div>
                <div className="text-gray-400">Security Experts</div>
              </div>
              <div className="cyber-card">
                <div className="text-3xl font-bold text-emerald-500 mb-2">5000+</div>
                <div className="text-gray-400">Security Incidents Resolved</div>
              </div>
              <div className="cyber-card">
                <div className="text-3xl font-bold text-emerald-500 mb-2">99.8%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
            
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800">
                <div className="p-8 bg-gradient-to-br from-gray-900 to-black text-white h-full flex flex-col justify-center border border-gray-800">
                  <h3 className="text-2xl font-bold mb-4 text-emerald-500">Our Mission</h3>
                  <p className="mb-6 text-gray-300">
                    To empower organizations with the security tools, expertise, and confidence needed to 
                    thrive in an increasingly threatening digital landscape.
                  </p>
                  <div className="border-t border-gray-700 pt-6">
                    <h4 className="text-xl font-bold mb-3 text-white">Our Values</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Integrity in everything we do
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Continuous innovation
                      </li>
                      <li className="flex items-center text-gray-300">
                        <svg className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Client-centered approach
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-emerald-900 rounded-lg transform translate-x-4 translate-y-4 -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview; 