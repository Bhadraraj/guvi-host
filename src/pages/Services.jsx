import React from "react";
import { Server, Smartphone, Globe, Mail, HardDrive, Zap } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import ServiceCard from "../components/Cards/ServiceCard";
import AnimatedSection from "../components/AnimatedSection";

const Services = () => {
  const services = [
    {
      icon: <Server size={40} />,
      title: "Web Hosting Services",
      description:
        "Reliable and fast web hosting solutions with 99.9% uptime guarantee. Perfect for websites of all sizes.",
      link: "/services/hosting",
    },
    {
      icon: <HardDrive size={40} />,
      title: "VPS Hosting",
      description:
        "Powerful VPS hosting with dedicated resources, root access, and full control over your virtual server.",
      link: "/services/vps-hosting",
    },
    {
      icon: <Server size={40} />,
      title: "Dedicated Server",
      description:
        "Enterprise-grade dedicated servers with maximum performance, security, and complete server control.",
      link: "/services/dedicated-server",
    },
    {
      icon: <Globe size={40} />,
      title: "Web Development",
      description:
        "Custom web development services to create stunning, functional websites tailored to your business needs.",
      link: "/services/web-development",
    },
    {
      icon: <Smartphone size={40} />,
      title: "App Development",
      description:
        "Native and cross-platform mobile app development for iOS and Android with modern technologies.",
      link: "/services/app-development",
    },
    {
      icon: <Zap size={40} />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing services including SEO, social media, and content marketing strategies.",
      link: "/services/digital-marketing",
    },
    {
      icon: <Mail size={40} />,
      title: "Domain & Email",
      description:
        "Domain registration and professional email hosting solutions for your business identity.",
      link: "/services/domain-email",
    },
    {
      icon: <Server size={40} />,
      title: "Cloud Hosting",
      description:
        "Scalable cloud hosting with automatic backups, load balancing, and enterprise-level security.",
      link: "/services/cloud-cpanel-hosting",
    },
    {
      icon: <Globe size={40} />,
      title: "WordPress Hosting",
      description:
        "Optimized WordPress hosting with automatic updates, caching, and enhanced security features.",
      link: "/services/wordpress-hosting",
    },
  ];

  return (
    <div>
      <Breadcrumb title="Our Services" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                From hosting to development, we provide a complete suite of services to power your online presence
                and drive your business forward.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Why Choose Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                  Built for Performance & Reliability
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our infrastructure is designed to deliver exceptional performance, security, and reliability for all
                  your hosting and development needs. We use cutting-edge technology and best practices to ensure
                  your success.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Server size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Infrastructure</h3>
                      <p className="text-gray-600">
                        State-of-the-art data centers with redundant power, cooling, and network connectivity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast Performance</h3>
                      <p className="text-gray-600">
                        SSD storage, advanced caching, and CDN integration for optimal speed and performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Expert Support</h3>
                      <p className="text-gray-600">
                        Our technical support team is always available to help you with any questions or issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="relative">
                <img
                  src="/assets/img/normal/why1-1.png"
                  alt="Services"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team of experts can design and implement a tailored solution that perfectly fits your unique
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Request a Quote
              </a>
              <a
                href="/pricing"
                className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 border-2 border-white/20"
              >
                View Pricing
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
