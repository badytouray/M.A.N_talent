import React from 'react'
import Bobbie from "../../../bobbie.png";

function BobbieT() {
  return (
    <>
     <div class="row row-cols-1 row-cols-lg-2 g-4 m-4">
  <div class="col">
    <div class="card">
      <img src={Bobbie} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Bobbie T</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/bobbie-t">
        <button type="button" class="btn btn-primary m-4">More info</button>
        </a>
        <a href="/contact-us">
        <button type="button" class="btn btn-success">Book Now</button>
        </a>
      </div>
    </div>

    <div class="card">
      <img src={Bobbie} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Zebberz</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <a href="/bobbie-t">
        <button type="button" class="btn btn-primary m-4">More info</button>
        </a>
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
        <h5 class="card-title">Bady</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <a href="/bobbie-t">
        <button type="button" class="btn btn-primary m-4">More info</button>
        </a>
        <a href="/contact-us">
        <button type="button" class="btn btn-success">Book Now</button>
        </a>
      </div>
    </div>
  </div>

</div>
    </>
  )
}

export default BobbieT