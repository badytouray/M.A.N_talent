import React from "react";
import WebDesignItems from "./WebDesignItems";

import Nails from "../../nails.jpg";
import WebDesignPic from "../../WebDesignPic.jpeg";

import "./WebDesign.css";
import Footer from "../Footer/Footer";

function WebDesign() {
  return (
    <>
    <div className="cards">
      <h1>Web Design Services</h1>
      <h4>If you need more than 250 printed please don't hesitate to cotact us - School Proms, Black Tie Balls and Charity Dinners are a guaranteed great time out,</h4>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
          
            <WebDesignItems
              src={WebDesignPic}
              text="Ecommerce"
              price="from £69.99"
              info="Capture those amazing momements and store them for a life time - School Proms, Black Tie Balls and Charity Dinners are a guaranteed great time out, with everyone looking their best now is a great time to capture that one off look for posterity."
              label="Web Design"
              path="/graphic-design"
            />
            </ul>
        </div>
        <h2>Contact us to get started.</h2>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default WebDesign;
