import React from "react";
import "./Home.css";
import Navbar from "../Components/layout/Nav.jsx";
import Header from "../Components/layout/Header.jsx";
import MainMenuTap from "../Components/common/MainMenuTap.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MainMenuTap />
    </>
  );
};

export default Home;
