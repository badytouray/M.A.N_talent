import React from "react";
import "./Media.css";
import MediaItems from "./MediaItems";
import Wax from "../../wax.jpg";
import Massage from "../../massage.jpg";
import Photography from "../../Photography.jpeg";
import Flyers from "../../flyers.jpeg";
import Footer from "../Footer/Footer";

function Media() {
  return (
    <>
    <div className="cards">
      <h1>Media Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <MediaItems
              src={Wax}
              text="Filming - It’s come a long way from handing out flyers in the 90's, although still this makes up a huge and often important part of the campaign, the one to one distribution."
              label="Video Production"
              path="/video-production"
            />
            <MediaItems
              src={Massage}
              text="Video Editing - It’s come a long way from handing out flyers in the 90's, although still this makes up a huge and often important part of the campaign, the one to one distribution."
              label="Video Production"
              path="/video-production"
            />
          </ul>
          <ul className="cards__items">
            <MediaItems
              src={Photography}
              text="Photography & Image re-touching- It’s come a long way from handing out flyers in the 90's, although still this makes up a huge and often important part of the campaign, the one to one distribution."
              label="Photography"
              path="/photography"
            />
            <MediaItems
              src={Flyers}
              text="Graphic Design - It’s come a long way from handing out flyers in the 90's, although still this makes up a huge and often important part of the campaign, the one to one distribution."
              label="Graphic Design"
              path="/graphic-design"
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Media;
