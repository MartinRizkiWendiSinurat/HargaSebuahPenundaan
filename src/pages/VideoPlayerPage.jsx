import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { videos } from "../data/videos";
import VideoPlayerGoogleDrive from "../components/VideoPlayerGoogleDrive";
import "./VideoPlayerPage.css";

function VideoPlayerPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos[id];

  if (!video) {
    return (
      <div className="video-page-error">
        <h2>Video tidak ditemukan</h2>
        <button onClick={() => navigate("/")}>Kembali ke Beranda</button>
      </div>
    );
  }

  return (
    <div className="video-player-page">
      {/* Back Button */}
      <div className="video-header">
        <button className="back-button" onClick={() => navigate("/")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Kembali
        </button>
      </div>

      {/* Video Player - Google Drive */}
      <VideoPlayerGoogleDrive fileId={video.fileId} />

      {/* Video Info */}
      <div className="video-info">
        <h1 className="video-title">{video.title}</h1>
        
        <div className="video-meta">
          <span className="video-rating">{video.rating}</span>
          <span className="video-year">{video.year}</span>
          <span className="video-duration">{video.duration}</span>
        </div>

        <p className="video-description">{video.description}</p>

        <div className="video-additional-info">
          <p className="video-source-info">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '5px'}}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Siap Untuk ditonton
          </p>
        </div>
      </div>

      {/* Related Videos */}
      <div className="related-videos">
        <h2>Video Lainnya</h2>
        <div className="related-grid">
          {Object.values(videos)
            .filter(v => v.id !== parseInt(id))
            .slice(0, 4)
            .map(relatedVideo => (
              <div 
                key={relatedVideo.id} 
                className="related-item"
                onClick={() => {
                  navigate(`/watch/${relatedVideo.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className="related-thumbnail">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="white" opacity="0.7">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3>{relatedVideo.title}</h3>
                <p>{relatedVideo.duration}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="video-help-section">
        <details className="video-help-accordion">
          <summary>Masalah dengan video?</summary>
          <div className="video-help-content">
            <p>Jika video tidak muncul, coba:</p>
            <ul>
              <li>Refresh halaman (F5)</li>
              <li>Pastikan koneksi internet stabil</li>
              <li>Coba browser lain (Chrome, Firefox, Edge)</li>
              <li>Disable ad blocker jika ada</li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
}

export default VideoPlayerPage;
