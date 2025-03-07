import React, { useState } from "react";
import est8Logo from "../assets/est8Logo.png";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiBars4 } from "react-icons/hi2";

const navigation = [
    {name: "Home", href:"/"},
    {name: "Contact", href:"/Contact"},
    {name: "Listings", href:"/listings"},
    {name: "About", href:"/about"}  
]

const Navbar = () => {
    const [isDropdownOpen, setisDropdownOpen] = useState(false)

  return (
    <nav className= "navbar">
    <div className= "navbarRight">
    <Link to="/" className="logo">
        <div className="logoDiv">
            <img src={est8Logo} className="logo" alt="est-logo" />
            <div className="hub">hub</div>  
        </div>
        </Link>
    </div>
    <div className="navbarLeft">
           <div className="links">
           <Link to="/listings" className="navLinks listings">listings</Link>
           <Link to="/Contact" className="navLinks contact" >contact</Link>
            <Link to="/about" className="navLinks about" >about</Link>
           </div>
            <button className="navButton" onClick={() => setisDropdownOpen(!isDropdownOpen)}><HiBars4  className="login"/></button>
            {isDropdownOpen && (
              <div className="dropdown">
                <ul className="dropdownList">
                  {navigation.map((item) => (
                    <li key={item.name} onClick={() => setisDropdownOpen(false)} className="dropdownItem">
                      <Link to={item.href} className="dropdownLink">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  
                </ul>
              </div>
            )}
        </div>
    </nav>
  );
};

export default Navbar;
