import React from "react";
import "./MainMenuTap.css";

const MainMenuTap = ({ children, ...props }) => {
  return (
    <div className="main-menu-tap" {...props}>
      {children}
    </div>
  );
};

export default MainMenuTap;
