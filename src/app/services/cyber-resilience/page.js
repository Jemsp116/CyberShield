import Link from 'next/link';

export const metadata = {
  title: 'Cyber Resilience Services | K-Infotech Global Consulting Services',
  description: 'Our comprehensive cyber resilience services help your organization build robust defenses and quickly recover from security incidents.',
};

export default function CyberResiliencePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <Link href="/services" className="text-emerald-500 flex items-center mb-6 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cyber Resilience Services</h1>
            <p className="text-xl text-gray-300">
              Build robust defenses and ensure business continuity with our comprehensive cyber resilience solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="section-heading text-white mb-6">Service Overview</h2>
              <p className="text-gray-300 mb-6">
                Our Cyber Resilience Services help organizations build robust security frameworks that not only protect against cyber threats but also ensure quick recovery and business continuity when incidents occur. We take a holistic approach to cybersecurity, addressing people, processes, and technology to create a comprehensive security posture.
              </p>
              <p className="text-gray-300 mb-6">
                In today's threat landscape, it's not just about preventing attacks—it's about maintaining operational resilience even when facing sophisticated threats. Our services are designed to help you identify risks, implement appropriate controls, and develop response strategies that minimize the impact of security incidents on your business.
              </p>
              <p className="text-gray-300">
                From risk assessment and management to advanced threat detection and virtual CISO services, we provide the expertise and solutions you need to build a resilient security program that adapts to evolving threats and business requirements.
              </p>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Our Cyber Resilience Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">1</div>
                      <h4 className="text-lg font-bold text-white">Assess</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Identify and evaluate security risks, vulnerabilities, and compliance requirements.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">2</div>
                      <h4 className="text-lg font-bold text-white">Protect</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Implement security controls and safeguards to prevent and mitigate threats.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">3</div>
                      <h4 className="text-lg font-bold text-white">Detect</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Monitor systems and networks to identify security events and potential incidents.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">4</div>
                      <h4 className="text-lg font-bold text-white">Respond</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Take action when security incidents occur to contain and mitigate their impact.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">5</div>
                      <h4 className="text-lg font-bold text-white">Recover</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Restore systems and data to normal operations after an incident.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">6</div>
                      <h4 className="text-lg font-bold text-white">Improve</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Learn from incidents and continuously enhance security measures and processes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Our Cyber Resilience Services</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Risk Assessment and Management</h4>
                        <p className="text-sm text-gray-400">Identify, analyze, and prioritize security risks.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Cloud Security and Disaster Recovery</h4>
                        <p className="text-sm text-gray-400">Secure cloud environments and ensure business continuity.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Data Protection and Backup Solutions</h4>
                        <p className="text-sm text-gray-400">Safeguard critical data and ensure recoverability.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Advanced Threat Detection and Monitoring</h4>
                        <p className="text-sm text-gray-400">Identify and respond to sophisticated cyber threats.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Third-party Risk Management</h4>
                        <p className="text-sm text-gray-400">Assess and manage risks from vendors and partners.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Virtual CISO Services</h4>
                        <p className="text-sm text-gray-400">Expert security leadership without the full-time cost.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">IAM/PAM as a Service</h4>
                        <p className="text-sm text-gray-400">Manage identities and privileged access securely.</p>
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

      {/* What Sets Us Apart */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center text-white mb-12">What Sets Us Apart</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Holistic Approach</h3>
              <p className="text-gray-400">
                We address all aspects of security—people, processes, and technology—to build comprehensive resilience.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Business-Aligned Security</h3>
              <p className="text-gray-400">
                We tailor our services to your specific business objectives, risk tolerance, and industry requirements.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Experienced Team</h3>
              <p className="text-gray-400">
                Our security professionals bring decades of combined experience across various industries and security domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-white mb-12">Benefits of Our Cyber Resilience Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Reduced Business Risk</h3>
              <p className="text-gray-400">
                Identify and address security risks before they impact your business. Our comprehensive approach helps you understand your risk landscape and implement appropriate controls to mitigate potential threats.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Business Continuity</h3>
              <p className="text-gray-400">
                Maintain operations even when facing security incidents. Our disaster recovery and business continuity planning ensures you can quickly recover from disruptions and minimize downtime.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Regulatory Compliance</h3>
              <p className="text-gray-400">
                Meet industry and regulatory requirements for security and data protection. Our services help you navigate complex compliance landscapes and implement controls that satisfy regulatory obligations.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Cost-Effective Security</h3>
              <p className="text-gray-400">
                Optimize your security investments by focusing on the controls that matter most. Our risk-based approach helps you allocate resources efficiently and achieve maximum security value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Build a Resilient Security Program?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how our Cyber Resilience Services can help your organization prepare for, respond to, and recover from security threats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}