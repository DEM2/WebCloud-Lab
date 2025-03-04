import React from "react";
import "../CSS/Footer.css";
import {FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2024 WebCloud Labs. All rights reserved.</p>

        <ul className="social-links">
          <li><a href="https://www.instagram.com/webcloudlabs?igsh=YWJ3czhqdW5kdGdv"><FaInstagram /></a></li>
          <li><a href="https://www.linkedin.com/company/webcloudlabs"><FaLinkedinIn /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;