import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import PosterSection from "../components/PosterSection";
import Synopsis from "../components/Synopsis";
import Footer from "../components/Footer";
import { movieCategories, featuredMovie } from "../data/videos";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= BANNER / HERO ================= */}
      <Banner />

      {/* ================= FILM REKOMENDASI (GRID) ================= */}
      <section id="film-rekomendasi">
        <PosterSection
          title="Film Rekomendasi"
          movies={movieCategories.trending}
        />
      </section>

      {/* ================= POSTER BESAR (FEATURED) ================= */}
      <section id="film">
        <PosterSection
          title="Poster Film"
          singlePoster="/images/5.png"
          singleMovieId={featuredMovie.id}
        />
      </section>

      {/* ================= TENTANG ================= */}
      <section id="tentang">
        <Synopsis />
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

export default Home;
