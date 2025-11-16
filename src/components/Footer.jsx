import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Copyright,
  Square, // added for list icons
} from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-wrapper footer-layout1 ">
        <div
          className="footer-shape1"
          data-bg-src="assets/img/shape/footer-bg-shape1-1.png"
        />
        <div className="footer-shape2 spin d-md-block d-none">
          <img src="assets/img/shape/footer-bg-shape1-2.png" alt="img" />
        </div>
        <div className="footer-shape3 spin">
          <img src="assets/img/shape/footer-bg-shape1-3.png" alt="img" />
        </div>

        

        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              {/* About Section */}
              <div className="col-md-6 col-xl-auto" data-cue="slideInUp">
                <div className="widget footer-widget">
                  <div className="ot-widget-about">
                    <div className="about-logo">
                      <a href="index.html">
                        <img src="assets/img/logo.svg" alt="Secur" />
                      </a>
                    </div>
                    <p className="about-text">
                      Since 1999, Secur has been a trusted leader in
                      cybersecurity, protecting digital assets with.
                    </p>
                    <div className="ot-social d-flex gap-3">
                      <a href="https://www.facebook.com/">
                        <Facebook size={18} />
                      </a>
                      <a href="https://www.twitter.com/">
                        <Twitter size={18} />
                      </a>
                      <a href="https://www.linkedin.com/">
                        <Linkedin size={18} />
                      </a>
                      <a href="https://www.youtube.com/">
                        <Youtube size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* IT Solutions */}
              <div className="col-md-6 col-xl-auto" data-cue="slideInUp">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">IT Solution</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a
                          href="contact.html"
                          className="d-flex align-items-center gap-2"
                        >
                          <Square size={10} /> Malware Protection
                        </a>
                      </li>
                      <li>
                        <a
                          href="contact.html"
                          className="d-flex align-items-center gap-2"
                        >
                          <Square size={10} /> Computer Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="contact.html"
                          className="d-flex align-items-center gap-2"
                        >
                          <Square size={10} /> Server Protection
                        </a>
                      </li>
                      <li>
                        <a
                          href="contact.html"
                          className="d-flex align-items-center gap-2"
                        >
                          <Square size={10} /> Cyber Security
                        </a>
                      </li>
                      <li>
                        <a
                          href="contact.html"
                          className="d-flex align-items-center gap-2"
                        >
                          <Square size={10} /> Security Monitoring
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="col-md-6 col-xl-auto" data-cue="slideInUp">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a
                          href="about.html"
                          className="d-flex align-items-center gap-2"
                        >
                          <Square size={10} /> About Secur
                        </a>
                      </li>
                      <li>
                        <a
                          href="service.html"
                          className="d-flex align-items-center gap-2"
                        >
                          <Square size={10} /> Our Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="pricing.html"
                          className="d-flex align-items-center gap-2"
                        >
                          <Square size={10} /> Pricing Plan
                        </a>
                      </li>
                      <li>
                        <a
                          href="project.html"
                          className="d-flex align-items-center gap-2"
                        >
                          <Square size={10} /> Our Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="team.html"
                          className="d-flex align-items-center gap-2"
                        >
                          <Square size={10} /> Our Team
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="col-md-6 col-xl-auto" data-cue="slideInUp">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Us</h3>
                  <div className="ot-widget-contact">
                    <div className="info-box d-flex align-items-start">
                      <div className="box-icon me-3">
                        <MapPin size={20} />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Location</h3>
                        <p className="box-text">
                          932 Dogwood Road, Chapel Hill, North Carolina
                        </p>
                      </div>
                    </div>

                    <div className="info-box d-flex align-items-start mt-3">
                      <div className="box-icon me-3">
                        <Phone size={20} />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Phone</h3>
                        <a
                          className="box-link d-block"
                          href="tel:16555778749"
                        >
                          +165-5577-8749
                        </a>
                        <a
                          className="box-link d-block"
                          href="tel:16535647488"
                        >
                          +165-3564-7488
                        </a>
                      </div>
                    </div>

                    <div className="info-box d-flex align-items-start mt-3">
                      <div className="box-icon me-3">
                        <Clock size={20} />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Opening Hour</h3>
                        <p className="box-text">
                          Mon - Sat: 10.00 AM - 4.00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Contact Section */}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="copyright-wrap">
          <div className="container text-center">
            <div className="row gy-3 justify-content-between align-items-center">
              <div className="col-md-auto" data-cue="slideInLeft">
                <p className="copyright-text d-flex align-items-center justify-content-center gap-1">
                  <Copyright size={16} /> Copyright 2025{" "}
                  <a href="index.html">Secur</a>. All Rights Reserved.
                </p>
              </div>
              <div className="col-md-auto">
                <div className="footer-links" data-cue="slideInRight">
                  <ul>
                    <li>
                      <a href="about.html">Terms &amp; Condition</a>
                    </li>
                    <li>
                      <a href="about.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
