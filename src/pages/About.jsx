import React from "react";
import { Link } from "react-router-dom";
import { Award, Users, Globe, Shield, CheckCircle, TrendingUp } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import AnimatedSection from "../components/AnimatedSection";

const About = () => {
  const stats = [
    { icon: <Users size={32} />, number: "2500+", label: "Happy Clients" },
    { icon: <Award size={32} />, number: "15+", label: "Years Experience" },
    { icon: <Globe size={32} />, number: "50+", label: "Countries Served" },
    { icon: <Shield size={32} />, number: "99.9%", label: "Uptime Guarantee" },
  ];

  const values = [
    {
      icon: <Shield size={40} />,
      title: "Security First",
      description: "We prioritize the security of your data with advanced encryption and regular security audits.",
    },
    {
      icon: <Users size={40} />,
      title: "Customer Support",
      description: "24/7 dedicated support team ready to assist you with any questions or concerns.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Innovation",
      description: "Constantly evolving our services to stay ahead with the latest technologies.",
    },
    {
      icon: <Award size={40} />,
      title: "Quality Service",
      description: "Committed to delivering exceptional service quality that exceeds expectations.",
    },
  ];

  const features = [
    "Industry-leading uptime guarantee",
    "24/7 expert technical support",
    "Advanced security measures",
    "Scalable infrastructure",
    "Money-back guarantee",
    "Free SSL certificates",
    "Regular backups",
    "Easy migration process",
  ];

  return (
    <div>
      <Breadcrumb title="About Us" />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft">
              <div className="relative">
                <img
                  src="/assets/img/normal/about1-1.png"
                  alt="About"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl">
                  <div className="text-5xl font-bold">15+</div>
                  <div className="text-lg">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  About Our Company
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                  Leading Web Hosting & Technology Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are a trusted provider of web hosting, development, and digital solutions with over 15 years of
                  industry experience. Our mission is to empower businesses and individuals with reliable, scalable,
                  and secure technology infrastructure.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  From shared hosting to enterprise solutions, we offer a comprehensive range of services designed to
                  meet the evolving needs of our clients. Our team of experts is dedicated to delivering exceptional
                  service and support.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Contact Us Today
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="fadeIn" delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-lg">{stat.label}</div>
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
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                What Makes Us Different
              </h2>
              <p className="text-gray-600 text-lg">
                We are committed to delivering excellence through our core values and principles.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="slideInUp" delay={index * 0.1}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-500 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideInLeft">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                  Empowering Digital Success
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our mission is to provide cutting-edge technology solutions that enable businesses to thrive in the
                  digital age. We believe in making advanced hosting and development services accessible to everyone,
                  from startups to enterprises.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We are constantly innovating and improving our infrastructure to ensure that our clients have access
                  to the most reliable, secure, and high-performance services available in the market.
                </p>
                <div className="space-y-4">
                  {features.slice(6).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                      <CheckCircle size={20} className="text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight">
              <div className="relative">
                <img
                  src="/assets/img/normal/about2-1.png"
                  alt="Mission"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their hosting and development needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                View Pricing Plans
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
