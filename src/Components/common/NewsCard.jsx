import React from "react";
import "./NewsCard.css";

const NewsCard = ({ title, content, ...props }) => {
  return (
    <div className="news-card" {...props}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default NewsCard;
