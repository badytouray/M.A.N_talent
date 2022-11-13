import React from "react";
import "./News.css";
import NewsItem from "./NewsItems";

import MarketingPic from "../../../brazil.jpg";
import Footer from "../../Footer/Footer";



function News() {
  return (
      <>
    <div className="cards">
    <h1>Latest News</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
          <NewsItem
              src={MarketingPic}
              text="Celebrating the launch of your new business"
              label="Web Design"
              path="/"
            />
            <NewsItem
              src={MarketingPic}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Graphic Design"
              path="/"
            />          
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default News;
