import React from "react";
import "./MainMenuTap.css";
import Menutitles from "../common/MainMenuTapTitles";

const MainMenuTap = () => {
  return (
    <>
      <div className="main-menu-tap">
        <Menutitles Menutitle="Apply Online" />
        <Menutitles Menutitle="News" />
        <Menutitles Menutitle="Blog Articles" />
        <Menutitles Menutitle="CIB International" />
        <Menutitles Menutitle="Sustainable Finance" />
        <Menutitles Menutitle="Awards" />
      </div>
    </>
  );
};

export default MainMenuTap;
