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
      <nav className="container-fluid navbar navbar-expand-lg ">
        <div className="navbar
        ">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          M.A.N
            <i class="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
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
            <li className="nav-item">
              <Link
                to="/artists"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Artists
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/djs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                DJs
              </Link>
            </li>
            {/* <li
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
                className="nav-links-mobile"
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
