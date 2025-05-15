import Link from 'next/link';

export const metadata = {
  title: 'Penetration Testing Services | CyberShield Security Solutions',
  description: 'Our penetration testing services identify vulnerabilities in your systems before attackers can exploit them.',
};

export default function PenetrationTestingPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Penetration Testing</h1>
            <p className="text-xl text-gray-300">
              Identify vulnerabilities in your systems before attackers can exploit them with our expert penetration testing services.
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
                Our penetration testing services simulate real-world attacks on your systems, networks, and applications to identify security weaknesses before malicious actors can exploit them. Our team of experienced ethical hackers uses the latest tools and techniques to thoroughly test your defenses.
              </p>
              <p className="text-gray-300 mb-6">
                Unlike automated vulnerability scanning, our penetration tests involve manual testing by security experts who think like attackers. This approach reveals vulnerabilities that automated tools often miss, including logical flaws, complex attack chains, and business logic vulnerabilities.
              </p>
              <p className="text-gray-300">
                After each test, we provide a comprehensive report detailing discovered vulnerabilities, their potential impact, and specific remediation recommendations to help you strengthen your security posture.
              </p>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Our Penetration Testing Methodology</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">1</div>
                      <h4 className="text-lg font-bold text-white">Planning & Reconnaissance</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Define scope, objectives, and gather intelligence on target systems.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">2</div>
                      <h4 className="text-lg font-bold text-white">Scanning</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Identify live systems, open ports, services, and potential vulnerabilities.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">3</div>
                      <h4 className="text-lg font-bold text-white">Vulnerability Assessment</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Analyze discovered vulnerabilities and determine potential impact.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">4</div>
                      <h4 className="text-lg font-bold text-white">Exploitation</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Attempt to exploit vulnerabilities to determine actual risk and impact.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">5</div>
                      <h4 className="text-lg font-bold text-white">Post-Exploitation</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Determine what an attacker could access after a successful breach.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">6</div>
                      <h4 className="text-lg font-bold text-white">Reporting</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Document findings with detailed remediation recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Our Penetration Testing Services</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Web Application Testing</h4>
                        <p className="text-sm text-gray-400">Identify vulnerabilities in your web apps and APIs.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Network Infrastructure Testing</h4>
                        <p className="text-sm text-gray-400">Assess security of internal and external network infrastructure.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Mobile Application Testing</h4>
                        <p className="text-sm text-gray-400">Test both Android and iOS applications for vulnerabilities.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Cloud Security Assessment</h4>
                        <p className="text-sm text-gray-400">Evaluate security of AWS, Azure, GCP, and other cloud deployments.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Social Engineering</h4>
                        <p className="text-sm text-gray-400">Test employee awareness through simulated phishing and other techniques.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Red Team Exercises</h4>
                        <p className="text-sm text-gray-400">Full-scope simulated attacks to test your defensive capabilities.</p>
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
              <h3 className="text-xl font-bold text-white mb-3">Certified Experts</h3>
              <p className="text-gray-400">
                Our team holds advanced certifications including OSCP, OSCE, GPEN, GXPN, and CEH, with backgrounds in offensive security and threat intelligence.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Actionable Reporting</h3>
              <p className="text-gray-400">
                Our reports provide clear context, business impact, and specific remediation steps, not just generic recommendations or tool output.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Testing Methods</h3>
              <p className="text-gray-400">
                We go beyond automated tools, using custom exploits, deep application logic testing, and sophisticated attack chains to find what others miss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-white mb-12">Benefits of Our Penetration Testing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 h-full">
                <h3 className="text-xl font-bold text-white mb-4">For Your Business</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Avoid costly data breaches and security incidents</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Meet compliance requirements (PCI DSS, HIPAA, SOC 2, ISO 27001)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Protect your brand reputation and customer trust</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Make informed security investment decisions based on actual risk</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 h-full">
                <h3 className="text-xl font-bold text-white mb-4">For Your Security Team</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Validate existing security controls and defenses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Learn from attack simulations to improve detection capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Receive clear roadmaps for security improvements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Gain an attacker's perspective on your environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center text-white mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">How often should we conduct penetration tests?</h3>
              <p className="text-gray-400">
                We recommend annual penetration tests at minimum, with additional testing after significant system changes, infrastructure updates, or new application deployments.
              </p>
            </div>
            
            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">What's the difference between vulnerability scanning and penetration testing?</h3>
              <p className="text-gray-400">
                Vulnerability scanning uses automated tools to identify known vulnerabilities, while penetration testing involves human experts manually testing systems using the same techniques as real attackers.
              </p>
            </div>
            
            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">How long does a typical penetration test take?</h3>
              <p className="text-gray-400">
                Depending on the scope, tests typically take 1-3 weeks. Web applications might take 3-5 days, while a comprehensive enterprise network assessment might take 2-3 weeks.
              </p>
            </div>
            
            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-3">Will penetration testing disrupt our operations?</h3>
              <p className="text-gray-400">
                We take extensive precautions to minimize disruption. Most tests are conducted with minimal to no impact on production systems, and we can schedule more invasive tests during maintenance windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-emerald-900/50 to-gray-900 rounded-lg p-8 md:p-12 border border-emerald-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Test Your Defenses?</h2>
                <p className="text-gray-300 mb-0">
                  Contact our team today to schedule a consultation and discover how our penetration testing services can strengthen your security posture.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Link href="/contact" className="btn-primary py-3 px-6 text-center">
                  Schedule a Consultation
                </Link>
                <Link href="/contact" className="btn-secondary py-3 px-6 text-center">
                  Request Sample Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 