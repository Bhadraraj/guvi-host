import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <div className="col-md-6 col-xl-4" data-cue="slideInUp" data-delay={delay}>
      <div className="service-card">
        <div className="box-icon">
          {typeof icon === "string" ? (
            <img src={icon} alt={title} />
          ) : (
            icon
          )}
        </div>
        <h3 className="box-title">
          <Link to={link}>{title}</Link>
        </h3>
        <p className="box-text">{description}</p>
        <Link to={link} className="ot-btn">
          Read More <ArrowRight size={16} className="ms-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
