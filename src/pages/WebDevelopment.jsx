import React from "react";
import { Link } from "react-router-dom";
import { Code, Palette, Zap, Smartphone, Globe, Shield } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import PricingCard from "../components/Cards/PricingCard";
import AnimatedSection from "../components/AnimatedSection";

const WebDevelopment = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Custom Web Development",
      description: "Tailored web solutions built with modern technologies and best practices.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Responsive Design",
      description: "Mobile-first websites that work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds with optimized code and assets.",
    },
    {
      icon: <Globe size={32} />,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to help your site rank higher in search results.",
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: <Shield size={32} />,
      title: "Security First",
      description: "Enterprise-grade security measures to protect your website and data.",
    },
  ];

  const pricingPlans = [
    {
      title: "Basic Website",
      price: "499",
      period: "project",
      features: [
        "Up to 5 Pages",
        "Responsive Design",
        "Contact Form",
        "SEO Basics",
        "1 Month Support",
        "Free Hosting (1 Year)",
      ],
      link: "/contact",
    },
    {
      title: "Business Website",
      price: "1499",
      period: "project",
      features: [
        "Up to 15 Pages",
        "Custom Design",
        "CMS Integration",
        "Advanced SEO",
        "Payment Gateway",
        "3 Months Support",
        "Free Hosting (1 Year)",
        "Analytics Setup",
      ],
      link: "/contact",
      isPopular: true,
    },
    {
      title: "E-commerce",
      price: "2999",
      period: "project",
      features: [
        "Unlimited Pages",
        "Custom Design",
        "Full E-commerce System",
        "Inventory Management",
        "Multiple Payment Gateways",
        "6 Months Support",
        "Free Hosting (1 Year)",
        "Advanced Analytics",
      ],
      link: "/contact",
    },
  ];

  return (
    <div>
      <Breadcrumb title="Web Development Services" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Web Development
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Professional Website Development Services
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Transform your vision into reality with our custom web development services. We create stunning,
                high-performance websites that drive results.
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
                Web Development Pricing
              </h2>
              <p className="text-gray-600 text-lg">
                Choose the package that fits your needs. All packages include responsive design and SEO optimization.
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
                  Our Process
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                  How We Build Your Website
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We follow a proven development process to ensure your project is completed on time and exceeds
                  expectations.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Discovery & Planning</h4>
                      <p className="text-gray-600">
                        We understand your goals, target audience, and requirements to create a detailed project plan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Design & Development</h4>
                      <p className="text-gray-600">
                        Our designers and developers work together to bring your vision to life with modern technologies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Testing & Launch</h4>
                      <p className="text-gray-600">
                        Rigorous testing ensures everything works perfectly before we launch your site to the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="relative">
                <img
                  src="/assets/img/normal/about2-1.png"
                  alt="Web Development Process"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your web development needs and create something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get a Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
