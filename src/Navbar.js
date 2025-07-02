import React from "react";
import "./components/css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className="logo" src="/company-logos/chromezy-logo.png" alt="logo" />
        <input type="text" className="search" placeholder="Search" />
      </div>
      <div className="navbar-center">
        <a href="#section0" style={{borderBottom: "3px solid #07E9FF", paddingBottom:"6px"}} >Home</a>
        <a href="#explore">Explore AI</a>
        <a href="#services">Services</a>
        <a href="#ecommerce">E-commerce</a>
        <a href="#products">Products</a>
        <a href="#blogs">Blogs</a>
      </div>
      <div className="navbar-right">
        <a href="#about">About Us</a>
        <button className="contact-btn">Contact Us</button>
      </div>
    </nav>
  );
}
