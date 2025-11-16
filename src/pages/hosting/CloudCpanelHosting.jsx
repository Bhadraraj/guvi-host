import React from "react";
import { Link } from "react-router-dom";
import { Check, Server, Shield, Zap, Database, Globe, Clock } from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb";
import PricingCard from "../../components/Cards/PricingCard";
import AnimatedSection from "../../components/AnimatedSection";

const CloudCpanelHosting = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "4.99",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "100 GB Bandwidth",
        "5 Email Accounts",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "24/7 Support",
        "99.9% Uptime",
      ],
      link: "/contact",
    },
    {
      title: "Business",
      price: "9.99",
      features: [
        "5 Websites",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Priority Support",
        "99.99% Uptime",
        "Daily Backups",
        "Free Domain (1st year)",
      ],
      link: "/contact",
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "19.99",
      features: [
        "Unlimited Websites",
        "100 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
        "cPanel Control Panel",
        "Premium Support",
        "99.99% Uptime",
        "Daily + On-Demand Backups",
        "Free Domain (1st year)",
        "Free CDN Integration",
        "Dedicated IP Address",
      ],
      link: "/contact",
    },
  ];

  const features = [
    {
      icon: <Server size={32} />,
      title: "Cloud Infrastructure",
      description: "Built on enterprise-grade cloud servers with automatic scaling and load balancing.",
    },
    {
      icon: <Shield size={32} />,
      title: "Advanced Security",
      description: "SSL certificates, firewall protection, malware scanning, and DDoS mitigation.",
    },
    {
      icon: <Zap size={32} />,
      title: "Lightning Performance",
      description: "SSD storage, LiteSpeed servers, and integrated CDN for maximum speed.",
    },
    {
      icon: <Database size={32} />,
      title: "Daily Backups",
      description: "Automatic daily backups with easy one-click restore functionality.",
    },
    {
      icon: <Globe size={32} />,
      title: "cPanel Control",
      description: "Industry-standard cPanel for easy website and email management.",
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Support",
      description: "Expert technical support available around the clock via chat, email, and phone.",
    },
  ];

  return (
    <div>
      <Breadcrumb title="Cloud & cPanel Hosting" />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Cloud Hosting
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Fast & Reliable Cloud Hosting with cPanel
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience the power of cloud infrastructure combined with the simplicity of cPanel. Perfect for
                websites of all sizes with 99.99% uptime guarantee.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-500 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Pricing Plans
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Choose Your Perfect Plan
              </h2>
              <p className="text-gray-600 text-lg">
                All plans include free SSL, daily backups, and 24/7 support. No hidden fees.
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

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Launch your website today with our powerful cloud hosting platform. 30-day money-back guarantee.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started Now
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default CloudCpanelHosting;
