import Link from 'next/link';

export const metadata = {
  title: 'Security Solutions | CyberShield Security Solutions',
  description: 'Explore our comprehensive cybersecurity solutions including Enterprise Security, Cloud Security, Network Protection, and Compliance Solutions.',
};

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'enterprise-security',
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for organizations of all sizes, protecting your critical assets, sensitive data, and business operations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        'Identity & Access Management',
        'Advanced Threat Protection',
        'Data Protection',
        'Security Monitoring & Analytics',
        'Incident Response',
        'Security Architecture'
      ],
      link: '/solutions/enterprise-security'
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure, applications, and data across all major cloud platforms with our comprehensive cloud security solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      features: [
        'Cloud Security Assessment',
        'Cloud Architecture Security',
        'Cloud Configuration Management',
        'Cloud Data Protection',
        'Cloud Security Monitoring',
        'DevSecOps Integration'
      ],
      link: '/solutions/cloud-security'
    },
    {
      id: 'network-protection',
      title: 'Network Protection',
      description: 'Secure your critical network infrastructure against advanced threats with our comprehensive network protection solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      features: [
        'Network Security Assessment',
        'Next-Gen Firewall Management',
        'Intrusion Detection & Prevention',
        'Network Access Control',
        'DDoS Protection',
        'Network Segmentation'
      ],
      link: '/solutions/network-protection'
    },
    {
      id: 'compliance-solutions',
      title: 'Compliance Solutions',
      description: 'Navigate complex regulatory requirements with confidence using our comprehensive compliance and risk management solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: [
        'Compliance Assessment',
        'Compliance Program Development',
        'Compliance Audits & Preparation',
        'Policy & Procedure Development',
        'Risk Management',
        'Compliance Training'
      ],
      link: '/solutions/compliance-solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Solutions</h1>
            <p className="text-xl text-gray-300">
              Comprehensive security solutions designed to protect your organization from evolving cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-heading text-white mb-6">Our Comprehensive Security Solutions</h2>
            <p className="text-gray-300">
              CyberShield provides end-to-end security solutions that address the complex challenges faced by organizations in today's threat landscape. From enterprise security to compliance, our solutions are designed to protect your critical assets while enabling your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution) => (
              <div key={solution.id} className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden transition-transform hover:scale-[1.01] hover:shadow-emerald-900/20 hover:shadow-lg">
                <div className="p-8">
                  <div className="text-emerald-500 mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">
                    {solution.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-400">
                          <svg className="h-5 w-5 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={solution.link}
                    className="inline-block border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black font-medium px-6 py-3 rounded-md transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-white mb-6">Our Integrated Security Approach</h2>
              <p className="text-gray-300 mb-6">
                At CyberShield, we believe in a holistic approach to security. Our solutions are designed to work together, creating a comprehensive security ecosystem that addresses all aspects of your organization's security needs.
              </p>
              <p className="text-gray-300 mb-6">
                By integrating enterprise security, cloud security, network protection, and compliance solutions, we help you build a strong security foundation that evolves with your business and the threat landscape.
              </p>
              <p className="text-gray-300">
                Our team of experts works with you to understand your unique security challenges and develop tailored solutions that protect your organization while enabling your business objectives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-emerald-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Proactive Protection</h3>
                <p className="text-gray-400">
                  Anticipate and prevent threats before they impact your business.
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-emerald-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Continuous Monitoring</h3>
                <p className="text-gray-400">
                  24/7 visibility into your security posture and emerging threats.
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-emerald-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Adaptive Security</h3>
                <p className="text-gray-400">
                  Solutions that evolve with your business and the threat landscape.
                </p>
              </div>
              <div className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="text-emerald-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Customizable Solutions</h3>
                <p className="text-gray-400">
                  Tailored security strategies aligned with your unique requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-heading text-white mb-6">Industries We Serve</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our security solutions are designed to address the unique challenges faced by organizations across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
              <p className="text-gray-400">
                Protect sensitive financial data, ensure regulatory compliance, and safeguard digital banking platforms against sophisticated attacks.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
              <p className="text-gray-400">
                Secure patient data, protect connected medical devices, and maintain HIPAA compliance while enabling digital healthcare innovation.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
              <p className="text-gray-400">
                Protect industrial control systems, secure intellectual property, and ensure operational technology security for modern manufacturing.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Government</h3>
              <p className="text-gray-400">
                Defend critical infrastructure, protect sensitive information, and ensure continuity of government operations against advanced threats.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Retail & E-commerce</h3>
              <p className="text-gray-400">
                Secure payment systems, protect customer data, and ensure PCI DSS compliance for omnichannel retail environments.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Professional Services</h3>
              <p className="text-gray-400">
                Protect intellectual property, client information, and ensure secure collaboration environments for professional service firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-emerald-900/50 to-gray-900 rounded-lg p-8 md:p-12 border border-emerald-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Secure Your Organization?</h2>
                <p className="text-gray-300 mb-0">
                  Contact our security experts today to discuss how our solutions can help protect your organization from evolving cyber threats.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Link href="/contact" className="btn-primary py-3 px-6 text-center">
                  Schedule a Consultation
                </Link>
                <Link href="/services" className="btn-secondary py-3 px-6 text-center">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 