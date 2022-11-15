import React, { useState } from 'react'

import Bobbie from "../../bobbie.png";
import Agro from "../../agro.png";
import Bady from "../../bady.png";
import Beano from "../../beano.png";
import Jovivaa from "../../jovivaa.png";
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';



function Events(props) {
const [isBuying, setIsBuying] = useState(false);
const [isBuying1, setIsBuying1] = useState(false);
const [isBuying2, setIsBuying2] = useState(false);
const [isBuying3, setIsBuying3] = useState(false);

  return (
    <>
    <h1>Upcoming Events</h1>
    <h3 class="text-center">Brighton | Eastbourne | Bristol</h3>
    <div class="row row-cols-1 row-cols-md-4 g-4 m-4">

  <div class="col">
    <div class="card">
      <img src={Agro} class="card-img-top" alt="..."/>
      
      <div class="card-body">
        <h5 class="card-title">MC Zebberz</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is.</p>
        
        <button type="button" class="btn btn-primary m-4" onClick={() => setIsBuying(!isBuying)}>Buy Ticket</button>
       {isBuying &&
        <iframe src="https://fixr.co/event/13736578?compact=true"
        style={{width: "100%", maxWidth: "600px", height: "300px", border: "1px solid #d3d3d3"}}>
</iframe>}
        
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={Bady} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">DJ Bady</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <button type="button" class="btn btn-primary m-4" onClick={() => setIsBuying1(!isBuying1)}>Buy Ticket</button>
       {isBuying1 &&
        <iframe src="https://fixr.co/event/13736578?compact=true"
        style={{width: "100%", maxWidth: "600px", height: "300px", border: "1px solid #d3d3d3"}}>
</iframe>}
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <img src={Jovivaa} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Jovivaa (Afro-beats Artist)</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        {/* <a href="/bobbie-t">
        <button type="button" class="btn btn-primary m-4">More info</button>
        </a> */}
          <button type="button" class="btn btn-primary m-4" onClick={() => setIsBuying2(!isBuying2)}>Buy Ticket</button>
       {isBuying2 &&
        <iframe src="https://fixr.co/event/13736578?compact=true"
        style={{width: "100%", maxWidth: "600px", height: "300px", border: "1px solid #d3d3d3"}}
      
        
        >
</iframe>}
      </div>
    </div>
  </div>
 

  <div class="col">
    <div class="card">
      <img src={Bady} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Bady</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <button type="button" class="btn btn-primary m-4" onClick={() => setIsBuying3(!isBuying3)}>Buy Ticket</button>
       {isBuying3 &&
        <iframe src="https://web-cdn.fixr.co/scripts/fixr-shop-widget.v1.min.js" type="text/javascript"
        style={{width: "100%", maxWidth: "600px", height: "300px", border: "1px solid #d3d3d3"}}>
</iframe>}
      </div>
    </div>
  </div>

  
  
</div>

<Helmet href="https://web-cdn.fixr.co/scripts/fixr-shop-widget.v1.min.js"></Helmet>
<Footer />
</>
  )
}

export default Events