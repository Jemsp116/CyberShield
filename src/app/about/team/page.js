import Link from 'next/link';

export const metadata = {
  title: 'Our Team | K-Infotech Global Consulting Services',
  description: 'Meet the team of IT and cybersecurity experts at K-Infotech working to help businesses with digital transformation and security.',
};

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      bio: 'With over 20 years of experience in IT and digital transformation, Rajesh has led technology teams at major global companies before founding K-Infotech. He holds an MBA and multiple industry certifications in IT management.',
      image: '/images/team-ceo.jpg',
      expertise: ['IT Strategy', 'Digital Transformation', 'Business Leadership'],
      certifications: ['MBA', 'PMP', 'ITIL Expert']
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Chief Technology Officer',
      bio: 'Priya brings 15+ years of experience in technology innovation and digital strategy. Previously, she led digital transformation initiatives at Fortune 500 companies and advised organizations on technology adoption.',
      image: '/images/team-cso.jpg',
      expertise: ['Cloud Architecture', 'Technology Strategy', 'Enterprise Solutions'],
      certifications: ['AWS Solutions Architect', 'Azure Solutions Expert', 'Google Cloud Professional']
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Head of Cybersecurity',
      bio: 'Amit is a respected cybersecurity expert who has helped numerous organizations strengthen their security posture. He leads our cybersecurity team and develops comprehensive security frameworks for clients.',
      image: '/images/team-pentester.jpg',
      expertise: ['Security Architecture', 'Threat Management', 'Compliance'],
      certifications: ['CISSP', 'CEH', 'CISM']
    },
    {
      id: 4,
      name: 'Neha Gupta',
      position: 'Director of Consulting Services',
      bio: 'Neha specializes in helping organizations navigate their digital transformation journeys. With expertise in IT strategy and business process optimization, she ensures our clients implement effective technology solutions.',
      image: '/images/team-consulting.jpg',
      expertise: ['IT Consulting', 'Process Optimization', 'Change Management'],
      certifications: ['PMP', 'ITIL', 'Six Sigma Black Belt']
    },
    {
      id: 5,
      name: 'Vikram Singh',
      position: 'Head of Cloud Services',
      bio: 'Vikram oversees our cloud services division, helping clients migrate to and optimize their cloud environments. With deep expertise in multi-cloud architectures, he ensures scalable, secure, and cost-effective cloud solutions.',
      image: '/images/team-cto.jpg',
      expertise: ['Cloud Migration', 'Multi-cloud Strategy', 'Cloud Security'],
      certifications: ['AWS Solutions Architect', 'Azure Administrator', 'GCP Professional']
    },
    {
      id: 6,
      name: 'Ananya Desai',
      position: 'Director of Digital Innovation',
      bio: 'Ananya leads our digital innovation initiatives, focusing on emerging technologies like AI, IoT, and blockchain. Her forward-thinking approach helps clients leverage cutting-edge technologies for business advantage.',
      image: '/images/team-ir.jpg',
      expertise: ['AI/ML Implementation', 'IoT Solutions', 'Blockchain'],
      certifications: ['AI Professional', 'IoT Specialist', 'Digital Transformation Leader']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-300">
              Meet the IT and cybersecurity experts behind K-Infotech's innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12 text-white">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="cyber-card border border-gray-800">
                <div className="h-48 bg-gray-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-emerald-500 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="bg-gray-800 text-emerald-400 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, index) => (
                        <span key={index} className="border border-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Culture */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-white">Our Culture</h2>
              <p className="text-lg text-gray-400 mb-6">
                At K-Infotech, we foster a culture of continuous learning, collaboration, and innovation. We believe that the best technology solutions come from diverse perspectives and a shared commitment to excellence.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Our team members are encouraged to pursue their passions, develop new skills, and challenge conventional thinking. We invest heavily in professional development, research, and creating an environment where IT and cybersecurity professionals can thrive.
              </p>
              <p className="text-lg text-gray-400">
                Beyond our technical expertise, we value integrity, client focus, and making a positive impact in the technology community through mentorship, education, and contributing to innovative IT and security initiatives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black h-60 rounded-lg"></div>
              <div className="bg-black h-60 rounded-lg"></div>
              <div className="bg-black h-60 rounded-lg"></div>
              <div className="bg-black h-60 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-emerald-100 mb-8">
              We're always looking for talented individuals passionate about IT, cybersecurity, and digital transformation to join our growing team.
            </p>
            <Link href="/careers" className="btn-secondary bg-transparent hover:bg-white text-white hover:text-emerald-700 border-white">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 