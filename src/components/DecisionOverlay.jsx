import React from 'react';
import './DecisionOverlay.css';

function DecisionOverlay({ decisions, onDecision, videoTitle, videoDescription }) {
  return (
    <div className="decision-overlay">
      <div className="decision-container">
        <div className="decision-header">
          <h2 className="decision-title">⏸️ Pilih Jalan Ceritamu</h2>
          {videoDescription && (
            <p className="decision-subtitle">{videoDescription}</p>
          )}
        </div>

        <div className="decision-buttons">
          {decisions.map((decision) => (
            <button
              key={decision.id}
              className="decision-button"
              style={{
                '--button-color': decision.color || '#e50914'
              }}
              onClick={() => onDecision(decision.nextVideo)}
            >
              <div className="decision-button-content">
                <span className="decision-label">{decision.label}</span>
                {decision.description && (
                  <span className="decision-description">{decision.description}</span>
                )}
              </div>
              <svg 
                className="decision-arrow" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          ))}
        </div>

        <div className="decision-footer">
          <p className="decision-hint">
            💡 Pikirkan baik-baik sebelum memilih. Setiap keputusan memiliki konsekuensi!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DecisionOverlay;
