"use client"

import Link from 'next/link';
import { useState } from 'react';
import ServiceModal from '@/components/ui/ServiceModal';

export default function CyberResiliencePage() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Service modal content
  const serviceModals = {
    riskAssessment: {
      title: "Risk Assessment and Management",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Risk Assessment and Management services help you identify, analyze, and prioritize security risks to protect your organization's critical assets.
            </p>
            <p>
              Understanding your security risks is the foundation of an effective cyber resilience program. Our comprehensive approach helps you identify vulnerabilities, assess potential impacts, and implement appropriate controls to mitigate risks based on your business priorities.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Asset Identification and Valuation</h4>
              <p>Comprehensive inventory and classification of your critical assets based on business importance.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Threat Assessment</h4>
              <p>Evaluation of potential threats to your organization based on industry, geography, and specific business factors.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Vulnerability Assessment</h4>
              <p>Identification of security weaknesses in your systems, applications, and infrastructure.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Risk Analysis</h4>
              <p>Evaluation of risks based on likelihood and potential impact to prioritize remediation efforts.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Control Selection and Implementation</h4>
              <p>Recommendations for security controls aligned with industry frameworks like NIST, ISO, and CIS.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Continuous Monitoring</h4>
              <p>Ongoing assessment of your risk posture to address emerging threats and changes in your environment.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Our Methodology</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Initial scoping and planning to define assessment boundaries</li>
            <li>Asset discovery and classification based on business criticality</li>
            <li>Threat modeling and vulnerability identification</li>
            <li>Risk analysis and prioritization</li>
            <li>Control recommendations and remediation planning</li>
            <li>Implementation support and validation</li>
            <li>Ongoing monitoring and periodic reassessment</li>
          </ol>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Benefits of Our Risk Assessment Services</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business-aligned security investments focused on your most critical risks</li>
              <li>Comprehensive visibility into your organization's security posture</li>
              <li>Prioritized remediation roadmap based on risk levels and business impact</li>
              <li>Support for regulatory compliance requirements</li>
              <li>Improved security decision-making based on quantifiable risk data</li>
              <li>Reduced likelihood and impact of security incidents</li>
            </ul>
          </div>
        </div>
      )
    },
    cloudSecurity: {
      title: "Cloud Security and Disaster Recovery",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Cloud Security and Disaster Recovery services help you secure your cloud environments and ensure business continuity in the event of disruptions.
            </p>
            <p>
              As organizations increasingly migrate to cloud environments, securing these platforms and ensuring robust disaster recovery capabilities becomes critical. Our comprehensive approach addresses the unique security challenges of cloud computing while implementing effective disaster recovery strategies to maintain business operations.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Cloud Security Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Cloud Security Architecture</h4>
              <p>Design and implementation of secure cloud environments across AWS, Azure, GCP, and other platforms.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Identity and Access Management</h4>
              <p>Implementation of least privilege access controls and secure authentication mechanisms.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Data Protection</h4>
              <p>Encryption, access controls, and data loss prevention for cloud-hosted information.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Cloud Security Posture Management</h4>
              <p>Continuous monitoring and remediation of cloud misconfigurations and compliance violations.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Disaster Recovery Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Business Impact Analysis</h4>
              <p>Assessment of critical business functions and the impact of potential disruptions.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Recovery Strategy Development</h4>
              <p>Design of recovery solutions based on Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Cloud-Based Backup Solutions</h4>
              <p>Implementation of secure, automated backup systems with rapid recovery capabilities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Disaster Recovery Testing</h4>
              <p>Regular validation of recovery procedures through tabletop exercises and technical testing.</p>
            </div>
          </div>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Secure cloud environments aligned with industry best practices</li>
              <li>Minimized downtime and data loss during disruptions</li>
              <li>Cost-effective disaster recovery leveraging cloud capabilities</li>
              <li>Compliance with regulatory requirements for data protection and business continuity</li>
              <li>Improved resilience against ransomware and other cyber threats</li>
              <li>Scalable solutions that grow with your business</li>
            </ul>
          </div>
        </div>
      )
    },
    dataProtection: {
      title: "Data Protection and Backup Solutions",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Data Protection and Backup Solutions help safeguard your critical information assets and ensure recoverability in case of data loss or corruption.
            </p>
            <p>
              Data is one of your organization's most valuable assets, and protecting it from loss, theft, or corruption is essential. Our comprehensive data protection services combine robust backup strategies with advanced security controls to ensure your critical information remains safe and recoverable.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Data Classification and Discovery</h4>
              <p>Identification and categorization of sensitive data across your environment to prioritize protection efforts.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Data Loss Prevention (DLP)</h4>
              <p>Implementation of controls to prevent unauthorized access, sharing, or exfiltration of sensitive information.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Encryption Solutions</h4>
              <p>Data encryption at rest and in transit to protect information from unauthorized access.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Backup Strategy Design</h4>
              <p>Development of comprehensive backup strategies based on data criticality and recovery requirements.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Automated Backup Implementation</h4>
              <p>Deployment of automated backup solutions with appropriate retention policies and security controls.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Recovery Testing</h4>
              <p>Regular validation of backup integrity and recovery procedures to ensure data can be restored when needed.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Our Approach</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Assessment of current data protection and backup capabilities</li>
            <li>Data discovery and classification to identify protection requirements</li>
            <li>Design of comprehensive data protection strategy</li>
            <li>Implementation of security controls and backup solutions</li>
            <li>Regular testing and validation of recovery capabilities</li>
            <li>Continuous monitoring and improvement of data protection measures</li>
          </ol>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comprehensive protection of sensitive and critical data</li>
              <li>Minimized risk of data loss due to cyber attacks, system failures, or human error</li>
              <li>Rapid recovery capabilities to restore operations after data incidents</li>
              <li>Compliance with data protection regulations and requirements</li>
              <li>Enhanced resilience against ransomware and other data-targeting threats</li>
              <li>Peace of mind knowing your critical information is protected and recoverable</li>
            </ul>
          </div>
        </div>
      )
    },
    threatDetection: {
      title: "Advanced Threat Detection and Monitoring",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Advanced Threat Detection and Monitoring services help you identify and respond to sophisticated cyber threats targeting your organization.
            </p>
            <p>
              In today's threat landscape, traditional security controls are often insufficient to detect advanced attacks. Our comprehensive threat detection and monitoring services leverage cutting-edge technologies and expert analysis to identify malicious activities and enable rapid response before significant damage occurs.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Security Information and Event Management (SIEM)</h4>
              <p>Implementation and tuning of SIEM solutions to collect, correlate, and analyze security events across your environment.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Endpoint Detection and Response (EDR)</h4>
              <p>Deployment of advanced endpoint monitoring to detect and respond to threats at the device level.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Network Traffic Analysis</h4>
              <p>Monitoring of network communications to identify suspicious patterns and potential threats.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">User and Entity Behavior Analytics (UEBA)</h4>
              <p>Analysis of user and system behaviors to identify anomalies that may indicate compromise.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Threat Intelligence Integration</h4>
              <p>Incorporation of threat intelligence feeds to enhance detection of known threat actors and techniques.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Security Operations Center (SOC) Services</h4>
              <p>24/7 monitoring and analysis by security experts to identify and respond to security incidents.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Our Approach</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Assessment of current detection capabilities and security gaps</li>
            <li>Design of comprehensive monitoring architecture</li>
            <li>Implementation and tuning of detection technologies</li>
            <li>Development of custom detection rules and playbooks</li>
            <li>Continuous monitoring and alert triage</li>
            <li>Regular threat hunting to proactively identify threats</li>
            <li>Incident response support when threats are detected</li>
          </ol>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Early detection of sophisticated threats before significant damage occurs</li>
              <li>Reduced dwell time of attackers in your environment</li>
              <li>Comprehensive visibility across your IT infrastructure</li>
              <li>Rapid response to security incidents</li>
              <li>Continuous improvement of security posture based on threat intelligence</li>
              <li>Support for compliance with regulatory monitoring requirements</li>
            </ul>
          </div>
        </div>
      )
    },
    thirdPartyRisk: {
      title: "Third-party Risk Management",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Third-party Risk Management services help you assess and mitigate security risks from vendors, suppliers, and business partners.
            </p>
            <p>
              Modern organizations rely on an ecosystem of third-party vendors and partners, each representing potential security risks to your business. Our comprehensive third-party risk management program helps you identify, assess, and mitigate these risks throughout the vendor lifecycle.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Vendor Risk Assessment</h4>
              <p>Comprehensive evaluation of vendor security practices, controls, and compliance posture.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Due Diligence Processes</h4>
              <p>Development of standardized security questionnaires and evaluation criteria for vendor selection.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Contract Security Requirements</h4>
              <p>Definition of security and privacy requirements for inclusion in vendor contracts and agreements.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Continuous Monitoring</h4>
              <p>Ongoing assessment of vendor security posture through technical monitoring and periodic reviews.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Incident Response Coordination</h4>
              <p>Establishment of protocols for managing security incidents involving third parties.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Vendor Risk Remediation</h4>
              <p>Collaborative approach to addressing identified security gaps with third-party providers.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Our Methodology</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Vendor inventory and risk categorization based on data access and criticality</li>
            <li>Development of risk assessment frameworks and questionnaires</li>
            <li>Initial security assessments of existing and new vendors</li>
            <li>Implementation of continuous monitoring processes</li>
            <li>Regular reassessment based on risk level and business changes</li>
            <li>Remediation tracking and validation</li>
            <li>Reporting and metrics to demonstrate risk management effectiveness</li>
          </ol>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comprehensive visibility into third-party security risks</li>
              <li>Reduced likelihood of security incidents originating from vendors</li>
              <li>Improved vendor selection process with security as a key criterion</li>
              <li>Compliance with regulatory requirements for third-party oversight</li>
              <li>Enhanced ability to manage security incidents involving third parties</li>
              <li>Consistent approach to vendor security across your organization</li>
            </ul>
          </div>
        </div>
      )
    },
    virtualCISO: {
      title: "Virtual CISO Services",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Virtual CISO (vCISO) services provide expert security leadership and guidance without the cost of a full-time executive.
            </p>
            <p>
              Many organizations need strategic security leadership but may not have the resources for a full-time Chief Information Security Officer. Our Virtual CISO service provides access to experienced security executives who can guide your security program, develop strategies, and help you make informed security decisions.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Security Strategy Development</h4>
              <p>Creation of comprehensive security roadmaps aligned with your business objectives and risk tolerance.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Security Program Management</h4>
              <p>Oversight and guidance for your security initiatives, ensuring effective implementation and outcomes.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Policy and Standards Development</h4>
              <p>Creation and maintenance of security policies, standards, and procedures tailored to your organization.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Security Budget Planning</h4>
              <p>Development of cost-effective security budgets that address your most critical risks.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Board and Executive Reporting</h4>
              <p>Regular security briefings and metrics for executive leadership and board members.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Security Team Development</h4>
              <p>Guidance on building and enhancing your internal security capabilities and team structure.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Engagement Models</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Advisory vCISO</h4>
              <p>Periodic strategic guidance and consultation on security matters, typically 1-2 days per month.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Operational vCISO</h4>
              <p>More hands-on involvement in security operations and program management, typically 1-2 days per week.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Transitional vCISO</h4>
              <p>Interim security leadership while you recruit a permanent CISO, with knowledge transfer and onboarding support.</p>
            </div>
          </div>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Benefits of Our Virtual CISO Services</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to experienced security leadership at a fraction of the cost of a full-time CISO</li>
              <li>Strategic security guidance aligned with your business objectives</li>
              <li>Flexible engagement models that scale with your needs</li>
              <li>Objective, independent security perspective</li>
              <li>Rapid enhancement of your security program maturity</li>
              <li>Support for regulatory compliance and security governance</li>
            </ul>
          </div>
        </div>
      )
    },
    iamPam: {
      title: "IAM/PAM as a Service",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Identity and Access Management (IAM) and Privileged Access Management (PAM) services help you secure user identities and control access to critical systems and data.
            </p>
            <p>
              Effective identity and access management is fundamental to security, ensuring that only authorized users can access specific resources. Our comprehensive IAM/PAM services help you implement robust identity governance, secure authentication, and privileged access controls to protect your most sensitive systems and data.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">IAM Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Identity Governance and Administration</h4>
              <p>Implementation of processes for managing user identities, access requests, and entitlements throughout the identity lifecycle.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Single Sign-On (SSO)</h4>
              <p>Deployment of SSO solutions to streamline user access while maintaining security.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Multi-Factor Authentication (MFA)</h4>
              <p>Implementation of strong authentication methods to verify user identities and prevent unauthorized access.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Access Certification and Reviews</h4>
              <p>Regular validation of user access rights to ensure appropriate permissions are maintained.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">PAM Components</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Privileged Account Discovery</h4>
              <p>Identification and inventory of privileged accounts across your environment.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Privileged Password Management</h4>
              <p>Secure storage, rotation, and management of privileged credentials.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Session Monitoring and Recording</h4>
              <p>Oversight of privileged user activities with session recording for audit and investigation.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Just-in-Time Access</h4>
              <p>Temporary elevation of privileges only when needed, reducing the risk of standing privileged access.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Our Approach</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Assessment of current identity and access management practices</li>
            <li>Development of IAM/PAM strategy and roadmap</li>
            <li>Selection and implementation of appropriate technologies</li>
            <li>Integration with existing systems and applications</li>
            <li>Development of policies and procedures</li>
            <li>User training and adoption support</li>
            <li>Ongoing management and optimization</li>
          </ol>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reduced risk of unauthorized access and credential theft</li>
              <li>Improved user experience through streamlined access</li>
              <li>Enhanced visibility and control over privileged activities</li>
              <li>Support for regulatory compliance requirements</li>
              <li>Reduced attack surface through principle of least privilege</li>
              <li>Scalable identity management that grows with your organization</li>
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
                <h3 className="text-xl font-bold text-white mb-2">Our Cyber Resilience Services</h3>
                <p className="text-xs text-gray-500 mb-4 italic">Click on services for detailed information</p>
                <ul className="space-y-4">
                  <li>
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('riskAssessment')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('cloudSecurity')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('dataProtection')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('threatDetection')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('thirdPartyRisk')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('virtualCISO')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('iamPam')}
                    >
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

      {/* Service Modals */}
      {activeModal === 'riskAssessment' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.riskAssessment.title}
          content={serviceModals.riskAssessment.content}
        />
      )}
      
      {activeModal === 'cloudSecurity' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.cloudSecurity.title}
          content={serviceModals.cloudSecurity.content}
        />
      )}
      
      {activeModal === 'dataProtection' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.dataProtection.title}
          content={serviceModals.dataProtection.content}
        />
      )}
      
      {activeModal === 'threatDetection' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.threatDetection.title}
          content={serviceModals.threatDetection.content}
        />
      )}
      
      {activeModal === 'thirdPartyRisk' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.thirdPartyRisk.title}
          content={serviceModals.thirdPartyRisk.content}
        />
      )}
      
      {activeModal === 'virtualCISO' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.virtualCISO.title}
          content={serviceModals.virtualCISO.content}
        />
      )}
      
      {activeModal === 'iamPam' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.iamPam.title}
          content={serviceModals.iamPam.content}
        />
      )}
    </div>
  );
}