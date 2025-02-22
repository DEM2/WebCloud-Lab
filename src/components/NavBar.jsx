import React, { useState, useEffect } from "react";
import "../CSS/NavBar.css";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="src/assets/logo_webcloud.png" alt="Logo" />
        <span className={`logo-text ${scrolling ? "hidden" : ""}`}>WebCloud Labs</span>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;