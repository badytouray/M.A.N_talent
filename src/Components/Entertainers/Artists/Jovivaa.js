import React from 'react'
import JovivaaPic from "../../../jovivaa.png";
import Bady from "../../../bady.png";
import Beano from "../../../beano.png";
import Bobbie from "../../../bobbie.png";

import Skillz from "../../../skillz.png";
import Stitch from "../../../stitch.png";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import  Fade from "react-reveal/Fade"
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
    
    {/* <p class="fs-5 text-center m-6">Upcoming events</p> */}
    {/* <iframe src="https://fixr.co/event/13736578?compact=true"
        style={{width: "100%", maxWidth: "100%", height: "450px", border: "1px solid #d3d3d3"}}>
    </iframe> */}
     <div class="row row-cols-1 row-cols-sm-3 g-4 ">
          <div class="cols">
              <div class="card">
                 <img src={JovivaaPic} /> 
              </div>
          </div>

          <div class="cols">
              <div class="card">
                 <img src={JovivaaPic} /> 
              </div>
          </div>
          
          <div class="cols">
              <div class="card">
                 <img src={JovivaaPic} /> 
              </div>
          </div>
      </div>
<br />


{/* ARTIST BIO */}
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">About Jovivaa </h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <br />
        <br />
        This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>

        <p> This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

     
    </div>

  </div>

</div>
</div>


{/* YOUTUBE VIDEOS */}
<Fade left>

<div class="text-center">
<p class="fs-2 text-center m-4 row-cols-lg-4">Jovivaa Music video's</p>
<iframe width="600px" height="600px" style={{margin:"10px", padding: "15px"}} src="https://www.youtube.com/embed/HT3_MUyK_G0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="600px" style={{margin:"10px", padding: "15px"}} src="https://www.youtube.com/embed/wtGobuaOm3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="600" height="600px" style={{margin:"10px", padding: "15px"}} src="https://www.youtube.com/embed/dSwcvJx5aGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</Fade>


<div class="text-center m-3">
    <a src="/music-all-night-artists">
    <button type="button"class="btn btn-lg btn-outline-danger ">Back to artist's</button>
    </a>
</div>



{/* // SIMILAR ARTIST SECTION */}
<h1> Similar Artists </h1>

<div class="container-fluid row row-cols-1 row-cols-lg-6 g-4 ">
          <div class="cols">
              <div class="card">
                <Link to="/music-all-night-artist-jovivaa" target="_blank" rel="noreferrer">
                 <img style={{ hieght: "300px", width: "100%" }} src={JovivaaPic} alt="" /> 
                 </Link>
              </div>
          </div>

          <div class="cols">
              <div class="card">
              <Link to="/music-all-night-artist-jovivaa" target="_blank" rel="noreferrer">
                 <img style={{ hieght: "300px", width: "100%" }} src={Beano} alt="" /> 
                 </Link>
              </div>
          </div>
          
          <div class="cols">
              <div class="card">
                 <img src={Bady} /> 
              </div>
          </div>
          
          <div class="cols">
              <div class="card">
                 <img src={Skillz} /> 
              </div>
          </div>

          <div class="cols">
              <div class="card">
              <Link to="/music-all-night-artists-bobbie-t" target="_blank" rel="noreferrer">
                 <img style={{ hieght: "300px", width: "100%" }} src={Bobbie} alt="" /> 
                 </Link>
              </div>
          </div>

          
          <div class="cols">
              <div class="card">
                 <img src={Stitch} /> 
              </div>
          </div>

{/* // END OF ARTIST SCTION */}






      </div>
      <br />
<Footer />
    </>
  )
}

export default Jovivaa