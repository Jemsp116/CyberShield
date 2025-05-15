import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Security Solutions | CyberShield Security Solutions',
  description: 'Comprehensive enterprise security solutions to protect your organization from advanced threats and targeted attacks.',
};

export default function EnterpriseSecurity() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Security</h1>
            <p className="text-xl text-gray-300">
              Protect your organization's critical assets and infrastructure with our comprehensive enterprise security solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="section-heading text-white mb-6">Comprehensive Enterprise Protection</h2>
              <p className="text-gray-300 mb-6">
                Modern enterprises face complex security challenges, from advanced persistent threats to insider risks. At CyberShield, we provide end-to-end security solutions designed to protect your critical assets, sensitive data, and business operations from sophisticated threats and targeted attacks.
              </p>
              <p className="text-gray-300 mb-6">
                Our enterprise security approach combines cutting-edge technology, proven methodologies, and expert human analysis to create a robust security posture that adapts to your organization's unique requirements and evolving threat landscape.
              </p>
              <p className="text-gray-300">
                We work with your team to implement security solutions that protect your business without hindering productivity, ensuring that security becomes an enabler for your organization rather than a barrier.
              </p>

              <div className="mt-12 space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Key Components of Our Enterprise Security Solutions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                      <div className="text-emerald-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">Identity & Access Management</h4>
                      <p className="text-gray-400">
                        Implement robust authentication, authorization, and privileged access controls to ensure the right people have the right access to the right resources.
                      </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                      <div className="text-emerald-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">Advanced Threat Protection</h4>
                      <p className="text-gray-400">
                        Detect and respond to sophisticated threats with next-gen endpoint protection, network monitoring, and behavioral analytics.
                      </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                      <div className="text-emerald-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">Data Protection</h4>
                      <p className="text-gray-400">
                        Safeguard sensitive information with data classification, encryption, loss prevention, and rights management solutions.
                      </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                      <div className="text-emerald-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">Security Monitoring & Analytics</h4>
                      <p className="text-gray-400">
                        Maintain visibility across your environment with integrated security information and event management (SIEM) and advanced analytics.
                      </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                      <div className="text-emerald-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">Incident Response</h4>
                      <p className="text-gray-400">
                        Prepare for, detect, and quickly respond to security incidents with tailored response plans and 24/7 support.
                      </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                      <div className="text-emerald-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">Security Architecture</h4>
                      <p className="text-gray-400">
                        Design and implement secure architectures that protect your critical assets while enabling business agility and innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Our Enterprise Security Services</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Security Program Development</h4>
                        <p className="text-sm text-gray-400">Build a comprehensive security program aligned with your business objectives.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Security Architecture Review</h4>
                        <p className="text-sm text-gray-400">Evaluate and strengthen your organization's security architecture.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Managed Security Services</h4>
                        <p className="text-sm text-gray-400">24/7 monitoring, detection, and response to security threats.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Security Technology Implementation</h4>
                        <p className="text-sm text-gray-400">Deployment and integration of enterprise security solutions.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Threat Intelligence</h4>
                        <p className="text-sm text-gray-400">Proactive intelligence about emerging threats targeting your industry.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Security Awareness Training</h4>
                        <p className="text-sm text-gray-400">Educate employees on security best practices and threat recognition.</p>
                      </div>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Request a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center text-white mb-12">Industry-Specific Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Financial Services</h3>
              <p className="text-gray-400 mb-4">
                Protect sensitive financial data, ensure regulatory compliance, and safeguard digital banking platforms against sophisticated attacks.
              </p>
              <Link href="/contact" className="text-emerald-500 hover:text-emerald-400">
                Learn more →
              </Link>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Healthcare</h3>
              <p className="text-gray-400 mb-4">
                Secure patient data, protect connected medical devices, and maintain HIPAA compliance while enabling digital healthcare innovation.
              </p>
              <Link href="/contact" className="text-emerald-500 hover:text-emerald-400">
                Learn more →
              </Link>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
              <p className="text-gray-400 mb-4">
                Protect industrial control systems, secure intellectual property, and ensure operational technology security for modern manufacturing.
              </p>
              <Link href="/contact" className="text-emerald-500 hover:text-emerald-400">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-white mb-12">Success Stories</h2>
          
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-black p-8 flex flex-col justify-center md:border-r border-gray-800">
                <div className="text-emerald-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Global Financial Institution</h3>
                <div className="text-emerald-500 font-medium mb-4">Enterprise Security Transformation</div>
                <div className="text-gray-300 text-sm">
                  <div className="mb-1"><span className="font-medium">Industry:</span> Financial Services</div>
                  <div className="mb-1"><span className="font-medium">Company Size:</span> 15,000+ employees</div>
                  <div><span className="font-medium">Solution:</span> Security Modernization</div>
                </div>
              </div>
              
              <div className="md:col-span-2 p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Challenge</h4>
                  <p className="text-gray-400">
                    A global financial institution with operations in 12 countries faced growing security challenges with their legacy systems, regulatory compliance requirements, and an increasingly sophisticated threat landscape targeting financial services.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Solution</h4>
                  <p className="text-gray-400">
                    CyberShield designed and implemented a comprehensive enterprise security transformation program, including a Zero Trust architecture, advanced threat detection and response capabilities, and a unified security operations center with integrated threat intelligence.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Results</h4>
                  <ul className="text-gray-400 list-disc pl-5 space-y-1">
                    <li>75% reduction in mean time to detect security incidents</li>
                    <li>60% reduction in false positive security alerts</li>
                    <li>Successful compliance with financial regulations across all jurisdictions</li>
                    <li>Enhanced visibility across cloud and on-premises environments</li>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Transform Your Security Posture?</h2>
                <p className="text-gray-300 mb-0">
                  Contact our enterprise security experts today to discuss how we can help protect your organization from evolving threats.
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