import React from "react";
import MerchandiseItems from "./MerchandiseItems";
import Nails from "../../nails.jpg";
import Tshirt from "../../tshirt.jpeg";
import HoodieP from "../../HoodieP.jpg";
import Facemask from "../../facemask.jpeg";
import "./Merchandise.css";
import Footer from "../Footer/Footer";

function Merchandise() {
  return (
    <>
    <div className="cards">
      <h1>Merchandise Printing</h1>
      <h4>Got an event, upcoming promotion or Hen or Stag event? Like saving time and money? Contact us today! Sizes range from extra small to XXXL</h4>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
            <MerchandiseItems
              src={Facemask}
              text="10 Face Maks"
              price="from £129.99"
              info="If you need more than 250 printed please don't hesitate to cotact us."
              label="Face masks"
              path="/merchandise"
            />
          </ul>
        <ul className="cards__items">
            <MerchandiseItems
              src={Tshirt}
              text="10 Tshirts Printed"
              price="£129.99"
              info="If you need more than 5,000 flyers printed please don't hesitate to cotact us."
              label="Merchandise"
              path="/merchandise"
            />
            
            <MerchandiseItems
              src={HoodieP}
              text="10 Hoodie Printing"
              price="£144.99"
              info="If you need more than 250 printed please don't hesitate to cotact us"
              label="Hoodie Printing"
              path="/merchandise"
            />
          </ul>
        
        </div>
    
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Merchandise;
