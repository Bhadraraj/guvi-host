import React from "react";
import { Link } from "react-router-dom";
import { Server, Shield, Zap, HardDrive } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import ServiceCard from "../components/Cards/ServiceCard";
import AnimatedSection from "../components/AnimatedSection";

const HostingServices = () => {
  const services = [
    {
      icon: <Server size={40} />,
      title: "Cloud Hosting",
      description: "Scalable cloud infrastructure with 99.99% uptime guarantee and automatic scaling.",
      link: "/services/cloud-cpanel-hosting",
    },
    {
      icon: <Shield size={40} />,
      title: "Secure Hosting",
      description: "Advanced security features including SSL, firewall, malware scanning, and DDoS protection.",
      link: "/services/cloud-cpanel-hosting",
    },
    {
      icon: <Zap size={40} />,
      title: "Fast Performance",
      description: "SSD storage, LiteSpeed servers, and CDN integration for lightning-fast loading speeds.",
      link: "/services/cloud-cpanel-hosting",
    },
    {
      icon: <HardDrive size={40} />,
      title: "Storage Options",
      description: "Flexible storage plans from 10GB to unlimited based on your specific needs.",
      link: "/services/cloud-cpanel-hosting",
    },
  ];

  const hostingTypes = [
    {
      title: "Cloud & cPanel Hosting",
      description: "Fast, reliable cloud hosting with easy-to-use cPanel control panel.",
      link: "/services/cloud-cpanel-hosting",
    },
    {
      title: "WordPress Hosting",
      description: "Optimized hosting specifically designed for WordPress websites with auto-updates.",
      link: "/services/wordpress-hosting",
    },
    {
      title: "Reseller Hosting",
      description: "Start your own hosting business with our powerful white-label reseller plans.",
      link: "/services/reseller-hosting",
    },
    {
      title: "VPS Hosting",
      description: "Powerful virtual private servers with dedicated resources and full root access.",
      link: "/services/vps-hosting",
    },
    {
      title: "Dedicated Servers",
      description: "Enterprise-grade dedicated servers with maximum performance and complete control.",
      link: "/services/dedicated-server",
    },
  ];

  return (
    <div>
      <Breadcrumb title="Hosting Services" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Hosting Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Reliable Web Hosting Services
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Choose from our range of hosting solutions designed to meet every need, from personal blogs to
                enterprise applications.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostingTypes.map((type, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 0.1}>
                <Link to={type.link}>
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-500 h-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Choose the perfect hosting solution for your website. All plans include 24/7 support and 99.9% uptime
              guarantee.
            </p>
            <Link
              to="/pricing"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              View All Plans
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HostingServices;
