"use client"

import Link from 'next/link';
import { useState } from 'react';
import ServiceModal from '@/components/ui/ServiceModal';

export default function DigitalForensicPage() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Service modal content
  const serviceModals = {
    computerForensic: {
      title: "Computer Forensic",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Computer Forensic services help recover and analyze data from computers, laptops, servers, and storage devices to uncover digital evidence.
            </p>
            <p>
              Computer forensics involves the collection, preservation, and analysis of digital evidence found on computers and storage media. Our experts use specialized tools and techniques to recover deleted files, analyze system artifacts, and reconstruct user activities to provide a comprehensive picture of what occurred on a device.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Disk Imaging and Analysis</h4>
              <p>Creation of forensic images of storage media for analysis while preserving the original evidence.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">File Recovery</h4>
              <p>Recovery of deleted, hidden, or damaged files using advanced forensic techniques.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Operating System Analysis</h4>
              <p>Examination of system logs, registry, and other OS artifacts to reconstruct user activities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Timeline Analysis</h4>
              <p>Creation of detailed activity timelines to understand the sequence of events during an incident.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Malware Analysis</h4>
              <p>Identification and analysis of malicious software to understand its capabilities and impact.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Password Recovery</h4>
              <p>Bypassing or recovering passwords to access protected files and systems for investigation.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Data breach investigations to determine what data was accessed or exfiltrated</li>
            <li>Employee misconduct investigations involving company devices</li>
            <li>Intellectual property theft cases</li>
            <li>Recovery of accidentally deleted or corrupted business-critical data</li>
            <li>Identification of unauthorized software or activities on corporate systems</li>
            <li>Collection of evidence for legal proceedings</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              We follow a rigorous, forensically sound methodology that preserves the integrity of evidence while extracting the maximum amount of relevant information:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Initial assessment and planning to determine the scope of investigation</li>
              <li>Forensic acquisition of storage media using write-blockers and validated tools</li>
              <li>Verification of image integrity through hash validation</li>
              <li>Systematic analysis using specialized forensic software</li>
              <li>Recovery and examination of deleted and hidden data</li>
              <li>Documentation of findings with supporting artifacts</li>
              <li>Expert interpretation and reporting of results</li>
            </ol>
          </div>
        </div>
      )
    },
    networkForensic: {
      title: "Network Forensic",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Network Forensic services help analyze network traffic, logs, and communications to trace attack paths and methods used in security incidents.
            </p>
            <p>
              Network forensics involves capturing, recording, and analyzing network traffic and events to discover the source of security attacks or other network problems. Our experts examine network logs, packet captures, and other network data to reconstruct the attacker's actions and determine how they gained access and moved through your network.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Network Traffic Analysis</h4>
              <p>Examination of packet captures to identify suspicious communications and data transfers.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Log Analysis</h4>
              <p>Review of firewall, IDS/IPS, proxy, and other network device logs to trace attacker activities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Network Flow Analysis</h4>
              <p>Examination of NetFlow/IPFIX data to identify communication patterns and anomalies.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Lateral Movement Detection</h4>
              <p>Identification of how attackers moved through the network after initial compromise.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Command and Control (C2) Detection</h4>
              <p>Identification of malicious communications with external control servers.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Data Exfiltration Analysis</h4>
              <p>Detection and analysis of unauthorized data transfers out of the network.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Investigation of network intrusions and data breaches</li>
            <li>Reconstruction of attack timelines and methods</li>
            <li>Identification of compromised systems within the network</li>
            <li>Detection of unauthorized access to sensitive resources</li>
            <li>Analysis of suspicious network communications</li>
            <li>Determination of data loss during security incidents</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              Our network forensic investigations follow a structured methodology to ensure comprehensive analysis:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Collection of network logs, packet captures, and flow data</li>
              <li>Correlation of data from multiple sources to create a unified timeline</li>
              <li>Identification of initial compromise vectors</li>
              <li>Tracing of attacker movement through the network</li>
              <li>Analysis of data access and potential exfiltration</li>
              <li>Documentation of findings with supporting network evidence</li>
              <li>Recommendations for network security improvements</li>
            </ol>
          </div>
        </div>
      )
    },
    emailForensic: {
      title: "Email Forensic",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Email Forensic services help investigate email-based threats, communications, and evidence relevant to security incidents or investigations.
            </p>
            <p>
              Email forensics involves the extraction, preservation, and analysis of email data to establish evidence for investigations. Our experts examine email headers, content, attachments, and metadata to trace the origin of malicious emails, recover deleted messages, and analyze communication patterns.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Email Header Analysis</h4>
              <p>Examination of email headers to determine the true source and path of messages.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Attachment Analysis</h4>
              <p>Extraction and analysis of email attachments for malicious content or hidden data.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Deleted Email Recovery</h4>
              <p>Recovery of deleted emails from mail servers, client applications, or backups.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Phishing Analysis</h4>
              <p>Investigation of phishing campaigns to identify tactics and targets.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Communication Pattern Analysis</h4>
              <p>Examination of email communication patterns to identify suspicious activities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Email Authentication Verification</h4>
              <p>Analysis of SPF, DKIM, and DMARC records to verify email authenticity.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Investigation of phishing attacks and business email compromise</li>
            <li>Analysis of email-based malware delivery</li>
            <li>Recovery of deleted emails for internal investigations</li>
            <li>Tracing the source of threatening or harassing emails</li>
            <li>Verification of email authenticity in disputes</li>
            <li>Collection of email evidence for legal proceedings</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              Our email forensic investigations follow a methodical process to ensure thorough analysis:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Preservation of email data from relevant sources</li>
              <li>Extraction of email metadata and headers</li>
              <li>Analysis of email routing information</li>
              <li>Examination of message content and attachments</li>
              <li>Recovery of deleted messages when possible</li>
              <li>Correlation of email evidence with other data sources</li>
              <li>Documentation of findings with supporting evidence</li>
            </ol>
          </div>
        </div>
      )
    },
    mobileForensic: {
      title: "Mobile Forensic",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Mobile Forensic services help extract and analyze data from smartphones, tablets, and other mobile devices for investigations.
            </p>
            <p>
              Mobile forensics involves the recovery and analysis of digital evidence from mobile devices. Our experts use specialized tools and techniques to extract data from iOS, Android, and other mobile platforms, even when the device is locked, damaged, or has had data deleted.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Logical and Physical Extraction</h4>
              <p>Recovery of both accessible and deleted data from mobile devices using various extraction methods.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">App Data Analysis</h4>
              <p>Extraction and examination of data from installed applications, including messaging apps.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Location Data Recovery</h4>
              <p>Analysis of GPS, cell tower, and Wi-Fi location data to reconstruct device movements.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Communication Analysis</h4>
              <p>Examination of calls, SMS, MMS, and third-party messaging app communications.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Deleted Data Recovery</h4>
              <p>Recovery of deleted messages, photos, contacts, and other data from mobile devices.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Cloud Backup Analysis</h4>
              <p>Examination of cloud backups associated with mobile devices for additional evidence.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Investigation of mobile device use in security incidents</li>
            <li>Recovery of business data from lost or damaged company devices</li>
            <li>Analysis of mobile malware infections</li>
            <li>Examination of unauthorized data access or transfers via mobile devices</li>
            <li>Recovery of deleted messages or media relevant to investigations</li>
            <li>Collection of mobile device evidence for legal proceedings</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              Our mobile forensic investigations follow a structured methodology to ensure comprehensive analysis:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Initial device assessment and documentation</li>
              <li>Isolation of the device to prevent remote wiping or data alteration</li>
              <li>Selection of appropriate extraction methods based on device type and condition</li>
              <li>Forensic acquisition of device data</li>
              <li>Analysis of extracted data using specialized forensic tools</li>
              <li>Recovery of deleted content when possible</li>
              <li>Documentation of findings with supporting mobile evidence</li>
            </ol>
          </div>
        </div>
      )
    },
    cloudForensic: {
      title: "Cloud Forensic",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Cloud Forensic services help investigate security incidents in cloud environments and services to determine what happened and how.
            </p>
            <p>
              Cloud forensics involves the collection, preservation, and analysis of digital evidence from cloud computing environments. Our experts navigate the unique challenges of cloud investigations, working with various cloud service providers to recover logs, data, and other evidence needed to understand security incidents.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Cloud Service Provider Analysis</h4>
              <p>Investigation of incidents across major cloud platforms (AWS, Azure, GCP, etc.).</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Cloud Log Analysis</h4>
              <p>Examination of cloud service logs to identify unauthorized access and activities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">SaaS Application Forensics</h4>
              <p>Investigation of incidents involving cloud-based applications and services.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Cloud Storage Analysis</h4>
              <p>Examination of data stored in cloud storage services for evidence.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Virtual Machine Forensics</h4>
              <p>Analysis of cloud-hosted virtual machines and their snapshots.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Container Forensics</h4>
              <p>Investigation of security incidents involving containerized applications.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Investigation of unauthorized access to cloud resources</li>
            <li>Analysis of data breaches involving cloud-stored information</li>
            <li>Examination of cloud infrastructure misconfigurations leading to incidents</li>
            <li>Investigation of account compromises in cloud services</li>
            <li>Analysis of malicious activities in cloud-hosted applications</li>
            <li>Collection of cloud-based evidence for compliance and legal purposes</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              Our cloud forensic investigations address the unique challenges of cloud environments:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Identification of relevant cloud services and data sources</li>
              <li>Coordination with cloud service providers for log access</li>
              <li>Collection of cloud logs, configuration data, and user activity records</li>
              <li>Preservation of volatile cloud data before it expires</li>
              <li>Analysis of cloud access patterns and permission changes</li>
              <li>Examination of cloud resource creation and modification</li>
              <li>Documentation of findings with supporting cloud evidence</li>
            </ol>
          </div>
        </div>
      )
    },
    databaseForensic: {
      title: "Database Forensic",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Database Forensic services help analyze database activities and recover manipulated data to investigate security incidents and data tampering.
            </p>
            <p>
              Database forensics involves the examination of database management systems to determine unauthorized access, data manipulation, or other malicious activities. Our experts analyze database logs, transaction records, and data structures to identify suspicious activities and recover altered or deleted information.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Database Log Analysis</h4>
              <p>Examination of database logs to identify unauthorized access and suspicious queries.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Transaction Reconstruction</h4>
              <p>Reconstruction of database transactions to understand data modifications.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Data Tampering Detection</h4>
              <p>Identification of unauthorized data modifications or deletions.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Deleted Data Recovery</h4>
              <p>Recovery of deleted database records from transaction logs or backups.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">SQL Injection Analysis</h4>
              <p>Investigation of SQL injection attacks and their impact on database integrity.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Database User Activity Analysis</h4>
              <p>Examination of user activities to identify suspicious behavior patterns.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Investigation of unauthorized data access or theft</li>
            <li>Analysis of fraudulent data modifications</li>
            <li>Recovery of deleted or corrupted database records</li>
            <li>Investigation of database attacks such as SQL injection</li>
            <li>Examination of insider threats involving database access</li>
            <li>Collection of database evidence for compliance and legal purposes</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              Our database forensic investigations follow a structured methodology:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Preservation of database files, logs, and configuration data</li>
              <li>Analysis of database access controls and user permissions</li>
              <li>Examination of database logs and audit trails</li>
              <li>Reconstruction of database transactions and queries</li>
              <li>Identification of unauthorized or suspicious database activities</li>
              <li>Recovery of deleted or modified data when possible</li>
              <li>Documentation of findings with supporting database evidence</li>
            </ol>
          </div>
        </div>
      )
    },
    memoryForensic: {
      title: "Memory Forensic",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Memory Forensic services help capture and analyze volatile memory to detect advanced threats and malware that may not leave traces on disk.
            </p>
            <p>
              Memory forensics involves the analysis of a computer's volatile memory (RAM) to identify malicious code, unauthorized processes, and other indicators of compromise. Our experts capture and analyze memory dumps to detect sophisticated threats that may evade traditional disk-based forensics.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Memory Acquisition</h4>
              <p>Capture of system memory using specialized tools to preserve volatile data.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Process Analysis</h4>
              <p>Examination of running processes to identify suspicious or hidden activities.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Malware Detection</h4>
              <p>Identification of malware artifacts in memory, including fileless malware.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Network Connection Analysis</h4>
              <p>Examination of active network connections to identify command and control channels.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Rootkit Detection</h4>
              <p>Identification of advanced rootkits and kernel-level malware.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Encryption Key Recovery</h4>
              <p>Extraction of encryption keys and credentials from memory.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Detection of advanced persistent threats (APTs) and sophisticated malware</li>
            <li>Investigation of fileless malware attacks</li>
            <li>Analysis of systems suspected of compromise</li>
            <li>Recovery of encryption keys for accessing protected data</li>
            <li>Identification of malicious code execution not visible on disk</li>
            <li>Collection of volatile evidence before system shutdown</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              Our memory forensic investigations follow a structured methodology:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Rapid response to capture memory before system shutdown</li>
              <li>Forensic acquisition of system memory using specialized tools</li>
              <li>Verification of memory dump integrity</li>
              <li>Analysis of processes, DLLs, and loaded modules</li>
              <li>Examination of network connections and sockets</li>
              <li>Identification of injected code and hidden processes</li>
              <li>Extraction of artifacts and indicators of compromise</li>
              <li>Documentation of findings with supporting memory evidence</li>
            </ol>
          </div>
        </div>
      )
    },
    socialMediaForensic: {
      title: "Social Media Forensic",
      content: (
        <div className="text-gray-300">
          <div className="bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg mb-4">
              Our Social Media Forensic services help investigate social media activities and communications relevant to security incidents and investigations.
            </p>
            <p>
              Social media forensics involves the collection, preservation, and analysis of evidence from social networking platforms. Our experts extract and analyze social media data to investigate security incidents, unauthorized disclosures, and other activities relevant to your organization.
            </p>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Key Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Social Media Data Collection</h4>
              <p>Legally compliant collection of relevant social media content and metadata.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Account Authentication</h4>
              <p>Verification of social media account ownership and authenticity.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Content Analysis</h4>
              <p>Examination of posts, messages, and shared content for relevant evidence.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Connection Network Analysis</h4>
              <p>Mapping of connections and relationships between social media accounts.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Deleted Content Recovery</h4>
              <p>Recovery of deleted social media posts and messages when possible.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-2">Metadata Analysis</h4>
              <p>Examination of timestamps, location data, and device information from social media activity.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-emerald-500 mb-4">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Investigation of unauthorized disclosure of sensitive information</li>
            <li>Analysis of social engineering attacks conducted via social media</li>
            <li>Examination of employee misconduct involving social platforms</li>
            <li>Investigation of brand impersonation or corporate account compromise</li>
            <li>Collection of social media evidence for legal proceedings</li>
            <li>Analysis of threat actor communications on social platforms</li>
          </ul>

          <div className="bg-black p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
            <p className="mb-4">
              Our social media forensic investigations follow a structured methodology:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Identification of relevant social media platforms and accounts</li>
              <li>Legal and compliant collection of social media data</li>
              <li>Preservation of social media content in a forensically sound manner</li>
              <li>Authentication of account ownership and content</li>
              <li>Analysis of content, connections, and communication patterns</li>
              <li>Correlation with other sources of digital evidence</li>
              <li>Documentation of findings with supporting social media evidence</li>
            </ol>
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
                <h3 className="text-xl font-bold text-white mb-2">Our Digital Forensic Services</h3>
                <p className="text-xs text-gray-500 mb-4 italic">Click on services for detailed information</p>
                <ul className="space-y-4">
                  <li>
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('computerForensic')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('networkForensic')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('emailForensic')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('mobileForensic')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('cloudForensic')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('databaseForensic')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('memoryForensic')}
                    >
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
                    <div 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                      onClick={() => openModal('socialMediaForensic')}
                    >
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

      {/* Service Modals */}
      {activeModal === 'computerForensic' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.computerForensic.title}
          content={serviceModals.computerForensic.content}
        />
      )}
      
      {activeModal === 'networkForensic' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.networkForensic.title}
          content={serviceModals.networkForensic.content}
        />
      )}
      
      {activeModal === 'emailForensic' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.emailForensic.title}
          content={serviceModals.emailForensic.content}
        />
      )}
      
      {activeModal === 'mobileForensic' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.mobileForensic.title}
          content={serviceModals.mobileForensic.content}
        />
      )}
      
      {activeModal === 'cloudForensic' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.cloudForensic.title}
          content={serviceModals.cloudForensic.content}
        />
      )}
      
      {activeModal === 'databaseForensic' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.databaseForensic.title}
          content={serviceModals.databaseForensic.content}
        />
      )}
      
      {activeModal === 'memoryForensic' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.memoryForensic.title}
          content={serviceModals.memoryForensic.content}
        />
      )}
      
      {activeModal === 'socialMediaForensic' && (
        <ServiceModal
          isOpen={true}
          onClose={closeModal}
          title={serviceModals.socialMediaForensic.title}
          content={serviceModals.socialMediaForensic.content}
        />
      )}
    </div>
  );
}