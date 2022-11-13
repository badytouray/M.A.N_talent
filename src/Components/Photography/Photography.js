import React from "react";
import PhotographyItems from "./PhotographyItems";

import WeddingPics from "../../WeddingPics.jpeg";
import ProductPhoto from "../../ProductPhoto.jpeg";
import PhotoRetouching from "../../PhotoRetouching.jpeg";
import EventPhoto from "../../EventPhoto.jpeg";

import "./Photography.css";
import Footer from "../Footer/Footer";

function Photography() {
  return (
    <>
        <div className="cards">
            <h1>WPMM Photography Services</h1>
            <h4>Other services such as Corporate and business portraits, Venue Photography and Product Photography are also avilable. Please don't hesitate to contact us.</h4>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <PhotographyItems
                            src={EventPhoto}
                            text="Event Photography"
                            price="from £34.99ph"
                            info="Private events and parties."
                            label="Photography"
                            path="/photography"
                            />
                            <PhotographyItems
                            src={WeddingPics}
                            text="Wedding Photography"
                            price="from £16.99"
                            info="Capture those amazing momements and store them for a life time - School Proms, Black Tie Balls and Charity Dinners are a guaranteed great time out, with everyone looking their best now is a great time to capture that one off look for posterity."
                            label="Photography"
                            path="/photography"
                            />
                            </ul>
                            <ul className="cards__items">
                            <PhotographyItems
                            src={ProductPhoto}
                            text="Commercial Photography"
                            price="from £109.99"
                            info="Sell more with amazing photos - School Proms, Black Tie Balls and Charity Dinners are a guaranteed great time out, with everyone looking their best now is a great time to capture that one off look for posterity."
                            label="Photography"
                            path="/photography"
                            />
                            <PhotographyItems
                            src={PhotoRetouching}
                            text="Image Re-touching"
                            price="from £19.99"
                            info="If you need more than 250 printed please don't hesitate to cotact us - School Proms, Black Tie Balls and Charity Dinners are a guaranteed great time out, with everyone looking their best now is a great time to capture that one off look for posterity"
                            label="Photography"
                            path="/photography"
                            />
                        </ul>
                    </div>
                <h2>Contact us to make a booking.</h2>
            </div>
        </div>
    <Footer />
    </>
  );
}

export default Photography;
