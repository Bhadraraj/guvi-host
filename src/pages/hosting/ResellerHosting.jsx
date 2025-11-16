import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Users, DollarSign, Settings, Award, TrendingUp, Headphones } from "lucide-react";
import PricingCard from "../../components/Cards/PricingCard";

const ResellerHosting = () => {
  const pricingPlans = [
    {
      title: "Reseller Starter",
      price: "24.99",
      features: [
        "60 GB SSD Storage",
        "600 GB Bandwidth",
        "Host Unlimited Domains",
        "Free WHMCS License",
        "Free SSL Certificates",
        "White Label cPanel",
        "WHM Control Panel",
        "24/7 Priority Support",
        "Free Website Migration",
      ],
      link: "/contact",
    },
    {
      title: "Reseller Pro",
      price: "49.99",
      features: [
        "120 GB SSD Storage",
        "1200 GB Bandwidth",
        "Host Unlimited Domains",
        "Free WHMCS License",
        "Free SSL Certificates",
        "White Label cPanel",
        "WHM Control Panel",
        "24/7 Priority Support",
        "Free Website Migration",
        "Free Dedicated IP",
        "Advanced DNS Management",
      ],
      link: "/contact",
      isPopular: true,
    },
    {
      title: "Reseller Enterprise",
      price: "99.99",
      features: [
        "250 GB SSD Storage",
        "2500 GB Bandwidth",
        "Host Unlimited Domains",
        "Free WHMCS License",
        "Free SSL Certificates",
        "White Label cPanel",
        "WHM Control Panel",
        "24/7 Dedicated Support",
        "Free Website Migration",
        "Free Dedicated IP",
        "Advanced DNS Management",
        "Priority Server Resources",
        "Customizable Packages",
      ],
      link: "/contact",
    },
  ];

  const features = [
    { icon: <Users size={32} />, title: "Build Your Business", text: "Start your own hosting company and manage clients easily" },
    { icon: <DollarSign size={32} />, title: "Set Your Prices", text: "Complete control over pricing and package creation" },
    { icon: <Settings size={32} />, title: "WHM Control Panel", text: "Powerful WHM panel to manage all client accounts" },
    { icon: <Award size={32} />, title: "White Label Brand", text: "Fully branded hosting with your company name" },
    { icon: <TrendingUp size={32} />, title: "Grow Your Revenue", text: "Scalable plans to grow with your business" },
    { icon: <Headphones size={32} />, title: "24/7 Support", text: "We support you so you can support your clients" },
  ];

  return (
    <>
      <div className="breadcumb-wrapper" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Reseller Hosting</h1>
            <ul className="breadcumb-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pricing">Hosting</Link></li>
              <li>Reseller Hosting</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Start Your Hosting Business</span>
                <h2 className="sec-title">Build Your Own Web Hosting Company</h2>
                <p className="sec-text">
                  Launch your hosting business with our white-label reseller hosting. Get everything
                  you need to start selling hosting services under your brand name today.
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
                <span className="sub-title">Reseller Plans</span>
                <h2 className="sec-title">Choose Your Reseller Package</h2>
                <p className="sec-text">
                  All plans include WHM, free WHMCS, SSL certificates, and white-label branding.
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
              <div className="title-area mb-4">
                <span className="sub-title">Complete Solution</span>
                <h2 className="sec-title">Everything You Need to Start and Grow</h2>
                <p className="sec-text mb-4">
                  Our reseller hosting includes all the tools and features you need to run
                  a professional hosting business. Focus on growing your client base while
                  we handle the infrastructure.
                </p>
              </div>

              <div className="checklist mb-4">
                <ul>
                  <li><Check size={20} className="text-primary me-2" />Free WHMCS Billing Software</li>
                  <li><Check size={20} className="text-primary me-2" />Unlimited cPanel Accounts</li>
                  <li><Check size={20} className="text-primary me-2" />Private Nameservers</li>
                  <li><Check size={20} className="text-primary me-2" />Free SSL Certificates for All Clients</li>
                  <li><Check size={20} className="text-primary me-2" />Softaculous Auto Installer</li>
                  <li><Check size={20} className="text-primary me-2" />99.9% Uptime SLA</li>
                  <li><Check size={20} className="text-primary me-2" />Free Migration Assistance</li>
                  <li><Check size={20} className="text-primary me-2" />Anonymous Ownership</li>
                </ul>
              </div>

              <Link to="/contact" className="ot-btn">
                Start Your Business
                <ArrowRight size={16} className="ms-2" />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="img-box1">
                <img src="/assets/img/service/service2-2.jpg" alt="Reseller Hosting" />
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
                <span className="sub-title text-white">Launch Your Business</span>
                <h2 className="sec-title text-white">Ready to Start Your Hosting Company?</h2>
                <p className="sec-text text-white">
                  Join hundreds of successful hosting entrepreneurs. Get started today!
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

export default ResellerHosting;
