import React from 'react';
import './VideoProgress.css';

function VideoProgress({ currentStep, videoTitle }) {
  return (
    <div className="video-progress">
      <div className="progress-info">
        <span className="progress-step"></span>
        <span className="progress-separator">•</span>
        <span className="progress-title">{videoTitle}</span>
      </div>
    </div>
  );
}

export default VideoProgress;
