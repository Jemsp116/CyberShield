import Link from 'next/link';

export const metadata = {
  title: 'Careers | K-Infotech Global Consulting Services',
  description: 'Join our team of IT and cybersecurity experts and help businesses with digital transformation. View open positions and learn about working at K-Infotech.',
};

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Cybersecurity Consultant',
      location: 'Gandhinagar, Gujarat (Hybrid)',
      department: 'Cybersecurity Solutions',
      description: 'We are seeking an experienced cybersecurity consultant to join our security team. In this role, you will help clients assess their security posture, implement robust security measures, and protect their digital assets from emerging threats.',
      requirements: [
        'Minimum 5 years of experience in cybersecurity consulting',
        'Proficiency with security assessment methodologies and tools',
        'Experience with security architecture and implementation',
        'Strong understanding of compliance frameworks (ISO 27001, GDPR, etc.)',
        'Excellent communication skills for client presentations and reporting'
      ]
    },
    {
      id: 2,
      title: 'Digital Transformation Specialist',
      location: 'Mumbai, Maharashtra (Hybrid)',
      department: 'Digital Transformation',
      description: 'Join our Digital Transformation team to help clients modernize their business processes and technology stack. You will work with organizations to develop and implement strategies that leverage digital technologies to improve operations and customer experiences.',
      requirements: [
        'Experience in digital transformation projects and change management',
        'Knowledge of business process optimization and automation',
        'Familiarity with modern technology stacks and cloud platforms',
        'Strong problem-solving abilities and strategic thinking',
        'Excellent client relationship management skills'
      ]
    },
    {
      id: 3,
      title: 'IT Strategy Consultant',
      location: 'Remote (India-based)',
      department: 'IT Strategy & Consulting',
      description: 'As an IT Strategy Consultant, you will help our clients align their technology initiatives with business objectives, develop IT roadmaps, and optimize their technology investments for maximum business value.',
      requirements: [
        'Experience in IT strategy development and implementation',
        'Knowledge of enterprise architecture frameworks',
        'Strong consulting and client management skills',
        'Excellent verbal and written communication',
        'Ability to translate complex technical concepts for business audiences'
      ]
    },
    {
      id: 4,
      title: 'Cloud Solutions Architect',
      location: 'Bangalore, Karnataka (Hybrid)',
      department: 'Cloud Services',
      description: 'Help our clients design and implement cloud solutions across major platforms including AWS, Azure, and GCP. You will architect scalable, secure, and cost-effective cloud environments that meet business requirements.',
      requirements: [
        'Hands-on experience with AWS, Azure, or GCP cloud platforms',
        'Knowledge of cloud architecture best practices',
        'Experience with Infrastructure as Code (Terraform, CloudFormation)',
        'Understanding of DevOps principles',
        'Relevant cloud certifications preferred (AWS Solutions Architect, Azure Architect, etc.)'
      ]
    },
    {
      id: 5,
      title: 'Managed IT Services Specialist',
      location: 'Delhi NCR (On-site)',
      department: 'Managed IT Services',
      description: 'Join our Managed IT Services team to provide ongoing support and management of client IT infrastructure. You will be part of a team that ensures clients\' systems are operating efficiently, securely, and with minimal downtime.',
      requirements: [
        'Experience with IT service management and support',
        'Understanding of network infrastructure and system administration',
        'Familiarity with monitoring tools and incident management',
        'Strong analytical skills and attention to detail',
        'ITIL certification preferred'
      ]
    },
    {
      id: 6,
      title: 'Data Analytics Consultant',
      location: 'Pune, Maharashtra (Hybrid)',
      department: 'Data & Analytics',
      description: 'Be part of our data analytics team helping clients leverage their data assets for business insights. You will design and implement data solutions that enable clients to make data-driven decisions and gain competitive advantages.',
      requirements: [
        'Background in data analytics, business intelligence, or data science',
        'Experience with data visualization tools (Power BI, Tableau, etc.)',
        'Knowledge of data warehousing concepts and technologies',
        'Programming skills in Python, R, or SQL',
        'Ability to translate business questions into analytical frameworks'
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
              Build your career at the forefront of IT innovation, helping businesses transform digitally and navigate technological challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-white">Why Join K-Infotech</h2>
              <p className="text-lg text-gray-400 mb-6">
                At K-Infotech Global Consulting Services, we're not just IT professionals – we're a team of passionate innovators committed to helping businesses thrive in the digital era. 
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Working here means tackling diverse technological challenges alongside industry experts, implementing cutting-edge solutions, and continuously expanding your skills across IT, cybersecurity, and digital transformation.
              </p>
              <p className="text-lg text-gray-400">
                We foster a culture of innovation, collaboration, and continuous learning, where your ideas are valued and you can make a real impact on our clients' business success and technological advancement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="text-3xl font-bold mb-2 text-emerald-500">200+</div>
                <div className="text-gray-400">IT Professionals</div>
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
            Explore our current job openings and find a role where you can grow your skills and make an impact in the IT and digital transformation space.
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