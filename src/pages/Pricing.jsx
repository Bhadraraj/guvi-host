import React from "react";
import { Link } from "react-router-dom";
import PricingCard from "../components/Cards/PricingCard";

const Pricing = () => {
  const hostingPlans = [
    {
      title: "Starter Hosting",
      price: "9.99",
      features: [
        "10 GB SSD Storage",
        "100 GB Bandwidth",
        "5 Email Accounts",
        "Free SSL Certificate",
        "24/7 Support",
        "99.9% Uptime",
      ],
      link: "/contact",
    },
    {
      title: "Business Hosting",
      price: "29.99",
      features: [
        "50 GB SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
        "Priority Support",
        "99.99% Uptime",
        "Daily Backups",
      ],
      link: "/contact",
      isPopular: true,
    },
    {
      title: "Enterprise Hosting",
      price: "99.99",
      features: [
        "Unlimited SSD Storage",
        "Unlimited Bandwidth",
        "Unlimited Email Accounts",
        "Free SSL Certificate",
        "Dedicated Support",
        "99.99% Uptime",
        "Daily Backups",
        "CDN Integration",
      ],
      link: "/contact",
    },
  ];

  const webDevPlans = [
    {
      title: "Basic Website",
      price: "499",
      period: "project",
      features: [
        "Up to 5 Pages",
        "Responsive Design",
        "Contact Form",
        "SEO Basics",
        "1 Month Support",
      ],
      link: "/contact",
    },
    {
      title: "Business Website",
      price: "1499",
      period: "project",
      features: [
        "Up to 15 Pages",
        "Custom Design",
        "CMS Integration",
        "Advanced SEO",
        "Payment Gateway",
        "3 Months Support",
      ],
      link: "/contact",
      isPopular: true,
    },
    {
      title: "E-commerce",
      price: "2999",
      period: "project",
      features: [
        "Unlimited Pages",
        "Custom Design",
        "Full E-commerce",
        "Inventory Management",
        "Multiple Payment Gateways",
        "6 Months Support",
      ],
      link: "/contact",
    },
  ];

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Pricing Plans</h1>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Hosting Plans</span>
                <h2 className="sec-title">Affordable Hosting Solutions</h2>
                <p className="sec-text">
                  Choose the perfect hosting plan for your website. All plans include 24/7 support.
                </p>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            {hostingPlans.map((plan, index) => (
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

      <section className="space-top space-bottom bg-smoke">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title">Web Development</span>
                <h2 className="sec-title">Website Development Packages</h2>
                <p className="sec-text">
                  Get a professional website tailored to your business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            {webDevPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
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
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="h3 mb-3">Need a Custom Solution?</h3>
              <p className="mb-4">
                Can't find the right plan for your needs? Contact us for a custom quote
                tailored to your specific requirements.
              </p>
              <Link to="/contact" className="ot-btn">
                Contact Us for Custom Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
