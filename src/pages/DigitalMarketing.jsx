import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Search, Mail, Share2, BarChart, Target } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import PricingCard from "../components/Cards/PricingCard";
import AnimatedSection from "../components/AnimatedSection";

const DigitalMarketing = () => {
  const services = [
    {
      icon: <Search size={32} />,
      title: "SEO Services",
      description: "Improve your search rankings and drive organic traffic with proven SEO strategies.",
    },
    {
      icon: <Share2 size={32} />,
      title: "Social Media Marketing",
      description: "Engage your audience and grow your brand across all major social platforms.",
    },
    {
      icon: <Mail size={32} />,
      title: "Email Marketing",
      description: "Build relationships and drive conversions with targeted email campaigns.",
    },
    {
      icon: <Target size={32} />,
      title: "PPC Advertising",
      description: "Maximize ROI with data-driven paid advertising campaigns on Google and social media.",
    },
    {
      icon: <BarChart size={32} />,
      title: "Analytics & Reporting",
      description: "Track performance and make informed decisions with comprehensive analytics.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Growth Strategy",
      description: "Comprehensive digital strategies designed to accelerate your business growth.",
    },
  ];

  const pricingPlans = [
    {
      title: "Starter Package",
      price: "499",
      period: "month",
      features: [
        "SEO Optimization",
        "Social Media Management (2 platforms)",
        "Monthly Content Creation",
        "Basic Analytics",
        "Email Support",
      ],
      link: "/contact",
    },
    {
      title: "Growth Package",
      price: "999",
      period: "month",
      features: [
        "Advanced SEO",
        "Social Media Management (4 platforms)",
        "Content Marketing",
        "Email Campaigns",
        "PPC Campaign Management",
        "Advanced Analytics",
        "Priority Support",
      ],
      link: "/contact",
      isPopular: true,
    },
    {
      title: "Enterprise Package",
      price: "1999",
      period: "month",
      features: [
        "Complete SEO Services",
        "Full Social Media Management",
        "Comprehensive Content Strategy",
        "Advanced Email Marketing",
        "Multi-Channel PPC",
        "Custom Analytics Dashboard",
        "Dedicated Account Manager",
        "24/7 Support",
      ],
      link: "/contact",
    },
  ];

  return (
    <div>
      <Breadcrumb title="Digital Marketing Services" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Digital Marketing
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Grow Your Business Online
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Reach your target audience and drive measurable results with our comprehensive digital marketing
                services. From SEO to social media, we've got you covered.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-500 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Our Packages
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Digital Marketing Pricing
              </h2>
              <p className="text-gray-600 text-lg">
                Choose the package that fits your needs. All packages include detailed monthly reporting.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Our Approach
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                  Data-Driven Marketing Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We use analytics and insights to create marketing strategies that deliver real, measurable results
                  for your business.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Targeted Campaigns</h4>
                      <p className="text-gray-600">
                        Reach the right audience at the right time with precisely targeted marketing campaigns.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Performance Tracking</h4>
                      <p className="text-gray-600">
                        Monitor campaign performance in real-time and adjust strategies for optimal results.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Continuous Optimization</h4>
                      <p className="text-gray-600">
                        We constantly refine and improve your campaigns to maximize ROI and achieve your goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="relative">
                <img
                  src="/assets/img/normal/why2-1.png"
                  alt="Digital Marketing"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Boost Your Online Presence?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives real results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Your Free Marketing Audit
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
