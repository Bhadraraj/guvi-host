import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Code, Smartphone, ShoppingCart, Palette, RefreshCw, Wrench } from "lucide-react";
import ServiceCard from "../components/Cards/ServiceCard";

const WebDevelopment = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Static Websites",
      description: "Fast, secure, and cost-effective static websites perfect for portfolios, landing pages, and business showcases.",
      link: "/web-development/static",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Dynamic Websites",
      description: "Interactive, database-driven websites with real-time content management and user authentication.",
      link: "/web-development/dynamic",
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-commerce Websites",
      description: "Full-featured online stores with payment gateways, inventory management, and order tracking.",
      link: "/web-development/ecommerce",
    },
    {
      icon: <Palette size={40} />,
      title: "Web Apps",
      description: "Custom web applications built with modern frameworks for optimal performance and user experience.",
      link: "/web-development/web-apps",
    },
    {
      icon: <RefreshCw size={40} />,
      title: "Website Redesign",
      description: "Transform your outdated website into a modern, responsive, and conversion-optimized platform.",
      link: "/web-development/redesign",
    },
    {
      icon: <Wrench size={40} />,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and running smoothly with our maintenance services.",
      link: "/web-development/maintenance",
    },
  ];

  const features = [
    "Responsive Design",
    "SEO Optimized",
    "Fast Loading Speed",
    "Cross-Browser Compatible",
    "Secure & Scalable",
    "Content Management System",
    "Payment Gateway Integration",
    "Third-Party API Integration",
  ];

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Web Development</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Our Services</span>
                <h2 className="sec-title">Professional Web Development Solutions</h2>
                <p className="sec-text">
                  We create stunning, high-performance websites tailored to your business needs.
                  From simple landing pages to complex web applications, we've got you covered.
                </p>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="space-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-box1">
                <div className="img1">
                  <img src="/assets/img/service/service_inner_1.jpg" alt="Web Development" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-area mb-4">
                <span className="sub-title">Why Choose Us</span>
                <h2 className="sec-title">
                  Build Your Digital Presence with Modern Web Solutions
                </h2>
                <p className="sec-text">
                  Our expert team of developers uses the latest technologies and best practices
                  to deliver websites that not only look great but also perform exceptionally well.
                </p>
              </div>

              <div className="row">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Check size={20} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="btn-group mt-4">
                <Link to="/contact" className="ot-btn">
                  Get Started
                  <ArrowRight size={16} className="ms-2" />
                </Link>
                <Link to="/pricing" className="ot-btn style-border ms-3">
                  View Pricing
                  <ArrowRight size={16} className="ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-area-1 space" style={{ backgroundImage: "url(/assets/img/bg/cta_bg_2.png)" }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8">
              <div className="title-area mb-lg-0">
                <span className="sub-title text-white">Get Started Today</span>
                <h2 className="sec-title text-white">
                  Ready to Build Your Dream Website?
                </h2>
                <p className="sec-text text-white">
                  Let's discuss your project and create a website that drives results.
                </p>
              </div>
            </div>
            <div className="col-lg-auto">
              <Link to="/contact" className="ot-btn style2">
                Contact Us Now
                <ArrowRight size={16} className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopment;
