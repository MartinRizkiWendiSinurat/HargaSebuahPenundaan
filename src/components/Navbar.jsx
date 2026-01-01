import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // Jika di halaman lain, navigate ke home dulu
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <h1>FILM INTERAKTIF</h1>
        </div>

        <ul className="navbar-menu">
          <li>
            <button onClick={() => scrollToSection("home")}>Beranda</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("film")}>Poster</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("tentang")}>Tentang</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
