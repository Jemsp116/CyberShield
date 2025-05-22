"use client"

import Link from 'next/link';
import { useState } from 'react';
import ServiceModal from '@/components/ui/ServiceModal';

export default function PenetrationTestingPage() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Service modal content
  const serviceModals = {
    redTeaming: {
      title: "Red Teaming",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Red Team exercises simulate sophisticated, real-world attacks to test your organization's detection and response capabilities.
            </p>
            <p>
              Unlike traditional penetration testing, Red Team exercises are more comprehensive and focus on testing your entire security posture, including technology, people, and processes. Our expert team uses the same tactics, techniques, and procedures (TTPs) as real threat actors to provide a realistic assessment of your security defenses.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Advanced Persistent Threat Simulation</h4>
              <p>Simulation of sophisticated threat actors targeting your organization with specific objectives.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Multi-Vector Attack Approach</h4>
              <p>Combination of technical, physical, and social engineering techniques to identify all potential entry points.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Stealth Operations</h4>
              <p>Focus on evading detection to test your monitoring and incident response capabilities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Objective-Based Testing</h4>
              <p>Targeting specific high-value assets or data to demonstrate real business impact.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Benefits</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Realistic assessment of your security posture against sophisticated threats</li>
            <li>Identification of complex attack paths that might be missed in standard testing</li>
            <li>Validation of your detection and response capabilities</li>
            <li>Improved understanding of how attackers might target your specific organization</li>
            <li>Actionable recommendations to enhance your security defenses</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              Our Red Team exercises follow a structured methodology designed to provide maximum value while minimizing business disruption.
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Initial planning and objective setting</li>
              <li>Reconnaissance and intelligence gathering</li>
              <li>Vulnerability identification and exploitation planning</li>
              <li>Controlled execution of attack scenarios</li>
              <li>Post-exercise analysis and reporting</li>
              <li>Debriefing and recommendations</li>
            </ol>
          </div>
        </div>
      )
    },
    webApp: {
      title: "Web Application Penetration Testing",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4 font-bold">
              Strengthening Your Digital Security
            </p>

            <p className="mb-4">
              As businesses increasingly rely on web applications to serve their customers, the security of these applications becomes critical. Cyberattacks targeting vulnerabilities in web applications are on the rise, with attackers seeking to exploit weaknesses that could lead to data breaches, service interruptions, or other security incidents. Web Application Penetration Testing (Web App Pen Testing) is a proactive security measure that helps identify and fix vulnerabilities before malicious hackers can exploit them.
            </p>
            <p>
              Our expert penetration testing services ensure that your web applications are secure, resilient, and compliant with industry standards.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">What is Web Application Penetration Testing?</h3>
          <p className="mb-6">
            Web Application Penetration Testing is a simulated cyberattack conducted by security professionals to evaluate the security of a web application. The goal is to identify and exploit vulnerabilities in the application's code, configurations, and infrastructure that could be exploited by malicious attackers. Through this process, we help you identify weaknesses and provide actionable recommendations for improving security.
          </p>
          <p className="mb-6">
            Penetration testing mimics the tactics, techniques, and procedures (TTPs) used by real-world attackers, ensuring that you're prepared to defend against actual threats.
          </p>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Why is Web Application Penetration Testing Important?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Identify Vulnerabilities</h4>
              <p>Penetration testing helps find vulnerabilities like SQL injection, cross-site scripting (XSS), and broken authentication before attackers can exploit them.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Mitigate Security Risks</h4>
              <p>Reduces the risk of data breaches, financial loss, and reputational damage.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Improve Compliance</h4>
              <p>Assists in meeting standards like PCI DSS, HIPAA, and other regulatory requirements.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Understand Your Security Posture</h4>
              <p>Offers insight into the effectiveness of your current security measures.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Protect Sensitive Data</h4>
              <p>Ensures secure handling of customer and business-critical data.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">How Web Application Penetration Testing Works</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Information Gathering (Reconnaissance)</h4>
              <p>Understanding the architecture, technologies, and publicly accessible components.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Vulnerability Assessment</h4>
              <p>Identification of vulnerabilities such as SQL Injection, Cross-Site Scripting (XSS), CSRF, Broken Authentication, Insecure Direct Object References (IDOR), Misconfigurations, and Session flaws.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Exploitation</h4>
              <p>Attempting to exploit discovered vulnerabilities to assess their real-world impact.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Post-Exploitation & Lateral Movement</h4>
              <p>Simulating an attacker's movement inside your environment after the initial breach.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Reporting & Recommendations</h4>
              <p>Detailed documentation of findings, risks, exploitation paths, and fixes.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Remediation & Re-Testing</h4>
              <p>Ensuring vulnerabilities have been effectively resolved and testing for regressions.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Benefits of Web Application Penetration Testing</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><span className="font-bold text-white">Proactive Security:</span> Identify threats before attackers do.</li>
            <li><span className="font-bold text-white">Data Protection:</span> Secure sensitive and customer data.</li>
            <li><span className="font-bold text-white">Customer Trust:</span> Show your commitment to cybersecurity.</li>
            <li><span className="font-bold text-white">Compliance:</span> Meet industry regulations.</li>
            <li><span className="font-bold text-white">Comprehensive Insight:</span> Assess third-party and integration risks.</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Experienced Security Professionals</li>
              <li>Comprehensive Testing from UI to backend</li>
              <li>Actionable Results you can use immediately</li>
              <li>Confidential and Ethical methodology</li>
              <li>Ongoing Support after testing and remediation</li>
            </ul>
            <p className="mb-6">
              Your web application is one of the most valuable assets in your organization. Protect it from vulnerabilities and cyber threats with Web Application Penetration Testing. We help you identify security weaknesses and implement robust defenses to keep your business safe from malicious attackers.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started with Web App Penetration Testing
              </Link>
            </div>
          </div>
        </div>
      )
    },
    network: {
      title: "Network Penetration Testing",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Network Penetration Testing service identifies vulnerabilities in your network infrastructure before attackers can exploit them.
            </p>
            <p>
              Network infrastructure forms the backbone of your IT environment, and vulnerabilities in this area can provide attackers with access to critical systems and data. Our comprehensive network penetration testing helps identify and address security weaknesses in your network devices, servers, and supporting infrastructure.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">What We Test</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">External Network Testing</h4>
              <p>Assessment of internet-facing systems and perimeter defenses from an external attacker's perspective.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Internal Network Testing</h4>
              <p>Evaluation of internal network security to identify lateral movement opportunities and privilege escalation paths.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Wireless Network Security</h4>
              <p>Assessment of wireless network configurations, encryption, and access controls.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Network Device Security</h4>
              <p>Evaluation of routers, switches, firewalls, and other network devices for misconfigurations and vulnerabilities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">VPN and Remote Access</h4>
              <p>Testing of VPN and remote access solutions for security weaknesses that could allow unauthorized access.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Segmentation Testing</h4>
              <p>Verification of network segmentation effectiveness to contain potential breaches.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Our Methodology</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Network discovery and enumeration</li>
            <li>Vulnerability scanning and analysis</li>
            <li>Manual verification and exploitation</li>
            <li>Privilege escalation testing</li>
            <li>Lateral movement assessment</li>
            <li>Data exfiltration testing</li>
            <li>Detailed reporting with remediation guidance</li>
          </ol>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Benefits of Our Network Penetration Testing</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comprehensive assessment of network security posture</li>
              <li>Identification of complex attack paths and chained vulnerabilities</li>
              <li>Validation of existing security controls and defenses</li>
              <li>Prioritized remediation guidance based on risk and business impact</li>
              <li>Support for compliance requirements (PCI DSS, HIPAA, etc.)</li>
              <li>Minimal disruption to network operations</li>
            </ul>
          </div>
        </div>
      )
    },
    mobile: {
      title: "Mobile App Penetration Testing",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Mobile Application Penetration Testing service identifies security vulnerabilities in your iOS and Android applications.
            </p>
            <p>
              Mobile applications often handle sensitive user data and provide access to backend systems, making them attractive targets for attackers. Our comprehensive testing methodology addresses the unique security challenges of mobile applications across both iOS and Android platforms.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">What We Test For</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Insecure Data Storage</h4>
              <p>Assessment of how sensitive data is stored on the device and potential exposure risks.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Client-Side Injection</h4>
              <p>Testing for SQL injection, XSS, and other injection vulnerabilities in the mobile application.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Authentication and Authorization</h4>
              <p>Evaluation of authentication mechanisms and access control implementations.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Insecure Communication</h4>
              <p>Analysis of network communication security, including encryption and certificate validation.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Code Quality and Reverse Engineering</h4>
              <p>Assessment of code obfuscation and protection against reverse engineering attempts.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">API Security</h4>
              <p>Testing of backend API endpoints used by the mobile application for security vulnerabilities.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Our Testing Methodology</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Static application security testing (SAST)</li>
            <li>Dynamic application security testing (DAST)</li>
            <li>Local data storage analysis</li>
            <li>Network communication interception and analysis</li>
            <li>Authentication and session management testing</li>
            <li>Client-side injection testing</li>
            <li>Backend API security assessment</li>
            <li>Detailed reporting with remediation guidance</li>
          </ol>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Why Choose Our Mobile App Testing</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Expertise in both iOS and Android security</li>
              <li>Coverage of OWASP Mobile Top 10 vulnerabilities</li>
              <li>Testing of both the mobile application and its backend services</li>
              <li>Platform-specific security best practices</li>
              <li>Clear, actionable remediation guidance</li>
              <li>Support for native, hybrid, and cross-platform applications</li>
            </ul>
          </div>
        </div>
      )
    },
    cloud: {
      title: "Cloud Penetration Service",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Cloud Penetration Testing service identifies security vulnerabilities in your cloud environments, including AWS, Azure, and Google Cloud.
            </p>
            <p>
              Cloud environments introduce unique security challenges due to their complex configurations, shared responsibility models, and rapid deployment capabilities. Our specialized cloud penetration testing helps identify misconfigurations, insecure defaults, and other vulnerabilities specific to cloud environments.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">What We Test</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Identity and Access Management</h4>
              <p>Assessment of IAM configurations, roles, permissions, and privilege escalation paths.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Storage Security</h4>
              <p>Evaluation of cloud storage services (S3, Blob Storage, etc.) for misconfigurations and access control issues.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Network Security</h4>
              <p>Testing of virtual networks, security groups, and network access controls.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Compute Service Security</h4>
              <p>Assessment of virtual machines, containers, and serverless functions for vulnerabilities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Logging and Monitoring</h4>
              <p>Evaluation of logging configurations, alerting mechanisms, and detection capabilities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">DevOps Pipeline Security</h4>
              <p>Assessment of CI/CD pipelines and infrastructure-as-code templates for security issues.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Our Methodology</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Cloud environment discovery and mapping</li>
            <li>Configuration review and analysis</li>
            <li>Automated scanning with cloud-specific tools</li>
            <li>Manual testing and exploitation</li>
            <li>Privilege escalation testing</li>
            <li>Data exposure assessment</li>
            <li>Detailed reporting with remediation guidance</li>
          </ol>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Benefits of Our Cloud Penetration Testing</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Specialized expertise in major cloud platforms (AWS, Azure, GCP)</li>
              <li>Identification of cloud-specific misconfigurations and vulnerabilities</li>
              <li>Assessment against cloud security best practices and benchmarks</li>
              <li>Validation of cloud security controls and defenses</li>
              <li>Prioritized remediation guidance based on risk and business impact</li>
              <li>Support for compliance with cloud security frameworks</li>
            </ul>
          </div>
        </div>
      )
    }
  };
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
                <h3 className="text-xl font-bold text-white mb-2">Our Penetration Testing Services</h3>
                <p className="text-xs text-gray-500 mb-4 italic">Click on services for detailed information</p>
                <ul className="space-y-4">
                  <li>
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('redTeaming')}
                    >
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Red Team Exercises</h4>
                        <p className="text-sm text-gray-400">Full-scope simulated attacks to test your defensive capabilities.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('webApp')}
                    >
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Web Application Penetration Testing</h4>
                        <p className="text-sm text-gray-400">Strengthen your digital security by identifying and fixing web app vulnerabilities.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('network')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('mobile')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('cloud')}
                    >
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
                    <div className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors">
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">Social Engineering</h4>
                        <p className="text-sm text-gray-400">Test employee awareness through simulated phishing and other techniques.</p>
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
                    <span className="text-gray-300">Proactive Security: Identify threats before attackers can exploit them</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Data Protection: Secure sensitive customer and business data</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Customer Trust: Demonstrate your commitment to cybersecurity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Compliance: Meet regulatory requirements (PCI DSS, HIPAA, SOC 2, ISO 27001)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Comprehensive Insight: Assess third-party and integration risks</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Our Web App Testing Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Comprehensive testing from UI to backend systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Identification of SQL injection, XSS, CSRF, and authentication vulnerabilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Detailed exploitation paths and actionable remediation steps</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Post-remediation testing to verify security improvements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Ongoing support from experienced security professionals</span>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Protect Your Web Applications Today</h2>
                <p className="text-gray-300 mb-0">
                  Your web application is one of the most valuable assets in your organization. Contact us today to learn how our Web Application Penetration Testing services can help safeguard your digital assets from vulnerabilities and cyber threats.
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

      {/* Service Modals */}
      {activeModal === 'redTeaming' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.redTeaming.title}
          content={serviceModals.redTeaming.content}
        />
      )}
      
      {activeModal === 'webApp' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.webApp.title}
          content={serviceModals.webApp.content}
        />
      )}
      
      {activeModal === 'network' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.network.title}
          content={serviceModals.network.content}
        />
      )}
      
      {activeModal === 'mobile' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.mobile.title}
          content={serviceModals.mobile.content}
        />
      )}
      
      {activeModal === 'cloud' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.cloud.title}
          content={serviceModals.cloud.content}
        />
      )}
    </div>
  );
} 