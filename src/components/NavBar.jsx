import { useState, useEffect } from "react";
import "../CSS/NavBar.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < prevScrollY);
      setScrolling(currentScrollY > 50);
      prevScrollY = currentScrollY;

      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <header className={`navbar ${scrolling ? "scrolled" : ""} ${visible ? "" : "hidden"}`}>

      <nav className="nav-links">
        <div className="logo">
          <img src={`${import.meta.env.BASE_URL}/assets/Images/logo_webcloud.png`} alt="Logo" />
          <span className="logo-text">WebCloud Labs</span>
        </div>
        <ul className={isOpen ? "menu active" : "menu"}>
          <li><a  onClick={() => {
            document.getElementById("home").scrollIntoView({ behavior: "smooth" });
            toggleMenu();
          }}>Home</a></li>
          <li><a  onClick={() => {
            document.getElementById("about").scrollIntoView({ behavior: "smooth" });
            toggleMenu();
          }}>About Us</a></li>
          <li><a  onClick={() => {
            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
            toggleMenu();
          }}>Services</a></li>
          <li><a onClick={() => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            toggleMenu();
          }}>Contact</a></li>
        </ul>
        <div className={`BarIcon ${isOpen ? "active-icon" : ""}`} onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;



