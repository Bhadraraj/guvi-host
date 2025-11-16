import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Tablet, Monitor, Code, Zap, Users } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import PricingCard from "../components/Cards/PricingCard";
import AnimatedSection from "../components/AnimatedSection";

const AppDevelopment = () => {
  const services = [
    {
      icon: <Smartphone size={32} />,
      title: "iOS Development",
      description: "Native iOS apps built with Swift for exceptional performance and user experience.",
    },
    {
      icon: <Tablet size={32} />,
      title: "Android Development",
      description: "High-quality Android apps using Kotlin and modern Android development practices.",
    },
    {
      icon: <Monitor size={32} />,
      title: "Cross-Platform Apps",
      description: "Build once, deploy everywhere with React Native or Flutter frameworks.",
    },
    {
      icon: <Code size={32} />,
      title: "Custom Solutions",
      description: "Tailored mobile solutions designed specifically for your business needs.",
    },
    {
      icon: <Zap size={32} />,
      title: "App Optimization",
      description: "Performance tuning and optimization for smooth, fast mobile experiences.",
    },
    {
      icon: <Users size={32} />,
      title: "Maintenance & Support",
      description: "Ongoing support and updates to keep your app running smoothly.",
    },
  ];

  const pricingPlans = [
    {
      title: "Basic App",
      price: "2999",
      period: "project",
      features: [
        "Single Platform (iOS or Android)",
        "Up to 10 Screens",
        "Basic Features",
        "User Authentication",
        "Push Notifications",
        "3 Months Support",
      ],
      link: "/contact",
    },
    {
      title: "Business App",
      price: "5999",
      period: "project",
      features: [
        "Cross-Platform (iOS & Android)",
        "Up to 20 Screens",
        "Advanced Features",
        "User Authentication",
        "Push Notifications",
        "Backend Integration",
        "Analytics Integration",
        "6 Months Support",
      ],
      link: "/contact",
      isPopular: true,
    },
    {
      title: "Enterprise App",
      price: "12999",
      period: "project",
      features: [
        "Cross-Platform (iOS & Android)",
        "Unlimited Screens",
        "Complex Features",
        "User Authentication",
        "Push Notifications",
        "Custom Backend",
        "Third-party Integrations",
        "Advanced Analytics",
        "12 Months Support",
      ],
      link: "/contact",
    },
  ];

  return (
    <div>
      <Breadcrumb title="App Development Services" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Mobile App Development
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Build Powerful Mobile Applications
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Create engaging mobile experiences for iOS and Android. Our expert team delivers high-quality,
                user-friendly apps that drive business growth.
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
                App Development Pricing
              </h2>
              <p className="text-gray-600 text-lg">
                Choose the package that fits your needs. All packages include app store submission support.
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
              <div className="relative">
                <img
                  src="/assets/img/normal/about1-1.png"
                  alt="App Development"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Why Choose Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                  Expert Mobile App Development
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We combine technical expertise with creative design to build mobile apps that users love and
                  businesses rely on.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Smartphone size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Native & Cross-Platform</h4>
                      <p className="text-gray-600">
                        Expertise in both native development and cross-platform frameworks like React Native and Flutter.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Performance Focused</h4>
                      <p className="text-gray-600">
                        Optimized code and efficient architecture ensure smooth, responsive app performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">User-Centric Design</h4>
                      <p className="text-gray-600">
                        Beautiful interfaces designed with user experience and usability at the forefront.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your App?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's turn your app idea into reality. Contact us today for a free consultation and quote.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started Today
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
