import React from "react";
import Services from "./components/Services";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer/Footer";
import Footer1 from "./components/Footer1"
import FeatureProduct from "./components/FeatureProduct";
const Home = () => {
    const data={
        name:"Ashish SuperMart"
    }
  return (
  <>
  <HeroSection myData={data}/>
  <FeatureProduct />
  <Services />
  <Footer/>
  <Footer1/>
  </>
  )
};


export default Home;