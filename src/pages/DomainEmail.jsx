import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Globe, Mail, Shield, Cloud, Users, Briefcase } from "lucide-react";
import PricingCard from "../components/Cards/PricingCard";

const DomainEmail = () => {
  const { type } = useParams();

  const serviceTypes = {
    "microsoft-365": {
      title: "Microsoft 365",
      subtitle: "Enterprise Email & Productivity",
      description: "Get professional email with Microsoft 365. Includes Office apps, Teams, and 1TB OneDrive storage.",
      icon: <Briefcase size={40} />,
    },
    "google-workspace": {
      title: "Google Workspace",
      subtitle: "Gmail for Business",
      description: "Professional email powered by Gmail. Includes Google Drive, Meet, Calendar, and more.",
      icon: <Cloud size={40} />,
    },
    "zoho": {
      title: "Zoho Email",
      subtitle: "Affordable Business Email",
      description: "Cost-effective business email solution with powerful features and collaboration tools.",
      icon: <Mail size={40} />,
    },
    "titan": {
      title: "Titan Email",
      subtitle: "Professional Email Platform",
      description: "Modern email platform designed for professionals and small businesses.",
      icon: <Users size={40} />,
    },
    "webmail": {
      title: "Web Mail",
      subtitle: "Access Email Anywhere",
      description: "Secure webmail access to your email from any device, anywhere in the world.",
      icon: <Globe size={40} />,
    },
  };

  const currentService = serviceTypes[type] || {
    title: "Domain Registration",
    subtitle: "Secure Your Online Identity",
    description: "Register your perfect domain name and establish your online presence today.",
    icon: <Globe size={40} />,
  };

  const domainPricing = [
    { title: ".com Domain", price: "12.99", period: "year", features: ["Free WHOIS Privacy", "Free DNS Management", "Easy Domain Management", "24/7 Support"], link: "/contact" },
    { title: ".net Domain", price: "14.99", period: "year", features: ["Free WHOIS Privacy", "Free DNS Management", "Easy Domain Management", "24/7 Support"], link: "/contact" },
    { title: ".org Domain", price: "14.99", period: "year", features: ["Free WHOIS Privacy", "Free DNS Management", "Easy Domain Management", "24/7 Support"], link: "/contact" },
  ];

  const emailPricing = {
    "microsoft-365": [
      {
        title: "Business Basic",
        price: "6.00",
        features: ["Web & Mobile Office Apps", "50 GB Mailbox", "Microsoft Teams", "1 TB OneDrive Storage", "24/7 Support"],
        link: "/contact",
      },
      {
        title: "Business Standard",
        price: "12.50",
        features: ["Desktop Office Apps", "50 GB Mailbox", "Microsoft Teams", "1 TB OneDrive Storage", "Advanced Security", "24/7 Priority Support"],
        link: "/contact",
        isPopular: true,
      },
      {
        title: "Business Premium",
        price: "22.00",
        features: ["Full Office Suite", "100 GB Mailbox", "Microsoft Teams", "1 TB OneDrive Storage", "Advanced Security", "Device Management", "24/7 Premium Support"],
        link: "/contact",
      },
    ],
    "google-workspace": [
      {
        title: "Business Starter",
        price: "6.00",
        features: ["Custom Email", "30 GB Storage", "Google Meet (100)", "Docs, Sheets, Slides", "24/7 Support"],
        link: "/contact",
      },
      {
        title: "Business Standard",
        price: "12.00",
        features: ["Custom Email", "2 TB Storage", "Google Meet (150)", "Docs, Sheets, Slides", "Enhanced Security", "24/7 Priority Support"],
        link: "/contact",
        isPopular: true,
      },
      {
        title: "Business Plus",
        price: "18.00",
        features: ["Custom Email", "5 TB Storage", "Google Meet (500)", "Docs, Sheets, Slides", "Advanced Security", "eDiscovery", "24/7 Premium Support"],
        link: "/contact",
      },
    ],
    default: [
      {
        title: "Email Basic",
        price: "3.99",
        features: ["10 GB Mailbox", "Webmail Access", "IMAP/POP3", "Spam Protection", "24/7 Support"],
        link: "/contact",
      },
      {
        title: "Email Pro",
        price: "5.99",
        features: ["25 GB Mailbox", "Webmail Access", "IMAP/POP3/SMTP", "Advanced Spam Protection", "Mobile Sync", "24/7 Priority Support"],
        link: "/contact",
        isPopular: true,
      },
      {
        title: "Email Enterprise",
        price: "9.99",
        features: ["50 GB Mailbox", "Webmail Access", "Full Protocol Support", "Enterprise Security", "Mobile Sync", "Calendar & Contacts", "24/7 Premium Support"],
        link: "/contact",
      },
    ],
  };

  const currentPricing = type ? (emailPricing[type] || emailPricing.default) : domainPricing;

  return (
    <>
      <div className="breadcumb-wrapper" style={{ backgroundImage: "url(/assets/img/bg/breadcrumb-bg.png)" }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">{currentService.title}</h1>
            <ul className="breadcumb-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pricing">Services</Link></li>
              <li>{currentService.title}</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <div className="box-icon mb-3 text-primary d-flex justify-content-center">
                  {currentService.icon}
                </div>
                <span className="sub-title">{currentService.subtitle}</span>
                <h2 className="sec-title">{currentService.title}</h2>
                <p className="sec-text">{currentService.description}</p>
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
                <span className="sub-title">Pricing Plans</span>
                <h2 className="sec-title">Choose Your Plan</h2>
                <p className="sec-text">
                  {type ? "Professional email solutions for your business" : "Register your perfect domain name today"}
                </p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-4">
            {currentPricing.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period || "month"}
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
                <span className="sub-title text-white">Get Started Today</span>
                <h2 className="sec-title text-white">Ready to Get Started?</h2>
                <p className="sec-text text-white">
                  {type ? "Set up your professional email in minutes!" : "Register your domain and start building your online presence!"}
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

export default DomainEmail;
