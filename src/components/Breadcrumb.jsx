import React from "react";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumb = ({ title, subtitle }) => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/img/bg/breadcrumb-bg.png')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-blue-100 mb-6">{subtitle}</p>}
          <nav className="flex items-center justify-center gap-2 text-white">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <ChevronRight size={18} className="text-blue-300" />
            <span className="text-blue-200">{title}</span>
          </nav>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Breadcrumb;
