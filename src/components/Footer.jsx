import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Clock, Square } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <img src="/assets/img/logo.svg" alt="Logo" className="h-10 brightness-0 invert" />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner in web development, digital marketing, and app development since 2010.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook size={18} />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter size={18} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {[
                  { title: "Web Development", path: "/web-development" },
                  { title: "Digital Marketing", path: "/digital-marketing" },
                  { title: "App Development", path: "/app-development" },
                  { title: "Hosting Solutions", path: "/hosting/cloud-cpanel" },
                  { title: "Domain & Email", path: "/domain" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-300 group">
                      <Square size={8} className="group-hover:scale-125 transition-transform" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { title: "Home", path: "/" },
                  { title: "Pricing", path: "/pricing" },
                  { title: "24/7 Support", path: "/ticket" },
                  { title: "Contact", path: "/contact" },
                  { title: "Login", path: "/login" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-300 group">
                      <Square size={8} className="group-hover:scale-125 transition-transform" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-400 text-sm">123 Business St, Tech City</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a href="tel:1234567890" className="block text-gray-400 text-sm hover:text-primary">+1 (234) 567-890</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Hours</h4>
                    <p className="text-gray-400 text-sm">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">© 2025 <Link to="/" className="text-primary hover:underline">YourCompany</Link>. All Rights Reserved.</p>
              <div className="flex space-x-6">
                <Link to="/terms" className="text-gray-400 hover:text-primary text-sm">Terms</Link>
                <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
