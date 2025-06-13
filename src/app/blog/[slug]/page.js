"use client";

import Link from 'next/link';
import { getBlogsData } from '@/data/loaders';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { StrapiImage } from '@/components/strapi/StrapiImage';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function BlogPostPage({ params }) {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = params;

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBlogsData();
        // Check if result is an object with a data property
        const postsData = result?.data || result || [];

        // Ensure we're working with an array
        const posts = Array.isArray(postsData) ? postsData : [];

        setBlogPosts(posts);

        // Find the post with the matching slug
        const foundPost = posts.find(p => p.documentId === slug);

        if (foundPost) {
          setPost(foundPost);

          // Get related posts (same category, excluding current post)
          const related = posts
            .filter(p =>
              p.category.slug === foundPost.category.slug &&
              p.documentId !== foundPost.documentId
            )
            .slice(0, 3);

          setRelatedPosts(related);
        } else {
          // Post not found, redirect to 404
          router.push('/404');
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug, router]);

  // Show loading state while data is being fetched
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-emerald-500 text-xl">Loading post...</div>
      </div>
    );
  }

  // If post wasn't found, this will be handled by the router.push above
  if (!post) {
    return null;
  }

  // Convert API date format to readable date
  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Extract headings from markdown content for table of contents
  const extractHeadings = (content) => {
    console.log("*************************************")
    console.log("Extracting headings from content:", content);
    if (!content || typeof content !== 'string') return [];

    const headingRegex = /^##\s+(.+)$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        title: match[1],
        anchor: match[1].toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-')
      });
    }

    return headings;
  };

  const headings = extractHeadings(post.blogContent);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category.category || "Uncategorized"}
              </span>
              <span className="text-gray-400 text-sm ml-4">
                {formatDate(post.createdAt || post.date)} • {post.readTime || "Unknown read time"}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title || "Untitled Post"}</h1>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
              <div>
                <div className="text-lg font-medium text-white">{post.author || "Unknown Author"}</div>
                <div className="text-sm text-gray-400">{post.authorDesignation || "Author"}</div>
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
                    {post.image && typeof post.image === 'object' && post.image.url ? (
                      <StrapiImage
                        src={post.image.url}
                        alt={post.title || "Blog Post Image"}
                        height={300}
                        width={600}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span>Featured Image: {typeof post.image === 'string' ? post.image : 'No image available'}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="prose prose-lg prose-invert max-w-none">
                {post.blogContent ? (
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      h2: ({ node, ...props }) => {
                        const id = props.children.toString().toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
                        return <h2 id={id} {...props} className="mt-8 mb-4 text-2xl font-bold" />;
                      },
                      a: ({ node, ...props }) => (
                        <Link {...props} className="text-emerald-500 hover:text-emerald-400" />
                      ),
                      ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-6 my-4" />,
                      ol: ({ node, ...props }) => <ol {...props} className="list-decimal pl-6 my-4" />,
                      blockquote: ({ node, ...props }) => (
                        <blockquote {...props} className="border-l-4 border-emerald-500 pl-4 italic my-4" />
                      ),
                      code: ({ node, inline, ...props }) =>
                        inline ? (
                          <code {...props} className="bg-gray-800 text-emerald-300 px-1 py-0.5 rounded" />
                        ) : (
                          <code {...props} className="block bg-gray-800 text-emerald-300 p-4 rounded my-4 overflow-x-auto" />
                        )
                    }}
                  >
                    {post.blogContent}
                  </ReactMarkdown>
                ) : (
                  <p>No content available for this post.</p>
                )}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    Cybersecurity
                  </span>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {post.category.category || "Uncategorized"}
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
                    <h3 className="text-xl font-bold text-white mb-2">{post.author || "Unknown Author"}</h3>
                    <p className="text-gray-400 mb-4">{post.authorDesignation || "Author"} at K-Infotech Global Consulting Services</p>
                    <p className="text-gray-300">
                      An experienced cybersecurity professional with expertise in {
                        (post.category.category && typeof post.category.category === 'string')
                          ? post.category.category.toLowerCase()
                          : 'cybersecurity'
                      } and a passion for helping organizations build robust security programs.
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

              {/* Preview Link - Using documentId for consistency */}
              {/* <div className="mt-8 pt-8 border-t border-gray-800">
                <Link
                  href={`/blog/preview/${post.documentId || post.slug || slug}`}
                  className="inline-flex items-center text-emerald-500 hover:text-emerald-400 font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  View Preview Version
                </Link>
              </div> */}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Table of Contents */}
              <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-800">
                <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  {headings.map((heading, index) => (
                    <a
                      key={index}
                      href={`#${heading.anchor}`}
                      className="block text-gray-300 hover:text-emerald-500 transition-colors"
                    >
                      {heading.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Posts */}
              {relatedPosts && relatedPosts.length > 0 && (
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-white mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.map((relatedPost, index) => (
                      <div key={relatedPost.id || relatedPost.documentId || index} className="flex items-start">
                        <div className="w-20 h-20 bg-gray-800 rounded flex-shrink-0 mr-4"></div>
                        <div>
                          <h4 className="font-medium text-white hover:text-emerald-500 transition-colors">
                            <Link href={`/blog/${relatedPost.documentId || relatedPost.slug || ''}`}>
                              {relatedPost.title || `Related Article ${index + 1}`}
                            </Link>
                          </h4>
                          <div className="text-xs text-gray-400 mt-1">
                            {formatDate(relatedPost.createdAt || relatedPost.date)} • {relatedPost.readTime || "Unknown read time"}
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