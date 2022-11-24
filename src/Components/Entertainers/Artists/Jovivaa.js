import React from 'react'
import JovivaaPic from "../../../jovivaa.png";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

import Footer from '../../Footer/Footer';


function Jovivaa() {
  return (
    <>
    <h1>Jovivaa (Nija Prince)</h1>
    <div class="container-fluid">
     <div class="row row-cols-lg-2 m-4">
  <div class="col">
    <div class="card" >
      <div class="card-body">
      <img src={JovivaaPic} class="card-img-top" style={{width: "100%"}} alt="..."/>
       <br />
       <br />
        <a href="/contact-us">
        <button type="button" class="btn btn-success m-2">Book Now</button>
        </a>
        <a>
        <SocialIcon target="_blank" url="https://instagram.com/jovivaalove" style={{height: "45px",width: "50px", margin: "5px"}} />
        <SocialIcon target="_blank"url="https://facebook.com/jovivaalove" style={{height: "45px",width: "50px", margin: "5px"}} />
        <SocialIcon target="_blank"url="https://youtube.com/jovivaalove" style={{height: "45px",width: "50px", margin: "5px"}} />
        </a>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Jovivaa</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
      </div>
    </div>
    <p class="fs-3 text-center m-3">Upcoming events</p>
    <iframe src="https://fixr.co/event/13736578?compact=true"
        style={{width: "100%", maxWidth: "100%", height: "450px", border: "1px solid #d3d3d3"}}>
    </iframe>
 
  
  </div>



</div>
</div>
<p class="fs-2 text-center m-4">Jovivaa Music video's</p>
<div class="text-center">
<iframe width="500px" height="600px" style={{margin:"10px"}} src="https://www.youtube.com/embed/HT3_MUyK_G0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="600px" style={{margin:"10px"}} src="https://www.youtube.com/embed/wtGobuaOm3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560" height="600px" style={{margin:"10px"}} src="https://www.youtube.com/embed/dSwcvJx5aGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="text-center m-3">
    <a href="/music-all-night-artists">
    <button type="button"class="btn btn-lg btn-outline-danger ">Back to artist's</button>
    </a>
</div>
<Footer />
    </>
  )
}

export default Jovivaa