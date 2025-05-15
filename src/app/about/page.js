import Link from 'next/link';

export const metadata = {
  title: 'About Us | CyberShield Security Solutions',
  description: 'Learn about CyberShield, our mission, values, and the team of cybersecurity experts protecting businesses worldwide.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Alexander Mitchell',
      position: 'CEO & Founder',
      bio: 'With over 20 years of experience in cybersecurity, Dr. Mitchell has led security teams at major tech companies before founding CyberShield. He holds a Ph.D. in Computer Science and multiple industry certifications.',
      image: '/images/team-ceo.jpg'
    },
    {
      id: 2,
      name: 'Sarah Thompson',
      position: 'Chief Security Officer',
      bio: 'Sarah brings 15+ years of experience in security operations and incident response. Previously, she led security programs at Fortune 500 companies and advised government agencies on cybersecurity strategy.',
      image: '/images/team-cso.jpg'
    },
    {
      id: 3,
      name: 'David Chen',
      position: 'Head of Penetration Testing',
      bio: 'David is a world-renowned ethical hacker who has discovered critical vulnerabilities in major systems. He leads our penetration testing team and develops cutting-edge testing methodologies.',
      image: '/images/team-pentester.jpg'
    },
    {
      id: 4,
      name: 'Jessica Patel',
      position: 'Director of Security Consulting',
      bio: 'Jessica specializes in helping organizations build robust security programs. With expertise in compliance frameworks and risk management, she ensures our clients implement effective security strategies.',
      image: '/images/team-consulting.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CyberShield</h1>
            <p className="text-xl text-gray-300">
              Dedicated to protecting businesses from evolving cyber threats through expertise, innovation, and client-focused solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-white">Our Story</h2>
              <p className="text-lg text-gray-400 mb-6">
                Founded in 2008, CyberShield emerged when Dr. Alexander Mitchell recognized the growing gap between evolving cyber threats and the security measures most businesses had in place. With a small team of security experts, he established CyberShield with a mission to provide enterprise-grade security solutions accessible to organizations of all sizes.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Over the years, we've expanded from a small consulting firm to a comprehensive security provider with offices in 12 countries and a team of over 200 security professionals. Today, we protect the digital assets of more than 500 companies across various industries, from financial services and healthcare to retail and manufacturing.
              </p>
              <p className="text-lg text-gray-400">
                What sets us apart is our unwavering commitment to staying ahead of emerging threats, our dedication to tailoring solutions to each client's unique needs, and our focus on building long-term partnerships that evolve with the changing security landscape.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl bg-gray-900 p-8 text-white border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-3 text-emerald-400">Mission</h4>
                  <p className="text-gray-300">To empower organizations with the security tools, expertise, and confidence needed to thrive in an increasingly threatening digital landscape.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-emerald-400">Vision</h4>
                  <p className="text-gray-300">A world where businesses can innovate and grow without being constrained by cyber threats, supported by security solutions that are both powerful and accessible.</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-full h-full bg-emerald-900 rounded-lg transform translate-x-4 translate-y-4 -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12 text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg shadow-md border border-gray-800">
              <div className="bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-emerald-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Integrity</h3>
              <p className="text-gray-400">
                We maintain the highest ethical standards in everything we do, building trust through transparent practices and honest communication.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg shadow-md border border-gray-800">
              <div className="bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-emerald-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Innovation</h3>
              <p className="text-gray-400">
                We continuously explore new technologies and methodologies to stay ahead of evolving threats and deliver cutting-edge security solutions.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg shadow-md border border-gray-800">
              <div className="bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-emerald-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Client Partnership</h3>
              <p className="text-gray-400">
                We view ourselves as an extension of our clients' teams, focusing on their unique needs and building long-term relationships based on trust and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12 text-white">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
                <div className="h-48 bg-gray-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                  <p className="text-emerald-500 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
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