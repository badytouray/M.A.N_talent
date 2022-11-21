import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import FAQ from "./Components/Faq/index";
import Form from "./Components/Form/Form";
import ContactUs from "./Components/ContactUs/index";
import ScrollToTop from "./Components/ScrollToTop";
import AboutUs from "./Components/AboutUs/AboutUs";
import TermsOfService from "./Components/TermsofService/TermsOfService";
import Location from "./Components/Location/Location";
import Testimonials from "./Components/Testimonials/Testimonials";

import News from "./Components/News/News/News";

import Artists from "./Components/Entertainers/Artists";
import BobbieT from "./Components/Entertainers/Djs/BobbieT";
import DJS from "./Components/Entertainers/Djs";
import WebDesign from "./Components/WebDesign/WebDesign";
import Events from "./Components/Events/Events";

import HarryInterview from "./Components/ExclusiveInterviews/HarryInterview/HarryInterview";
import Interview from "./Components/Interview/Interview";
import FixrEvents from "./Components/FixrEvents/FixrEvents";
import FeaturedArtists from "./Components/FeaturedArtists/FeaturedArtists";



function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/music-ll-night-featured-artist" component={FeaturedArtists} />
          {/* <Route path="/media" component={Media} /> */}
          <Route path="/faq" component={FAQ} />
          <Route path="/sign-up" component={Form} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/location" component={Location} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/news" component={News} />
          {/* <Route path="/launch" component={Launch} /> */}
          <Route path="/music-all-night-artists" component={Artists} />
          <Route path="/bobbie-t" component={BobbieT} />
          <Route path="/djs" component={DJS} />
          <Route path="/web-design" component={WebDesign} />
          <Route path="/music-all-night-events" component={Events} />
          <Route path="/harry-shotta-interview" component={HarryInterview} />
          <Route path="/interviews" component={Interview} />
          {/* <Route path="/" component={FixrEvents} /> */}
       
  
          {/* <Route path="/artist-development" component={Development} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
