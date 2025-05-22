"use client"

import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Managed SOC as a Service',
      description: '24/7 threat monitoring, detection, and response with advanced security operations center services.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: '/services/managed-soc',
    },
    {
      id: 2,
      title: 'Penetration Testing',
      description: 'Comprehensive security testing including red teaming, web, network, mobile, and cloud penetration services.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      link: '/services/penetration-testing',
    },
    {
      id: 3,
      title: 'Cyber Resilience Services',
      description: 'Comprehensive risk management, cloud security, data protection, and advanced threat detection solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: '/services/cyber-resilience',
    },
    {
      id: 4,
      title: 'Digital Forensic',
      description: 'Expert forensic analysis for computer, network, email, mobile, cloud, database, and social media investigations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      link: '/services/digital-forensic',
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Cybersecurity Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive protection solutions designed to secure your digital assets and keep your business safe from cyber threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="cyber-card"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Link 
                href={service.link} 
                className="text-emerald-500 font-semibold hover:text-emerald-400 transition-colors inline-flex items-center"
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 