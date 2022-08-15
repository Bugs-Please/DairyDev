import React from "react";
import "./LandingPage.css";
import KeyBenefit from "../../Components/KeyBenefit/KeyBenefit";
import Navbar from "../../Components/Navbar/Navbar"
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer"
import Process from "../../Components/Process/Process";

const LandingPage = () => {
  return (
      <div >
          {/* <div className="landing" /> */}
          <Navbar className="nav" />
          

          {/* we need a banner component which will be placed just after the navbar */}
          <Banner className="banner" />
          {/* A component for process tab */}
          <h2 className="text-center">Our Process</h2>
          <Process className="process"/>
          {/* benefits cards component */}
          <KeyBenefit />
          {/* Advantages component */}

          {/* footer */}
          <Footer />
      </div>
  );
};

export default LandingPage;
