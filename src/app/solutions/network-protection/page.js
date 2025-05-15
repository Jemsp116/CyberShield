import Link from 'next/link';

export const metadata = {
  title: 'Network Protection Solutions | CyberShield Security Solutions',
  description: 'Protect your network infrastructure with our comprehensive network security solutions.',
};

export default function NetworkProtectionPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Network Protection</h1>
            <p className="text-xl text-gray-300">
              Secure your critical network infrastructure against advanced threats with our comprehensive protection solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="section-heading text-white mb-6">Defending Your Network Perimeter</h2>
              <p className="text-gray-300 mb-6">
                Your network infrastructure is the backbone of your organization's digital operations. As threats become more sophisticated and persistent, traditional perimeter defenses are no longer sufficient to protect against modern cyber attacks.
              </p>
              <p className="text-gray-300 mb-6">
                CyberShield's network protection solutions provide comprehensive security for your entire network ecosystem, from edge devices to internal segments, ensuring that your organization remains protected against both external and internal threats.
              </p>
              <p className="text-gray-300">
                Our layered approach to network security combines advanced technology, expert monitoring, and proactive threat hunting to identify and neutralize threats before they can impact your business.
              </p>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Our Network Protection Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Network Security Assessment</h4>
                    <p className="text-gray-400">
                      Comprehensive evaluation of your network infrastructure to identify vulnerabilities, misconfigurations, and security gaps.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Next-Gen Firewall Management</h4>
                    <p className="text-gray-400">
                      Deployment and management of advanced firewall solutions to protect against sophisticated attacks and control application traffic.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Intrusion Detection & Prevention</h4>
                    <p className="text-gray-400">
                      Real-time monitoring and analysis of network traffic to detect and prevent malicious activities and policy violations.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Network Access Control</h4>
                    <p className="text-gray-400">
                      Enforce security policies for all devices accessing your network, ensuring only authorized and compliant endpoints connect.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">DDoS Protection</h4>
                    <p className="text-gray-400">
                      Advanced mitigation services to detect and neutralize distributed denial-of-service attacks before they impact your operations.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Network Segmentation</h4>
                    <p className="text-gray-400">
                      Design and implementation of secure network architecture that limits lateral movement and contains potential breaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Our Network Security Technologies</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Next-Generation Firewalls</h4>
                        <p className="text-sm text-gray-400">Advanced protection with application awareness and deep packet inspection.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Intrusion Prevention Systems</h4>
                        <p className="text-sm text-gray-400">Real-time monitoring and blocking of malicious activity.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Secure Web Gateways</h4>
                        <p className="text-sm text-gray-400">Protection against web-based threats and data loss.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">SD-WAN Security</h4>
                        <p className="text-sm text-gray-400">Secure and optimized wide area network connectivity.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Zero Trust Network Access</h4>
                        <p className="text-sm text-gray-400">Secure access based on identity, context, and policy compliance.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Network Traffic Analysis</h4>
                        <p className="text-sm text-gray-400">Advanced behavioral analytics to detect anomalous activity.</p>
                      </div>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Request a Network Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Network Security Features */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center text-white mb-12">Modern Network Security Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Trust Architecture</h3>
              <p className="text-gray-400">
                Implement a "never trust, always verify" approach that validates every user and device before granting access to resources, regardless of location.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Behavioral Analytics</h3>
              <p className="text-gray-400">
                Leverage advanced AI and machine learning to detect anomalous network behavior that indicates potential threats or compromised systems.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Micro-Segmentation</h3>
              <p className="text-gray-400">
                Create granular security zones to isolate workloads and limit lateral movement, containing potential breaches and reducing your attack surface.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure Remote Access</h3>
              <p className="text-gray-400">
                Enable secure access to corporate resources for remote workers using encrypted VPN connections, multi-factor authentication, and context-aware access policies.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Continuous Monitoring</h3>
              <p className="text-gray-400">
                Implement 24/7 network monitoring with real-time threat detection and automated response to identify and mitigate security incidents quickly.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Encrypted Communications</h3>
              <p className="text-gray-400">
                Protect sensitive data in transit with robust encryption protocols and secure communication channels across your network infrastructure.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Healthcare Provider</h3>
                <div className="text-emerald-500 font-medium mb-4">Network Modernization</div>
                <div className="text-gray-300 text-sm">
                  <div className="mb-1"><span className="font-medium">Industry:</span> Healthcare</div>
                  <div className="mb-1"><span className="font-medium">Company Size:</span> 1,500+ employees</div>
                  <div><span className="font-medium">Solution:</span> Secure Network Transformation</div>
                </div>
              </div>
              
              <div className="md:col-span-2 p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Challenge</h4>
                  <p className="text-gray-400">
                    A regional healthcare provider with multiple facilities needed to modernize their aging network infrastructure while ensuring HIPAA compliance, protecting patient data, and accommodating the rapid growth of connected medical devices.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Solution</h4>
                  <p className="text-gray-400">
                    CyberShield designed and implemented a comprehensive network security solution featuring micro-segmentation, next-gen firewalls, IoT security controls, and 24/7 monitoring with advanced threat detection capabilities.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Results</h4>
                  <ul className="text-gray-400 list-disc pl-5 space-y-1">
                    <li>85% reduction in security incidents across the network</li>
                    <li>Successfully segmented critical medical systems from general network traffic</li>
                    <li>Implemented secure IoT onboarding for 3,000+ connected medical devices</li>
                    <li>Achieved full compliance with HIPAA security requirements</li>
                    <li>Reduced mean time to detect threats from days to minutes</li>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Strengthen Your Network Defenses?</h2>
                <p className="text-gray-300 mb-0">
                  Contact our network security experts today to schedule a comprehensive assessment and discover how we can help protect your critical infrastructure.
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