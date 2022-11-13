

import React from "react";
import { Link } from "react-router-dom";

import "./Launch.css";

function LaunchItems(props) {
  return (
    <>
      <li className="cards__itemNicky">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Harry Shotta in Brighton @ Volks"
              src={props.src1}
             
            />
          </figure>
          <div className="cards__item__info">
            {/* <h1 className="cards__item__text">{props.text}</h1> */}
            <h2 className="new__list__intro">{props.intro}</h2>
            <p className="news__list__content">{props.content}</p>
            <br />
          
            <p className="news__list__content">{props.content1}</p>
            <img
              className="cards__item__imgBlog"
              alt="Harry Shotta in Brighton @ Volks"
              src={props.src}
            />
            <br />
          
            <p className="news__list__content">{props.content2}</p>
            <p className="news__list__content">{props.content3}</p>
            <br />
            <p className="news__list__content">{props.content4}</p>
            <br />
            
            <p className="news__list__content">{props.content5}</p>
          
          
            <p className="news__list__content">{props.content6}</p>
            
            <br />
            
            <p className="news__list__content">{props.content7}</p>
            <br />
            
           
           
            <iframe width="960" height="515"
            src="https://www.youtube.com/watch?v=SvaArkII2RQ">
            </iframe>
            
           
            <h2 className="news__list__content">{props.Conclusion}</h2>
            <p className="news__list__content">{props.ConclusionContent}</p>
         
            {/* <button ClassName="button_book"  >Upcomig events</button> */}
          </div>
        </Link>
      </li>
    </>
  );
}

export default LaunchItems;

