import Link from 'next/link';

export const metadata = {
  title: 'About Us | K-Infotech Global Consulting Services',
  description: 'Learn about K-Infotech Global Consulting Services, our mission, values, and our team of IT and cybersecurity experts helping businesses with digital transformation.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO & Founder',
      bio: 'With over 20 years of experience in IT and digital transformation, Rajesh has led technology teams at major global companies before founding K-Infotech. He holds an MBA and multiple industry certifications in IT management.',
      image: '/images/team-ceo.jpg'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Chief Technology Officer',
      bio: 'Priya brings 15+ years of experience in technology innovation and digital strategy. Previously, she led digital transformation initiatives at Fortune 500 companies and advised organizations on technology adoption.',
      image: '/images/team-cso.jpg'
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Head of Cybersecurity',
      bio: 'Amit is a respected cybersecurity expert who has helped numerous organizations strengthen their security posture. He leads our cybersecurity team and develops comprehensive security frameworks for clients.',
      image: '/images/team-pentester.jpg'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      position: 'Director of Consulting Services',
      bio: 'Neha specializes in helping organizations navigate their digital transformation journeys. With expertise in IT strategy and business process optimization, she ensures our clients implement effective technology solutions.',
      image: '/images/team-consulting.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About K-Infotech</h1>
            <p className="text-xl text-gray-300">
              A leading provider of innovative IT solutions, cybersecurity services, and digital transformation consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading text-white">Who We Are</h2>
              <p className="text-lg text-gray-400 mb-6">
                At K-Infotech Global Consulting Services, we are a leading provider of innovative IT solutions, cybersecurity services, and digital transformation consulting. With a rich history of excellence and a global presence, we specialize in delivering cutting-edge technology services to businesses of all sizes across various industries.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                Our team of highly skilled experts is dedicated to helping organizations navigate complex technological challenges, mitigate risks, and accelerate growth through tailored solutions. We help businesses adopt the latest technological trends to enhance operational efficiency, improve security, and achieve long-term sustainability.
              </p>
              <p className="text-lg text-gray-400">
                What sets us apart is our expertise and experience, tailored solutions approach, commitment to excellence, and our global reach with local impact. We focus on building long-term partnerships that evolve with the changing technology landscape.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl bg-gray-900 p-8 text-white border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-3 text-emerald-400">Mission</h4>
                  <p className="text-gray-300">Our mission is to empower businesses with the technology, expertise, and insights they need to achieve their goals and thrive in today's fast-paced digital world. We aim to provide comprehensive, innovative, and scalable IT solutions that ensure enhanced operational efficiency, improved security, and long-term sustainability.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-emerald-400">Vision</h4>
                  <p className="text-gray-300">We envision becoming the trusted partner for businesses worldwide by delivering innovative and impactful technology solutions that drive growth, efficiency, and success. We aspire to help our clients stay ahead of the technological curve, improve security, and achieve sustainable business performance.</p>
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
                We operate with honesty, transparency, and accountability in everything we do, ensuring trust and reliability in all our client relationships.
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
                We continuously explore new ways to leverage technology and provide creative solutions to complex problems. Innovation drives us to improve both our internal operations and the outcomes we deliver to clients.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg shadow-md border border-gray-800">
              <div className="bg-gray-800 h-16 w-16 rounded-full flex items-center justify-center text-emerald-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Customer-Centricity</h3>
              <p className="text-gray-400">
                Our clients are at the heart of everything we do. We prioritize their needs and work diligently to exceed their expectations, ensuring a high level of satisfaction in all our engagements.
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