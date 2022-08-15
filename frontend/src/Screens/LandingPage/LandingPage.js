import React from "react";
import "./LandingPage.css";
import KeyBenefit from "../../Components/KeyBenefit/KeyBenefit";
import Navbar from "../../Components/Navbar/Navbar"
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer"

const LandingPage = () => {
  return (
      <div >
          {/* <div className="landing" /> */}
          <Navbar className="nav" />
          <Banner className="banner" />

          {/* we need a banner component which will be placed just after the navbar */}

          {/* A component for process tab */}

          {/* benefits cards component */}
          <KeyBenefit />
          {/* Advantages component */}

          {/* footer */}
          <Footer />
      </div>
  );
};

export default LandingPage;
