import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Services from "./Components/Services/Services";
// import SignUp from "./Components/Pages/SignUp";
import FAQ from "./Components/Faq/index";
import Form from "./Components/Form/Form";
import ContactUs from "./Components/ContactUs/index";
import ScrollToTop from "./Components/ScrollToTop";
import AboutUs from "./Components/AboutUs/AboutUs";
import TermsOfService from "./Components/TermsofService/TermsOfService";
import Location from "./Components/Location/Location";
import Testimonials from "./Components/Testimonials/Testimonials";
// import Media from "./Components/Media/Media";
import News from "./Components/News/News/News";
// import Launch from "./Components/News/Articles/Launch/Launch";
import Artists from "./Components/Entertainers/Artists";
import BobbieT from "./Components/Entertainers/Djs/BobbieT";
import DJS from "./Components/Entertainers/Djs";
// import Development from "./Components/Development/Development";


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/services" component={Services} />
          {/* <Route path="/media" component={Media} /> */}
          <Route path="/faq" component={FAQ} />
          <Route path="/sign-up" component={Form} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/location" component={Location} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/news" component={News} />
          {/* <Route path="/launch" component={Launch} /> */}
          <Route path="/artists" component={Artists} />
          <Route path="/bobbie-t" component={BobbieT} />
          <Route path="/djs" component={DJS} />
          {/* <Route path="/artist-development" component={Development} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
