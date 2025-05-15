import Link from 'next/link';

export async function generateMetadata({ params }) {
  // This is a simplified version - in a real app you would fetch job data
  const jobOpenings = getJobOpenings();
  const job = jobOpenings.find(job => job.id.toString() === params.id);
  
  return {
    title: job ? `${job.title} | CyberShield Careers` : 'Job Opening | CyberShield',
    description: job ? job.description : 'View details about this job opening at CyberShield Security Solutions.',
  };
}

function getJobOpenings() {
  // In a real app, this would be fetched from an API or database
  return [
    {
      id: 1,
      title: 'Senior Penetration Tester',
      location: 'New York, NY (Hybrid)',
      department: 'Security Operations',
      description: 'We are seeking an experienced penetration tester to join our offensive security team. In this role, you will conduct thorough penetration tests against client infrastructure, web applications, and cloud environments.',
      fullDescription: 'As a Senior Penetration Tester at CyberShield, you will play a critical role in helping our clients identify and remediate security vulnerabilities before malicious actors can exploit them. You\'ll work closely with our security consulting team to deliver high-quality penetration testing services that provide actionable insights and recommendations.',
      responsibilities: [
        'Plan and execute comprehensive penetration tests across various client environments, including networks, applications, and cloud infrastructure',
        'Identify security vulnerabilities, weaknesses, and potential attack vectors',
        'Document findings with clear evidence and reproduce steps',
        'Develop and present detailed reports that explain technical vulnerabilities in business context',
        'Provide actionable remediation recommendations prioritized by risk level',
        'Stay current with emerging threats, attack techniques, and security research',
        'Contribute to the development of our penetration testing methodologies and tools',
        'Mentor junior team members and share knowledge across the security team'
      ],
      requirements: [
        'Minimum 5 years of experience in penetration testing or ethical hacking',
        'Proficiency with industry-standard penetration testing tools',
        'Experience with web application security testing',
        'Strong understanding of network security principles',
        'Excellent communication skills for report writing and client presentations',
        'Experience with cloud environments (AWS, Azure, GCP)',
        'Knowledge of secure coding practices and common vulnerability patterns',
        'Relevant certifications such as OSCP, GPEN, CEH, or equivalent'
      ],
      preferredQualifications: [
        'Experience in red teaming or adversary simulation',
        'Knowledge of DevSecOps and CI/CD security',
        'Experience with IoT or mobile application security testing',
        'Contributions to the security community through research, tools, or presentations',
        'Familiarity with compliance frameworks such as PCI DSS, HIPAA, SOC2, etc.'
      ]
    },
    {
      id: 2,
      title: 'Incident Response Analyst',
      location: 'Chicago, IL (On-site)',
      department: 'Incident Response',
      description: 'Join our Incident Response team to help clients detect, respond to, and recover from security breaches. You will work on the frontlines of cybersecurity, handling real-world incidents and helping organizations recover from attacks.',
      fullDescription: 'As an Incident Response Analyst at CyberShield, you will be a critical part of our team that helps organizations respond to and recover from security incidents. You will investigate security events, determine the scope and impact of breaches, contain threats, and guide clients through the recovery process. This role requires a methodical approach to incident handling, strong analytical skills, and the ability to work effectively under pressure.',
      responsibilities: [
        'Monitor and triage security alerts to identify potential incidents',
        'Lead incident response activities including containment, eradication, and recovery',
        'Conduct digital forensic investigations to determine attack vectors and scope',
        'Perform malware analysis and threat hunting activities',
        'Document findings and create detailed incident reports',
        'Develop and implement response playbooks for common incident types',
        'Participate in on-call rotation for emergency incident response',
        'Assist clients with post-incident recovery and security improvements'
      ],
      requirements: [
        'Experience in incident handling and digital forensics',
        'Knowledge of threat hunting and malware analysis',
        'Familiarity with SIEM platforms and log analysis',
        'Strong problem-solving abilities and ability to work under pressure',
        'Available for occasional on-call rotations and travel',
        'Understanding of common attack techniques and indicators of compromise',
        'Experience with digital forensics tools and techniques',
        'Strong documentation and communication skills'
      ],
      preferredQualifications: [
        'GCFA, GCIH, GREM, or other relevant certifications',
        'Experience handling incidents in cloud environments',
        'Knowledge of legal and regulatory requirements related to breaches',
        'Experience with threat intelligence integration and analysis',
        'Programming skills for automation of incident response tasks'
      ]
    },
    // Other job details would be here in a real application
    {
      id: 3,
      title: 'Security Consultant',
      location: 'Remote (US-based)',
      department: 'Advisory Services',
      description: 'As a Security Consultant, you will help our clients build robust security programs, conduct risk assessments, and develop security strategies tailored to their business needs.',
      fullDescription: 'As a Security Consultant at CyberShield, you will serve as a trusted advisor to our clients, helping them navigate complex security challenges and build comprehensive security programs. You will assess security postures, identify gaps, and recommend strategic improvements that align with business objectives and compliance requirements.',
      responsibilities: [
        'Conduct security assessments and gap analyses for clients across various industries',
        'Develop security roadmaps and strategies tailored to client needs and maturity levels',
        'Assist clients with security program development and implementation',
        'Perform risk assessments and help clients prioritize security investments',
        'Guide clients on security governance, policies, and procedures',
        'Support compliance initiatives related to various frameworks (ISO 27001, SOC 2, NIST, etc.)',
        'Prepare and deliver executive presentations on security findings and recommendations',
        'Collaborate with technical teams to ensure security strategies are properly implemented'
      ],
      requirements: [
        'Experience in security program development and implementation',
        'Knowledge of security frameworks (NIST, ISO 27001, etc.)',
        'Strong consulting and client management skills',
        'Excellent verbal and written communication',
        'Ability to translate complex security concepts for non-technical audiences',
        'Understanding of security architecture principles',
        'Experience with risk assessment methodologies',
        'Knowledge of compliance requirements across multiple industries'
      ],
      preferredQualifications: [
        'CISSP, CISM, or other relevant security certifications',
        'Experience with security in cloud environments',
        'Background in IT audit or compliance assessment',
        'Project management experience or certification (PMP, etc.)',
        'Industry-specific knowledge (financial services, healthcare, retail, etc.)'
      ]
    },
    {
      id: 4,
      title: 'Cloud Security Engineer',
      location: 'San Francisco, CA (Hybrid)',
      department: 'Cloud Security',
      description: 'Help our clients secure their cloud environments across major platforms including AWS, Azure, and GCP. You will design secure cloud architectures, conduct security reviews, and implement cloud security controls.',
      fullDescription: 'As a Cloud Security Engineer at CyberShield, you will be responsible for helping our clients design, implement, and maintain secure cloud environments. You will work with cross-functional teams to ensure that cloud deployments follow security best practices, comply with relevant regulations, and are protected against emerging threats. This role requires deep technical knowledge of cloud platforms combined with strong security expertise.',
      responsibilities: [
        'Design and implement secure cloud architectures across AWS, Azure, and GCP',
        'Perform security assessments of cloud environments and configurations',
        'Implement cloud security controls and monitoring solutions',
        'Develop secure CI/CD pipelines and DevSecOps practices',
        'Create and review Infrastructure as Code templates for security',
        'Assist clients with security automation in cloud environments',
        'Provide guidance on cloud security best practices and compliance requirements',
        'Respond to and remediate security incidents in cloud environments'
      ],
      requirements: [
        'Hands-on experience securing AWS, Azure, or GCP environments',
        'Knowledge of cloud security best practices and services',
        'Experience with Infrastructure as Code (Terraform, CloudFormation)',
        'Understanding of DevSecOps principles',
        'Relevant cloud certifications preferred (AWS Security, Azure Security, etc.)',
        'Experience with cloud security tools and services',
        'Understanding of containerization and microservices security',
        'Knowledge of identity and access management in cloud environments'
      ],
      preferredQualifications: [
        'Multi-cloud security experience',
        'Experience with Kubernetes security',
        'Security automation skills using Python or other languages',
        'Experience with cloud compliance frameworks (CIS Benchmarks, etc.)',
        'Background in application security or secure coding practices'
      ]
    },
    {
      id: 5,
      title: 'Security Operations Center (SOC) Analyst',
      location: 'London, UK (On-site)',
      department: 'Managed Security Services',
      description: 'Join our 24/7 Security Operations Center to monitor, detect, and respond to security threats across our clients\' environments. You will be part of a team that provides continuous security monitoring and incident response.',
      fullDescription: 'As a SOC Analyst at CyberShield, you will be on the frontlines of our managed security services, protecting client environments from evolving cyber threats. You will monitor security events, investigate alerts, and respond to incidents in real-time. This role requires attention to detail, analytical thinking, and the ability to follow established procedures while adapting to new threat scenarios.',
      responsibilities: [
        'Monitor security events and alerts across multiple client environments',
        'Investigate and triage security alerts to determine legitimacy and severity',
        'Respond to security incidents according to established procedures',
        'Document findings and actions taken in ticketing systems',
        'Maintain awareness of client environments and security requirements',
        'Contribute to the development and refinement of detection rules',
        'Perform regular health checks on security monitoring systems',
        'Escalate critical security incidents to appropriate teams'
      ],
      requirements: [
        'Experience with SIEM platforms and security monitoring tools',
        'Understanding of common attack techniques and indicators of compromise',
        'Ability to work in shifts (including nights and weekends)',
        'Strong analytical skills and attention to detail',
        'Knowledge of network and system security concepts',
        'Familiarity with security frameworks and best practices',
        'Good documentation and communication skills',
        'Ability to work in a fast-paced environment'
      ],
      preferredQualifications: [
        'Security certifications (Security+, GCIA, GCIH, etc.)',
        'Experience in threat hunting',
        'Knowledge of scripting languages for automation',
        'Understanding of cloud security monitoring',
        'Experience with EDR/XDR solutions'
      ]
    },
    {
      id: 6,
      title: 'AI Security Researcher',
      location: 'Boston, MA (Hybrid)',
      department: 'Research & Development',
      description: 'Be part of our cutting-edge research team focused on AI security. You will research security implications of machine learning systems, develop methodologies for securing AI applications, and contribute to industry knowledge.',
      fullDescription: 'As an AI Security Researcher at CyberShield, you will be at the forefront of an emerging field, exploring the intersection of artificial intelligence and cybersecurity. You will research security vulnerabilities in AI systems, develop methods for securing machine learning models, and create tools and techniques to protect AI applications from emerging threats. This role combines deep technical knowledge with creative problem-solving and research capabilities.',
      responsibilities: [
        'Research security vulnerabilities and attack vectors against AI/ML systems',
        'Develop techniques to detect and mitigate adversarial attacks on machine learning models',
        'Create tools and methodologies for securing AI applications',
        'Publish research findings in academic conferences and industry publications',
        'Collaborate with product teams to implement AI security best practices',
        'Stay current with latest research and developments in AI security',
        'Present findings to clients and at security conferences',
        'Contribute to open-source projects and security community initiatives'
      ],
      requirements: [
        'Background in both cybersecurity and machine learning/AI',
        'Experience with AI security challenges (adversarial attacks, model security, etc.)',
        'Research experience and publication record preferred',
        'Programming skills in Python and frameworks like TensorFlow or PyTorch',
        'Passion for exploring emerging security challenges in AI',
        'Strong analytical and problem-solving skills',
        'Experience with machine learning model development and deployment',
        'Understanding of data privacy and security principles'
      ],
      preferredQualifications: [
        'PhD or advanced degree in Computer Science, AI, or related field',
        'Prior publications on AI security or privacy topics',
        'Experience with secure coding practices',
        'Background in cryptography or privacy-preserving techniques',
        'Contributions to open-source AI or security projects'
      ]
    }
  ];
}

export default function JobPage({ params }) {
  const jobOpenings = getJobOpenings();
  const job = jobOpenings.find(job => job.id.toString() === params.id);
  
  if (!job) {
    return (
      <div className="min-h-screen bg-black">
        <div className="container-custom py-16">
          <h1 className="text-3xl text-white font-bold mb-6">Job Not Found</h1>
          <p className="text-gray-400 mb-6">The job position you're looking for doesn't exist or has been removed.</p>
          <Link href="/careers" className="btn-primary">
            View All Openings
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <Link href="/careers" className="text-emerald-500 flex items-center mb-6 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to All Positions
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
            <div className="flex flex-wrap items-center text-lg mb-8">
              <span className="text-emerald-500 mr-4">{job.department}</span>
              <span className="text-gray-300">{job.location}</span>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
              <h2 className="text-xl font-bold mb-4">Job Overview</h2>
              <p className="text-gray-300">{job.fullDescription}</p>
            </div>
            <Link href="#apply" className="btn-primary pulse-glow mr-4">
              Apply Now
            </Link>
            <button className="btn-secondary">
              Share Position
            </button>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Responsibilities */}
              <div className="mb-12">
                <h2 className="section-heading text-white mb-6">Key Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* Requirements */}
              <div className="mb-12">
                <h2 className="section-heading text-white mb-6">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* Preferred Qualifications */}
              <div className="mb-12">
                <h2 className="section-heading text-white mb-6">Preferred Qualifications</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {job.preferredQualifications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              {/* Application Form */}
              <div id="apply" className="bg-gray-900 rounded-lg border border-gray-800 p-8">
                <h2 className="section-heading text-white mb-6">Apply for this Position</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-300 mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-300 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Resume/CV</label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-400"><span className="font-bold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500">PDF or DOCX (MAX. 5MB)</p>
                        </div>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="cover" className="block text-gray-300 mb-2">Cover Letter / Additional Information</label>
                    <textarea 
                      id="cover" 
                      rows="4" 
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full py-3">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
            
            <div>
              {/* Job Overview Sidebar */}
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">Job Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-400 text-sm">Department</h4>
                    <p className="text-white">{job.department}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-400 text-sm">Location</h4>
                    <p className="text-white">{job.location}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-400 text-sm">Employment Type</h4>
                    <p className="text-white">Full-time</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-400 text-sm">Experience Level</h4>
                    <p className="text-white">Mid to Senior Level</p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-400 text-sm">Salary Range</h4>
                    <p className="text-white">Competitive, based on experience</p>
                  </div>
                </div>
                
                <hr className="border-gray-700 my-6" />
                
                <div className="text-center">
                  <p className="text-gray-400 mb-4">Interested in this position?</p>
                  <a href="#apply" className="btn-primary block w-full text-center">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Jobs */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12 text-white">Similar Positions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings
              .filter(j => j.id !== job.id)
              .slice(0, 3)
              .map(relatedJob => (
                <div key={relatedJob.id} className="bg-black rounded-lg border border-gray-800 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{relatedJob.title}</h3>
                    <div className="flex items-center mb-4">
                      <span className="text-emerald-500 mr-4">{relatedJob.department}</span>
                      <span className="text-gray-400">{relatedJob.location}</span>
                    </div>
                    <p className="text-gray-400 mb-6 line-clamp-3">{relatedJob.description}</p>
                    <Link href={`/careers/${relatedJob.id}`} className="btn-secondary block text-center">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
} 