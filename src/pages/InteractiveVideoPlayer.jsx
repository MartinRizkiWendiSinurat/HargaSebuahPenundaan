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

  // 1. Ambil videoId dari URL parameter (?videoId=...)
  const queryParams = new URLSearchParams(location.search);
  const videoIdFromUrl = queryParams.get('videoId');

  // 2. State Management
  // Jika ada videoId di URL (seperti Trailer), gunakan itu. Jika tidak, ke 'video1'
  const [currentVideoId, setCurrentVideoId] = useState(videoIdFromUrl || 'video1');
  const [showDecisions, setShowDecisions] = useState(false);
  const [videoHistory, setVideoHistory] = useState([videoIdFromUrl || 'video1']);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showEnding, setShowEnding] = useState(false);
  const [showDecisionButton, setShowDecisionButton] = useState(false);
  const iframeRef = useRef(null);
  
  const currentVideo = getVideoById(currentVideoId);

  // 3. EFFECT: Sinkronisasi URL (PENTING untuk Trailer)
  // Jika user klik trailer saat sudah di page ini, URL berubah dan state harus ikut update
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

  // 4. EFFECT: Mengatur munculnya tombol keputusan
  useEffect(() => {
    if (!currentVideo) return;

    if (currentVideo.isChoiceOnly && currentVideo.decisions) {
      // Jika video tipe pilihan saja (tanpa file video)
      setShowDecisions(true);
      setShowDecisionButton(false);
      setIsVideoReady(true);
    } else if (isVideoReady && !currentVideo.isEnding && currentVideo.decisions) {
      // Jika video biasa selesai loading dan punya pilihan
      setShowDecisionButton(true);
    }
  }, [isVideoReady, currentVideo]);

  // 5. Handlers
  const handleShowDecisions = () => {
    setShowDecisions(true);
    setShowDecisionButton(false);
  };

  const handleDecision = (nextVideoId) => {
    setShowDecisions(false);
    setShowDecisionButton(false);
    setIsVideoReady(false); // Reset loading untuk video berikutnya
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
    
    // Bersihkan query param di URL agar kembali ke alur normal
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

  // 6. Validasi jika data video tidak ditemukan
  if (!currentVideo) {
    return (
      <div className="error-container">
        <h2>Video tidak ditemukan</h2>
        <button className="btn btn-primary" onClick={handleBackToHome}>
          Kembali ke Home
        </button>
      </div>
    );
  }

  return (
    <div className="interactive-video-player">
      {/* --- HEADER SECTION --- */}
      <div className="player-header">
        <button className="back-button" onClick={handleBackToHome}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Home
        </button>
        
        {/* Sembunyikan progress jika ini hanya trailer */}
        {!currentVideo.isTrailer && (
          <VideoProgress 
            currentStep={videoHistory.length}
            videoTitle={currentVideo.title}
          />
        )}
      </div>

      {/* --- VIDEO PLAYER SECTION --- */}
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
              key={currentVideoId} // Key penting agar iframe reload saat ID ganti
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

        {/* Overlay Pilihan Cerita */}
        {showDecisions && !showEnding && (
          <DecisionOverlay 
            decisions={currentVideo.decisions}
            onDecision={handleDecision}
            videoTitle={currentVideo.title}
            videoDescription={currentVideo.description}
          />
        )}

        {/* Layar Akhir (Ending) */}
        {showEnding && (
          <EndingScreen 
            video={currentVideo}
            onRestart={handleRestart}
            onBackToHome={handleBackToHome}
            videoHistory={videoHistory}
          />
        )}
      </div>

      {/* --- CONTROL BUTTONS SECTION (DI BAWAH VIDEO) --- */}
      <div className="page-controls">
        
        {/* Tombol Buat Keputusan (Hanya untuk alur game) */}
        {showDecisionButton && !showDecisions && !showEnding && !currentVideo.isTrailer && (
          <div className="decision-trigger">
            <button className="decision-trigger-button" onClick={handleShowDecisions}>
              {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 012-2V5a2 2 0 012-2h11"/>
              </svg> */}
              <span>Buat Keputusan</span>
            </button>
            <p className="decision-hint-text">⏰ Tonton vidio dan Klik tombol di atas jika kamu sudah siap memilih!</p>
          </div>
        )}

        {/* Tombol Khusus Trailer: Muncul setelah trailer siap */}
        {currentVideo.isTrailer && isVideoReady && (
          <div className="video-end-trigger">
            <button className="video-end-button" style={{backgroundColor: '#e50914'}} onClick={handleRestart}>
              🎮 Mulai Bermain Sekarang
            </button>
          </div>
        )}

        {/* Tombol Ending */}
        {currentVideo.isEnding && isVideoReady && !showEnding && (
          <div className="video-end-trigger">
            <button className="video-end-button" onClick={handleVideoEnd}>
              ✨ Lihat Ending Cerita
            </button>
          </div>
        )}
      </div>

      {/* --- INFO SECTION --- */}
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