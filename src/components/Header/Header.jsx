import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe, Search, Menu, X, ChevronDown } from "lucide-react";
import { menuData, countryData } from "./MenuData";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/assets/img/logo.svg"
                  alt="Logo"
                  className="h-10 w-auto transition-all duration-300 hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
              {menuData.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.submenu && setActiveDropdown(index)}
                  onMouseLeave={() => item.submenu && setActiveDropdown(null)}
                >
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === index ? null : index)
                        }
                        className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl transition-all duration-300 ${
                          activeDropdown === index
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-4 py-2 text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              {/* Country Selector */}
              <div className="relative hidden md:block">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === "country" ? null : "country")
                  }
                  className="p-2 text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  <Globe size={20} />
                </button>
                {activeDropdown === "country" && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl">
                    <div className="py-2">
                      {countryData.map((country, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedCountry(country);
                            setActiveDropdown(null);
                          }}
                          className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                        >
                          <span>{country.flag}</span>
                          <span>{country.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                onClick={toggleSearch}
                className="hidden lg:block p-2 text-gray-700 hover:text-primary transition-colors duration-300"
              >
                <Search size={20} />
              </button>

              {/* Action Buttons (Desktop) */}
              <Link
                to="/contact"
                className="hidden xl:inline-flex items-center px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300"
              >
                Get Consultation
              </Link>

              <Link
                to="/login"
                className="hidden xl:inline-flex items-center px-6 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Login
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors duration-300"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={toggleMobileMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <img src="/assets/img/logo.svg" alt="Logo" className="h-8" />
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-700 hover:text-primary"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 py-4">
              {menuData.map((item, index) => (
                <div key={index} className="border-b border-gray-100">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === index ? null : index)
                        }
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50"
                      >
                        <span className="font-medium">{item.title}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`bg-gray-50 transition-all duration-300 overflow-hidden ${
                          activeDropdown === index ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={toggleMobileMenu}
                            className="block px-8 py-2 text-sm text-gray-600 hover:text-primary"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={toggleMobileMenu}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer Actions */}
            <div className="p-4 border-t space-y-3">
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="block w-full px-4 py-3 bg-primary text-white text-center rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
              >
                Get Consultation
              </Link>
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className="block w-full px-4 py-3 border-2 border-primary text-primary text-center rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 transition-opacity duration-300">
          <div className="container mx-auto px-4">
            <button
              onClick={toggleSearch}
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors duration-300"
            >
              <X size={32} />
            </button>
            <form className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full px-6 py-4 pr-16 bg-transparent border-2 border-white text-white placeholder-gray-400 rounded-full text-lg focus:outline-none focus:border-primary transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-primary hover:bg-primary-dark rounded-full transition-colors duration-300"
                >
                  <Search size={20} className="text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
