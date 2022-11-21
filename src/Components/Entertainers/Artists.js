import React from 'react'
import Bobbie from "../../bobbie.png";
import Zebberz from "../../zebberz.png";
import Bady from "../../bady.png";
import Beano from "../../beano.png";
import Jovivaa from "../../jovivaa.png";
import Skillz from "../../skillz.png";
import Monica from "../../monica.png";
import Casso from "../../casso.png";
import Stitch from "../../stitch.png";
import Footer from '../Footer/Footer';

function Artists() {
  return (
    <>
    <h1>Music All Night Roster</h1>
    <h3 class="text-center">Artists | DJs | Entertainers</h3>
    <div class="row row-cols-1 row-cols-md-3 g-4 m-4">

  <div class="col">
    <div class="card">
      <img src={Zebberz} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">MC Zebberz</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a.</p>
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
      <img src={Jovivaa} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Jovivaa (Afro-beats Artist)</h5>
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
      <img src={Bobbie} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">DJ Bobbie TEE</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        {/* <a href="/bobbie-t">
        <button type="button" class="btn btn-primary m-4">More info</button>
        </a>  */}
        <a href="/contact-us">
        <button type="button" class="btn btn-success">Book Now</button>
        </a>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={Skillz} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dj Skillz London </h5>
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
        <h5 class="card-title">Dj Beano</h5>
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
      <img src={Monica} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dj Monica Lins</h5>
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
      <img src={Bobbie} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Machanix</h5>
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
      <img src={Stitch} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Stitch & Its Joey</h5>
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

export default Artists 