import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getStartVideo, getVideoById } from '../data/videos';
import DecisionOverlay from '../components/DecisionOverlay';
import VideoProgress from '../components/VideoProgress';
import EndingScreen from '../components/EndingScreen';
import './InteractiveVideoPlayer.css';

function InteractiveVideoPlayer() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const videoIdFromUrl = queryParams.get('videoId');

  const [currentVideoId, setCurrentVideoId] = useState(videoIdFromUrl || 'video1');
  const [showDecisions, setShowDecisions] = useState(false);
  const [videoHistory, setVideoHistory] = useState([videoIdFromUrl || 'video1']);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showEnding, setShowEnding] = useState(false);
  const [showDecisionButton, setShowDecisionButton] = useState(false);
  const iframeRef = useRef(null);

  const currentVideo = getVideoById(currentVideoId);

  useEffect(() => {
    if (videoIdFromUrl && videoIdFromUrl !== currentVideoId) {
      setIsVideoReady(false);
      setShowDecisions(false);
      setShowEnding(false);
      setShowDecisionButton(false);
      setCurrentVideoId(videoIdFromUrl);
      setVideoHistory([videoIdFromUrl]);
    }
  }, [videoIdFromUrl, currentVideoId]);

  useEffect(() => {
    if (!currentVideo) return;

    if (currentVideo.isChoiceOnly && currentVideo.decisions) {
      setShowDecisions(true);
      setShowDecisionButton(false);
      setIsVideoReady(true);
    } else if (isVideoReady && !currentVideo.isEnding && currentVideo.decisions) {
      setShowDecisionButton(true);
    }
  }, [isVideoReady, currentVideo]);

  const handleShowDecisions = () => {
    setShowDecisions(true);
    setShowDecisionButton(false);
  };

  const handleDecision = (nextVideoId) => {
    setShowDecisions(false);
    setShowDecisionButton(false);
    setIsVideoReady(false);
    setCurrentVideoId(nextVideoId);
    setVideoHistory([...videoHistory, nextVideoId]);
  };

  const handleRestart = () => {
    const startVideo = getStartVideo();
    setIsVideoReady(false);
    setShowDecisions(false);
    setShowEnding(false);
    setShowDecisionButton(false);
    setCurrentVideoId(startVideo.id);
    setVideoHistory([startVideo.id]);
    navigate('/play', { replace: true });
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleVideoEnd = () => {
    if (currentVideo.isEnding) {
      setShowEnding(true);
    }
  };

  if (!currentVideo) {
    return (
      <div className="error-container">
        <h2>Video tidak ditemukan</h2>
        <button className="btn neon-button" onClick={handleBackToHome}>
          Kembali ke Home
        </button>
      </div>
    );
  }

  return (
    <div className="interactive-video-player">
      <div className="player-header">
        <button className="back-button neon-button" onClick={handleBackToHome}>
          Beranda
        </button>
        {!currentVideo.isTrailer && (
          <VideoProgress 
            currentStep={videoHistory.length}
            videoTitle={currentVideo.title}
          />
        )}
      </div>

      <div className="video-wrapper">
        {currentVideo.fileId && (
          <>
            {!isVideoReady && (
              <div className="video-loading">
                <div className="loader"></div>
                <p>Memuat Video...</p>
              </div>
            )}
            <iframe
              key={currentVideoId}
              ref={iframeRef}
              src={`https://drive.google.com/file/d/${currentVideo.fileId}/preview`}
              className="interactive-video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={currentVideo.title}
              onLoad={() => setIsVideoReady(true)}
            />
          </>
        )}

        {showDecisions && !showEnding && (
          <DecisionOverlay 
            decisions={currentVideo.decisions}
            onDecision={handleDecision}
            videoTitle={currentVideo.title}
            videoDescription={currentVideo.description}
          />
        )}

        {showEnding && (
          <EndingScreen 
            video={currentVideo}
            onRestart={handleRestart}
            onBackToHome={handleBackToHome}
            videoHistory={videoHistory}
          />
        )}
      </div>

      <div className="page-controls">
        {showDecisionButton && !showDecisions && !showEnding && !currentVideo.isTrailer && (
          <div className="decision-trigger">
            <button className="neon-button" onClick={handleShowDecisions}>
              Buat Keputusan
            </button>
            <p className="decision-hint-text">Tonton video dan klik tombol di atas jika kamu sudah siap memilih!</p>
          </div>
        )}

        {currentVideo.isTrailer && isVideoReady && (
          <div className="video-end-trigger">
            <button className="neon-button" onClick={handleRestart}>
               Mulai Perjalanan Sekarang
            </button>
          </div>
        )}

        {currentVideo.isEnding && isVideoReady && !showEnding && (
          <div className="video-end-trigger">
            <button className="neon-button" onClick={handleVideoEnd}>
              Lihat Ending Cerita
            </button>
          </div>
        )}
      </div>

      <div className="video-info-section">
        <div className="video-info-content">
          <h1 className="video-title">{currentVideo.title}</h1>
          <p className="video-description">{currentVideo.description}</p>
        </div>
      </div>
    </div>
  );
}

export default InteractiveVideoPlayer;
