import React from "react";
import "./FooterLink.css";

const FooterLink = ({ href, children }) => {
  return (
    <a className="footer-link" href={href}>
      {children}
    </a>
  );
};

export default FooterLink;
