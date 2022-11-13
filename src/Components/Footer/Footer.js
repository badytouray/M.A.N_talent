import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to be the first to recieve our latest deals.
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
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About M.A.N</h2>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/">Covid-19 Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact-us">Contact</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/location">Location</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/https://www.instagram.com/badylondon">Instagram</Link>
            <Link to="/https://www.facebook.com/badylondonn">Facebook</Link>
            <Link to="/https://www.twitter.com/badylondonn">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
          Music All Night
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">WPMM © 2021 - Designed by www.Wpmm.com</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/www.instagram.com/badylondon"
              target="/www.instagram.com/badylondon"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/https://instagram.com/badylondon"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/https://www.instagram.com/badylondon"
              target="/https://www.instagram.com/badylondon"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
