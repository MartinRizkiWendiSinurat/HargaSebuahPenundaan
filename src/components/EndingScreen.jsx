import React from 'react';
import './EndingScreen.css';

function EndingScreen({ video, onRestart, onBackToHome, videoHistory }) {
  const getEndingIcon = (type) => {
    switch (type) {
      case 'good':
        return '🎉';
      case 'bad':
        return '😢';
      case 'neutral':
        return '🤔';
      default:
        return '🎬';
    }
  };

  const getEndingColor = (type) => {
    switch (type) {
      case 'good':
        return '#00ff00';
      case 'bad':
        return '#ff0000';
      case 'neutral':
        return '#ffaa00';
      default:
        return '#ffffff';
    }
  };

  return (
    <div className="ending-screen">
      <div className="ending-container">
        {/* Ending Header */}
        <div className="ending-header">
          <div 
            className="ending-icon"
            style={{ borderColor: getEndingColor(video.endingType) }}
          >
            {getEndingIcon(video.endingType)}
          </div>
          <h1 className="ending-title">{video.title}</h1>
          <p className="ending-message">{video.endingMessage}</p>
        </div>

        {/* Ending Stats */}
        {video.endingStats && (
          <div className="ending-stats">
            <h3 className="stats-title">{video.endingStats.title}</h3>
            <div className="stats-grid">
              {video.endingStats.items.map((item, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-label">{item.label}</div>
                  <div className="stat-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Journey Summary */}
        <div className="journey-summary">
          <h3 className="journey-title">Perjalanan Kamu</h3>
          <div className="journey-path">
            {videoHistory.map((videoId, index) => (
              <React.Fragment key={videoId}>
                {index > 0 && <div className="journey-arrow">→</div>}
                <div className="journey-step">
                  <span className="journey-number">{index + 1}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <p className="journey-text">
            Kamu membuat {videoHistory.length - 1} keputusan untuk mencapai ending ini
          </p>
        </div>

        {/* Actions */}
        <div className="ending-actions">
          <button className="ending-button primary" onClick={onRestart}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
              <path d="M21 3v5h-5"/>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
              <path d="M8 16H3v5"/>
            </svg>
            Mulai dari Awal
          </button>

          <button className="ending-button secondary" onClick={onBackToHome}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Kembali ke Home
          </button>

          <button className="ending-button tertiary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
            Share
          </button>
        </div>

        {/* Credits */}
        <div className="ending-credits">
          <p>Terima kasih telah menonton!</p>
          <p className="credits-small">© 2025 Harga Sebuah Penundaan - Interactive Video Experience</p>
        </div>
      </div>
    </div>
  );
}

export default EndingScreen;
