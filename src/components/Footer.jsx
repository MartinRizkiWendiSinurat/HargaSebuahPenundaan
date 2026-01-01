import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Anggota Kelompok</h4>
            <ul className="anggota-list">
              <li>152023152 — Martin Rizki Wendi Sinurat</li>
              <li>152023209 — Mochammad Ilham Fauzan</li>
              <li>152024215 — Jihan Nur Alfiah</li>
              <li>152023130 — Genta Nur Muhammad</li>
              <li>152023205 — Irsa Nurrohim</li>
              <li>152024214 — Nazwa Maharani</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Informasi</h4>
            <ul>
              <li>kelompok </li>
              <li>kelas EE</li>
              <li>Informatika</li>
              <li>Fakultas Teknologi Industri</li>
              <li>Institut Teknologi Nasional</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Sosial Media</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="GitHub">GH</a>
              <a href="#" aria-label="LinkedIn">IN</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Kelompok 5. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
