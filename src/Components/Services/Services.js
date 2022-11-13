import React from "react";
import "./Services.css";
import "../Cards/Cards.css";
// import CardItem from "../CardItem";
import ServicesItems from "./ServicesItems";
import WebDesignPic from "../../WebDesignPic.jpeg";
import MarketingPic from "../../MarketingPic.jpg";
import Logo from "../../Logo.jpg";
import Tshirt from "../../tshirt.jpeg";
import Video from "../../video.jpeg";
import Photography from "../../Photography.jpeg";
import Footer from "../Footer/Footer";

function Services() {
  return (
    <>
    <div className="cards">
      <h1>Our Services</h1>
      <h2>Want to grow your business? Want to save Time? Want to save money? Contact us today! </h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <ServicesItems
              src={MarketingPic}
              label="Artist Development"
              text="Social media what?."
              path="/marketing"
              info="Don't want to get left behind? Let us keep you connected to your selected target market."
            />
            </ul>
            <ul className="cards__items">
            <ServicesItems
              src={WebDesignPic}
              label="Web design"
              text="Website Design"
              path="/web-design"
              info="Creating stunning professional user friendly bispoke website thats that keeps customers coming back"
             />
            <ServicesItems
              src={Logo}
              label="Graphic Design"
              text="Graphic Design"
              path="/graphic-design"
              info="Want to save time? We create designs according to you vision so you can focus on growth"
            />
            </ul>
            <ul className="cards__items">
   
      

          
      
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Services;
