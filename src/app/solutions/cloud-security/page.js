import Link from 'next/link';

export const metadata = {
  title: 'Cloud Security Solutions | CyberShield Security Solutions',
  description: 'Secure your cloud environment with our comprehensive cloud security solutions protecting your data and applications.',
};

export default function CloudSecurityPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Security</h1>
            <p className="text-xl text-gray-300">
              Comprehensive security solutions for your cloud infrastructure, applications, and data across all major cloud platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="section-heading text-white mb-6">Securing Your Cloud Journey</h2>
              <p className="text-gray-300 mb-6">
                Cloud adoption continues to accelerate, bringing unparalleled agility, scalability, and innovation opportunities. However, it also introduces new security challenges and shared responsibility models that require specialized expertise to navigate effectively.
              </p>
              <p className="text-gray-300 mb-6">
                CyberShield's cloud security solutions help organizations securely leverage cloud technologies while protecting sensitive data, ensuring compliance, and maintaining visibility across complex multi-cloud environments.
              </p>
              <p className="text-gray-300">
                Our approach focuses on implementing security that accelerates cloud adoption rather than hindering it, enabling your organization to innovate with confidence in any cloud environment.
              </p>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">Our Cloud Security Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M9 20h6M6 8c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V8zm10-6H8a2 2 0 00-2 2m12 0a2 2 0 00-2-2" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Cloud Security Assessment</h4>
                    <p className="text-gray-400">
                      Comprehensive evaluation of your cloud environment to identify security gaps, misconfigurations, and compliance issues.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Cloud Architecture Security</h4>
                    <p className="text-gray-400">
                      Design and implementation of secure cloud architectures following security-by-design principles and industry best practices.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Cloud Configuration Management</h4>
                    <p className="text-gray-400">
                      Implementation of automated cloud configuration monitoring and remediation to prevent security misconfigurations.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Cloud Data Protection</h4>
                    <p className="text-gray-400">
                      Comprehensive data security solutions including encryption, access controls, and data loss prevention for cloud environments.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">Cloud Security Monitoring</h4>
                    <p className="text-gray-400">
                      24/7 monitoring of cloud environments for security threats, anomalies, and compliance violations with rapid response capabilities.
                    </p>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                    <div className="text-emerald-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">DevSecOps Integration</h4>
                    <p className="text-gray-400">
                      Implementing security throughout the CI/CD pipeline to enable secure, rapid application development in cloud environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Cloud Platforms We Secure</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Amazon Web Services (AWS)</h4>
                        <p className="text-sm text-gray-400">Secure your AWS infrastructure, services, and data.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Microsoft Azure</h4>
                        <p className="text-sm text-gray-400">Comprehensive security for your Azure cloud environment.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Google Cloud Platform (GCP)</h4>
                        <p className="text-sm text-gray-400">Protect your GCP workloads and services.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Multi-Cloud Environments</h4>
                        <p className="text-sm text-gray-400">Unified security across heterogeneous cloud platforms.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Hybrid Cloud Deployments</h4>
                        <p className="text-sm text-gray-400">Seamless security between on-premises and cloud resources.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Containerized Environments</h4>
                        <p className="text-sm text-gray-400">Security for Kubernetes, Docker, and container orchestration.</p>
                      </div>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary w-full text-center block">
                    Request a Cloud Security Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center text-white mb-12">Key Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enhanced Security Posture</h3>
              <p className="text-gray-400">
                Identify and address cloud-specific security risks while maintaining comprehensive protection against traditional threats in your cloud environments.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accelerated Cloud Adoption</h3>
              <p className="text-gray-400">
                Implement security controls that enable rather than hinder cloud innovation, allowing for faster, more secure deployments and migrations.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Compliance Assurance</h3>
              <p className="text-gray-400">
                Meet regulatory requirements with cloud-specific compliance controls and continuous monitoring for compliance deviations.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Improved Visibility</h3>
              <p className="text-gray-400">
                Gain comprehensive visibility across cloud environments with centralized monitoring, logging, and security analytics.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cost Optimization</h3>
              <p className="text-gray-400">
                Eliminate unnecessary security spend with right-sized security controls while preventing costly security incidents and data breaches.
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800">
              <div className="text-emerald-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Security</h3>
              <p className="text-gray-400">
                Implement security that scales with your cloud environment, adapting to changing needs and growing with your business.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">E-Commerce Platform</h3>
                <div className="text-emerald-500 font-medium mb-4">Secure Cloud Migration</div>
                <div className="text-gray-300 text-sm">
                  <div className="mb-1"><span className="font-medium">Industry:</span> Retail</div>
                  <div className="mb-1"><span className="font-medium">Company Size:</span> 200+ employees</div>
                  <div><span className="font-medium">Solution:</span> Cloud Security Framework</div>
                </div>
              </div>
              
              <div className="md:col-span-2 p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Challenge</h4>
                  <p className="text-gray-400">
                    A rapidly growing e-commerce company needed to migrate its platform from legacy infrastructure to a multi-cloud environment while ensuring PCI DSS compliance, protecting customer data, and maintaining operational efficiency during the transition.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">Solution</h4>
                  <p className="text-gray-400">
                    CyberShield implemented a comprehensive cloud security framework, including secure-by-design cloud architecture, automated security monitoring, cloud-native identity management, data encryption, and CI/CD pipeline security integration.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Results</h4>
                  <ul className="text-gray-400 list-disc pl-5 space-y-1">
                    <li>Successful migration to cloud with zero security incidents</li>
                    <li>40% reduction in time-to-deployment for new features</li>
                    <li>PCI DSS compliance maintained throughout the transition</li>
                    <li>95% of security controls automated, reducing manual overhead</li>
                    <li>Enhanced ability to scale securely during peak shopping seasons</li>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Secure Your Cloud?</h2>
                <p className="text-gray-300 mb-0">
                  Contact our cloud security experts today to discuss how we can help protect your cloud infrastructure, applications, and data.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Link href="/contact" className="btn-primary py-3 px-6 text-center">
                  Schedule a Consultation
                </Link>
                <Link href="/services" className="btn-secondary py-3 px-6 text-center">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 