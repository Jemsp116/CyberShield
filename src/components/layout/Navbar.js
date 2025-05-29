"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ServiceModal from '../ui/ServiceModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

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

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };
  
  const openModal = (modalName) => {
    setActiveModal(modalName);
  };
  
  const closeModal = () => {
    setActiveModal(null);
  };

  const serviceDropdownItems = [
    { 
      title: 'Managed SOC as a Service', 
      href: '/services/managed-soc',
      subItems: [
        { title: '24/7 Threat Monitoring and Detection', href: '/services/managed-soc' },
        { title: 'SOC Deployment and Monitoring', href: '/services/managed-soc' },
        { title: 'Incident Response and Mitigation', href: '/services/managed-soc' },
        { title: 'Log Management and Analysis', href: '/services/managed-soc' },
        { title: 'MDR, EDR, XDR, SOAR', href: '/services/managed-soc' }
      ]
    },
    { 
      title: 'Penetration Testing', 
      href: '/services/penetration-testing',
      subItems: [
        { title: 'Red Teaming', href: '/services/penetration-testing#red-teaming' },
        { title: 'WEB Application Penetration Testing', href: '/services/penetration-testing#web-app' },
        { title: 'Network Penetration Testing', href: '/services/penetration-testing#network' },
        { title: 'Mobile App Penetration Testing', href: '/services/penetration-testing#mobile' },
        { title: 'Cloud Penetration Service', href: '/services/penetration-testing#cloud' }
      ]
    },
    { 
      title: 'Cyber Resilience Services', 
      href: '/services/cyber-resilience',
      subItems: [
        { title: 'Risk Assessment and Management', href: '/services/cyber-resilience#risk' },
        { title: 'Cloud Security and Disaster Recovery', href: '/services/cyber-resilience#cloud' },
        { title: 'Data Protection and Backup Solutions', href: '/services/cyber-resilience#data' },
        { title: 'Advanced Threat Detection', href: '/services/cyber-resilience#threat-detection' },
        { title: 'Virtual CISO', href: '/services/cyber-resilience#vciso' },
        { title: 'IAM/PAM as a Service', href: '/services/cyber-resilience#iam' }
      ]
    },
    { 
      title: 'Digital Forensic', 
      href: '/services/digital-forensic',
      subItems: [
        { title: 'Computer & Network Forensic', href: '/services/digital-forensic#computer' },
        { title: 'Email & Mobile Forensic', href: '/services/digital-forensic#email' },
        { title: 'Cloud & Database Forensic', href: '/services/digital-forensic#cloud' },
        { title: 'Disk & Memory Forensic', href: '/services/digital-forensic#disk' },
        { title: 'Audio/Video & Social Media Forensic', href: '/services/digital-forensic#media' }
      ]
    }
  ];

  const solutionsDropdownItems = [
    { title: 'Enterprise Security', href: '/solutions/enterprise-security' },
    { title: 'Cloud Security', href: '/solutions/cloud-security' },
    { title: 'Network Protection', href: '/solutions/network-protection' },
    { title: 'Compliance Solutions', href: '/solutions/compliance-solutions' }
  ];
  
  // Modal content for services
  const modalContent = {
    'penetration-testing': (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          Our comprehensive Penetration Testing services help identify vulnerabilities in your systems before malicious actors can exploit them.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Red Teaming</h3>
            <p className="text-gray-300">Advanced simulated attacks that test your organization's detection and response capabilities using real-world tactics.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">WEB Application Testing</h3>
            <p className="text-gray-300">Thorough assessment of web applications to identify security flaws, including OWASP Top 10 vulnerabilities.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Network Penetration Testing</h3>
            <p className="text-gray-300">Comprehensive evaluation of network infrastructure to identify and exploit security weaknesses.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Mobile App Testing</h3>
            <p className="text-gray-300">Security assessment of mobile applications across iOS and Android platforms to identify vulnerabilities.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 md:col-span-2">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Cloud Penetration Service</h3>
            <p className="text-gray-300">Specialized testing for cloud environments including AWS, Azure, and Google Cloud to identify misconfigurations and security gaps.</p>
          </div>
        </div>
        
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-emerald-500 mb-3">Our Methodology</h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-300">
            <li>Initial reconnaissance and planning</li>
            <li>Vulnerability scanning and identification</li>
            <li>Manual exploitation and privilege escalation</li>
            <li>Post-exploitation analysis</li>
            <li>Detailed reporting with remediation recommendations</li>
          </ol>
        </div>
      </div>
    ),
    
    'cyber-resilience': (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          Our Cyber Resilience Services help organizations build robust security postures that can withstand, respond to, and recover from cyber threats.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Risk Assessment and Management</h3>
            <p className="text-gray-300">Comprehensive evaluation of your organization's security risks with actionable mitigation strategies.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Cloud Security and Disaster Recovery</h3>
            <p className="text-gray-300">Secure cloud implementations with robust disaster recovery planning to ensure business continuity.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Data Protection and Backup Solutions</h3>
            <p className="text-gray-300">Comprehensive data protection strategies including encryption, access controls, and secure backup solutions.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Advanced Threat Detection</h3>
            <p className="text-gray-300">Implementation of cutting-edge threat detection technologies to identify and respond to sophisticated attacks.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Virtual CISO</h3>
            <p className="text-gray-300">Expert security leadership without the cost of a full-time executive, providing strategic guidance and oversight.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">IAM/PAM as a Service</h3>
            <p className="text-gray-300">Managed identity and access management solutions to control and monitor user access across your organization.</p>
          </div>
        </div>
        
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-emerald-500 mb-3">Benefits</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Improved security posture and reduced risk exposure</li>
            <li>Enhanced ability to detect and respond to threats</li>
            <li>Minimized downtime and business disruption</li>
            <li>Compliance with regulatory requirements</li>
            <li>Cost-effective security solutions tailored to your needs</li>
          </ul>
        </div>
      </div>
    ),
    
    'digital-forensic': (
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          Our Digital Forensic services provide expert investigation capabilities to analyze security incidents, collect evidence, and support legal proceedings.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Computer & Network Forensic</h3>
            <p className="text-gray-300">Detailed analysis of computer systems and networks to recover evidence of unauthorized activities and data breaches.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Email & Mobile Forensic</h3>
            <p className="text-gray-300">Recovery and analysis of email communications and mobile device data for evidence gathering and investigation.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Cloud & Database Forensic</h3>
            <p className="text-gray-300">Specialized investigation of cloud environments and databases to trace unauthorized access and data manipulation.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Disk & Memory Forensic</h3>
            <p className="text-gray-300">In-depth analysis of storage devices and system memory to recover deleted files and identify malicious code.</p>
          </div>
          
          <div className="bg-gray-800 p-5 rounded-lg border border-gray-700 md:col-span-2">
            <h3 className="text-xl font-semibold text-emerald-500 mb-3">Audio/Video & Social Media Forensic</h3>
            <p className="text-gray-300">Analysis of multimedia content and social media activities to support investigations and legal proceedings.</p>
          </div>
        </div>
        
        <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-emerald-500 mb-3">Our Forensic Process</h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-300">
            <li>Secure evidence collection and preservation</li>
            <li>Forensic imaging and data acquisition</li>
            <li>Detailed analysis using specialized tools</li>
            <li>Evidence documentation and chain of custody maintenance</li>
            <li>Expert reporting and testimony if required</li>
          </ol>
        </div>
      </div>
    )
  };

  return (
    <>
      
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
              <div className="absolute left-0 mt-2 w-72 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-800 glow-border z-50">
                <div className="py-1">
                  {serviceDropdownItems.map((item, index) => (
                    <div key={index} className="relative group/submenu">
                      <Link 
                        href={item.href} 
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-500 flex justify-between items-center"
                      >
                        {item.title}
                        {item.subItems && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        )}
                      </Link>
                      {item.subItems && (
                        <div className="absolute left-full top-0 w-80 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 border border-gray-800 glow-border">
                          <div className="py-1">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link 
                                key={subIndex} 
                                href={subItem.href} 
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-500"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
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
              <Link href="/" onClick={closeMenu} className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors">
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
                    <Link href="/about" onClick={closeMenu} className="block py-2 px-3 text-gray-400 hover:text-emerald-500">
                      Who We Are
                    </Link>
                    <Link href="/about/team" onClick={closeMenu} className="block py-2 px-3 text-gray-400 hover:text-emerald-500">
                      Our Team
                    </Link>
                    <Link href="/about/mission" onClick={closeMenu} className="block py-2 px-3 text-gray-400 hover:text-emerald-500">
                      Mission & Vision
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
                      <div key={index}>
                        <div className="flex justify-between items-center">
                          <Link href={item.href} onClick={closeMenu} className="block py-2 px-3 text-gray-400 hover:text-emerald-500">
                            {item.title}
                          </Link>
                          {item.subItems && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                // Close any other nested dropdowns before opening this one
                                if (activeDropdown !== `1-${index}`) {
                                  // Check if current active dropdown is a nested one
                                  if (typeof activeDropdown === 'string' && activeDropdown.startsWith('1-')) {
                                    setActiveDropdown(null);
                                  }
                                }
                                toggleDropdown(`1-${index}`);
                              }}
                              className="py-2 px-3 text-gray-400 hover:text-emerald-500"
                            >
                              <svg className={`w-4 h-4 transform ${activeDropdown === `1-${index}` ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                              </svg>
                            </button>
                          )}
                        </div>
                        {activeDropdown === `1-${index}` && item.subItems && (
                          <div className="pl-4 border-l border-gray-700 ml-4 mt-1">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link key={subIndex} href={subItem.href} onClick={closeMenu} className="block py-2 px-3 text-gray-500 hover:text-emerald-500 text-sm">
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              
            
              
              <Link href="/blog" onClick={closeMenu} className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors">
                Blog
              </Link>
              
              <Link href="/contact" onClick={closeMenu} className="py-2 px-3 text-gray-300 hover:text-emerald-500 transition-colors">
                Contact
              </Link>
              
              <div className="pt-4">
                <Link href="/contact" onClick={closeMenu} className="block w-full btn-primary text-center py-3 pulse-glow">
                  Get a Free Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;