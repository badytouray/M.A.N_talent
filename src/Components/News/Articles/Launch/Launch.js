
import React from "react";
import LaunchItems from "./LaunchItems";
import Launch1 from "../../../../brazil.jpg";



import "./Launch.css";
import Footer from "../../../Footer/Footer";

function Launch() {
  return (
    <>
    <div className="cards">
      <h1>Celebrating the Launch of our business</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
            <LaunchItems
              src={Launch1}
              label="Music News"
          
              
              intro="Harry Shotta performing Live in brighton for Valtentines day"
              content="As heard of Radio 1Xtra and seen on TV Harry Shotta is not only the leading Drum n Bass Mc's he is also in the guiness book of records for packing more lyrics in a song than Eminem."

      
              content1="Rag 'n' Bone Man wasn't the only Brits performer to see an uplift: The Weeknd's Save Your Tears along with Coldplay, who opened the ceremony, scored the week's highest new entry with Higher Power, at number 12."

              src1={Launch1}
              content2="It marks the band's 21st top 20 hit and the band's highest-charting single since 2017's Chainsmokers collaboration Something Just Like This, which reached number two.you"

              content3="This gives the East Sussex-raised singer-songwriter, known for his baritone voice, both the biggest opening week for a British act this year and the fastest-selling album by a solo artist in the same period."

      
              content4="It comes after Rag'n'Bone Man, who grew up in Uckfield and was expelled from school in Ringmer, performed his single Anywhere Away From Here with P!nk at the Brit Awards on Tuesday, backed by the Lewisham & Greenwich NHS Choir."

  
              content5="His latest success follows reports that he had the most-played song on the radio in 2019 with his hit Giant, released with Calvin Harris in January that year.
              Life By Misadventure explores how he has grown as a man since becoming a father and touches on his recent separation from his wife of ten years.
              "

              content6="Rag’n’Bone Man and Michael Ball lead an all-new top five this week including YouTuber Dodie at number three with her debut Build A Problem.
              Another Sussex Chart topper’s are Brighton post-punk band Squid who enter at number four with their debut Bright Green Field, who are this week's bestseller on vinyl, and Sir Van Morrison is at number five with Latest Record Project - Volume One.
              "

              content7="On the singles chart, Russ Millions featuring Tion Wayne with their drill song Body claims another week at number one, after last week becoming the first drill song to top the charts in the UK."
            

              Conclusion="Conslusion"
              ConclusionContent="Harry Shotta is the fastest MC that we know, we love his music so its only right for us to bring him down to Brighton so everyone else can enjoy his presents. Romour has it that new music is coming out for 2022 so we are keeping our eyes and ears tuned on all social media for when it drops, Spitting bars while the fastest growing female Drum n Bass Dj plays the best riddims. This event is not to be missed so please grab your tickets in advance to avoid dissapointment."

              path="harry-shotta-brighton"
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Launch;

