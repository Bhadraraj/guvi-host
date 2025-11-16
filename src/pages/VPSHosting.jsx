import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Server, Cpu, HardDrive, Wifi, Shield, Headphones } from "lucide-react";
import PricingCard from "../components/Cards/PricingCard";

const VPSHosting = () => {
  const { type } = useParams();

  const vpsTypes = {
    "self-managed": {
      title: "Self Managed VPS",
      subtitle: "Full Root Access",
      description: "Complete control over your VPS server. Perfect for experienced users who want full customization.",
    },
    "managed": {
      title: "Managed VPS",
      subtitle: "We Handle Everything",
      description: "Fully managed VPS hosting with expert support. Focus on your business while we manage your server.",
    },
    "managed-windows": {
      title: "Managed Windows VPS",
      subtitle: "Windows Server Management",
      description: "Fully managed Windows VPS with RDP access and complete Windows server management.",
    },
    "self-managed-windows": {
      title: "Self Managed Windows VPS",
      subtitle: "Windows Server Control",
      description: "Full control over Windows Server environment with RDP access for advanced users.",
    },
  };

  const currentType = vpsTypes[type] || vpsTypes["self-managed"];
  const isWindows = type?.includes("windows");
  const isManaged = type?.includes("managed") && !type?.includes("self-managed");

  const pricingPlans = [
    {
      title: "VPS Basic",
      price: isWindows ? "29.99" : "19.99",
      features: [
        "2 CPU Cores",
        "4 GB RAM",
        "50 GB SSD Storage",
        "2 TB Bandwidth",
        isWindows ? "Windows Server 2022" : "Linux (CentOS/Ubuntu)",
        isWindows ? "RDP Access" : "Full Root Access",
        "1 Dedicated IP",
        isManaged ? "Server Management" : "Self Managed",
        "99.9% Uptime SLA",
        "24/7 Support",
      ],
      link: "/contact",
    },
    {
      title: "VPS Professional",
      price: isWindows ? "59.99" : "39.99",
      features: [
        "4 CPU Cores",
        "8 GB RAM",
        "100 GB SSD Storage",
        "4 TB Bandwidth",
        isWindows ? "Windows Server 2022" : "Linux (CentOS/Ubuntu)",
        isWindows ? "RDP Access" : "Full Root Access",
        "2 Dedicated IPs",
        isManaged ? "Server Management" : "Self Managed",
        isManaged && "Free cPanel/WHM",
        "99.9% Uptime SLA",
        "24/7 Priority Support",
        "Free Backups",
      ].filter(Boolean),
      link: "/contact",
      isPopular: true,
    },
    {
      title: "VPS Enterprise",
      price: isWindows ? "119.99" : "79.99",
      features: [
        "8 CPU Cores",
        "16 GB RAM",
        "200 GB SSD Storage",
        "8 TB Bandwidth",
        isWindows ? "Windows Server 2022" : "Linux (CentOS/Ubuntu)",
        isWindows ? "RDP Access" : "Full Root Access",
        "3 Dedicated IPs",
        isManaged ? "Server Management" : "Self Managed",
        isManaged && "Free cPanel/WHM",
        "99.99% Uptime SLA",
        "24/7 Dedicated Support",
        "Daily Backups",
        "Advanced Security",
      ].filter(Boolean),
      link: "/contact",
    },
  ];

  const features = [
    { icon: <Server size={32} />, title: "Enterprise Hardware", text: "Latest generation Intel/AMD processors" },
    { icon: <Cpu size={32} />, title: "Dedicated Resources", text: "Guaranteed CPU, RAM, and storage" },
    { icon: <HardDrive size={32} />, title: "SSD Storage", text: "Ultra-fast NVMe SSD storage" },
    { icon: <Wifi size={32} />, title: "High Bandwidth", text: "Unmetered bandwidth on all plans" },
    { icon: <Shield size={32} />, title: "DDoS Protection", text: "Advanced DDoS mitigation included" },
    { icon: <Headphones size={32} />, title: "Expert Support", text: "24/7 technical support team" },
  ];

  return (
    <>
      <div className="breadcumb-wrapper" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{currentType.title}</h1>
            <ul className="breadcumb-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pricing">VPS Hosting</Link></li>
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
                <span className="sub-title">{currentType.subtitle}</span>
                <h2 className="sec-title">Powerful VPS Hosting Solutions</h2>
                <p className="sec-text">{currentType.description}</p>
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
                <span className="sub-title">VPS Plans</span>
                <h2 className="sec-title">Choose Your VPS Plan</h2>
                <p className="sec-text">
                  Scalable VPS hosting with dedicated resources and guaranteed performance.
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
                <img src="/assets/img/service/service2-4.jpg" alt="VPS Hosting" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-area mb-4">
                <span className="sub-title">Why Choose VPS</span>
                <h2 className="sec-title">Enterprise Performance at VPS Prices</h2>
                <p className="sec-text mb-4">
                  Get dedicated server resources at a fraction of the cost. Perfect for growing
                  websites, applications, and businesses that need more power than shared hosting.
                </p>
              </div>

              <div className="checklist mb-4">
                <ul>
                  <li><Check size={20} className="text-primary me-2" />Instant Setup & Deployment</li>
                  <li><Check size={20} className="text-primary me-2" />Choose Your OS (Linux/Windows)</li>
                  <li><Check size={20} className="text-primary me-2" />99.9% Uptime Guarantee</li>
                  <li><Check size={20} className="text-primary me-2" />Free Server Migration</li>
                  <li><Check size={20} className="text-primary me-2" />Scalable Resources</li>
                  <li><Check size={20} className="text-primary me-2" />Advanced Firewall</li>
                  <li><Check size={20} className="text-primary me-2" />{isManaged ? "Fully Managed Service" : "Full Root Access"}</li>
                  <li><Check size={20} className="text-primary me-2" />Weekly Backups Included</li>
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
                <span className="sub-title text-white">Launch Your VPS Server</span>
                <h2 className="sec-title text-white">Ready to Upgrade to VPS?</h2>
                <p className="sec-text text-white">
                  Get your VPS server deployed in minutes. Contact us to get started!
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

export default VPSHosting;
