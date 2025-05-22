import Link from 'next/link';

export const metadata = {
  title: 'Managed SOC as a Service | K-Infotech Global Consulting Services',
  description: 'Our Managed SOC services provide 24/7 threat monitoring, detection, and response to protect your organization from cyber threats.',
};

export default function ManagedSOCPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Managed SOC as a Service</h1>
            <p className="text-xl text-gray-300">
              Comprehensive 24/7 security monitoring and threat detection to protect your organization's digital assets.
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
                Our Managed Security Operations Center (SOC) service provides round-the-clock monitoring, detection, and response to security threats targeting your organization. We combine advanced technology, expert analysts, and proven processes to deliver comprehensive security monitoring that helps you stay ahead of evolving cyber threats.
              </p>
              <p className="text-gray-300 mb-6">
                With our SOC as a Service, you gain access to enterprise-grade security operations without the significant investment in infrastructure, technology, and specialized personnel. Our team becomes an extension of your security team, providing continuous vigilance and rapid response to potential security incidents.
              </p>
              <p className="text-gray-300">
                We leverage the latest in security information and event management (SIEM) technology, threat intelligence, and advanced analytics to detect threats early and respond effectively, minimizing the impact of security incidents on your business.
              </p>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Key Components of Our Managed SOC Service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">1</div>
                      <h4 className="text-lg font-bold text-white">24/7 Monitoring</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Continuous monitoring of your network, systems, and applications for suspicious activities and security events.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">2</div>
                      <h4 className="text-lg font-bold text-white">Threat Detection</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Advanced analytics and correlation to identify potential security threats and anomalous behavior.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">3</div>
                      <h4 className="text-lg font-bold text-white">Incident Response</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Rapid response to security incidents with containment, investigation, and remediation guidance.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">4</div>
                      <h4 className="text-lg font-bold text-white">Log Management</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Collection, storage, and analysis of security logs from across your IT environment.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">5</div>
                      <h4 className="text-lg font-bold text-white">Threat Intelligence</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Integration of the latest threat intelligence to identify emerging threats and attack patterns.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">6</div>
                      <h4 className="text-lg font-bold text-white">Reporting</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Regular security reports with insights into your security posture and recommendations for improvement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Our Managed SOC Services</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">24/7 Threat Monitoring and Detection</h4>
                        <p className="text-sm text-gray-400">Continuous monitoring of your environment for security threats.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">SOC Deployment and Monitoring</h4>
                        <p className="text-sm text-gray-400">Setup and management of security operations infrastructure.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Incident Response and Mitigation</h4>
                        <p className="text-sm text-gray-400">Rapid response to contain and remediate security incidents.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Log Management and Analysis</h4>
                        <p className="text-sm text-gray-400">Collection and analysis of security logs for threat detection.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">MDR, EDR, XDR, SOAR</h4>
                        <p className="text-sm text-gray-400">Advanced detection and response technologies for comprehensive protection.</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Security Analysts</h3>
              <p className="text-gray-400">
                Our team consists of certified security professionals with extensive experience in threat detection and incident response.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Technology Stack</h3>
              <p className="text-gray-400">
                We leverage cutting-edge SIEM, EDR, and SOAR technologies to provide comprehensive threat detection and response capabilities.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Customized Approach</h3>
              <p className="text-gray-400">
                We tailor our SOC services to your specific business needs, industry requirements, and existing security infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-white mb-12">Benefits of Our Managed SOC Service</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Cost-Effective Security</h3>
              <p className="text-gray-400">
                Gain access to enterprise-grade security operations at a fraction of the cost of building and staffing your own SOC. Eliminate capital expenditures on infrastructure and technology while reducing operational costs.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">24/7 Coverage</h3>
              <p className="text-gray-400">
                Ensure continuous monitoring of your environment without the challenges of staffing multiple shifts. Our global team provides round-the-clock vigilance, ensuring threats are detected and addressed at any time.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Faster Threat Detection</h3>
              <p className="text-gray-400">
                Leverage our advanced detection capabilities to identify threats early in the attack lifecycle. Our combination of technology and human expertise enables us to detect sophisticated threats that might evade automated systems.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Improved Compliance</h3>
              <p className="text-gray-400">
                Meet regulatory requirements for security monitoring and incident response. Our services help you demonstrate due diligence in protecting sensitive data and systems, with documentation to support compliance audits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Strengthen Your Security Posture?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how our Managed SOC services can help protect your organization from evolving cyber threats.
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