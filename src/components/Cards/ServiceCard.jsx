import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const ServiceCard = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <AnimatedSection animation="slideInUp" delay={delay}>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-500 h-full flex flex-col">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {typeof icon === "string" ? (
            <img src={icon} alt={title} className="w-10 h-10" />
          ) : (
            <div className="text-white">{icon}</div>
          )}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          <Link to={link}>{title}</Link>
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
        >
          Read More <ArrowRight size={20} />
        </Link>
      </div>
    </AnimatedSection>
  );
};

export default ServiceCard;
