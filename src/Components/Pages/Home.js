import React from "react";
import "../../App.css";
import Cards from "../Cards/Cards";
import HeroSection from "../HeroSection/HeroSection";

import Events from "../Events/Events";
import FeaturedArtists from "../FeaturedArtists/FeaturedArtists";
// import HarryInterview from "../ExclusiveInterviews/HarryInterview/HarryInterview";

function Home() {
  return (
    <div class="container-fluid">
      <HeroSection />
      <Cards />
    
 
      {/* <HarryInterview /> */}
      <Events />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
