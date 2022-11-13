import React from "react";
import VideoProductionItems from "./VideoProductionItems";

import VideoP from "../../VideoP.jpeg";
import VideoEditting from "../../VideoEditting.jpeg";

import "./VideoProduction.css";
import Footer from "../Footer/Footer";

function VideoProduction() {
  return (
    <>
    <div className="cards">
      <h1>Video Production Services</h1>
      <h4>If you need more than 250 printed please don't hesitate to cotact us - School Proms, Black Tie Balls and Charity Dinners are a guaranteed great time out,</h4>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
            <VideoProductionItems
              src={VideoP}
              text="Filming"
              price="from £24.99ph"
              info="Private events and parties or sporting events. Filmed with a Canon 200D with muliple lens & stands avilable."
              label="Video Production"
              path="/video-production"
            />
            </ul>
            <ul className="cards__items">
            <VideoProductionItems
              src={VideoEditting}
              text="Video Editing"
              price="from £29.99"
              info="If you need more than 250 printed please don't hesitate to cotact us - School Proms, Black Tie Balls and Charity Dinners are a guaranteed great time out, with everyone looking their best now is a great time to capture that one off look for posterity"
              label="Video Production"
              path="/video-production"
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default VideoProduction;
