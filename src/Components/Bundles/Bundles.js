import React from "react";
import "./Bundles.css";

import BundlesItems from "./BundlesItems";
import Wax from "../../wax.jpg";
import Tshirt from "../../tshirt.jpeg";
import VideoP from "../../VideoP.jpeg";
import Footer from "../Footer/Footer";

function Bundles() {
  return (
    <>
    <div className="cards">
      <h1>Bundles & Special Offers</h1>
      <h2>Hello hello this is some txt to fill out the space so we can see what it looks like so thank you x x </h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <BundlesItems
              src={Wax}
              label="Special Offer"
              text="£159.99 - Logo, Flyer Design & 5,000 printed "
              info="Logo, flyer design & 5,000 350gsm Matt finish A6 flyers double side printed."
            />
          </ul>
          <ul className="cards__items">
            <BundlesItems
              src={Tshirt}
              label="Special Offer"
              text="£159.99 - Logo design & 10 Tshirt printed"
              info="Brand logo design and printing on t-shirts, vinyl heatpress printing, multiple colors available. Sizes range from Kids, extra small to XXXL."
            />
            <BundlesItems
              src={VideoP}
              label="Special Offer"
              text="£299 - Video & Photography"
              info="Two hours of filming and photography at your private event, wedding, party. Video editing and 20 retouched images included in this special bundle"
            />
          </ul>
        </div>
        <h2>Contact us and quote the bundle deal you require</h2>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Bundles;
