import React from "react";
import PrintingItems from "./PrintingItems";
import BusinessCards from "../../BusinessCards.jpeg";
import Flyers from "../../flyers.jpeg";
import "./Printing.css";
import Footer from "../Footer/Footer";

function Printing() {
  return (
    <>
    <div className="cards">
      <h1>Printing services</h1>
      <h4>Delivering solution's that generate new clients while saving you save. All your needs in one place.</h4>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
            <PrintingItems
              src={Flyers}
              text="5,000 A6 Flyers"
              price="£75.99"
              info="If you need more than 5,000 flyers printed please don't hesitate to cotact us."
              label="Flyers"
              // path="/waxing"
            />

            <PrintingItems
              src={BusinessCards}
              text="250 Business Card"
              price="£19.99"
              info="If you need more than 250 printed please don't hesitate to cotact us"
              label="Business cards"
              path="/printing"
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

export default Printing;
