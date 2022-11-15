import React from 'react'
import Bobbie from "../../../bobbie.png";
import Footer from '../../Footer/Footer';

function BobbieT() {
  return (
    <>
    <h1>Bobbie TEE</h1>
    <div class="container-fluid">
     <div class="row row-cols-lg-2 m-4">
  <div class="col">
    <div class="card" >
      <div class="card-body">
      <img src={Bobbie} class="card-img-top" style={{width: "100%"}} alt="..."/>
       <br />
        <a href="/contact-us">
        <button type="button" class="btn btn-success m-2">Book Now</button>
        </a>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
    

 


      <div class="card-body">
        <h5 class="card-title">Bobbie T</h5>
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
<p class="fs-2 text-center m-4">Sapp mannnn</p>
<div class="text-center">
<iframe width="50%" height="600px" src="https://www.youtube.com/embed/HT3_MUyK_G0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<Footer />
    </>
  )
}

export default BobbieT