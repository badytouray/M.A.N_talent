import React from "react";
import { Link } from "react-router-dom";
import "./Media.css"

function MediaItems(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            {/* <button className="button_book">More Info</button> */}
          </div>
        </Link>
      </li>
    </>
  );
}

export default MediaItems;
