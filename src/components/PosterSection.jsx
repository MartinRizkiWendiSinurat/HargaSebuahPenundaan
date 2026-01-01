import React from "react";
import { useNavigate } from "react-router-dom";
import "./PosterSection.css";

function PosterSection({
  movies = null,          // ⬅️ default null
  title = "Poster Film",
  singlePoster = null,    // ⬅️ poster tunggal
  singleMovieId = null,   // ⬅️ id film
}) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (!id) return;
    navigate(`/watch/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="poster-section">
      <h2 className="poster-section-title">{title}</h2>

      {/* ================= GRID MODE ================= */}
      {Array.isArray(movies) && movies.length > 1 && (
        <div className="poster-grid">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="poster-card"
              onClick={() => handleClick(movie.id)}
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
      )}

      {/* ================= SINGLE MODE ================= */}
      {!movies && singlePoster && (
        <div className="poster-single-wrapper">
          <img
            src={singlePoster}
            alt={title}
            className="poster-single-image"
            onClick={() => handleClick(singleMovieId)}
          />
        </div>
      )}
    </section>
  );
}

export default PosterSection;
