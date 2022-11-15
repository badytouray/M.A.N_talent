import React from "react"
import Oxide from "../../oxide.png"
import Harry from "../../harry.png"
import MsPink from "../../ms_pink.png"
import "./Interview.css"
import InterviewItem from "./InterviewItem";


function Interview() {
  return (
    <>
     <div className="cards">
      <h2>Welcome to M.A.N - Event | Entertainment | Promotions</h2>
      <h3 class="text-center">We provide beauty treatments to suit your needs, either by attending our treatment room or we visit your home.</h3>
      <div className="cards__container">
        <div className="cards__wrapper">
      <h1>Exclusive Interviews</h1>
          <ul className="cards__items">
          <InterviewItem
              src={Harry}
              text="Harry Shotta Book enterrtainters for your special event, private parties, weddings and more Entertainers gg gfve  either by attending our treatment room or"
              label="Harry Shotta"
              path="/harry-shotta-interview"
            />
          <InterviewItem
              src={MsPink}
              text="Book enterrtainters for your special event, private parties, weddings and more Entertainers gg gfve  either by attending our treatment room or we visit your home"
              label="Ms Pink"
              path="/web-design"
            />
            <InterviewItem
              src={Oxide}
              text="Book enterrtainters for your special event, private parties, weddings and more Entertainers gg gfve  either by attending our treatment room or we visit your home"
              label="Oxide & Neutrino" 
              path="/artists"
            />          
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Interview;