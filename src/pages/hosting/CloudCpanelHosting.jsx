import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Server, Shield, Zap, Database, Globe, Clock } from "lucide-react";
import PricingCard from "../../components/Cards/PricingCard";

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
        "Dedicated Support",
        "99.99% Uptime",
        "Daily Backups",
        "Free Domain (1st year)",
        "Free CDN",
        "Advanced Security",
      ],
      link: "/contact",
    },
  ];

  const features = [
    { icon: <Server size={32} />, title: "Cloud Infrastructure", text: "Built on reliable cloud infrastructure for maximum uptime" },
    { icon: <Shield size={32} />, title: "Free SSL Certificate", text: "Secure your website with free SSL for all domains" },
    { icon: <Zap size={32} />, title: "Lightning Fast", text: "SSD storage and optimized servers for speed" },
    { icon: <Database size={32} />, title: "Daily Backups", text: "Automatic daily backups to keep your data safe" },
    { icon: <Globe size={32} />, title: "Global CDN", text: "Content delivery network for faster global access" },
    { icon: <Clock size={32} />, title: "99.99% Uptime", text: "Industry-leading uptime guarantee" },
  ];

  return (
    <>
      <div className="breadcumb-wrapper" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Cloud & cPanel Hosting</h1>
            <ul className="breadcumb-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pricing">Hosting</Link></li>
              <li>Cloud & cPanel Hosting</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Powerful Cloud Hosting</span>
                <h2 className="sec-title">Fast, Secure & Reliable Cloud Hosting with cPanel</h2>
                <p className="sec-text">
                  Experience the power of cloud hosting with the ease of cPanel. Our cloud infrastructure
                  ensures your website loads fast and stays online 24/7 with industry-leading uptime.
                </p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4" data-cue="slideInUp" data-delay={index * 100}>
                <div className="feature-card text-center p-4">
                  <div className="box-icon mb-3 text-primary d-flex justify-content-center">
                    {feature.icon}
                  </div>
                  <h3 className="box-title h5">{feature.title}</h3>
                  <p className="box-text">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-top space-bottom bg-smoke">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Pricing Plans</span>
                <h2 className="sec-title">Choose Your Perfect Hosting Plan</h2>
                <p className="sec-text">
                  Select a plan that fits your needs. All plans include cPanel, free SSL, and 24/7 support.
                </p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-4">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period="month"
                features={plan.features}
                link={plan.link}
                isPopular={plan.isPopular}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-box1">
                <img src="/assets/img/service/service2-1.jpg" alt="cPanel Hosting" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-area mb-4">
                <span className="sub-title">Why Choose Us</span>
                <h2 className="sec-title">Everything You Need for a Successful Website</h2>
                <p className="sec-text mb-4">
                  Our cloud hosting platform is designed to give you maximum performance,
                  security, and ease of use. With cPanel control panel, managing your
                  website has never been easier.
                </p>
              </div>

              <div className="checklist mb-4">
                <ul>
                  <li><Check size={20} className="text-primary me-2" />One-Click WordPress Installation</li>
                  <li><Check size={20} className="text-primary me-2" />Free Website Migration</li>
                  <li><Check size={20} className="text-primary me-2" />30-Day Money-Back Guarantee</li>
                  <li><Check size={20} className="text-primary me-2" />Free Website Builder</li>
                  <li><Check size={20} className="text-primary me-2" />Unlimited MySQL Databases</li>
                  <li><Check size={20} className="text-primary me-2" />Advanced Security Features</li>
                </ul>
              </div>

              <Link to="/contact" className="ot-btn">
                Get Started Today
                <ArrowRight size={16} className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-area-1 space" style={{ backgroundImage: "url(/assets/img/bg/cta_bg_2.png)" }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8">
              <div className="title-area mb-lg-0">
                <span className="sub-title text-white">Start Your Website Today</span>
                <h2 className="sec-title text-white">Ready to Launch Your Website?</h2>
                <p className="sec-text text-white">
                  Get started with our cloud hosting in minutes. No technical knowledge required!
                </p>
              </div>
            </div>
            <div className="col-lg-auto">
              <Link to="/contact" className="ot-btn style2">
                Get Started Now
                <ArrowRight size={16} className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudCpanelHosting;
