import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const TeamCard = ({
  image,
  name,
  designation,
  socials = {},
  delay = 0,
}) => {
  return (
    <AnimatedSection animation="slideInUp" delay={delay}>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            <Link to="#">{name}</Link>
          </h3>
          <span className="text-gray-600 text-sm mb-4 block">{designation}</span>
          <div className="flex justify-center gap-3 mt-4">
            {socials.facebook && (
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-400 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            )}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-700 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            )}
            {socials.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-pink-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TeamCard;
