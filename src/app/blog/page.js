import Link from 'next/link';

export const metadata = {
  title: 'Blog | K-Infotech Global Consulting Services',
  description: 'Latest IT, cybersecurity insights, trends, and best practices from our technology experts.',
};

const blogPosts = [
  {
    id: 1,
    title: 'Zero Trust Architecture: A Modern Approach to Cybersecurity',
    slug: 'zero-trust-architecture',
    author: 'Jennifer Hayes',
    authorRole: 'Chief Security Officer',
    date: 'June 12, 2023',
    category: 'Enterprise Security',
    excerpt: 'Traditional security models operate on the outdated assumption that everything inside an organization\'s network should be trusted. The Zero Trust model challenges this notion by assuming no user or system should be trusted by default.',
    readTime: '7 min read',
    image: '/images/blog/zero-trust.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'The Rising Threat of Ransomware: How to Prepare and Respond',
    slug: 'rising-threat-of-ransomware',
    author: 'Michael Chen',
    authorRole: 'Incident Response Team Lead',
    date: 'May 28, 2023',
    category: 'Threat Intelligence',
    excerpt: 'Ransomware attacks have increased by 150% in the past year alone. Organizations must understand the evolving tactics of ransomware operators and develop comprehensive defense strategies.',
    readTime: '9 min read',
    image: '/images/blog/ransomware.jpg',
    featured: true
  },
  {
    id: 3,
    title: 'Securing the Cloud: Best Practices for Multi-Cloud Environments',
    slug: 'securing-multi-cloud-environments',
    author: 'Sarah Johnson',
    authorRole: 'Cloud Security Architect',
    date: 'May 15, 2023',
    category: 'Cloud Security',
    excerpt: 'As organizations increasingly adopt multi-cloud strategies, security teams face the challenge of protecting data and applications across different cloud providers with varying security controls and capabilities.',
    readTime: '8 min read',
    image: '/images/blog/cloud-security.jpg',
    featured: false
  },
  {
    id: 4,
    title: 'AI in Cybersecurity: Promise and Peril',
    slug: 'ai-in-cybersecurity',
    author: 'Dr. Robert Zhang',
    authorRole: 'AI Security Research Lead',
    date: 'April 30, 2023',
    category: 'Emerging Technology',
    excerpt: 'Artificial intelligence is revolutionizing cybersecurity, enabling faster threat detection and response. However, threat actors are also leveraging AI to enhance their attacks, creating an evolving technological arms race.',
    readTime: '11 min read',
    image: '/images/blog/ai-security.jpg',
    featured: false
  },
  {
    id: 5,
    title: 'Security Implications of IoT in Enterprise Environments',
    slug: 'iot-security-implications',
    author: 'Daniel Martinez',
    authorRole: 'IoT Security Specialist',
    date: 'April 15, 2023',
    category: 'IoT Security',
    excerpt: 'The proliferation of IoT devices in the workplace introduces significant security challenges. From smart lightbulbs to industrial sensors, each device represents a potential entry point for attackers.',
    readTime: '6 min read',
    image: '/images/blog/iot-security.jpg',
    featured: false
  },
  {
    id: 6,
    title: 'Building a Security-First Development Culture',
    slug: 'security-first-development',
    author: 'Emily Watson',
    authorRole: 'Application Security Director',
    date: 'March 28, 2023',
    category: 'Application Security',
    excerpt: 'Integrating security into the software development lifecycle is no longer optional. Organizations that build security into their development culture from the ground up produce more secure and reliable applications.',
    readTime: '8 min read',
    image: '/images/blog/devsecops.jpg',
    featured: false
  },
  {
    id: 7,
    title: 'Compliance is Not Security: Going Beyond Regulatory Requirements',
    slug: 'compliance-vs-security',
    author: 'Thomas Anderson',
    authorRole: 'Governance & Compliance Lead',
    date: 'March 10, 2023',
    category: 'Compliance & Governance',
    excerpt: 'While regulatory compliance is necessary, it often represents the minimum security baseline. This article explores how organizations can build robust security programs that exceed compliance requirements.',
    readTime: '7 min read',
    image: '/images/blog/compliance.jpg',
    featured: false
  },
  {
    id: 8,
    title: 'The Human Element: Social Engineering in the Digital Age',
    slug: 'social-engineering-digital-age',
    author: 'Amanda Parker',
    authorRole: 'Security Awareness Trainer',
    date: 'February 22, 2023',
    category: 'Security Awareness',
    excerpt: 'Despite technological advances in security, humans remain the most exploitable vulnerability in most organizations. Understanding modern social engineering tactics is essential for effective defense.',
    readTime: '9 min read',
    image: '/images/blog/social-engineering.jpg',
    featured: false
  }
];

export default function BlogPage() {
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  // Get all other posts
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Technology & Cybersecurity Insights</h1>
            <p className="text-xl text-gray-300">
              Expert analysis, industry trends, and practical advice from our IT and security professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <h2 className="section-heading text-white mb-12">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-emerald-500 transition-all group">
                  <div className="relative h-60 bg-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <div className="flex items-center mb-3">
                      <Link 
                        href={`/blog/preview/${post.slug}`}
                        className="text-xs text-emerald-500 hover:text-emerald-400 flex items-center"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        Preview Article
                      </Link>
                    </div>
                    <p className="text-gray-400 mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-700 rounded-full mr-3"></div>
                      <div>
                        <div className="text-sm font-medium text-white">{post.author}</div>
                        <div className="text-xs text-gray-400">{post.authorRole}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="section-heading text-white mb-4 md:mb-0">Latest Articles</h2>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <select className="appearance-none bg-black border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>All Categories</option>
                  <option>Cloud Security</option>
                  <option>Threat Intelligence</option>
                  <option>Application Security</option>
                  <option>Compliance & Governance</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <select className="appearance-none bg-black border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <div key={post.id} className="bg-black rounded-lg overflow-hidden border border-gray-800 hover:border-emerald-500 transition-all group">
                <div className="relative h-48 bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex items-center mb-3">
                    <Link 
                      href={`/blog/preview/${post.slug}`}
                      className="text-xs text-emerald-500 hover:text-emerald-400 flex items-center"
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      Preview Article
                    </Link>
                  </div>
                  <p className="text-gray-400 mb-5 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 bg-gray-700 rounded-full mr-3"></div>
                    <div>
                      <div className="font-medium text-white">{post.author}</div>
                      <div className="text-xs text-gray-400">{post.authorRole}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                <span className="sr-only">Previous</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-lg border border-emerald-500 bg-emerald-500 bg-opacity-10 flex items-center justify-center text-emerald-500 font-medium">
                1
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                2
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                3
              </button>
              <button className="w-10 h-10 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                <span className="sr-only">Next</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gray-900 rounded-lg p-8 md:p-12 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
                <p className="text-gray-400 mb-0">
                  Get the latest cybersecurity insights delivered directly to your inbox.
                  We'll send you expert analysis, emerging threats, and best practices.
                </p>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="bg-black border border-gray-700 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 flex-grow"
                    />
                    <button className="btn-primary whitespace-nowrap py-3 px-6">
                      Subscribe
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    We respect your privacy. Unsubscribe at any time.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 