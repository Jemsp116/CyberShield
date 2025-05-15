import Link from 'next/link';

export const metadata = {
  title: 'Cybersecurity Services | CyberShield Security Solutions',
  description: 'Explore our comprehensive cybersecurity services designed to protect your business from evolving cyber threats.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Penetration Testing',
      description: 'Our penetration testing services simulate real-world attacks on your systems to identify vulnerabilities before malicious actors can exploit them. Our experienced ethical hackers use the latest techniques to thoroughly test your defenses.',
      features: [
        'Web Application Testing',
        'Network Infrastructure Testing',
        'Mobile Application Testing',
        'Cloud Security Assessment',
        'Social Engineering Simulations'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      link: '/services/penetration-testing'
    },
    {
      id: 2,
      title: 'Security Consulting',
      description: 'Our expert security consultants work with your team to develop and implement comprehensive security strategies tailored to your organization\'s specific needs, helping you build a strong security posture.',
      features: [
        'Security Program Development',
        'Risk Assessment & Management',
        'Compliance Advisory (GDPR, HIPAA, PCI DSS)',
        'Security Architecture Review',
        'Security Awareness Training'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: '/services/security-consulting'
    },
    {
      id: 3,
      title: 'Incident Response',
      description: 'When a security breach occurs, our incident response team provides rapid and effective containment, investigation, and remediation services to minimize damage and restore normal operations as quickly as possible.',
      features: [
        '24/7 Emergency Response',
        'Threat Containment',
        'Forensic Investigation',
        'Root Cause Analysis',
        'Recovery Planning'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: '/services/incident-response'
    },
    {
      id: 4,
      title: 'Vulnerability Assessment',
      description: 'Our vulnerability assessment services provide thorough scanning and assessment of your systems to identify, classify, and prioritize security vulnerabilities, giving you a clear roadmap for remediation.',
      features: [
        'Network Vulnerability Scanning',
        'Application Security Testing',
        'Configuration Review',
        'Compliance Gap Analysis',
        'Remediation Guidance'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      link: '/services/vulnerability-assessment'
    },
    {
      id: 5,
      title: 'Security Operations Center (SOC)',
      description: 'Our managed SOC services provide continuous monitoring, detection, and response to security threats, helping you maintain a strong security posture and quickly address potential incidents.',
      features: [
        '24/7 Security Monitoring',
        'Threat Detection & Analysis',
        'Security Incident Management',
        'Threat Intelligence Integration',
        'Regular Security Reporting'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: '/services/security-operations-center'
    },
    {
      id: 6,
      title: 'Cloud Security',
      description: 'Our cloud security services help you securely navigate the complexities of cloud environments, ensuring your data and applications remain protected across your entire cloud infrastructure.',
      features: [
        'Cloud Security Architecture',
        'Cloud Configuration Review',
        'Identity & Access Management',
        'Container & Serverless Security',
        'Data Protection Strategy'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      link: '/services/cloud-security'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Cybersecurity Services</h1>
            <p className="text-xl text-gray-300">
              Protecting your business with industry-leading security expertise and advanced solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="p-8 bg-black flex flex-col justify-center items-center text-center border-r border-gray-800">
                    <div className="mb-4">{service.icon}</div>
                    <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                    <Link 
                      href={service.link}
                      className="mt-4 inline-flex items-center text-emerald-500 font-semibold hover:text-emerald-400 transition-colors"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  <div className="md:col-span-2 p-8">
                    <div className="mb-6">
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-4 text-white">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg className="h-5 w-5 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">Not Sure What You Need?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Our security experts can help you identify the services that best address your organization's unique security challenges.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 