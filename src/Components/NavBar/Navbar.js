import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../DropDown/DropDown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav class=" navbar navbar-expand-lg ">
        <div class="navbar
        ">
          <Link to="/" class="navbar-logo" onClick={closeMobileMenu}>
          M.A.N
            <i class="fab fa-typo3" />
          </Link>
          <div class="menu-icon" onClick={handleClick}>
            <i class={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul class={click ? "nav-menu active" : "nav-menu"}>
            <li class="nav-item">
              <Link to="/" class="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li class="nav-item">
              <Link to="/about" class="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            {/*<li className="nav-item">
             <Link
                to="/news"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                News
              </Link> 
            </li>*/}
               {/* <li class="nav-item">
              <Link
                to="/interviews"
                class="nav-links"
                onClick={closeMobileMenu}
              >
                Interviews
              </Link>
            </li> */}
               <li class="nav-item">
              <Link
                to="/music-all-night-events"
                class="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/music-all-night-artists"
                class="nav-links"
                onClick={closeMobileMenu}
              >
                Artists
              </Link>
            </li>
         
            <li class="nav-item">
              <Link
                to="/artists"
                class="nav-links"
                onClick={closeMobileMenu}
              >
                
              </Link>
            </li>
           {/* <li class="nav-item">
              <Link
                to="/djs"
                class="nav-links"
                onClick={closeMobileMenu}
              >
                DJs
              </Link>
            </li>
            <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
             <Link
              to="/services"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-times' />
            </Link>
            {dropdown && <Dropdown />}
          </li> */}
            {/* <li className="nav-item">
              <Link
                to="/bundles"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Bundles
              </Link>
            </li> */}
            
            <li>
              <Link
                to="/contact-us"
                class="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact Us</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
