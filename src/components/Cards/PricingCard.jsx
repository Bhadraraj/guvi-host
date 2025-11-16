import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

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
    <div className="col-md-6 col-xl-4" data-cue="slideInUp" data-delay={delay}>
      <div className={`pricing-card ${isPopular ? "popular" : ""}`}>
        {isPopular && <div className="popular-badge">Most Popular</div>}
        <h3 className="box-title">{title}</h3>
        <div className="box-price">
          <span className="currency">$</span>
          <span className="amount">{price}</span>
          <span className="period">/{period}</span>
        </div>
        <div className="box-features">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <Check size={16} className="me-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <Link to={link} className="ot-btn w-100">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
