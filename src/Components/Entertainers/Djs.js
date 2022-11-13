import React from 'react'
import Bobbie from "../../bobbie.png";
import Zebberz from "../../zebberz.png";
import Bady from "../../bady.png";
import Beano from "../../beano.png";
import Jovivaa from "../../jovivaa.png";
import Footer from '../Footer/Footer';

function DJS() {
  return (
    <>
    <div class="row row-cols-1 row-cols-md-4 g-4 m-4">
  <div class="col">
    <div class="card">
      <img src={Bobbie} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">DJ Bobbie T</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        {/* <a href="/bobbie-t">
        <button type="button" class="btn btn-primary m-4">More info</button>
        </a> */}
        <a href="/contact-us">
        <button type="button" class="btn btn-success">Book Now</button>
        </a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={Zebberz} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">MC Zebberz</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        {/* <a href="/bobbie-t">
        <button type="button" class="btn btn-primary m-4">More info</button>
        </a> */}
        <a href="/contact-us">
        <button type="button" class="btn btn-success">Book Now</button>
        </a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={Bady} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">DJ Bady</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        {/* <a href="/bobbie-t">
        <button type="button" class="btn btn-primary m-4">More info</button>
        </a> */}
        <a href="/contact-us">
        <button type="button" class="btn btn-success">Book Now</button>
        </a>
      </div>
    </div>
  </div>
 
  <div class="col">
    <div class="card">
      <img src={Beano} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Beano</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        {/* <a href="/bobbie-t">
        <button type="button" class="btn btn-primary m-4">More info</button>
        </a> */}
        <a href="/contact-us">
        <button type="button" class="btn btn-success">Book Now</button>
        </a>
      </div>
    </div>
  </div>



</div>

<Footer />
    </>
  )
}

export default DJS 