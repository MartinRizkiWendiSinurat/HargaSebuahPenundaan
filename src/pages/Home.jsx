import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTotalEndings } from "../data/videos";
import "./Home.css";

// Featured Movie for Hero Banner
const featuredMovie = {
  id: 1,
  title: "HARGA SEBUAH PENUNDAAN",
  backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop&q=80",
  description: `Pilih jalanmu sendiri dalam cerita interaktif tentang seorang mahasiswa
yang harus membuat keputusan penting dalam hidupnya. Setiap pilihan
membawa konsekuensi yang berbeda. Apakah kamu akan lulus tepat waktu
atau terjebak dalam lingkaran penundaan?`,
  trailerId: "1rlehP0TOxr_KWPGIX7EzwF0iUjbKjJ2_"
};

// Highlighted Poster (Single)
const highlightedPoster = {
  id: 7,
  poster: "/images/10.png"
};

// Movie data for poster grid
const movieCategories = {
  trending: [
    {
      id: 7,
      title: "Harga Sebuah Penundaan",
      thumbnail: "/images/10.png"
    },
    {
      id: 1,
      title: "Editor dan aktor",
      thumbnail: "/images/2.png"
    },
    {
      id: 2,
      title: "Aktris dan poster",
      thumbnail: "/images/3.png"
    },
    {
      id: 3,
      title: "Aktris dan poster",
      thumbnail: "/images/4.png"
    },
    {
      id: 4,
      title: "Aktor dan laporan",
      thumbnail: "/images/5.png"
    },
    {
      id: 5,
      title: "videographer dan editor",
      thumbnail: "/images/6.png"
    },
    {
      id: 6,
      title: "web dev dan aktor",
      thumbnail: "/images/1.png"
    },
    {
      id: 8,
      title: "Harga Sebuah Penundaan 2",
      thumbnail: "/images/11.png"
    },
    {
      id: 9,
      title: "Harga Sebuah Penundaan",
      thumbnail: "/images/13.png"
    },{
      id: 10,
      title: "Harga Sebuah Penundaan",
      thumbnail: "/images/14.png"
    },{
      id: 11,
      title: "Harga Sebuah Penundaan",
      thumbnail: "/images/15.png"
    },
    {
      id: 12,
      title: "Harga Sebuah Penundaan",
      thumbnail: "/images/17.png"
    },
  ]
};

function Home() {
  const navigate = useNavigate();
  const totalEndings = getTotalEndings();
  const [scrolled, setScrolled] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePosterClick = (id) => {
    if (!id) return;
    navigate(`/play`);
    window.scrollTo(0, 0);
  };

  const handleTrailer = () => {
    // Navigate ke halaman video dengan trailer ID
    navigate(`/play?videoId=${featuredMovie.trailerId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="home-page">
      {/* Navbar Netflix Style */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection("hero")}>
            <h1>FILM INTERAKTIF</h1>
          </div>

          <ul className="navbar-menu">
            <li>
              <button onClick={() => scrollToSection("hero")}>Beranda</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("highlight")}>Highlight</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("poster")}>Film</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("tentang")}>Tentang</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("how-to-play")}>Cara Bermain</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* 1. Hero Section (Netflix Banner Style) with Dynamic Backdrop */}
      <div 
        className="hero-section" 
        id="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${featuredMovie.backdrop})`
        }}
      >
        <div className="hero-overlay" />
        
        <div className="hero-content">
          <h1 className="hero-title">{featuredMovie.title}</h1>
          {/* <p className="hero-subtitle">Interactive Video Experience</p> */}
          
          {/* <div className="hero-info">
            <span className="hero-badge">Film Interaktif</span>
            <span className="hero-badge">2025</span>
            <span className="hero-badge">20+ Menit</span>
            <span className="hero-badge">{totalEndings} Ending</span>
          </div> */}

          <p className="hero-description">
            {featuredMovie.description}
          </p>

          <div className="hero-stats">
            {/* <div className="stat-item">
              <div className="stat-number">MEMILIH</div>
              <div className="stat-label">KEPUTUSAN Berbeda</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Keputusan Penting</div>
            </div> */}
            {/* <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Replay Value</div>
            </div> */}
          </div>

          <div className="hero-buttons">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => navigate("/play")}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Mulai Perjalanan
            </button>
            
            <button 
              className="btn btn-secondary btn-large"
              onClick={handleTrailer}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
              </svg>
              Trailer
            </button>
          </div>
        </div>

        <div className="hero-fadeBottom" />
      </div>

      {/* 2. Highlighted Poster (Single Center) */}
      <section className="highlight-section" id="highlight">
        <div className="highlight-container">
          <h2 className="section-title">SEDANG TAYANG </h2>
          {/* <p className="highlight-subtitle">
            Film interaktif terbaru yang wajib kamu coba
          </p> */}
          
          <div className="highlight-poster-wrapper">
            <img
              src={highlightedPoster.poster}
              alt={highlightedPoster.title}
              className="highlight-poster-image"
              onClick={() => handlePosterClick(highlightedPoster.id)}
            />
            <div className="highlight-play-overlay">
              <button 
                className="highlight-play-button"
                onClick={() => handlePosterClick(highlightedPoster.id)}
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
          
          <h3 className="highlight-poster-title">{highlightedPoster.title}</h3>
        </div>
      </section>

      {/* 3. Poster Section (Grid) */}
      <section className="poster-section" id="poster">
        <h2 className="poster-section-title">Film Tersedia</h2>
        
        <div className="poster-grid">
          {movieCategories.trending.map((movie) => (
            <div
              key={movie.id}
              className="poster-card"
              onClick={() => handlePosterClick(movie.id)}
            >
              <div className="poster-image-wrapper">
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className="poster-image"
                />
                <div className="poster-overlay">
                  <svg
                    className="play-icon"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="poster-title">{movie.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Synopsis Section */}
      <section className="synopsis-section" id="tentang">
        <div className="synopsis-container">
          <h2 className="synopsis-title">Tentang Film</h2>
          <div className="synopsis-content">
            <p>
              Harga Sebuah Penundaan adalah film drama interaktif yang mengangkat potret realistis kehidupan mahasiswa tingkat akhir. Cerita berpusat pada Andi, seorang mahasiswa semester 8 di salah satu kampus di bandung , yang mulai merasa waktu tidak lagi berpihak kepadanya. Segalanya bermula saat Andi menghadiri wisuda seorang sahabat—momen yang seharusnya membahagiakan, namun justru menjadi tamparan keras. Peringatan dari teman-teman dan dosennya menyadarkan Andi bahwa kebiasaan menunda telah menempatkannya di persimpangan hidup yang krusial.
            </p>
            <p>
              Dalam kesehariannya, Andi dihadapkan pada berbagai godaan yang terasa dekat dan nyata: kenyamanan bermain game hingga larut malam, ajakan pesta yang menjauhkannya dari tanggung jawab akademik, serta godaan judi online yang menjanjikan jalan pintas namun berujung kehancuran. Setiap pilihan yang ia ambil membawa konsekuensi, perlahan membentuk masa depan yang berbeda.
            </p>
            <p>
              Sebagai film dengan alur non-linear, Harga Sebuah Penundaan memberi kebebasan kepada penonton untuk menentukan keputusan Andi di setiap titik penting. Pilihan-pilihan tersebut akan membawa cerita menuju beragam kemungkinan akhir—mulai dari kelulusan yang penuh perjuangan hingga kegagalan pahit yang sarat penyesalan. Melalui pendekatan interaktif ini, film tidak hanya menyajikan kisah, tetapi juga mengajak penonton berefleksi tentang arti waktu, tanggung jawab, dan harga yang harus dibayar dari setiap penundaan dalam hidup.
            </p>
            <div className="synopsis-copyright">
              <p>
                Seluruh musik yang digunakan dalam film ini merupakan hak cipta milik
                pencipta masing-masing:
              </p>
              <ul>
                <li>🎵 <strong>Racun</strong> — Cangchuters</li>
                <li>🎵 <strong>Jalan Ke London</strong> — Cangchuters</li>
                <li>🎵 <strong>Everything U Are</strong> — Hindia</li>
              </ul>
              <p className="copyright-note">
                Musik digunakan hanya untuk keperluan pendidikan dan non-komersial.
              </p>
            </div>
            {/* <div className="synopsis-details">
            
              
              <div className="detail-item">
                <h3>Mata Kuliah</h3>
                <p>Teknik Multimedia</p>
              </div>
              <div className="detail-item">
                <h3>Genre</h3>
                <p>Film Interaktif</p>
              </div>
              <div className="detail-item">
                <h3>Tahun</h3>
                <p>2025</p>
              </div>
              <div className="detail-item">
                <h3>Durasi</h3>
                <p>20+ Menit</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* 5. How to Play Section */}
      <section id="how-to-play" className="how-to-play-section">
        <div className="container">
          <h2 className="section-title">Cara Bermain</h2>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <p>Tekan mulai perjalan ketika masuk cari tombol settings dan atur kualitas video</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <p>Tekan tombol play dan nikmati film interaktifnya </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <p>Untuk memilih pilihan yang kamu inginkan keluar dan tekan tombol yang tersedia </p>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <p>Ada  ending berbeda yang bisa kamu pilih</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Siap Memulai Perjalananmu?</h2>
          <p>Setiap keputusan memiliki konsekuensi. Pilih dengan bijak!</p>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => navigate("/play")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Mulai Sekarang
          </button>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="home-footer">
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
                <li>Kelompok 5</li>
                <li>Kelas EE</li>
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
            <p>&copy; {currentYear} Harga Sebuah Penundaan - Kelompok 5</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;