import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import MarketingPic from "../../MarketingPic.jpg";
import Flyers from "../../flyers.jpeg";
import WebDesignPic from "../../WebDesignPic.jpeg";


function Cards() {
  return (
    <div className="cards">
      <h2>Welcome to WPMM - Web | Print | Media & Marketing</h2>
      <h3>We provide beauty treatments to suit your needs, either by attending our treatment room or we visit your home.</h3>
      <div className="cards__container">
        <div className="cards__wrapper">
      <h1>OUR SERVICES</h1>
          <ul className="cards__items">
          <CardItem
              src={MarketingPic}
              text="Artist Development uim  either by attending our treatment room or we visit your home"
              label="Artist Development"
              path="/artist-development"
            />
          <CardItem
              src={WebDesignPic}
              text="Book enterrtainters for your special event, private parties, weddings and more Entertainers gg gfve  either by attending our treatment room or we visit your home"
              label="Event Planner"
              path="/web-design"
            />
            <CardItem
              src={Flyers}
              text="Booking djs sdd ggg  either by attending our treatment room or we visit your home "
              label="Entertainers" 
              path="/graphic-design"
            />          
          </ul>
        </div>
      </div>
    </div>
  );
}

  export default Cards;