import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

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
    <div className="col-md-6 col-xl-4" data-cue="slideInUp" data-delay={delay}>
      <div className="blog-card">
        <div className="box-img">
          <img src={image} alt={title} />
          {category && <div className="blog-category">{category}</div>}
        </div>
        <div className="box-content">
          <div className="blog-meta">
            <span className="d-flex align-items-center gap-1">
              <Calendar size={14} />
              {date}
            </span>
            <span className="d-flex align-items-center gap-1">
              <User size={14} />
              {author}
            </span>
          </div>
          <h3 className="box-title">
            <Link to={link}>{title}</Link>
          </h3>
          <p className="box-text">{excerpt}</p>
          <Link to={link} className="link-btn">
            Read More <ArrowRight size={16} className="ms-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
