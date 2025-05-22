import Link from 'next/link';

export const metadata = {
  title: 'Digital Forensic Services | K-Infotech Global Consulting Services',
  description: 'Our digital forensic services provide expert investigation and analysis of digital evidence for security incidents and legal proceedings.',
};

export default function DigitalForensicPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Forensic Services</h1>
            <p className="text-xl text-gray-300">
              Expert investigation and analysis of digital evidence to uncover the truth behind security incidents and cyber crimes.
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
                Our Digital Forensic services provide expert investigation and analysis of digital evidence to help organizations uncover the truth behind security incidents, data breaches, and other digital crimes. Using advanced tools and methodologies, our forensic experts collect, preserve, and analyze digital evidence in a legally defensible manner.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you're responding to a security incident, conducting an internal investigation, or preparing for legal proceedings, our forensic services help you understand what happened, how it happened, and who was responsible. We work meticulously to preserve the integrity of evidence while extracting the critical information needed to support your case.
              </p>
              <p className="text-gray-300">
                Our comprehensive approach covers various digital environments, from computers and mobile devices to networks, cloud systems, and databases, ensuring no digital stone is left unturned in the pursuit of truth.
              </p>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Our Digital Forensic Methodology</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">1</div>
                      <h4 className="text-lg font-bold text-white">Preservation</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Secure and preserve digital evidence to maintain its integrity and admissibility.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">2</div>
                      <h4 className="text-lg font-bold text-white">Collection</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Gather digital evidence from various sources using forensically sound methods.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">3</div>
                      <h4 className="text-lg font-bold text-white">Examination</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Process collected data to extract relevant information while maintaining evidence integrity.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">4</div>
                      <h4 className="text-lg font-bold text-white">Analysis</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Analyze the data to reconstruct events, identify patterns, and draw conclusions.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">5</div>
                      <h4 className="text-lg font-bold text-white">Documentation</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Document findings in a clear, comprehensive, and legally defensible manner.</p>
                  </div>
                  
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-900 rounded-full w-10 h-10 flex items-center justify-center text-emerald-500 mr-4">6</div>
                      <h4 className="text-lg font-bold text-white">Presentation</h4>
                    </div>
                    <p className="text-gray-400 pl-14">Present findings in a format suitable for the intended audience, whether technical teams or legal proceedings.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Our Digital Forensic Services</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Computer Forensic</h4>
                        <p className="text-sm text-gray-400">Recover and analyze data from computers and storage devices.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Network Forensic</h4>
                        <p className="text-sm text-gray-400">Analyze network traffic and logs to trace attack paths and methods.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Email Forensic</h4>
                        <p className="text-sm text-gray-400">Investigate email-based threats and communication evidence.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Mobile Forensic</h4>
                        <p className="text-sm text-gray-400">Extract and analyze data from smartphones and tablets.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Cloud Forensic</h4>
                        <p className="text-sm text-gray-400">Investigate incidents in cloud environments and services.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Database Forensic</h4>
                        <p className="text-sm text-gray-400">Analyze database activities and recover manipulated data.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Memory Forensic</h4>
                        <p className="text-sm text-gray-400">Capture and analyze volatile memory to detect advanced threats.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Social Media Forensic</h4>
                        <p className="text-sm text-gray-400">Investigate social media activities and communications.</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Certified Forensic Experts</h3>
              <p className="text-gray-400">
                Our team includes professionals with advanced certifications in digital forensics and years of experience in investigation.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Court-Admissible Methodology</h3>
              <p className="text-gray-400">
                We follow strict chain-of-custody procedures and forensically sound methodologies that stand up to legal scrutiny.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Forensic Tools</h3>
              <p className="text-gray-400">
                We utilize state-of-the-art forensic software and hardware to recover and analyze digital evidence effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-white mb-12">Benefits of Our Digital Forensic Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Uncover the Truth</h3>
              <p className="text-gray-400">
                Determine what happened during a security incident or data breach with detailed forensic analysis. Our experts can reconstruct events, identify attack vectors, and determine the extent of compromise.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Legal Support</h3>
              <p className="text-gray-400">
                Obtain legally defensible evidence for internal investigations or legal proceedings. Our forensic reports are prepared to withstand scrutiny in legal contexts, providing you with reliable evidence.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Data Recovery</h3>
              <p className="text-gray-400">
                Recover lost, deleted, or damaged data from various digital sources. Our forensic techniques can often retrieve data that seems permanently lost, helping you recover valuable information.
              </p>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Improved Security</h3>
              <p className="text-gray-400">
                Learn from incidents to strengthen your security posture. Our forensic analysis provides insights into vulnerabilities and attack methods, helping you implement more effective security controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need Expert Digital Forensic Services?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how our digital forensic experts can help you investigate incidents, recover data, and provide legally defensible evidence.
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