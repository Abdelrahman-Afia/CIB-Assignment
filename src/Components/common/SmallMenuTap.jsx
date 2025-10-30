import React from "react";
import "./SmallMenuTap.css";

const SmallMenuTap = ({ children, ...props }) => {
  return (
    <div className="small-menu-tap" {...props}>
      {children}
    </div>
  );
};

export default SmallMenuTap;
