import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const PricingCard = ({
  title,
  price,
  period = "month",
  features = [],
  link,
  isPopular = false,
  delay = 0,
}) => {
  return (
    <AnimatedSection animation="slideInUp" delay={delay}>
      <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 h-full flex flex-col ${
        isPopular ? "border-blue-500 scale-105" : "border-gray-200 hover:border-blue-300"
      }`}>
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </div>
        )}
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
        <div className="text-center mb-8">
          <span className="text-gray-500 text-2xl font-semibold">$</span>
          <span className="text-5xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 text-lg">/{period}</span>
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={14} className="text-blue-600" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          to={link}
          className={`w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 block ${
            isPopular
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl"
              : "bg-gray-100 text-gray-900 hover:bg-blue-500 hover:text-white"
          }`}
        >
          Get Started
        </Link>
      </div>
    </AnimatedSection>
  );
};

export default PricingCard;
