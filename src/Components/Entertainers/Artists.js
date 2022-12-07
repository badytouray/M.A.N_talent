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

// import "./Artist.css"

function Artists() {
  return (
    <>
    <h1>Music All Night Roster</h1>
    <div class=" text-center fs-4">Welcome to the Music ALl Night artist booking section, our Music All Night roster includes DJ's, Bands, Artist's and Entertainers</div>
    <br />
    <br />
    <br />

{/* Artist section  */}
<div className="container-fluid">
    <h3 class="text-center m-4">Artists | DJs | Entertainers</h3>
    <div class="row row-cols-1 row-cols-md-4 g-4 m-4">
    <div class="col ">
    <div class="card" className="image">
      <img src={Jovivaa} class="card-img-top " alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center m-2" >Jovivaa (Afro-beats Artist)</h5>
        <p class="card-text text-center">Book Jovivaa with Music All Night: Afrobeats & Bashment.</p>
        <div class="d-grid gap-2 col-4 mx-auto">
            <a href="/music-all-night-artist-jovivaa">
        <button  type="button" class="btn btn-lg btn-primary">More info</button>
        </a>
      </div>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <img src={Zebberz} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">MC Zebberz</h5>
        <p class="card-text">This is a longer card with supporting text below as a.</p>
        
        <div class="d-grid gap-2 col-4 mx-auto">
<a href="/music-all-night-artist-jovivaa">
        <button  type="button" class="btn btn-lg btn-primary">More info</button>
        </a>
        </div>

      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={Bady} class="card-img-top w-100" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">DJ Bady</h5>
        <p class="card-text">This is a longer card with supporting text below as a .</p>
        <div class="d-grid gap-2">
        <button type="button" class="btn btn-primary">More info</button>
        </div>
      </div>
    </div>
  </div>
 
 
  <div class="col">
    <div class="card">
      <img src={Bobbie} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">DJ Bobbie TEE</h5>
        <p class="card-text">This is a longer card with supporting text below as a.</p>
        <div class="d-grid gap-2 col-4 mx-auto">
          <a href="/music-all-night-artists-bobbie-t">
        <button type="button" class="btn btn-lg btn-primary">More info</button>
        </a> 
        </div>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card">
      <img src={Skillz} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dj Skillz London </h5>
        <p class="card-text">This is a longer card with supporting text below as a.</p>
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
        <p class="card-text">This is a longer card with supporting text below as a.</p>
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

  <div class="col">
    <div class="card">
      <img src={Stitch} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Lenzez</h5>
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
        <h5 class="card-title">Bakez</h5>
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
        <h5 class="card-title">Ju5 Bonez</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a href="/music-all-night-artist-ju5-bonez">
        <button type="button" class="btn btn-primary m-4">More info</button>
        </a>
        <a href="/contact-us">
        <button type="button" class="btn btn-success">Book Now</button>
        </a>
      </div>
    </div>
  </div>

</div>
</div>
<Footer />
    </>
  )
}

export default Artists 