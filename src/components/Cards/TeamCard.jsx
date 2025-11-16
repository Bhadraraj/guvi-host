import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const TeamCard = ({
  image,
  name,
  designation,
  socials = {},
  delay = 0,
}) => {
  return (
    <div className="col-md-6 col-xl-3" data-cue="slideInUp" data-delay={delay}>
      <div className="team-card">
        <div className="box-img">
          <img src={image} alt={name} />
        </div>
        <div className="box-content">
          <h3 className="box-title">
            <Link to="#">{name}</Link>
          </h3>
          <span className="box-designation">{designation}</span>
          <div className="ot-social">
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook size={16} />
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter size={16} />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
