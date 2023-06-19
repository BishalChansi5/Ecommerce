import React from "react";
import HeroSection from "./components/HeroSection";
import Footer1 from './components/Footer1'
import { useProductContext } from "./context/productcontex";
const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Ashish SuperMart.    Find Happiness With Us. Happy shopping!",
  };

  return(
   <>
    {myName}
  <HeroSection myData={data} />;
  <Footer1 />
  </>
  )
};

export default About;