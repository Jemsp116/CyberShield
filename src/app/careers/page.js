import Link from 'next/link';

export const metadata = {
  title: 'Careers | CyberShield Security Solutions',
  description: 'Join our team of cybersecurity experts and help build a safer digital world. View open positions and learn about working at CyberShield.',
};

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Penetration Tester',
      location: 'New York, NY (Hybrid)',
      department: 'Security Operations',
      description: 'We are seeking an experienced penetration tester to join our offensive security team. In this role, you will conduct thorough penetration tests against client infrastructure, web applications, and cloud environments.',
      requirements: [
        'Minimum 5 years of experience in penetration testing or ethical hacking',
        'Proficiency with industry-standard penetration testing tools',
        'Experience with web application security testing',
        'Strong understanding of network security principles',
        'Excellent communication skills for report writing and client presentations'
      ]
    },
    {
      id: 2,
      title: 'Incident Response Analyst',
      location: 'Chicago, IL (On-site)',
      department: 'Incident Response',
      description: 'Join our Incident Response team to help clients detect, respond to, and recover from security breaches. You will work on the frontlines of cybersecurity, handling real-world incidents and helping organizations recover from attacks.',
      requirements: [
        'Experience in incident handling and digital forensics',
        'Knowledge of threat hunting and malware analysis',
        'Familiarity with SIEM platforms and log analysis',
        'Strong problem-solving abilities and ability to work under pressure',
        'Available for occasional on-call rotations and travel'
      ]
    },
    {
      id: 3,
      title: 'Security Consultant',
      location: 'Remote (US-based)',
      department: 'Advisory Services',
      description: 'As a Security Consultant, you will help our clients build robust security programs, conduct risk assessments, and develop security strategies tailored to their business needs.',
      requirements: [
        'Experience in security program development and implementation',
        'Knowledge of security frameworks (NIST, ISO 27001, etc.)',
        'Strong consulting and client management skills',
        'Excellent verbal and written communication',
        'Ability to translate complex security concepts for non-technical audiences'
      ]
    },
    {
      id: 4,
      title: 'Cloud Security Engineer',
      location: 'San Francisco, CA (Hybrid)',
      department: 'Cloud Security',
      description: 'Help our clients secure their cloud environments across major platforms including AWS, Azure, and GCP. You will design secure cloud architectures, conduct security reviews, and implement cloud security controls.',
      requirements: [
        'Hands-on experience securing AWS, Azure, or GCP environments',
        'Knowledge of cloud security best practices and services',
        'Experience with Infrastructure as Code (Terraform, CloudFormation)',
        'Understanding of DevSecOps principles',
        'Relevant cloud certifications preferred (AWS Security, Azure Security, etc.)'
      ]
    },
    {
      id: 5,
      title: 'Security Operations Center (SOC) Analyst',
      location: 'London, UK (On-site)',
      department: 'Managed Security Services',
      description: 'Join our 24/7 Security Operations Center to monitor, detect, and respond to security threats across our clients\' environments. You will be part of a team that provides continuous security monitoring and incident response.',
      requirements: [
        'Experience with SIEM platforms and security monitoring tools',
        'Understanding of common attack techniques and indicators of compromise',
        'Ability to work in shifts (including nights and weekends)',
        'Strong analytical skills and attention to detail',
        'Knowledge of network and system security concepts'
      ]
    },
    {
      id: 6,
      title: 'AI Security Researcher',
      location: 'Boston, MA (Hybrid)',
      department: 'Research & Development',
      description: 'Be part of our cutting-edge research team focused on AI security. You will research security implications of machine learning systems, develop methodologies for securing AI applications, and contribute to industry knowledge.',
      requirements: [
        'Background in both cybersecurity and machine learning/AI',
        'Experience with AI security challenges (adversarial attacks, model security, etc.)',
        'Research experience and publication record preferred',
        'Programming skills in Python and frameworks like TensorFlow or PyTorch',
        'Passion for exploring emerging security challenges in AI'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries, bonuses, and equity options to reward your expertise and contributions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Professional Development',
      description: 'Annual training budget, certification reimbursement, and dedicated time for research and learning.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements, generous PTO, and sabbatical opportunities after 5 years of service.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health resources, and wellness programs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300">
              Build your career at the forefront of cybersecurity, protecting businesses worldwide from emerging threats.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-white">Why Join CyberShield</h2>
              <p className="text-lg text-gray-400 mb-6">
                At CyberShield, we're not just cybersecurity professionals – we're a team of passionate individuals committed to making the digital world safer for everyone. 
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Working here means tackling some of the most challenging security problems alongside industry experts, using cutting-edge technologies, and continuously expanding your skills and knowledge.
              </p>
              <p className="text-lg text-gray-400">
                We foster a culture of innovation, collaboration, and continuous learning, where your ideas are valued and you can make a real impact on our clients and the security community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl font-bold mb-2 text-emerald-500">200+</div>
                <div className="text-gray-400">Security Professionals</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl font-bold mb-2 text-emerald-500">12</div>
                <div className="text-gray-400">Global Offices</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl font-bold mb-2 text-emerald-500">4.8/5</div>
                <div className="text-gray-400">Employee Satisfaction</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl font-bold mb-2 text-emerald-500">85%</div>
                <div className="text-gray-400">Internal Promotion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12 text-white">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="flex items-start">
                  <div className="bg-gray-800 rounded-full p-3 text-emerald-500 mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-4 text-white">Open Positions</h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            Explore our current job openings and find a role where you can grow your skills and make an impact in the cybersecurity industry.
          </p>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="border border-gray-800 rounded-lg overflow-hidden">
                <div className="bg-gray-900 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 mt-2">
                        <span className="text-emerald-500">{job.department}</span>
                        <span className="text-gray-400">{job.location}</span>
                      </div>
                    </div>
                    <Link 
                      href={`/careers/${job.id}`} 
                      className="btn-secondary mt-4 md:mt-0 inline-block text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="p-6 bg-black">
                  <p className="text-gray-400 mb-4">{job.description}</p>
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 text-gray-400 space-y-1">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                    {job.requirements.length > 3 && (
                      <li className="text-emerald-500">
                        <Link href={`/careers/${job.id}`}>
                          View all requirements...
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12 text-white">Our Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-white">Application</h3>
              <p className="text-gray-400">Submit your application through our online portal with your resume and cover letter.</p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-white">Initial Screening</h3>
              <p className="text-gray-400">Brief phone or video interview to discuss your background and interest in the role.</p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-white">Technical Assessment</h3>
              <p className="text-gray-400">Role-specific challenge to evaluate your technical skills and problem-solving approach.</p>
            </div>
            
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3 text-white">Final Interviews</h3>
              <p className="text-gray-400">In-depth discussions with team members and leadership to ensure mutual fit.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <Link href="/contact" className="btn-primary">
              Send a Speculative Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 