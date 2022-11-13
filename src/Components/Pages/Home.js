import React from "react";
import "../../App.css";
import Cards from "../Cards/Cards";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import News from "../News/News/News";

function Home() {
  return (
    <div class="container-fluid">
      <HeroSection />
      <Cards />
      <News />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
