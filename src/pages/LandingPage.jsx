import React from "react";
import Navbar from "../components/Navbar";
import CustomCarousel from "../components/Carousel";
import WelcomeSection from "../components/WelcomeSection";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <CustomCarousel />
      <WelcomeSection />
      <AboutUs/>
      <Footer/>
    </>
  );
};

export default LandingPage;
