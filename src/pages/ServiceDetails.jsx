import React from "react";
import { useParams, Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import AnimatedSection from "../components/AnimatedSection";

const ServiceDetails = () => {
  const { slug } = useParams();

  const serviceContent = {
    default: {
      title: "Our Services",
      description:
        "We provide comprehensive technology solutions to help your business thrive in the digital world.",
      features: [
        "Expert team with years of experience",
        "Modern technologies and best practices",
        "Scalable and secure solutions",
        "Ongoing support and maintenance",
        "Competitive pricing",
        "Customer satisfaction guaranteed",
      ],
    },
  };

  const content = serviceContent[slug] || serviceContent.default;

  return (
    <div>
      <Breadcrumb title={content.title} />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection animation="slideInLeft">
                <div className="prose max-w-none">
                  <img
                    src="/assets/img/service/service_inner_1.jpg"
                    alt={content.title}
                    className="rounded-2xl shadow-xl w-full mb-8"
                  />

                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{content.description}</p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {content.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={14} className="text-blue-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our team brings together expertise, innovation, and dedication to deliver exceptional results.
                    We understand that every business is unique, which is why we tailor our services to meet your
                    specific needs and objectives.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    With a proven track record of successful projects and satisfied clients, we're committed to
                    helping your business succeed in the digital landscape. Our comprehensive approach ensures that
                    you receive not just a service, but a partnership dedicated to your growth.
                  </p>

                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-blue-100 mb-6">
                      Contact us today to discuss your project requirements and receive a customized solution
                      tailored to your needs.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Contact Us <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-1">
              <AnimatedSection animation="slideInRight">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 sticky top-24">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        to="/services/web-development"
                        className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          Web Development
                        </span>
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/app-development"
                        className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          App Development
                        </span>
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/digital-marketing"
                        className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          Digital Marketing
                        </span>
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/vps-hosting"
                        className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-3 border-b border-gray-100 group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          VPS Hosting
                        </span>
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/dedicated-server"
                        className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors py-3 group"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          Dedicated Server
                        </span>
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  </ul>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">Need Help?</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Our support team is here to assist you with any questions.
                    </p>
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center block"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
