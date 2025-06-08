import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Import blog data (in a real application, this would likely come from a CMS or API)
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
    featured: true,
    content: `
      <p class="lead">Traditional security models operate on the outdated assumption that everything inside an organization's network should be trusted. The Zero Trust model challenges this notion by assuming no user or system should be trusted by default.</p>
      
      <p>In today's rapidly evolving threat landscape, the traditional perimeter-based security model is no longer sufficient. Zero Trust Architecture (ZTA) has emerged as a more effective approach to cybersecurity, particularly as organizations embrace cloud services, remote work, and bring-your-own-device policies.</p>
      
      <h2>Core Principles of Zero Trust</h2>
      
      <p>The Zero Trust security model is built on several fundamental principles:</p>
      
      <ul>
        <li><strong>Never Trust, Always Verify:</strong> Every access request must be fully authenticated, authorized, and encrypted before granting access.</li>
        <li><strong>Least Privilege Access:</strong> Users should only have access to the resources they need to perform their job functions and nothing more.</li>
        <li><strong>Assume Breach:</strong> Organizations should operate under the assumption that a breach has already occurred or will occur, and design their defenses accordingly.</li>
        <li><strong>Micro-Segmentation:</strong> Networks should be divided into isolated segments, with separate access for each segment.</li>
        <li><strong>Continuous Monitoring and Validation:</strong> Security should be continuously assessed and trust continuously verified.</li>
      </ul>
      
      <h2>Implementing Zero Trust Architecture</h2>
      
      <p>Transitioning to a Zero Trust model requires a strategic approach:</p>
      
      <ol>
        <li><strong>Identify Your Protect Surface:</strong> Determine what critical data, applications, assets, and services need protection.</li>
        <li><strong>Map Transaction Flows:</strong> Understand how traffic moves across your network to determine how it should be protected.</li>
        <li><strong>Design a Zero Trust Network:</strong> Create a network architecture that enforces secure access to resources.</li>
        <li><strong>Create Zero Trust Policies:</strong> Develop policies that determine who can access what resources under what circumstances.</li>
        <li><strong>Monitor and Maintain:</strong> Continuously monitor all logs and traffic, looking for anomalous or malicious activity.</li>
      </ol>
      
      <h2>Benefits of Zero Trust</h2>
      
      <p>Organizations that implement Zero Trust Architecture can realize several benefits:</p>
      
      <ul>
        <li>Reduced risk of data breaches</li>
        <li>Improved visibility into network traffic</li>
        <li>Better control over access to sensitive resources</li>
        <li>Enhanced compliance with regulatory requirements</li>
        <li>Greater flexibility in supporting remote work and BYOD policies</li>
      </ul>
      
      <h2>Challenges in Adoption</h2>
      
      <p>While the benefits are significant, implementing Zero Trust is not without challenges:</p>
      
      <ul>
        <li>Legacy systems may not support modern authentication methods</li>
        <li>Initial implementation can be complex and resource-intensive</li>
        <li>User experience may be impacted if not implemented thoughtfully</li>
        <li>Cultural resistance to stricter access controls</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Zero Trust Architecture represents a paradigm shift in how organizations approach cybersecurity. By assuming that threats exist both inside and outside the network, Zero Trust provides a more robust security posture suited to today's complex threat landscape. While implementation requires careful planning and resources, the enhanced security posture is increasingly becoming a necessity rather than a luxury for organizations of all sizes.</p>
    `
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
    featured: true,
    content: `
      <p class="lead">Ransomware attacks have increased by 150% in the past year alone. Organizations must understand the evolving tactics of ransomware operators and develop comprehensive defense strategies.</p>
      
      <p>Ransomware continues to be one of the most significant cyber threats facing organizations today. As attack methods become more sophisticated and ransom demands increase, businesses need robust strategies to prevent, detect, and respond to these threats.</p>
      
      <h2>The Current Ransomware Landscape</h2>
      
      <p>Modern ransomware attacks have evolved beyond simple encryption of files. Today's ransomware operators employ multiple extortion techniques:</p>
      
      <ul>
        <li><strong>Double Extortion:</strong> Stealing sensitive data before encryption and threatening to publish it</li>
        <li><strong>Triple Extortion:</strong> Adding DDoS attacks or contacting customers/partners as additional pressure tactics</li>
        <li><strong>Ransomware-as-a-Service (RaaS):</strong> Allowing less technical criminals to deploy sophisticated ransomware through subscription models</li>
        <li><strong>Supply Chain Attacks:</strong> Targeting managed service providers or software vendors to compromise multiple victims simultaneously</li>
      </ul>
      
      <h2>Prevention Strategies</h2>
      
      <p>While no defense is foolproof, organizations can significantly reduce their risk with these measures:</p>
      
      <ol>
        <li><strong>Regular Backups:</strong> Maintain offline, encrypted backups of critical data and regularly test restoration procedures</li>
        <li><strong>Patch Management:</strong> Promptly apply security updates to operating systems and applications</li>
        <li><strong>Email Security:</strong> Implement robust email filtering to block phishing attempts and malicious attachments</li>
        <li><strong>Network Segmentation:</strong> Limit lateral movement by separating critical systems from general networks</li>
        <li><strong>Principle of Least Privilege:</strong> Restrict user permissions to only what's necessary for their role</li>
        <li><strong>Multi-Factor Authentication:</strong> Require MFA for all remote access and administrative functions</li>
      </ol>
      
      <h2>Detection Capabilities</h2>
      
      <p>Early detection can significantly limit the impact of ransomware:</p>
      
      <ul>
        <li>Deploy endpoint detection and response (EDR) solutions</li>
        <li>Implement file integrity monitoring on critical systems</li>
        <li>Monitor for unusual access patterns or mass file modifications</li>
        <li>Use deception technology (honeypots) to detect lateral movement</li>
        <li>Establish 24/7 security monitoring capabilities</li>
      </ul>
      
      <h2>Incident Response Planning</h2>
      
      <p>When prevention fails, a well-prepared response is crucial:</p>
      
      <ol>
        <li><strong>Develop a Ransomware-Specific Playbook:</strong> Document step-by-step procedures for containment, eradication, and recovery</li>
        <li><strong>Establish Decision Criteria:</strong> Determine in advance under what circumstances (if any) your organization would consider paying a ransom</li>
        <li><strong>Form a Cross-Functional Response Team:</strong> Include IT, security, legal, communications, and executive leadership</li>
        <li><strong>Conduct Regular Exercises:</strong> Test your response capabilities through tabletop exercises and simulations</li>
        <li><strong>Establish Relationships with External Resources:</strong> Identify forensic specialists, legal counsel, and law enforcement contacts before an incident occurs</li>
      </ol>
      
      <h2>To Pay or Not to Pay?</h2>
      
      <p>The question of whether to pay a ransom is complex and controversial. Consider these factors:</p>
      
      <ul>
        <li>Payment does not guarantee full data recovery</li>
        <li>Payment may violate sanctions regulations depending on the threat actor</li>
        <li>Payment encourages further criminal activity</li>
        <li>The cost of recovery without paying may exceed the ransom amount</li>
        <li>Business impact of extended downtime may be severe</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Ransomware remains a persistent threat that requires a comprehensive security approach. By implementing strong preventive measures, enhancing detection capabilities, and developing robust response plans, organizations can significantly reduce both the likelihood and impact of ransomware attacks. Remember that preparation is not a one-time effort but an ongoing process that must evolve as threats continue to change.</p>
    `
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
    featured: false,
    content: `
      <p class="lead">As organizations increasingly adopt multi-cloud strategies, security teams face the challenge of protecting data and applications across different cloud providers with varying security controls and capabilities.</p>
      
      <p>Multi-cloud environments have become the norm for many organizations seeking to leverage the best capabilities of different cloud providers, avoid vendor lock-in, and enhance resilience. However, this approach introduces significant security challenges that require careful planning and implementation.</p>
      
      <h2>The Multi-Cloud Security Challenge</h2>
      
      <p>Securing multi-cloud environments is inherently complex due to:</p>
      
      <ul>
        <li><strong>Inconsistent Security Controls:</strong> Each cloud provider offers different native security tools and capabilities</li>
        <li><strong>Expanded Attack Surface:</strong> More cloud environments mean more potential entry points for attackers</li>
        <li><strong>Skills Gap:</strong> Security teams must be proficient across multiple cloud platforms</li>
        <li><strong>Visibility Challenges:</strong> Maintaining comprehensive visibility across disparate environments is difficult</li>
        <li><strong>Compliance Complexity:</strong> Different providers may have different compliance certifications and capabilities</li>
      </ul>
      
      <h2>Essential Security Practices for Multi-Cloud</h2>
      
      <h3>1. Centralized Identity and Access Management</h3>
      
      <p>Implement a unified approach to identity management:</p>
      
      <ul>
        <li>Use federated identity solutions to centralize authentication</li>
        <li>Implement consistent role-based access control across clouds</li>
        <li>Enforce multi-factor authentication universally</li>
        <li>Regularly audit access privileges across all environments</li>
      </ul>
      
      <h3>2. Unified Security Monitoring</h3>
      
      <p>Establish comprehensive visibility:</p>
      
      <ul>
        <li>Aggregate logs from all cloud environments into a central SIEM</li>
        <li>Implement cloud security posture management (CSPM) tools</li>
        <li>Deploy cloud-native application protection platforms (CNAPP)</li>
        <li>Establish consistent alerting thresholds and response procedures</li>
      </ul>
      
      <h3>3. Standardized Security Policies</h3>
      
      <p>Create consistent security baselines:</p>
      
      <ul>
        <li>Develop cloud-agnostic security policies where possible</li>
        <li>Use infrastructure as code (IaC) to enforce security configurations</li>
        <li>Implement policy-as-code to automate compliance checks</li>
        <li>Regularly validate configurations against security benchmarks</li>
      </ul>
      
      <h3>4. Data Protection Strategies</h3>
      
      <p>Secure data consistently across environments:</p>
      
      <ul>
        <li>Implement consistent encryption for data at rest and in transit</li>
        <li>Establish clear data classification and handling procedures</li>
        <li>Use cloud-agnostic key management solutions where possible</li>
        <li>Implement data loss prevention controls across all environments</li>
      </ul>
      
      <h3>5. Network Security Controls</h3>
      
      <p>Secure network traffic within and between clouds:</p>
      
      <ul>
        <li>Implement micro-segmentation to limit lateral movement</li>
        <li>Use cloud-native firewalls and web application firewalls</li>
        <li>Secure API communications between cloud environments</li>
        <li>Consider cloud security service mesh implementations</li>
      </ul>
      
      <h2>Governance and Compliance</h2>
      
      <p>Establish robust governance frameworks:</p>
      
      <ul>
        <li>Develop a cloud security architecture that spans all providers</li>
        <li>Implement continuous compliance monitoring</li>
        <li>Conduct regular security assessments of all cloud environments</li>
        <li>Maintain comprehensive documentation of security controls</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>While multi-cloud environments introduce security challenges, they can be effectively managed with the right approach. By implementing consistent security controls, centralizing identity management, establishing unified monitoring, and developing standardized policies, organizations can realize the benefits of multi-cloud while maintaining a strong security posture. The key is to view security holistically across all environments rather than treating each cloud as a separate security domain.</p>
    `
  }
];

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | K-Infotech Global Consulting Services',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | K-Infotech Global Consulting Services`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    notFound();
  }
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-gray-400 text-sm ml-4">
                {post.date} • {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
              <div>
                <div className="text-lg font-medium text-white">{post.author}</div>
                <div className="text-sm text-gray-400">{post.authorRole}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
                <div className="relative h-80 w-full bg-gray-800">
                  {/* Image placeholder - in a real implementation, you would use Next.js Image component */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <span>Featured Image: {post.image}</span>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    Cybersecurity
                  </span>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    Best Practices
                  </span>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 bg-gray-900 rounded-lg p-8 border border-gray-800">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-700 rounded-full mr-6 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{post.author}</h3>
                    <p className="text-gray-400 mb-4">{post.authorRole} at K-Infotech Global Consulting Services</p>
                    <p className="text-gray-300">
                      An experienced cybersecurity professional with expertise in {post.category.toLowerCase()} 
                      and a passion for helping organizations build robust security programs.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="mt-8 flex items-center">
                <span className="text-gray-400 mr-4">Share this article:</span>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                    <span className="sr-only">Share on Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-800 hover:text-white transition-colors">
                    <span className="sr-only">Share on LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-emerald-600 hover:text-white transition-colors">
                    <span className="sr-only">Share via Email</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Preview Link */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <Link 
                  href={`/blog/preview/${post.slug}`}
                  className="inline-flex items-center text-emerald-500 hover:text-emerald-400 font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  View Preview Version
                </Link>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Table of Contents */}
              <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
                <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {post.content.match(/<h2>(.*?)<\/h2>/g)?.map((match, index) => {
                    const title = match.replace('<h2>', '').replace('</h2>', '');
                    const anchor = title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                    return (
                      <a 
                        key={index}
                        href={`#${anchor}`} 
                        className="block text-gray-300 hover:text-emerald-500 transition-colors"
                      >
                        {title}
                      </a>
                    );
                  })}
                </nav>
              </div>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.map(relatedPost => (
                      <div key={relatedPost.id} className="flex items-start">
                        <div className="w-20 h-20 bg-gray-800 rounded flex-shrink-0 mr-4"></div>
                        <div>
                          <h4 className="font-medium text-white hover:text-emerald-500 transition-colors">
                            <Link href={`/blog/${relatedPost.slug}`}>
                              {relatedPost.title}
                            </Link>
                          </h4>
                          <div className="text-xs text-gray-400 mt-1">
                            {relatedPost.date} • {relatedPost.readTime}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <Link 
                      href="/blog" 
                      className="text-emerald-500 hover:text-emerald-400 font-medium flex items-center"
                    >
                      View all articles
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Stay Updated with Our Newsletter</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to receive the latest cybersecurity insights, industry trends, and best practices directly in your inbox.
            </p>
            <form className="max-w-md mx-auto">
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
            </form>
          </div>
        </div>
      </section>
      
      {/* Back to Blog */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex justify-center">
            <Link 
              href="/blog" 
              className="flex items-center text-emerald-500 hover:text-emerald-400 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}