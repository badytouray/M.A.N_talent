import { Link } from "react-router-dom";

import "./HarryInterview.css";

function HarryInterviewItems(props) {
  return (
    <>
      <li className="cards__itemNicky">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            {/* <p className="price__list__price">{props.price}</p> */}
            <h1 className="cards__item__text">{props.text}</h1>
            <h3 className="interview__list__intro">{props.intro}</h3>
            <br />
            <h2 className="interview__list__question">{props.q1}</h2>
            <p className="interview__list__answer">{props.answer1}</p>
            <br />
            <h2 className="interview__list__question">{props.q2}</h2>
            <p className="interview__list__answer">{props.answer2}</p>
            <img
              className="cards__item__imgBlog"
              alt="Travel Image"
              src={props.src}
            />
            <br />
            <h2 className="interview__list__question">{props.q3}</h2>
            <p className="interview__list__answer">{props.answer3}</p>
            <br />
            {/* <p className="price__list__info">{props.answer3}</p> */}
            {/* <figure className="cards__item__pic-wrapBlog" data-category={props.label}>
          </figure> */}
          
            <h2 className="interview__list__question">{props.q4}</h2>
            <p className="interview__list__answer">{props.answer4}</p>
            <br />
            <h2 className="interview__list__question">{props.q5}</h2>
            <p className="interview__list__answer">{props.answer5}</p>
            <br />
            <h2 className="interview__list__question">{props.q6}</h2>
            <p className="interview__list__answer">{props.answer6}</p>
            <img
              className="cards__item__imgBlogRight"
              alt="Travel Image"
              src={props.src}
            />
          
            <br />
            <h2 className="interview__list__question">{props.q7}</h2>
            <p className="interview__list__answer">{props.answer7}</p>
            
            <br />
            <h2 className="interview__list__question">{props.q8}</h2>
            <p className="interview__list__answer">{props.answer8}</p>
            <br />
            <h2 className="interview__list__question">{props.q9}</h2>
            <p className="interview__list__answer">{props.answer9}</p>
            <br />
            <iframe width="960" height="515"
            src="https://www.youtube.com/watch?v=SvaArkII2RQ">
            </iframe>
            <br />
            <br />
            <h2 className="interview__list__question">{props.q10}</h2>
            <p className="interview__list__answer">{props.answer10}</p>
            <br />
            
            {/* <button ClassName="button_book"  >Upcomig events</button>*/}

          </div>
        </Link>
       
      </li>
    </>
  );
}

export default HarryInterviewItems;
