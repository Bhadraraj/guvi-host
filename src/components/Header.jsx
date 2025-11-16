import React from "react";
import {
  X,
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Phone,
  MapPin,
  Mail,
  Send, // ✅ replaces PaperPlane
  Globe,
  Menu,
  ArrowRight,
  ChevronDown,
  MessageCircle, // ✅ replaces Whatsapp
} from "lucide-react";

const Header = () => {
  return (
    <>
      <>
        
        {/*==============================
	Header Area
==============================*/}
        <header className="ot-header header-layout1">
          <div className="sticky-wrapper">
            {/* Main Menu Area */}
            <div className="menu-area">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <div className="header-logo">
                      <a href="index.html">
                        <img src="assets/img/logo.svg" alt="Secur" />
                      </a>
                    </div>
                  </div>
                  <div className="col-auto">
                    <nav className="main-menu d-none d-lg-inline-block">
                      <ul>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="service.html">Services</a>
                        </li>
                        <li>
                          <a href="project.html">Portfolio</a>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-auto">
                    <div className="header-button">
                      <div className="dropdown-link">
                        <a
                          className="dropdown-toggle icon-btn"
                          href="#"
                          role="button"
                          id="dropdownMenuLink1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fal fa-globe" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink1"
                        >
                          <li>
                            <a href="#">German</a>
                            <a href="#">French</a>
                            <a href="#">Italian</a>
                            <a href="#">Latvian</a>
                            <a href="#">Spanish</a>
                            <a href="#">Greek</a>
                          </li>
                        </ul>
                      </div>
                      <button
                        type="button"
                        className="icon-btn searchBoxToggler d-none d-lg-block"
                      >
                        <i className="far fa-search" />
                      </button>
                      <button
                        type="button"
                        className="ot-menu-toggle d-block d-lg-none"
                      >
                        <i className="far fa-bars" />
                      </button>
                      <a
                        href="contact.html"
                        className="ot-btn style-border d-none d-xl-flex"
                      >
                        Get Consultation
                        <i className="far fa-long-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    </>
  );
};

export default Header;
