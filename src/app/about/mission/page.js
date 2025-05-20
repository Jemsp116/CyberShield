import Link from 'next/link';

export const metadata = {
  title: 'Mission & Vision | K-Infotech Global Consulting Services',
  description: 'Learn about K-Infotech\'s mission and vision for IT solutions, cybersecurity, and digital transformation to help businesses thrive in the digital era.',
};

export default function MissionPage() {
  const milestones = [
    {
      year: '2010',
      title: 'Founded',
      description: 'K-Infotech was founded by Rajesh Kumar with a small team of IT experts to provide innovative technology solutions to businesses.'
    },
    {
      year: '2012',
      title: 'First Major Client',
      description: 'Secured our first enterprise client, validating our approach to comprehensive IT solutions and consulting services.'
    },
    {
      year: '2014',
      title: 'Cybersecurity Division',
      description: 'Established our dedicated cybersecurity division to address growing digital security challenges for our clients.'
    },
    {
      year: '2016',
      title: 'Digital Transformation Practice',
      description: 'Launched our digital transformation practice to help businesses modernize their operations and technology stack.'
    },
    {
      year: '2018',
      title: 'IT Excellence Award',
      description: 'Recognized with the IT Excellence Award for our innovative approach to business technology solutions.'
    },
    {
      year: '2021',
      title: '500th Client',
      description: 'Reached the milestone of serving 500 businesses worldwide with our IT and cybersecurity solutions.'
    },
    {
      year: '2023',
      title: 'Cloud & AI Division',
      description: 'Established a dedicated Cloud & AI division to help businesses leverage advanced technologies for growth and innovation.'
    }
  ];

  const principles = [
    {
      title: 'Innovation',
      description: 'We continuously explore new ways to leverage technology and provide creative solutions to complex problems, staying ahead through research and innovation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Customer-Centricity',
      description: 'Our clients are at the heart of everything we do. We prioritize their needs and work diligently to exceed their expectations in all our engagements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and accountability in everything we do, ensuring trust and reliability in all our client relationships.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork—not only within our company but also in collaboration with our clients. By working together, we drive positive outcomes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
                  Our mission is to empower businesses with the technology, expertise, and insights they need to achieve their goals and thrive in today's fast-paced digital world.
                </p>
                <p className="text-lg text-gray-400">
                  We aim to provide comprehensive, innovative, and scalable IT solutions that ensure enhanced operational efficiency, improved security, and long-term sustainability. By aligning technology with business goals, we enable companies to stay competitive and successful in an increasingly digital landscape.
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
                  We envision becoming the trusted partner for businesses worldwide by delivering innovative and impactful technology solutions that drive growth, efficiency, and success.
                </p>
                <p className="text-lg text-gray-400">
                  We aspire to help our clients stay ahead of the technological curve, improve security, and achieve sustainable business performance by embracing the latest trends and advancements in IT, cybersecurity, and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12 text-white">Our Core Values</h2>
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

     

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Our Mission</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Partner with K-Infotech to transform your business and become part of our vision for a successful digital future.
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