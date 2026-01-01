import React from "react";
import "./VideoPlayer.css";

/**
 * VideoPlayer untuk Google Drive
 * 
 * Cara mendapatkan File ID:
 * 1. Upload video ke Google Drive
 * 2. Klik kanan → Get link → Anyone with the link
 * 3. Copy link: https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing
 * 4. Ambil FILE_ID_HERE (bagian tengah)
 */

function VideoPlayerGoogleDrive({ fileId }) {
  // URL untuk embed Google Drive video
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="video-player-container">
      <iframe
        src={embedUrl}
        className="google-drive-video"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video Player"
      />
    </div>
  );
}

export default VideoPlayerGoogleDrive;
