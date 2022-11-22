import React from 'react';
import Footer from '../Footer/Footer';
import "./AboutUs.css";
import { Link } from "react-router-dom";
import Bady from "../../bady.png";

function AboutUs() {
    return (
        <>
        <h1>About Music ALl Night</h1>
        <div class="container bg-light">
        <div class="row row-cols-2">
          <div class="col">
            <div class="side">
            <h2>The Team</h2>
            <img style={{height: "500px", width: "100%"}} src={Bady} />
            <section>Welcome to WPMM, and I do a range of beauty to suit your needs, I have specialised myself to work with the best products and treatments to not only enhance your look, </section>
            
            </div>
            </div>
        
            <div class="col">
            <div class="side">
            <h2>About Us</h2>
            <div class="text-center" style={{height: "200"}} src={Bady}>Image</div>
            <section>Welcome to WPMM, and I do a range of beauty to suit your needs, I have specialised myself to work with the best products and treatments to not only enhance your look, but be sure to have your natural beauty protected and not damaged from repetitive use of hard wearing supplies.</section>
            <br/>
            <p>Joe marshall (Video man) - I have a list of treatments with brief descriptions, you can click on treatment facts to ensure you know the protocol the treatments require the after care and what to do before attending appointments. We hope you find your fabulous withing our beauty room. I have a list of treatments with brief descriptions, you can click on </p>
            <p>Bobbie TEE (Booking agent/DJ) - Each treatment I offer are specially picked to be sure you can look and feel great without having the aftermath of damage to any treatments you choose. </p>
            <p>Zebberz (Communications/DJ) - I have a list of treatments with brief descriptions, you can click on treatment facts to ensure you know the protocol the treatments require the after care and what to do before attending appointments. We hope you find your  </p>

            <p>Bady (Designer/Operations/Dj)- I have a list of treatments with brief descriptions, you can click on treatment facts to ensure you know the protocol the treatments require the after care and what to do before attending appointments. We hope you find your </p>
            </div>
            </div>
  

      </div>

      </div>
        <Footer />
        </>
    );
}


export default AboutUs;