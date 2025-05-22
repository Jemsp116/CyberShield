"use client"

import Link from 'next/link';
import { useState } from 'react';
import ServiceModal from '@/components/ui/ServiceModal';
import { Metadata } from 'next';

export default function ManagedSOCPage() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Service modal content
  const serviceModals = {
    monitoring: {
      title: "24/7 Threat Monitoring and Detection",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our round-the-clock monitoring service uses advanced technologies to detect and alert on potential security threats in real-time, providing continuous protection for your organization's digital assets.
            </p>
            <p>
              In today's rapidly evolving threat landscape, continuous monitoring is essential to identify and respond to security incidents before they can cause significant damage. Our 24/7 Threat Monitoring and Detection service combines cutting-edge technology with expert human analysis to provide comprehensive protection.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Real-time Network and Endpoint Monitoring</h4>
              <p>Continuous surveillance of all network traffic and endpoint activities to detect suspicious behavior and potential threats as they occur.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Behavioral Analysis and Anomaly Detection</h4>
              <p>Advanced algorithms that establish baselines of normal behavior and identify deviations that may indicate security threats.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Continuous Vulnerability Scanning</h4>
              <p>Regular scanning of your environment to identify and prioritize vulnerabilities before they can be exploited by attackers.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Threat Intelligence Integration</h4>
              <p>Incorporation of the latest threat intelligence to identify emerging threats and attack patterns targeting your industry.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Automated Alert Triage and Prioritization</h4>
              <p>Intelligent filtering and prioritization of alerts to focus attention on the most critical threats and reduce alert fatigue.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">24/7 Security Operations Center</h4>
              <p>Staffed by experienced security analysts who provide continuous monitoring and rapid response to security incidents.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Benefits</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Early detection of security threats before they can cause significant damage</li>
            <li>Reduced dwell time of attackers in your environment</li>
            <li>Comprehensive visibility across your entire IT infrastructure</li>
            <li>Minimized risk of data breaches and business disruption</li>
            <li>Support for compliance with regulatory requirements</li>
            <li>Peace of mind knowing your systems are continuously monitored</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              We take a proactive, multi-layered approach to threat monitoring and detection, combining advanced technology with expert human analysis to provide comprehensive protection for your organization.
            </p>
            <p>
              Our team of security experts works around the clock to monitor your environment, investigate alerts, and respond to security incidents. We use a combination of signature-based detection, behavioral analysis, and machine learning to identify both known and unknown threats.
            </p>
          </div>
        </div>
      )
    },
    deployment: {
      title: "SOC Deployment and Monitoring",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Protect your business with 24/7 cybersecurity monitoring through our comprehensive Security Operations Center (SOC) deployment and monitoring services.
            </p>
            <p>
              Cybersecurity threats are more sophisticated than ever, and a single breach can lead to devastating financial and reputational damage. That's why continuous, proactive monitoring is essential for keeping your organization secure. With our SOC Deployment and Monitoring services, we provide round-the-clock protection to ensure your business is safeguarded from evolving cyber threats.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">What is SOC Deployment and Monitoring?</h3>
          <p className="mb-6">
            Security Operations Center (SOC) deployment and monitoring is a comprehensive cybersecurity service designed to detect, respond to, and mitigate security incidents in real-time. By integrating advanced security tools and expert analysts, a SOC monitors your network, systems, and data continuously, ensuring that potential threats are identified and neutralized before they can cause harm.
          </p>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Custom SOC Architecture Design</h4>
              <p>We design a Security Operations Center architecture tailored to your organization's specific needs, size, and industry requirements.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Security Tools Integration</h4>
              <p>Integration and configuration of SIEM, EDR, NDR, and other security tools to provide comprehensive visibility and detection capabilities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">24/7 Expert Monitoring</h4>
              <p>Round-the-clock monitoring by experienced security analysts who can quickly identify and respond to potential threats.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Security Posture Assessment</h4>
              <p>Regular evaluation of your security posture to identify gaps and recommend improvements to strengthen your defenses.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Continuous Improvement</h4>
              <p>Ongoing optimization of your SOC to adapt to evolving threats and improve detection and response capabilities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Compliance Support</h4>
              <p>Assistance with meeting regulatory requirements through comprehensive monitoring, documentation, and reporting.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Benefits of SOC Deployment and Monitoring</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Proactive threat detection to identify and neutralize threats before they impact your business</li>
            <li>Rapid incident response to minimize damage and reduce recovery time</li>
            <li>Comprehensive visibility across your entire IT infrastructure</li>
            <li>Cost-effective security operations without significant investment in infrastructure and personnel</li>
            <li>Access to specialized expertise and advanced security technologies</li>
            <li>Support for compliance with regulatory requirements</li>
            <li>Peace of mind knowing your systems are continuously monitored by security experts</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              We take a tailored approach to SOC deployment and monitoring, designing a solution that meets your specific security needs and business requirements.
            </p>
            <p>
              Our team works closely with you to understand your environment, identify your most critical assets, and develop a comprehensive security monitoring strategy. We then deploy and configure the necessary tools and technologies, establish monitoring processes, and provide ongoing management and optimization of your SOC.
            </p>
          </div>
        </div>
      )
    },
    response: {
      title: "Incident Response and Mitigation",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our expert team provides rapid response to security incidents, minimizing damage and reducing recovery time through effective containment, investigation, and remediation.
            </p>
            <p>
              When a security incident occurs, time is of the essence. Our Incident Response and Mitigation service provides you with immediate access to security experts who can quickly contain the threat, investigate the incident, and help you recover with minimal impact to your business.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">24/7 Incident Response Capability</h4>
              <p>Round-the-clock availability of security experts who can respond immediately to security incidents, regardless of when they occur.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Threat Containment and Eradication</h4>
              <p>Rapid isolation of affected systems to prevent the spread of the threat, followed by complete removal of the threat from your environment.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Forensic Investigation</h4>
              <p>Thorough examination of affected systems to determine the scope and impact of the incident, as well as the entry point and attack methods used.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Root Cause Analysis</h4>
              <p>Identification of the underlying vulnerabilities or weaknesses that allowed the incident to occur, to prevent similar incidents in the future.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Recovery Assistance</h4>
              <p>Support for restoring affected systems and data to normal operation as quickly as possible, minimizing business disruption.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Post-Incident Reporting</h4>
              <p>Comprehensive documentation of the incident, including timeline, impact, actions taken, and recommendations for preventing future incidents.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">The Incident Response Process</h3>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-white mb-1">Preparation</h4>
                <p>We help you develop incident response plans, establish communication protocols, and prepare your team to respond effectively to security incidents.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-white mb-1">Detection and Analysis</h4>
                <p>We identify and analyze security incidents using advanced detection technologies and expert analysis to determine the nature and scope of the threat.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-white mb-1">Containment</h4>
                <p>We quickly isolate affected systems to prevent the spread of the threat and minimize damage to your environment.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-white mb-1">Eradication</h4>
                <p>We completely remove the threat from your environment, including all malware, backdoors, and other artifacts left by the attacker.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">5</div>
              <div>
                <h4 className="font-bold text-white mb-1">Recovery</h4>
                <p>We help you restore affected systems and data to normal operation, ensuring that your business can resume normal activities as quickly as possible.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">6</div>
              <div>
                <h4 className="font-bold text-white mb-1">Lessons Learned</h4>
                <p>We conduct a thorough post-incident review to identify lessons learned and recommend improvements to prevent similar incidents in the future.</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Why Choose Our Incident Response Service</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Experienced team of security experts with proven incident response capabilities</li>
              <li>Rapid response times to minimize damage and reduce recovery time</li>
              <li>Comprehensive approach covering all aspects of incident response</li>
              <li>Advanced tools and technologies for effective threat detection and eradication</li>
              <li>Detailed documentation and reporting to support compliance requirements</li>
              <li>Continuous improvement recommendations to strengthen your security posture</li>
            </ul>
          </div>
        </div>
      )
    },
    logManagement: {
      title: "Log Management and Analysis",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Comprehensive collection, storage, and analysis of security logs from across your IT environment to identify threats and support compliance requirements.
            </p>
            <p>
              Effective log management and analysis is essential for detecting security threats, investigating incidents, and meeting compliance requirements. Our Log Management and Analysis service provides you with a centralized solution for collecting, storing, and analyzing logs from across your IT environment.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Centralized Log Collection</h4>
              <p>Collection of logs from all sources in your environment, including servers, network devices, applications, and security tools, into a central repository.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Log Normalization and Enrichment</h4>
              <p>Standardization of logs from different sources into a common format and enrichment with additional context to improve analysis capabilities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Advanced Correlation and Analytics</h4>
              <p>Sophisticated analysis of logs to identify patterns, anomalies, and potential security threats that might not be apparent from individual log entries.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Long-term Log Retention</h4>
              <p>Secure storage of logs for extended periods to support historical analysis, compliance requirements, and forensic investigations.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Compliance Reporting</h4>
              <p>Generation of reports to demonstrate compliance with regulatory requirements such as PCI DSS, HIPAA, SOX, and GDPR.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Forensic Investigation Support</h4>
              <p>Tools and capabilities to support detailed forensic investigations of security incidents, with the ability to reconstruct events and timelines.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Benefits of Log Management and Analysis</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Enhanced threat detection through comprehensive visibility of activities across your environment</li>
            <li>Faster incident response with immediate access to relevant log data</li>
            <li>Improved compliance posture with centralized log collection and retention</li>
            <li>Reduced complexity through a unified approach to log management</li>
            <li>Better understanding of security events and trends through advanced analytics</li>
            <li>Support for forensic investigations with detailed historical log data</li>
            <li>Cost savings through efficient log storage and management</li>
          </ul>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Our Approach</h3>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">1</div>
              <div>
                <h4 className="font-bold text-white mb-1">Assessment</h4>
                <p>We assess your current log sources, volumes, and requirements to design an appropriate log management solution.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">2</div>
              <div>
                <h4 className="font-bold text-white mb-1">Implementation</h4>
                <p>We deploy and configure log collection agents, central log repository, and analysis tools to meet your specific needs.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">3</div>
              <div>
                <h4 className="font-bold text-white mb-1">Correlation Rules</h4>
                <p>We develop custom correlation rules and alerts to identify specific threats and anomalies relevant to your environment.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">4</div>
              <div>
                <h4 className="font-bold text-white mb-1">Monitoring and Analysis</h4>
                <p>Our security analysts continuously monitor and analyze logs to identify potential security threats and anomalies.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-4 flex-shrink-0">5</div>
              <div>
                <h4 className="font-bold text-white mb-1">Reporting</h4>
                <p>We provide regular reports on security events, trends, and compliance status to keep you informed of your security posture.</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Why Choose Our Log Management Service</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scalable solution that can grow with your organization</li>
              <li>Advanced analytics capabilities to identify complex threats</li>
              <li>Compliance-ready reporting for various regulatory requirements</li>
              <li>Experienced security analysts who understand log analysis</li>
              <li>Integration with other security tools and services</li>
              <li>Cost-effective approach to comprehensive log management</li>
            </ul>
          </div>
        </div>
      )
    },
    advancedSolutions: {
      title: "MDR, EDR, XDR, SOAR",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Advanced detection and response technologies working together to provide comprehensive protection across your entire IT environment.
            </p>
            <p>
              In today's complex threat landscape, organizations need multiple layers of security to protect against sophisticated attacks. Our integrated approach combines MDR, EDR, XDR, and SOAR technologies to provide comprehensive detection and response capabilities across your entire IT environment.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Understanding the Technologies</h3>
          <div className="space-y-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-3">MDR (Managed Detection and Response)</h4>
              <p className="mb-3">
                MDR combines advanced security technology with human expertise to provide 24/7 threat monitoring, detection, and response services. Our security analysts continuously monitor your environment, investigate alerts, and respond to security incidents on your behalf.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>24/7 monitoring by security experts</li>
                <li>Proactive threat hunting</li>
                <li>Rapid incident response</li>
                <li>Regular security reporting</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-3">EDR (Endpoint Detection and Response)</h4>
              <p className="mb-3">
                EDR solutions focus on protecting endpoints (computers, servers, mobile devices) by monitoring activities, detecting threats, and enabling rapid response to security incidents. Our EDR solution provides visibility into endpoint activities and the ability to quickly contain and remediate threats.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Real-time endpoint monitoring</li>
                <li>Behavioral analysis and anomaly detection</li>
                <li>Automated threat containment</li>
                <li>Forensic investigation capabilities</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-3">XDR (Extended Detection and Response)</h4>
              <p className="mb-3">
                XDR extends beyond endpoints to provide integrated detection and response capabilities across multiple security layers, including endpoints, networks, cloud workloads, and applications. Our XDR solution provides a unified view of threats across your entire IT environment.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Comprehensive visibility across multiple security layers</li>
                <li>Correlation of threats across different sources</li>
                <li>Automated response across the entire environment</li>
                <li>Advanced analytics and machine learning</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-3">SOAR (Security Orchestration, Automation and Response)</h4>
              <p className="mb-3">
                SOAR platforms automate and orchestrate security operations tasks, enabling faster and more efficient response to security incidents. Our SOAR solution integrates with your existing security tools to streamline incident response workflows and reduce manual effort.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Automated incident response workflows</li>
                <li>Integration with multiple security tools</li>
                <li>Standardized response procedures</li>
                <li>Reduced mean time to detect and respond</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Benefits of Our Integrated Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Comprehensive Protection</h4>
              <p>Multi-layered security covering endpoints, networks, cloud, and applications to protect against a wide range of threats.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Faster Detection and Response</h4>
              <p>Reduced time to detect and respond to threats through automation, orchestration, and expert analysis.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Improved Efficiency</h4>
              <p>Streamlined security operations through automation of routine tasks and standardized response procedures.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Advanced Threat Detection</h4>
              <p>Enhanced ability to detect sophisticated threats through correlation of data from multiple sources and advanced analytics.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Reduced Alert Fatigue</h4>
              <p>Intelligent filtering and prioritization of alerts to focus attention on the most critical threats.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Scalable Security</h4>
              <p>Ability to scale security operations to meet the needs of growing organizations without proportional increase in staff.</p>
            </div>
          </div>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Why Choose Our Advanced Security Solutions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Integrated platform approach for comprehensive visibility and control</li>
              <li>Experienced security analysts who understand complex threats</li>
              <li>Customized implementation based on your specific security needs</li>
              <li>Continuous improvement through regular reviews and updates</li>
              <li>Cost-effective approach to advanced security capabilities</li>
              <li>Seamless integration with your existing security infrastructure</li>
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
                <h3 className="text-xl font-bold text-white mb-2">Our Managed SOC Services</h3>
                <p className="text-xs text-gray-500 mb-4 italic">Click on services for detailed information</p>
                <ul className="space-y-4">
                  <li>
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('monitoring')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('deployment')}
                    >
                      <svg className="h-6 w-6 mr-2 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-white">SOC Deployment and Monitoring</h4>
                        <p className="text-sm text-gray-400">Protect your business with 24/7 cybersecurity monitoring and comprehensive SOC services.</p>
                      </div>
                    </div>
                  </li>
                  
                  <li>
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('response')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('logManagement')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('advancedSolutions')}
                    >
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

      {/* SOC Deployment and Monitoring Section */}
      <section className="py-16 bg-gray-900" id="deployment">
        <div className="container-custom">
          <h2 className="section-heading text-white mb-8">SOC Deployment and Monitoring</h2>
          <div className="bg-black p-8 rounded-lg border border-gray-800 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Protect Your Business with 24/7 Cyber Security Monitoring</h3>
            <p className="text-gray-300 mb-6">
              Cybersecurity threats are more sophisticated than ever, and a single breach can lead to devastating financial and reputational damage. That's why continuous, proactive monitoring is essential for keeping your organization secure. With SOC Deployment and Monitoring services, we provide round-the-clock protection to ensure your business is safeguarded from evolving cyber threats.
            </p>
            
            <h4 className="text-xl font-bold text-white mb-4">What is SOC Deployment and Monitoring?</h4>
            <p className="text-gray-300 mb-6">
              Security Operations Center (SOC) deployment and monitoring is a comprehensive cybersecurity service designed to detect, respond to, and mitigate security incidents in real-time. By integrating advanced security tools and expert analysts, a SOC monitors your network, systems, and data continuously, ensuring that potential threats are identified and neutralized before they can cause harm.
            </p>
            
            <h4 className="text-xl font-bold text-white mb-4">Why Choose SOC Deployment and Monitoring?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                <div className="flex items-center mb-3">
                  <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-white">Proactive Threat Detection</h5>
                </div>
                <p className="text-gray-400 pl-11">Identify and neutralize threats before they impact your business operations or compromise sensitive data.</p>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                <div className="flex items-center mb-3">
                  <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-white">Rapid Incident Response</h5>
                </div>
                <p className="text-gray-400 pl-11">Our expert team responds quickly to security incidents, minimizing damage and reducing recovery time.</p>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                <div className="flex items-center mb-3">
                  <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-white">Compliance Support</h5>
                </div>
                <p className="text-gray-400 pl-11">Meet regulatory requirements with comprehensive security monitoring and detailed reporting.</p>
              </div>
              
              <div className="bg-gray-900 p-5 rounded-lg border border-gray-800">
                <div className="flex items-center mb-3">
                  <div className="bg-emerald-900 rounded-full w-8 h-8 flex items-center justify-center text-emerald-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h5 className="font-semibold text-white">Cost-Effective Security</h5>
                </div>
                <p className="text-gray-400 pl-11">Access enterprise-grade security operations without the significant investment in infrastructure and specialized personnel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-black">
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

      {/* Service Modals */}
      {activeModal === 'monitoring' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.monitoring.title}
          content={serviceModals.monitoring.content}
        />
      )}
      
      {activeModal === 'deployment' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.deployment.title}
          content={serviceModals.deployment.content}
        />
      )}
      
      {activeModal === 'response' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.response.title}
          content={serviceModals.response.content}
        />
      )}
      
      {activeModal === 'logManagement' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.logManagement.title}
          content={serviceModals.logManagement.content}
        />
      )}
      
      {activeModal === 'advancedSolutions' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.advancedSolutions.title}
          content={serviceModals.advancedSolutions.content}
        />
      )}
    </div>
  );
}