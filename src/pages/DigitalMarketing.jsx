import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, Megaphone, Share2, Mail, Award } from "lucide-react";
import ServiceCard from "../components/Cards/ServiceCard";

const DigitalMarketing = () => {
  const services = [
    {
      icon: <Search size={40} />,
      title: "SEO",
      description: "Improve your search engine rankings and drive organic traffic with our proven SEO strategies.",
      link: "/digital-marketing/seo",
    },
    {
      icon: <Megaphone size={40} />,
      title: "Google Ads",
      description: "Maximize ROI with targeted Google Ads campaigns that convert visitors into customers.",
      link: "/digital-marketing/google-ads",
    },
    {
      icon: <Share2 size={40} />,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all social media platforms.",
      link: "/digital-marketing/social-media",
    },
    {
      icon: <Mail size={40} />,
      title: "Email Marketing",
      description: "Create effective email campaigns that nurture leads and boost customer retention.",
      link: "/digital-marketing/email-marketing",
    },
    {
      icon: <Award size={40} />,
      title: "Branding & Content",
      description: "Develop a compelling brand identity and create content that resonates with your audience.",
      link: "/digital-marketing/branding",
    },
  ];

  const benefits = [
    "Increased Online Visibility",
    "Higher Conversion Rates",
    "Better ROI",
    "Targeted Audience Reach",
    "Data-Driven Strategies",
    "Competitive Advantage",
    "Brand Authority",
    "Measurable Results",
  ];

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Digital Marketing</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Digital Marketing</li>
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
                <h2 className="sec-title">Comprehensive Digital Marketing Services</h2>
                <p className="sec-text">
                  Grow your business online with our result-driven digital marketing strategies.
                  We help you reach your target audience and achieve your business goals.
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
              <div className="title-area mb-4">
                <span className="sub-title">Why Choose Us</span>
                <h2 className="sec-title">
                  Accelerate Your Growth with Strategic Digital Marketing
                </h2>
                <p className="sec-text">
                  Our experienced marketing team creates data-driven campaigns that deliver
                  real results. We combine creativity with analytics to maximize your ROI.
                </p>
              </div>

              <div className="row">
                {benefits.map((benefit, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <Check size={20} className="text-primary" />
                      <span>{benefit}</span>
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
            <div className="col-lg-6">
              <div className="img-box1">
                <div className="img1">
                  <img src="/assets/img/service/service_inner_2.jpg" alt="Digital Marketing" />
                </div>
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
                  Ready to Boost Your Online Presence?
                </h2>
                <p className="sec-text text-white">
                  Let's create a customized digital marketing strategy for your business.
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

export default DigitalMarketing;
