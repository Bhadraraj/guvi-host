import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import BlogCard from "../components/Cards/BlogCard";
import AnimatedSection from "../components/AnimatedSection";

const Blog = () => {
  const blogPosts = [
    {
      image: "/assets/img/blog/blog_1_1.jpg",
      title: "10 Essential Tips for Choosing the Right Web Hosting Provider",
      excerpt:
        "Selecting the perfect web hosting service can make or break your online presence. Discover the key factors to consider.",
      date: "Nov 15, 2024",
      author: "John Doe",
      category: "Hosting",
      link: "#",
    },
    {
      image: "/assets/img/blog/blog_1_2.jpg",
      title: "Understanding Cloud Computing: A Beginner's Guide",
      excerpt:
        "Cloud computing has revolutionized how businesses operate. Learn the fundamentals and benefits of moving to the cloud.",
      date: "Nov 12, 2024",
      author: "Sarah Johnson",
      category: "Cloud",
      link: "#",
    },
    {
      image: "/assets/img/blog/blog_1_3.jpg",
      title: "Website Security Best Practices for 2024",
      excerpt:
        "Protect your website and customer data with these essential security measures and latest cybersecurity trends.",
      date: "Nov 10, 2024",
      author: "Michael Chen",
      category: "Security",
      link: "#",
    },
    {
      image: "/assets/img/blog/blog_2_1.jpg",
      title: "How to Optimize Your Website Performance",
      excerpt:
        "Website speed is crucial for user experience and SEO. Explore proven techniques to boost your site's performance.",
      date: "Nov 8, 2024",
      author: "Emily Davis",
      category: "Development",
      link: "#",
    },
    {
      image: "/assets/img/blog/blog_2_2.jpg",
      title: "The Future of Web Development: Trends to Watch",
      excerpt:
        "Stay ahead of the curve with these emerging web development trends that will shape the industry in coming years.",
      date: "Nov 5, 2024",
      author: "David Wilson",
      category: "Development",
      link: "#",
    },
    {
      image: "/assets/img/blog/blog_inner_1.jpg",
      title: "VPS vs Dedicated Server: Which is Right for You?",
      excerpt:
        "Confused about choosing between VPS and dedicated hosting? This comprehensive comparison will help you decide.",
      date: "Nov 3, 2024",
      author: "Lisa Anderson",
      category: "Hosting",
      link: "#",
    },
  ];

  const categories = [
    { name: "Hosting", count: 12 },
    { name: "Cloud", count: 8 },
    { name: "Security", count: 15 },
    { name: "Development", count: 20 },
    { name: "Digital Marketing", count: 10 },
  ];

  return (
    <div>
      <Breadcrumb title="Our Blog" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Latest Articles
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Insights, Tips & Industry News
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Stay informed with our latest articles covering web hosting, development, security, and digital
                marketing trends.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <BlogCard key={index} {...post} delay={index * 0.1} />
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    Previous
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">1</button>
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    2
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    3
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            <div className="lg:col-span-1">
              <AnimatedSection animation="slideInRight">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 transition-colors pr-12"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories</h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-2 group"
                        >
                          <span className="group-hover:translate-x-2 transition-transform duration-300">
                            {category.name}
                          </span>
                          <span className="bg-gray-100 group-hover:bg-blue-600 group-hover:text-white px-3 py-1 rounded-full text-sm transition-colors duration-300">
                            {category.count}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-blue-100 mb-6">Get the latest articles and updates delivered to your inbox.</p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl mb-4 text-gray-900 focus:outline-none"
                  />
                  <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Subscribe Now
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
