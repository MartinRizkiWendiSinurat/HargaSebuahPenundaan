import React from "react";
import { useNavigate } from "react-router-dom";
import { featuredMovie } from "../data/videos";
import "./Banner.css";

function Banner() {
  const navigate = useNavigate();

  const truncate = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const handlePlay = () => {
    navigate(`/watch/${featuredMovie.id}`);
  };

  const handleTrailer = () => {
    navigate(`/watch/${featuredMovie.id}?type=trailer`);
  };

  return (
    <header
      className="banner"
      id="home"
      style={{
        backgroundImage: `url(${featuredMovie.backdrop})`,
      }}
    >
      <div className="banner-overlay" />

      <div className="banner-content">
        <h1 className="banner-title">{featuredMovie.title}</h1>

        <div className="banner-info">
          <span className="banner-badge">{featuredMovie.rating}</span>
          <span className="banner-badge">{featuredMovie.year}</span>
          <span className="banner-badge">{featuredMovie.duration}</span>
        </div>

        <p className="banner-description">
          {truncate(featuredMovie.description, 160)}
        </p>

        <div className="banner-buttons">
          <button className="banner-button play" onClick={handlePlay}>
            ▶ Putar
          </button>

          <button className="banner-button trailer" onClick={handleTrailer}>
            🎬 Trailer
          </button>
        </div>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
