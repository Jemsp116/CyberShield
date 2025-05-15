import Link from 'next/link';

export const metadata = {
  title: 'Compliance Solutions | CyberShield Security Solutions',
  description: 'Streamline your regulatory compliance and risk management with our comprehensive compliance solutions.',
};

export default function ComplianceSolutionsPage() {
  const regulations = [
    {
      id: 'gdpr',
      name: 'GDPR',
      description: 'European Union data protection and privacy regulation that impacts organizations handling EU citizens\' data.',
    },
    {
      id: 'hipaa',
      name: 'HIPAA',
      description: 'U.S. regulation protecting sensitive patient health information from disclosure without consent.',
    },
    {
      id: 'pci',
      name: 'PCI DSS',
      description: 'Security standards for organizations that handle credit card information to ensure cardholder data protection.',
    },
    {
      id: 'sox',
      name: 'SOX',
      description: 'U.S. law mandating specific practices in financial record keeping and reporting for public companies.',
    },
    {
      id: 'nist',
      name: 'NIST CSF',
      description: 'Cybersecurity framework providing guidelines and best practices for managing cybersecurity risks.',
    },
    {
      id: 'iso',
      name: 'ISO 27001',
      description: 'International standard for information security management systems (ISMS).',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <Link href="/solutions" className="text-emerald-500 flex items-center mb-6 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Solutions
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance Solutions</h1>
            <p className="text-xl text-gray-300">
              Navigate complex regulatory requirements with confidence using our comprehensive compliance and risk management solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="section-heading text-white mb-6">Simplifying Compliance Challenges</h2>
              <p className="text-gray-300 mb-6">
                In today's complex regulatory landscape, maintaining compliance is critical to business success. Organizations face a growing number of regulations across different industries and regions, each with its own specific requirements and potential penalties.
              </p>
              <p className="text-gray-300 mb-6">
                CyberShield's compliance solutions help organizations navigate these challenges with a comprehensive approach that transforms compliance from a burden into a business advantage. We help you build a strong compliance foundation while integrating security controls that protect your data and systems.
              </p>
              <p className="text-gray-300">
                Our team of compliance experts works with you to develop tailored strategies that address your specific regulatory requirements, business objectives, and risk tolerance, helping you achieve and maintain compliance efficiently.
              </p>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Our Compliance Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Compliance Assessment</h4>
                    <p className="text-gray-400">
                      Comprehensive evaluation of your current compliance posture against relevant regulations and industry standards.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Compliance Program Development</h4>
                    <p className="text-gray-400">
                      Creation of tailored compliance programs that align with your business objectives and regulatory requirements.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Compliance Audits & Preparation</h4>
                    <p className="text-gray-400">
                      Internal audits and preparation for official certification audits to ensure you meet compliance requirements.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Policy & Procedure Development</h4>
                    <p className="text-gray-400">
                      Development of comprehensive policies, procedures, and controls that support compliance efforts and security goals.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Risk Management</h4>
                    <p className="text-gray-400">
                      Identification, assessment, and mitigation of compliance and security risks to protect your organization.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Compliance Training</h4>
                    <p className="text-gray-400">
                      Customized training programs to educate employees on compliance requirements and security best practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Regulations Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white mb-6">Regulations We Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regulations.map((regulation) => (
                    <div key={regulation.id} className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                      <h4 className="text-lg font-bold text-white mb-2">{regulation.name}</h4>
                      <p className="text-gray-400">{regulation.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Benefits of Our Compliance Solutions</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Reduced Compliance Burden</h4>
                        <p className="text-sm text-gray-400">Streamline compliance activities across multiple regulations.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Minimized Risk</h4>
                        <p className="text-sm text-gray-400">Identify and mitigate compliance risks before they lead to issues.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Improved Security Posture</h4>
                        <p className="text-sm text-gray-400">Enhance security controls while meeting compliance requirements.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Cost Efficiency</h4>
                        <p className="text-sm text-gray-400">Reduce costs associated with compliance management and potential fines.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Business Advantage</h4>
                        <p className="text-sm text-gray-400">Turn compliance into a competitive advantage and business enabler.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Expert Guidance</h4>
                        <p className="text-sm text-gray-400">Access to compliance specialists with deep industry knowledge.</p>
                      </div>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Request a Compliance Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Methodology */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center text-white mb-12">Our Compliance Methodology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-black p-6 rounded-lg border border-gray-800 relative">
              <div className="absolute -top-4 -left-4 bg-emerald-500 h-8 w-8 rounded-full flex items-center justify-center text-black font-bold">1</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Assessment</h3>
              <p className="text-gray-400">
                Evaluate your current compliance status and identify gaps against applicable regulations and standards.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 relative">
              <div className="absolute -top-4 -left-4 bg-emerald-500 h-8 w-8 rounded-full flex items-center justify-center text-black font-bold">2</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Planning</h3>
              <p className="text-gray-400">
                Develop a tailored roadmap with prioritized actions to address compliance gaps and establish necessary controls.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 relative">
              <div className="absolute -top-4 -left-4 bg-emerald-500 h-8 w-8 rounded-full flex items-center justify-center text-black font-bold">3</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Implementation</h3>
              <p className="text-gray-400">
                Deploy policies, procedures, and technical controls required to achieve and maintain compliance requirements.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 relative">
              <div className="absolute -top-4 -left-4 bg-emerald-500 h-8 w-8 rounded-full flex items-center justify-center text-black font-bold">4</div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Monitoring</h3>
              <p className="text-gray-400">
                Continuously measure, monitor, and validate compliance status to ensure ongoing adherence to requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-white mb-12">Client Success Story</h2>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-black p-8 flex flex-col justify-center md:border-r border-gray-800">
                <div className="text-emerald-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Financial Services Firm</h3>
                <div className="text-emerald-500 font-medium mb-4">Multi-Regulatory Compliance</div>
                <div className="text-gray-300 text-sm">
                  <div className="mb-1"><span className="font-medium">Industry:</span> Financial Services</div>
                  <div className="mb-1"><span className="font-medium">Company Size:</span> 500+ employees</div>
                  <div><span className="font-medium">Solution:</span> Integrated Compliance Program</div>
                </div>
              </div>
              
              <div className="md:col-span-2 p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Challenge</h4>
                  <p className="text-gray-400">
                    A mid-sized financial services firm needed to comply with multiple regulations (PCI DSS, SOX, GDPR) while expanding into new markets. They struggled with siloed compliance efforts, duplicated work, and gaps in their compliance posture.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Solution</h4>
                  <p className="text-gray-400">
                    CyberShield implemented an integrated compliance program that harmonized requirements across regulations, established a unified control framework, and deployed compliance management technology to automate evidence collection and reporting.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Results</h4>
                  <ul className="text-gray-400 list-disc pl-5 space-y-1">
                    <li>40% reduction in compliance management overhead</li>
                    <li>Successfully passed all regulatory audits with minimal findings</li>
                    <li>Reduced time to expand into new markets by addressing compliance requirements proactively</li>
                    <li>Enhanced security posture with integrated controls that served multiple compliance needs</li>
                    <li>Improved visibility into compliance status through centralized dashboard</li>
                  </ul>
                </div>
              </div>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Simplify Your Compliance Journey?</h2>
                <p className="text-gray-300 mb-0">
                  Contact our compliance experts today to discuss how we can help you navigate regulatory requirements and build a strong compliance program.
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