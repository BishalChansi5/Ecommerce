import React from "react";
import HeroSection from "./components/HeroSection";
import Footer1 from './components/Footer1'
const About = () => {
  const data = {
    name: "Ashish SuperMart.    Find Happiness With Us. Happy shopping!",
  };

  return(
   <>
  <HeroSection myData={data} />;
  <Footer1 />
  </>
  )
};

export default About;