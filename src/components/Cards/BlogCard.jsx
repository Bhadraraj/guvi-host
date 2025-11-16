import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const BlogCard = ({
  image,
  title,
  excerpt,
  date,
  author,
  category,
  link,
  delay = 0,
}) => {
  return (
    <AnimatedSection animation="slideInUp" delay={delay}>
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {category && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {category}
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <User size={14} />
              {author}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            <Link to={link}>{title}</Link>
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">{excerpt}</p>
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
          >
            Read More <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BlogCard;
