import React from "react";
import "./Home.css";
import Navbar from "../Components/layout/Nav.jsx";
import Header from "../Components/layout/Header.jsx";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Header />
      </div>
    </>
  );
};

export default Home;
