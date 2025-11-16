import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Smartphone, Monitor, Layers, Palette, Headphones } from "lucide-react";
import ServiceCard from "../components/Cards/ServiceCard";

const AppDevelopment = () => {
  const services = [
    {
      icon: <Smartphone size={40} />,
      title: "Android Apps",
      description: "Native Android applications with seamless performance and intuitive user interfaces.",
      link: "/app-development/android",
    },
    {
      icon: <Monitor size={40} />,
      title: "iOS Apps",
      description: "Premium iOS applications that leverage the latest Apple technologies and design guidelines.",
      link: "/app-development/ios",
    },
    {
      icon: <Layers size={40} />,
      title: "Hybrid Apps",
      description: "Cross-platform applications that work flawlessly on both iOS and Android devices.",
      link: "/app-development/hybrid",
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX for Mobile",
      description: "Beautiful, user-centric mobile interfaces that enhance user engagement and satisfaction.",
      link: "/app-development/ui-ux",
    },
    {
      icon: <Headphones size={40} />,
      title: "App Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your app running smoothly.",
      link: "/app-development/maintenance",
    },
  ];

  const features = [
    "Native & Cross-Platform",
    "Scalable Architecture",
    "Secure & Reliable",
    "Push Notifications",
    "Offline Functionality",
    "Payment Integration",
    "Social Media Integration",
    "Analytics & Reporting",
  ];

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">App Development</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>App Development</li>
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
                <h2 className="sec-title">Professional Mobile App Development</h2>
                <p className="sec-text">
                  Transform your ideas into powerful mobile applications. We build apps that
                  users love and businesses rely on for growth and success.
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
                  <img src="/assets/img/service/service_inner_3.jpg" alt="App Development" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-area mb-4">
                <span className="sub-title">Why Choose Us</span>
                <h2 className="sec-title">
                  Build Next-Generation Mobile Apps with Expert Developers
                </h2>
                <p className="sec-text">
                  Our team of experienced mobile developers creates high-quality apps using
                  the latest technologies and development practices for optimal performance.
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
                  Ready to Build Your Mobile App?
                </h2>
                <p className="sec-text text-white">
                  Let's bring your app idea to life with our expert development services.
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

export default AppDevelopment;
