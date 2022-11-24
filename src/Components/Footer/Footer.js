import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className="footer-container container-fluid">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to be the first to recieve our latest events.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
     
    
          <div class="footer-logo">
            <Link to="/" className="social-logo">
          Music All Night
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">M.A.N © 2022 - Designed by Bady Touray</small>
          <div class="social-icons">
          <a>
        <SocialIcon target="_blank" url="https://instagram.com/music__all__night" style={{height: "45px", width: "50px", margin: "10px"}} />
        <SocialIcon target="_blank"url="https://facebook.com/musicallnight.uk" style={{height: "45px", width: "50px", margin: "10px"}} />
        <SocialIcon target="_blank"url="https://youtube.com/musicallnight" style={{height: "45px", width: "50px", margin: "10px"}} />
        </a>
          </div>
       
        </div>
  
    
  );
}

export default Footer;
