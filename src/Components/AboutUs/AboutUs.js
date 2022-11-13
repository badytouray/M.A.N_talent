import React from 'react';
import Footer from '../Footer/Footer';
import "./AboutUs.css";
import { Link } from "react-router-dom";
import Bady from "../../bady.png";

function AboutUs() {
    return (
        <>
        <h1>About Music ALl Night</h1>
        <div class="row">
            <div class="side">
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div style={{height: 200}} src={Bady}>Image</div>
            <section>Welcome to WPMM, and I do a range of beauty to suit your needs, I have specialised myself to work with the best products and treatments to not only enhance your look, but be sure to have your natural beauty protected and not damaged from repetitive use of hard wearing supplies.</section>
            The treatment room is based in my home, with private parking on my drive to ensure stress free attendance and no extra parking charges, you will be feeling like a king or queen having just one on one interaction with myself and no other clients, I work around you, so will do my upmost to fit you in your own routine. 
            <p>Each treatment I offer are specially picked to be sure you can look and feel great without having the aftermath of damage to any treatments you choose. </p>
            <p>I have a list of treatments with brief descriptions, you can click on treatment facts to ensure you know the protocol the treatments require the after care and what to do before attending appointments. We hope you find your fabulous withing our beauty room.</p>
            </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
        <Footer />
        </>
    );
}


export default AboutUs;