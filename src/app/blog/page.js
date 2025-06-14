"use client";
import { getBlogsData, getCategoriesData } from '@/data/loaders';
import Link from 'next/link';
import { StrapiImage } from '@/components/strapi/StrapiImage';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Remove the async keyword from the component function
export default function BlogPage() {
  const [regularPosts, setRegularPosts] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [blogPosts, setBlogPosts] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Move data fetching to useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogData = await getBlogsData();
        const categories = await getCategoriesData();

        setBlogPosts(blogData);
        setCategoryData(categories);

        if (blogData?.data) {
          const featured = blogData.data.filter(post => post.featured);
          const regular = blogData.data.filter(post => !post.featured);
          setFeaturedPosts(featured);
          setRegularPosts(regular);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
  // Format author name for image fallback
  const formatedAuthor = (author) => {
    if (!author) return "Unknown Author";
    return author.split(' ').join('+');
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;

    if (selectedCategory === "All Categories" && blogPosts?.data) {
      // Reset to show all non-featured posts
      setRegularPosts(blogPosts.data.filter(post => !post.featured));
      return;
    }


    // Filter by selected category
    if (blogPosts?.data) {
      setRegularPosts(
        blogPosts.data.filter(post =>
          !post.featured &&
          post.category &&
          post.category.slug === selectedCategory
        )
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-emerald-500 text-xl">Loading blog posts...</div>
      </div>
    );
  }



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
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70">
                      <StrapiImage src={post.image.url} width={400} height={400} alt={post.image.id} className="object-cover w-full h-full" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span>{formatDate(post.createdAt || post.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">
                      <Link href={`/blog/${post.documentId}`}>
                        {post.title}
                      </Link>
                    </h3>
                    {/* <div className="flex items-center mb-3">
                      <Link 
                        href={`/blog/preview/${post.documentId}`}
                        className="text-xs text-emerald-500 hover:text-emerald-400 flex items-center"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        Preview Article
                      </Link>
                    </div> */}
                    <p className="text-gray-400 mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-700 rounded-full mr-3">
                        {(post?.authorImage?.url && post?.authorImage?.url.length > 0) ? (
                          <StrapiImage
                            src={post.authorImage.url}
                            width={40}
                            height={40}
                            alt={post.authorImage.id}
                            className="object-cover w-full h-full rounded-full"
                          />
                        ) : (
                          <Image
                            src={`https://ui-avatars.com/api/?background=random&name=${formatedAuthor(post.author)}`}
                            width={40}
                            height={40}
                            alt={formatedAuthor(post.author)}
                            className="object-cover w-full h-full rounded-full" />
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{post.author}</div>
                        <div className="text-xs text-gray-400">{post.authorDesignation}</div>
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
                <select onChange={handleCategoryChange} className="appearance-none bg-black border border-gray-700 text-white py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>All Categories</option>
                  {categoryData?.data?.map(category => (
                    <option key={category.slug} value={category.slug}>
                      {category.category}
                    </option>
                  ))}

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
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70">
                    <StrapiImage src={post.image.url} width={400} height={400} alt={post.image.id} className="object-cover w-full h-full" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{formatDate(post.createdAt || post.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-500 transition-colors">
                    <Link href={`/blog/${post.documentId}`}>
                      {post.title}
                    </Link>
                  </h3>
                  {/* <div className="flex items-center mb-3">
                    <Link 
                      href={`/blog/preview/${post.documentId}`}
                      className="text-xs text-emerald-500 hover:text-emerald-400 flex items-center"
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                      Preview Article
                    </Link>
                  </div> */}
                  <p className="text-gray-400 mb-5 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 bg-gray-700 rounded-full mr-3">
                      {(post?.authorImage?.url && post?.authorImage?.url.length > 0) ? (
                        <StrapiImage
                          src={post.authorImage.url}
                          width={40}
                          height={40}
                          alt={post.authorImage.id}
                          className="object-cover w-full h-full rounded-full"
                        />
                      ) : (
                        <Image
                          src={`https://ui-avatars.com/api/?background=random&name=${formatedAuthor(post.author)}`}
                          width={40}
                          height={40}
                          alt={formatedAuthor(post.author)}
                          className="object-cover w-full h-full rounded-full" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-white">{post.author}</div>
                      <div className="text-xs text-gray-400">{post.authorDesignation}</div>
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