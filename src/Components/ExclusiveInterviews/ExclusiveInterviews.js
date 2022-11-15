import React from "react";
import "./ExclusiveInterviews.css";
import ExclusiveInterviewsItems from "./ExclusiveInterviewsItems";
// import Nicky from "../../Media/Interview Pictures/nicky.jpeg";
import Harry from "../../bady.png";
import Footer from "../Footer/Footer";


export function ExclusiveInterviews() {

  return (
    <>
    <div className="cards">
    <h1>Exclusive Interviews</h1>
    <h3>We have had the priverledge to spend some time catching up with some amazing people, so we have asked the questions that you wold want to know</h3>
    <div className="cards__container">
      <div className="cards__wrapper">
        <h1> Upcoming interivew coming soon!</h1>
        <ul className="cards__items">
          <ExclusiveInterviewsItems  
            src={Harry}
            label="Exclusive Interview"
            text="Want to know how Harry Shotta stayed relevant in the industry and boosted mental health during the pandemic? Find out 5 simple ways today."
            path="/harry-shotta-interview"
          />
        </ul> 
      </div>
    </div>
  </div>
  <Footer />
  </>
);

}

export default ExclusiveInterviews;

