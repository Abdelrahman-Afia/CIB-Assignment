import React from "react";
import "./Nav.css";
import Logo from "../../Assets/ciblogo.png";
import Navtitles from "../common/Nav-title";

const Nav = () => {
  return (
    <>
      <nav className="Navbar">
        <img src={Logo} alt="cib-logo" className="cib-logo" />
        <div className="Nav-links">
          <Navtitles name="About Us" />
          <Navtitles name=" Investor Relations " />
          <Navtitles name=" Responsible Banking " />
          <Navtitles name=" Newsroom " />
          <Navtitles name=" Learning Center " />
          <Navtitles name=" Careers " />
          <Navtitles name=" Others " />
        </div>
      </nav>
    </>
  );
};

export default Nav;
