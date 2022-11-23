import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Bady from "../../bady.png";
import Bobbie from "../../bobbie.png";
import Beano from "../../beano.png";
import Flyers from "../../flyers.jpeg";
import WebDesignPic from "../../WebDesignPic.jpeg";


function Cards() {
  return (
    <div className="cards">
      <h2>Welcome to WPMM - Web | Print | Media & Marketing</h2>
      <h3 class="text-center">We provide beauty treatments to suit your needs, either by attending our treatment room or we visit your home.</h3>
      <div className="cards__container">
        <div className="cards__wrapper">
      <h1>OUR FEATURED ARTISTS</h1>
          <ul className="cards__items">
          <CardItem
              src={Bobbie}
              text="Book enterrtainters for your special event, private parties, weddings and more Entertainers gg gfve  either by attending our treatment room or we visit your home"
              label="Bobbie Tee"
              path="/music-all-night-artists"
            />
          <CardItem
              src={Bady}
              text="Book enterrtainters for your special event, private parties, weddings and more Entertainers gg gfve  either by attending our treatment room or we visit your home"
              label="Bady"
              path="/music-all-night-artists"
            />
            <CardItem
              src={Beano}
              text="Book enterrtainters for your special event, private parties, weddings and more Entertainers gg gfve  either by attending our treatment room or we visit your home"
              label="Beano" 
              path="/music-all-night-artists"
            />          
          </ul>
        </div>
      </div>
    </div>
  );
}

  export default Cards;