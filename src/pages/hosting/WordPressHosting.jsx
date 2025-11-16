import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Zap, Shield, RefreshCw, Lock, Gauge, Users } from "lucide-react";
import PricingCard from "../../components/Cards/PricingCard";

const WordPressHosting = () => {
  const pricingPlans = [
    {
      title: "WP Starter",
      price: "6.99",
      features: [
        "1 WordPress Site",
        "20 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Auto WordPress Updates",
        "Daily Backups",
        "WordPress Accelerator",
        "24/7 Expert Support",
        "Free Website Migration",
      ],
      link: "/contact",
    },
    {
      title: "WP Business",
      price: "12.99",
      features: [
        "3 WordPress Sites",
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Auto WordPress Updates",
        "Daily Backups",
        "WordPress Accelerator",
        "24/7 Expert Support",
        "Free Website Migration",
        "Premium Security",
        "Advanced Caching",
      ],
      link: "/contact",
      isPopular: true,
    },
    {
      title: "WP Enterprise",
      price: "24.99",
      features: [
        "10 WordPress Sites",
        "100 GB SSD Storage",
        "Unlimited Bandwidth",
        "Free SSL Certificate",
        "Auto WordPress Updates",
        "Daily Backups",
        "WordPress Accelerator",
        "24/7 Priority Support",
        "Free Website Migration",
        "Premium Security",
        "Advanced Caching",
        "Dedicated Resources",
        "Expert WP Assistance",
      ],
      link: "/contact",
    },
  ];

  const features = [
    { icon: <Zap size={32} />, title: "Lightning Fast", text: "Optimized servers and caching for maximum WordPress speed" },
    { icon: <Shield size={32} />, title: "Enhanced Security", text: "Advanced protection against WordPress vulnerabilities" },
    { icon: <RefreshCw size={32} />, title: "Auto Updates", text: "Automatic WordPress core and plugin updates" },
    { icon: <Lock size={32} />, title: "Daily Backups", text: "Automatic daily backups with easy restore" },
    { icon: <Gauge size={32} />, title: "Performance", text: "Built-in caching and CDN integration" },
    { icon: <Users size={32} />, title: "Expert Support", text: "WordPress experts available 24/7" },
  ];

  return (
    <>
      <div className="breadcumb-wrapper" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">WordPress Hosting</h1>
            <ul className="breadcumb-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pricing">Hosting</Link></li>
              <li>WordPress Hosting</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Optimized for WordPress</span>
                <h2 className="sec-title">Lightning-Fast WordPress Hosting</h2>
                <p className="sec-text">
                  Experience the power of hosting built specifically for WordPress. Get faster loading
                  times, enhanced security, and expert WordPress support 24/7.
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
                <span className="sub-title">WordPress Plans</span>
                <h2 className="sec-title">Choose Your WordPress Hosting Plan</h2>
                <p className="sec-text">
                  All plans include WordPress optimization, automatic updates, and expert support.
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
                <img src="/assets/img/service/service2-3.jpg" alt="WordPress Hosting" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-area mb-4">
                <span className="sub-title">WordPress Specialists</span>
                <h2 className="sec-title">Built by WordPress Experts for WordPress</h2>
                <p className="sec-text mb-4">
                  Our hosting environment is specifically designed and optimized for WordPress.
                  Every aspect of our infrastructure is tuned for maximum WordPress performance.
                </p>
              </div>

              <div className="checklist mb-4">
                <ul>
                  <li><Check size={20} className="text-primary me-2" />One-Click WordPress Installation</li>
                  <li><Check size={20} className="text-primary me-2" />Pre-installed WordPress Accelerator</li>
                  <li><Check size={20} className="text-primary me-2" />Advanced WordPress Security</li>
                  <li><Check size={20} className="text-primary me-2" />Free WordPress Themes</li>
                  <li><Check size={20} className="text-primary me-2" />Plugin Compatibility Guaranteed</li>
                  <li><Check size={20} className="text-primary me-2" />Staging Environment</li>
                  <li><Check size={20} className="text-primary me-2" />WooCommerce Optimized</li>
                  <li><Check size={20} className="text-primary me-2" />Expert WordPress Support</li>
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
                <span className="sub-title text-white">Start Your WordPress Site</span>
                <h2 className="sec-title text-white">Ready to Launch Your WordPress Site?</h2>
                <p className="sec-text text-white">
                  Get your WordPress site up and running in minutes with our optimized hosting!
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

export default WordPressHosting;
