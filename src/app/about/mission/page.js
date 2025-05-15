import Link from 'next/link';

export const metadata = {
  title: 'Mission & Vision | CyberShield Security Solutions',
  description: 'Learn about CyberShield\'s mission and vision for cybersecurity and how we work to create a safer digital world for all businesses.',
};

export default function MissionPage() {
  const milestones = [
    {
      year: '2008',
      title: 'Founded',
      description: 'CyberShield was founded by Dr. Alexander Mitchell with a small team of security experts in response to growing cybersecurity challenges.'
    },
    {
      year: '2010',
      title: 'First Major Client',
      description: 'Secured our first Fortune 500 client, validating our approach to enterprise security solutions.'
    },
    {
      year: '2012',
      title: 'International Expansion',
      description: 'Opened our first international office in London, beginning our global expansion.'
    },
    {
      year: '2015',
      title: 'Security Platform Launch',
      description: 'Launched our proprietary security monitoring and management platform, enhancing our service offerings.'
    },
    {
      year: '2018',
      title: 'Cybersecurity Excellence Award',
      description: 'Recognized with the Cybersecurity Excellence Award for our innovative approach to threat detection.'
    },
    {
      year: '2021',
      title: '500th Client',
      description: 'Reached the milestone of protecting 500 businesses worldwide with our cybersecurity solutions.'
    },
    {
      year: '2023',
      title: 'AI Security Division',
      description: 'Established a dedicated AI security division to address emerging threats in artificial intelligence.'
    }
  ];

  const principles = [
    {
      title: 'Proactive Protection',
      description: 'We believe in anticipating threats before they materialize, staying ahead of attackers through continuous research and innovation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'Client Partnership',
      description: 'Security is a journey, not a destination. We partner closely with clients to continuously evolve their security posture as threats change.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Democratizing Security',
      description: 'We believe robust cybersecurity should be accessible to organizations of all sizes, not just those with the largest budgets.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      )
    },
    {
      title: 'Knowledge Sharing',
      description: 'We contribute to the security community through research, education, and open-source tools to collectively enhance cybersecurity for all.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mission & Vision</h1>
            <p className="text-xl text-gray-300">
              Our guiding principles and commitment to creating a safer digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="cyber-card border border-gray-800">
              <div className="p-8">
                <div className="bg-emerald-800 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-gray-400 mb-6">
                  To empower organizations with the security tools, expertise, and confidence needed to thrive in an increasingly threatening digital landscape.
                </p>
                <p className="text-lg text-gray-400">
                  We achieve this by delivering innovative cybersecurity solutions that protect critical assets, enable secure business operations, and build resilience against evolving threats.
                </p>
              </div>
            </div>
            
            <div className="cyber-card border border-gray-800">
              <div className="p-8">
                <div className="bg-emerald-800 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
                <p className="text-lg text-gray-400 mb-6">
                  A world where businesses can innovate and grow without being constrained by cyber threats, supported by security solutions that are both powerful and accessible.
                </p>
                <p className="text-lg text-gray-400">
                  We envision a future where organizations of all sizes have access to enterprise-grade security, allowing them to focus on their core mission while we safeguard their digital assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12 text-white">Our Guiding Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800">
                <div className="flex items-start">
                  <div className="bg-gray-800 rounded-full p-3 text-emerald-500 mr-4">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{principle.title}</h3>
                    <p className="text-gray-400">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12 text-white">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800" aria-hidden="true"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-emerald-600 border-4 border-black"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:mr-12 md:text-right' : 'md:ml-12'}`}>
                    <div className="cyber-card border border-gray-800">
                      <div className="p-6">
                        <span className="text-emerald-500 font-bold block mb-2">{milestone.year}</span>
                        <h3 className="text-xl font-bold mb-3 text-white">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Our Mission</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Partner with CyberShield to protect your business and become part of our vision for a secure digital future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-secondary bg-transparent hover:bg-white text-white hover:text-emerald-700 border-white">
                Contact Us
              </Link>
              <Link href="/services" className="btn-secondary bg-white hover:bg-gray-100 text-emerald-700 hover:text-emerald-800 border-white">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 