import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Server, Shield, Zap, HardDrive } from "lucide-react";
import ServiceCard from "../components/Cards/ServiceCard";

const HostingServices = () => {
  const { type } = useParams();

  const hostingTypes = {
    "cloud-cpanel": {
      title: "Cloud & cPanel Hosting",
      description: "Fast, reliable cloud hosting with easy-to-use cPanel control panel.",
    },
    reseller: {
      title: "Reseller Hosting",
      description: "Start your own hosting business with our powerful reseller plans.",
    },
    wordpress: {
      title: "WordPress Hosting",
      description: "Optimized hosting specifically designed for WordPress websites.",
    },
  };

  const currentType = hostingTypes[type] || hostingTypes["cloud-cpanel"];

  const services = [
    {
      icon: <Server size={40} />,
      title: "Cloud Hosting",
      description: "Scalable cloud infrastructure with 99.99% uptime guarantee.",
      link: "/hosting/cloud-cpanel",
    },
    {
      icon: <Shield size={40} />,
      title: "Secure Hosting",
      description: "Advanced security features including SSL, firewall, and DDoS protection.",
      link: "/hosting/cloud-cpanel",
    },
    {
      icon: <Zap size={40} />,
      title: "Fast Performance",
      description: "SSD storage and CDN integration for lightning-fast loading speeds.",
      link: "/hosting/cloud-cpanel",
    },
    {
      icon: <HardDrive size={40} />,
      title: "Storage Options",
      description: "Flexible storage plans from 10GB to unlimited based on your needs.",
      link: "/hosting/cloud-cpanel",
    },
  ];

  const features = [
    "99.99% Uptime Guarantee",
    "Free SSL Certificate",
    "Daily Backups",
    "24/7 Support",
    "cPanel Control Panel",
    "One-Click Installer",
    "Unlimited Bandwidth",
    "Email Accounts",
  ];

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{currentType.title}</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Hosting</li>
              <li>{currentType.title}</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Hosting Solutions</span>
                <h2 className="sec-title">{currentType.title}</h2>
                <p className="sec-text">{currentType.description}</p>
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
                  <img src="/assets/img/service/service2-1.jpg" alt="Hosting" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-area mb-4">
                <span className="sub-title">Why Choose Our Hosting</span>
                <h2 className="sec-title">Reliable, Fast & Secure Hosting Solutions</h2>
                <p className="sec-text">
                  Our hosting services are built on cutting-edge infrastructure to ensure
                  your website runs smoothly 24/7.
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
    </>
  );
};

export default HostingServices;
