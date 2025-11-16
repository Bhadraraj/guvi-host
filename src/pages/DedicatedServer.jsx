import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Server, Cpu, Database, Network, Lock, Zap } from "lucide-react";
import PricingCard from "../components/Cards/PricingCard";

const DedicatedServer = () => {
  const { type } = useParams();
  const isManaged = type === "managed";

  const pricingPlans = [
    {
      title: "Dedicated E3",
      price: isManaged ? "149.99" : "119.99",
      features: [
        "Intel Xeon E3-1230",
        "16 GB DDR4 RAM",
        "1 TB SSD Storage",
        "10 TB Bandwidth",
        "5 Dedicated IPs",
        isManaged ? "Fully Managed" : "Self Managed",
        isManaged && "Free cPanel/WHM",
        "99.9% Uptime SLA",
        "24/7 Support",
        "DDoS Protection",
      ].filter(Boolean),
      link: "/contact",
    },
    {
      title: "Dedicated E5",
      price: isManaged ? "249.99" : "199.99",
      features: [
        "Intel Xeon E5-2620",
        "32 GB DDR4 RAM",
        "2 TB SSD Storage",
        "15 TB Bandwidth",
        "10 Dedicated IPs",
        isManaged ? "Fully Managed" : "Self Managed",
        isManaged && "Free cPanel/WHM",
        "99.99% Uptime SLA",
        "24/7 Priority Support",
        "Advanced DDoS Protection",
        "RAID Configuration",
      ].filter(Boolean),
      link: "/contact",
      isPopular: true,
    },
    {
      title: "Dedicated Dual E5",
      price: isManaged ? "399.99" : "349.99",
      features: [
        "Dual Intel Xeon E5-2680",
        "64 GB DDR4 RAM",
        "4 TB SSD Storage",
        "20 TB Bandwidth",
        "15 Dedicated IPs",
        isManaged ? "Fully Managed" : "Self Managed",
        isManaged && "Free cPanel/WHM",
        "99.99% Uptime SLA",
        "24/7 Dedicated Support",
        "Enterprise DDoS Protection",
        "RAID 10 Configuration",
        "Private Network",
      ].filter(Boolean),
      link: "/contact",
    },
  ];

  return (
    <>
      <div className="breadcumb-wrapper" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{isManaged ? "Managed" : "Self Managed"} Dedicated Servers</h1>
            <ul className="breadcumb-menu">
              <li><Link to="/">Home</Link></li>
              <li>Dedicated Servers</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Enterprise Servers</span>
                <h2 className="sec-title">Powerful Dedicated Server Hosting</h2>
                <p className="sec-text">
                  Get maximum performance with enterprise-grade dedicated servers. Complete control,
                  guaranteed resources, and unmatched reliability for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-top space-bottom bg-smoke">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Server Plans</span>
                <h2 className="sec-title">Choose Your Dedicated Server</h2>
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

      <section className="cta-area-1 space" style={{ backgroundImage: "url(/assets/img/bg/cta_bg_2.png)" }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-8">
              <div className="title-area mb-lg-0">
                <span className="sub-title text-white">Deploy Your Server</span>
                <h2 className="sec-title text-white">Ready for Ultimate Performance?</h2>
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

export default DedicatedServer;
