import React from "react";
import "./Header.css";
import Banner from "../../Assets/Banner.png";
import Button from "../common/Button";

const Header = () => {
  return (
    <header className="header">
      <img src={Banner} alt="cib-banner" className="cib-banner" />
      <div className="hero-details">
        <h1 className="cib-hero-title">CIB</h1>
        <div className="cib-hero-subtitle-div">
          <p className="cib-hero-subtitle">
            Delivering value to our clients, our
          </p>
          <p className="cib-hero-subtitle">community and our shareholders</p>
        </div>
        <Button Button="Discover more" />
      </div>
    </header>
  );
};

export default Header;
