import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <footer className="footer">
        <div className="footerMain">
          <div className="footerText">
            <hr />
            <h3 className="footerTitle">EST8 HUB</h3>
            <p className="footersubText">
              Transforming Lives One Home at a Time | ABC Realty - Your Premier
              Real Estate Partner for Buying, Selling, and Expert Guidance Every
              Step of the Way
            </p>
            <input
              type="email"
              className="email"
              placeholder="Enter your email"
            />
            <button className="subscribe">subscribe</button>
          </div>
          <div className="footerLinks second">
            <hr />
            <h3 className="footerTitle">Learn More</h3>
            <ul>
              <li>About us</li>
              <li>Learn more</li>
              <li>Hot offers</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footerLinks first">
            <hr />
            <h3 className="footerTitle">Quick Links</h3>
            <ul className="listLinks">
            <Link to="/" className="footerLink">home</Link>
            <Link to="/listings"className="footerLink">listings</Link>
           <Link to="/contact"className="footerLink">contact</Link>
            <Link to="/about"className="footerLink" >about</Link>
            </ul>
          </div>
          <div className="footerContact">
            <hr />
            <h3 className="footerTitle">Contact Us</h3>
            <p>EST8 HUB</p>
            <p>123 Main Street</p>
            <p>Los Angeles, CA 90012</p>
            <p>info@est8hub.com</p>
          </div>
        </div>
        <div className="copyRight"> <span> ©{currentYear} EST8 hub. All rights reserved.</span></div>

      </footer>

    </div>
  );
};

export default Footer;
