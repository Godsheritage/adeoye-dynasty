import React from "react";
import Main from "../components/Main";
import Footer from "../../shared/Footer";
import MainNavigation from "../../shared/UI Elements/Navigation/MainNavigation";

const Home = () => {
  return (
    <>
      <div className="home">
        <MainNavigation />
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default Home;
