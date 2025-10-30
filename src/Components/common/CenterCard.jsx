import React from "react";
import "./CenterCard.css";

const CenterCard = ({ children, ...props }) => {
  return (
    <div className="center-card" {...props}>
      {children}
    </div>
  );
};

export default CenterCard;
