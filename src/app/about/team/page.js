import Link from 'next/link';

export const metadata = {
  title: 'Our Team | CyberShield Security Solutions',
  description: 'Meet the team of cybersecurity experts at CyberShield working to protect your business from emerging threats.',
};

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Alexander Mitchell',
      position: 'CEO & Founder',
      bio: 'With over 20 years of experience in cybersecurity, Dr. Mitchell has led security teams at major tech companies before founding CyberShield. He holds a Ph.D. in Computer Science and multiple industry certifications.',
      image: '/images/team-ceo.jpg',
      expertise: ['Security Strategy', 'Enterprise Architecture', 'Risk Management'],
      certifications: ['CISSP', 'CISM', 'Ph.D. Computer Science']
    },
    {
      id: 2,
      name: 'Sarah Thompson',
      position: 'Chief Security Officer',
      bio: 'Sarah brings 15+ years of experience in security operations and incident response. Previously, she led security programs at Fortune 500 companies and advised government agencies on cybersecurity strategy.',
      image: '/images/team-cso.jpg',
      expertise: ['Incident Response', 'Security Operations', 'Threat Intelligence'],
      certifications: ['CISSP', 'GIAC', 'CISM']
    },
    {
      id: 3,
      name: 'David Chen',
      position: 'Head of Penetration Testing',
      bio: 'David is a world-renowned ethical hacker who has discovered critical vulnerabilities in major systems. He leads our penetration testing team and develops cutting-edge testing methodologies.',
      image: '/images/team-pentester.jpg',
      expertise: ['Penetration Testing', 'Vulnerability Research', 'Exploit Development'],
      certifications: ['OSCP', 'CEH', 'GXPN']
    },
    {
      id: 4,
      name: 'Jessica Patel',
      position: 'Director of Security Consulting',
      bio: 'Jessica specializes in helping organizations build robust security programs. With expertise in compliance frameworks and risk management, she ensures our clients implement effective security strategies.',
      image: '/images/team-consulting.jpg',
      expertise: ['Security Compliance', 'GRC', 'Security Program Development'],
      certifications: ['CISA', 'CRISC', 'PMP']
    },
    {
      id: 5,
      name: 'Marcus Williams',
      position: 'Chief Technology Officer',
      bio: 'Marcus oversees the development of our security technologies and platforms. With a background in both software development and cybersecurity, he bridges the gap between innovative technology and practical security solutions.',
      image: '/images/team-cto.jpg',
      expertise: ['Security Architecture', 'Cloud Security', 'DevSecOps'],
      certifications: ['AWS Solutions Architect', 'CCSP', 'Azure Security Engineer']
    },
    {
      id: 6,
      name: 'Emma Rodriguez',
      position: 'Incident Response Manager',
      bio: 'Emma leads our incident response team, handling critical security breaches and helping clients recover from cyberattacks. Her quick thinking and methodical approach have saved numerous organizations from devastating breaches.',
      image: '/images/team-ir.jpg',
      expertise: ['Digital Forensics', 'Malware Analysis', 'Crisis Management'],
      certifications: ['GCFA', 'EnCE', 'GCIH']
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
              Meet the cybersecurity experts behind CyberShield's innovative security solutions.
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
                At CyberShield, we foster a culture of continuous learning, collaboration, and innovation. We believe that the best security solutions come from diverse perspectives and a shared commitment to excellence.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Our team members are encouraged to pursue their passions, develop new skills, and challenge conventional thinking. We invest heavily in professional development, research, and creating an environment where cybersecurity professionals can thrive.
              </p>
              <p className="text-lg text-gray-400">
                Beyond our technical expertise, we value integrity, client focus, and making a positive impact in the cybersecurity community through mentorship, education, and contributing to open-source security projects.
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
              We're always looking for talented individuals passionate about cybersecurity to join our growing team.
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