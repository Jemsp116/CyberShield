import Link from 'next/link';

// In a real app, this would fetch data from a CMS or database
function getBlogPost(slug) {
  const blogPosts = [
    {
      id: 1,
      title: 'Zero Trust Architecture: A Modern Approach to Cybersecurity',
      slug: 'zero-trust-architecture',
      author: 'Jennifer Hayes',
      authorRole: 'Chief Security Officer',
      authorBio: 'Jennifer has over 15 years of experience in cybersecurity leadership roles across financial services and technology sectors. She specializes in security architecture and governance.',
      date: 'June 12, 2023',
      category: 'Enterprise Security',
      readTime: '7 min read',
      image: '/images/blog/zero-trust.jpg',
      excerpt: 'Traditional security models operate on the outdated assumption that everything inside an organization\'s network should be trusted. The Zero Trust model challenges this notion by assuming no user or system should be trusted by default.',
      content: `
        <p class="lead">
          Traditional security models operate on the outdated assumption that everything inside an organization's network should be trusted. The Zero Trust model challenges this notion by assuming no user or system should be trusted by default, regardless of whether they are inside or outside the organization's network perimeter.
        </p>
        
        <h2>The Limitations of Traditional Security Models</h2>
        
        <p>
          For decades, organizations have relied on a perimeter-based security approach, often described as a "castle and moat" strategy. This model focuses on fortifying the network boundary while implicitly trusting entities inside the perimeter. However, this approach has several critical flaws:
        </p>
        
        <ul>
          <li><strong>Once breached, attackers have excessive freedom:</strong> After bypassing perimeter defenses, attackers can often move laterally with minimal resistance.</li>
          <li><strong>Modern work environments transcend traditional boundaries:</strong> Remote work, cloud services, and bring-your-own-device policies have eroded the concept of a clearly defined network perimeter.</li>
          <li><strong>Insider threats remain unaddressed:</strong> Malicious insiders or compromised credentials already have trusted access within the perimeter.</li>
        </ul>
        
        <p>
          These limitations have led to numerous high-profile breaches where attackers gained initial access and then moved freely through internal systems, often remaining undetected for months.
        </p>
        
        <h2>Core Principles of Zero Trust</h2>
        
        <p>
          Zero Trust architecture is built on three fundamental principles:
        </p>
        
        <ol>
          <li>
            <strong>Verify explicitly:</strong> Always authenticate and authorize based on all available data points, including user identity, location, device health, service or workload, data classification, and anomalies.
          </li>
          <li>
            <strong>Use least privileged access:</strong> Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA), risk-based adaptive policies, and data protection to help secure both data and productivity.
          </li>
          <li>
            <strong>Assume breach:</strong> Minimize blast radius and segment access. Verify end-to-end encryption and use analytics to drive visibility, threat detection, and defense improvements.
          </li>
        </ol>
        
        <blockquote>
          "Never trust, always verify. Verify every user, every device, every application, every connection, every request, every time."
        </blockquote>
        
        <h2>Implementing Zero Trust: A Practical Roadmap</h2>
        
        <p>
          Transitioning to Zero Trust is a journey rather than a single project. Organizations should consider the following phased approach:
        </p>
        
        <h3>Phase 1: Identity and Access Management</h3>
        
        <p>
          The foundation of Zero Trust is robust identity management. Implement:
        </p>
        
        <ul>
          <li>Multi-factor authentication (MFA) for all users</li>
          <li>Risk-based conditional access policies</li>
          <li>Just-in-time privileged access management</li>
          <li>Regular access reviews and automated deprovisioning</li>
        </ul>
        
        <h3>Phase 2: Device Security</h3>
        
        <p>
          Ensure that only secure devices can access resources:
        </p>
        
        <ul>
          <li>Device health verification before granting access</li>
          <li>Endpoint detection and response (EDR) solutions</li>
          <li>Automated patching and compliance monitoring</li>
          <li>Device encryption and secure configuration enforcement</li>
        </ul>
        
        <h3>Phase 3: Network Segmentation</h3>
        
        <p>
          Divide networks into smaller, isolated zones:
        </p>
        
        <ul>
          <li>Implement micro-segmentation to limit lateral movement</li>
          <li>Deploy next-generation firewalls for east-west traffic inspection</li>
          <li>Use software-defined perimeters for dynamic access control</li>
          <li>Encrypt all network traffic, even within the internal network</li>
        </ul>
        
        <h3>Phase 4: Data Protection</h3>
        
        <p>
          Protect data regardless of where it resides:
        </p>
        
        <ul>
          <li>Implement data classification and labeling</li>
          <li>Deploy data loss prevention (DLP) controls</li>
          <li>Enforce encryption for data at rest and in transit</li>
          <li>Use rights management to control data access even after it leaves your environment</li>
        </ul>
        
        <h3>Phase 5: Continuous Monitoring and Analytics</h3>
        
        <p>
          Implement comprehensive visibility and analytics:
        </p>
        
        <ul>
          <li>Deploy a security information and event management (SIEM) solution</li>
          <li>Implement user and entity behavior analytics (UEBA)</li>
          <li>Establish automated incident response playbooks</li>
          <li>Conduct regular security testing and validation</li>
        </ul>
        
        <h2>Challenges and Considerations</h2>
        
        <p>
          While Zero Trust offers significant security benefits, organizations should be aware of these challenges:
        </p>
        
        <ul>
          <li><strong>Performance concerns:</strong> Additional security checks can introduce latency if not properly implemented</li>
          <li><strong>Legacy system integration:</strong> Older systems may not support modern authentication and authorization mechanisms</li>
          <li><strong>User experience:</strong> Balancing security with usability requires careful design</li>
          <li><strong>Organizational change:</strong> Zero Trust requires both technical and cultural shifts</li>
        </ul>
        
        <h2>Conclusion</h2>
        
        <p>
          Zero Trust is not just a technology solution but a comprehensive security strategy that requires rethinking how we approach security. By implementing the principle of "never trust, always verify" across all aspects of the IT environment, organizations can significantly improve their security posture and reduce their risk of breaches in today's complex threat landscape.
        </p>
        
        <p>
          While the journey to Zero Trust may seem daunting, organizations can adopt an incremental approach, starting with identity and gradually expanding to devices, networks, applications, and data. Each step in this journey brings tangible security benefits and moves the organization closer to a more resilient security posture.
        </p>
      `,
      relatedPosts: [2, 3, 7]
    },
    // Other blog posts would be defined here
  ];

  return blogPosts.find(post => post.slug === slug);
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | CyberShield Security Solutions',
      description: 'The blog post you are looking for could not be found.',
    };
  }
  
  return {
    title: `${post.title} | CyberShield Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <div className="container-custom py-16">
          <h1 className="text-3xl text-white font-bold mb-6">Post Not Found</h1>
          <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
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
          <Link href="/blog" className="text-emerald-500 flex items-center mb-6 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-8">{post.title}</h1>
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
              <div>
                <div className="font-medium text-white">{post.author}</div>
                <div className="text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="h-80 md:h-96 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
      </div>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">Zero Trust</span>
                  <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">Security Architecture</span>
                  <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">Enterprise Security</span>
                  <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">Security Strategy</span>
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Share this article</h3>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.924 0 .386.044.761.127 1.122-4.092-.206-7.72-2.165-10.148-5.145-.423.727-.666 1.573-.666 2.475 0 1.708.87 3.215 2.19 4.098-.807-.026-1.566-.247-2.23-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 p-8 bg-gray-900 rounded-lg border border-gray-800">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-700 rounded-full mr-6 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">About {post.author}</h3>
                    <p className="text-gray-400 mb-3">{post.authorRole}</p>
                    <p className="text-gray-300">
                      {post.authorBio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              {/* Sidebar */}
              <div className="sticky top-24">
                {/* Table of Contents */}
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="text-emerald-500 hover:text-emerald-400">The Limitations of Traditional Security Models</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-emerald-500">Core Principles of Zero Trust</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-emerald-500">Implementing Zero Trust: A Practical Roadmap</a>
                      <ul className="pl-4 mt-2 space-y-2">
                        <li>
                          <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm">Phase 1: Identity and Access Management</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm">Phase 2: Device Security</a>
                        </li>
                        <li>
                          <a href="#" className="text-gray-400 hover:text-emerald-500 text-sm">Phase 3: Network Segmentation</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-emerald-500">Challenges and Considerations</a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-emerald-500">Conclusion</a>
                    </li>
                  </ul>
                </div>
                
                {/* Newsletter */}
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8">
                  <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    Subscribe to our newsletter for the latest cybersecurity insights.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <button className="btn-primary w-full py-2 text-sm">
                      Subscribe
                    </button>
                  </form>
                </div>
                
                {/* Related Posts */}
                <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-800 rounded flex-shrink-0"></div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-white hover:text-emerald-500 transition-colors">
                          <Link href="/blog/rising-threat-of-ransomware">
                            The Rising Threat of Ransomware: How to Prepare and Respond
                          </Link>
                        </h4>
                        <div className="text-xs text-gray-400 mt-1">May 28, 2023</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-800 rounded flex-shrink-0"></div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-white hover:text-emerald-500 transition-colors">
                          <Link href="/blog/securing-multi-cloud-environments">
                            Securing the Cloud: Best Practices for Multi-Cloud Environments
                          </Link>
                        </h4>
                        <div className="text-xs text-gray-400 mt-1">May 15, 2023</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-gray-800 rounded flex-shrink-0"></div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-white hover:text-emerald-500 transition-colors">
                          <Link href="/blog/compliance-vs-security">
                            Compliance is Not Security: Going Beyond Regulatory Requirements
                          </Link>
                        </h4>
                        <div className="text-xs text-gray-400 mt-1">March 10, 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* More from CyberShield */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12 text-white">More from CyberShield</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black rounded-lg border border-gray-800 p-6">
              <div className="text-emerald-500 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Security Assessment</h3>
              <p className="text-gray-400 mb-6">
                Discover vulnerabilities in your security posture with our comprehensive assessment service.
              </p>
              <Link href="/services/security-assessment" className="text-emerald-500 font-medium hover:text-emerald-400">
                Learn more →
              </Link>
            </div>
            
            <div className="bg-black rounded-lg border border-gray-800 p-6">
              <div className="text-emerald-500 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Join Our Team</h3>
              <p className="text-gray-400 mb-6">
                We're always looking for talented security professionals to join our growing team.
              </p>
              <Link href="/careers" className="text-emerald-500 font-medium hover:text-emerald-400">
                View open positions →
              </Link>
            </div>
            
            <div className="bg-black rounded-lg border border-gray-800 p-6">
              <div className="text-emerald-500 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Request a Consultation</h3>
              <p className="text-gray-400 mb-6">
                Speak with our security experts to address your specific cybersecurity challenges.
              </p>
              <Link href="/contact" className="text-emerald-500 font-medium hover:text-emerald-400">
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 