import React, { useState, useEffect } from 'react';
import './EndingScreen.css';

function EndingScreen({ video, onRestart, onBackToHome, videoHistory }) {
  const [visibleWords, setVisibleWords] = useState(0);
  const [showMoralMessage, setShowMoralMessage] = useState(false);

  // Pesan ending berdasarkan tipe dan skenario
  const getEndingMessage = (type) => {
    // Cek apakah ada custom message dari video object
    if (video.customEndingMessage) {
      return video.customEndingMessage;
    }
    
    // Default messages berdasarkan tipe
    switch (type) {
      case 'good':
        return 'Selamat! Pilihanmu membawa Andi ke garis finish yang gemilang. Terimakasih telah memilih untuk tidak menyerah di tengah jalan. Satu gelar sarjana telah berhasil diraih dengan keringat dan air mata. Ini bukan akhir dari perjalanan, tapi awal dari ribuan mimpi baru yang siap untuk dikejar. Masa depan cerah menanti di depan sana.';
      case 'bad_game':
        return 'Sayangnya, cerita Andi berakhir tragis. Kamu terlalu sibuk menaikkan level karakter game sampai lupa menaikkan level kehidupan nyata. Hari demi hari dihabiskan di depan layar, sementara tugas akhir tertunda dan deadline sidang semakin dekat. Ketika sadar, sudah terlambat. Sidang terlewat, kesempatan lulus hilang. Game over bukan hanya di layar, tapi juga di kehidupan nyata. Masa depan yang penuh harapan kini sirna, tamat sebelum sempat dimulai.';
      case 'bad_party':
        return 'Perjalanan Andi berakhir dengan penyesalan mendalam. Pesta demi pesta, hangout demi hangout, kamu dikelilingi teman-teman yang terlihat setia. Mereka ada saat kamu senang, tertawa bersamamu di setiap kesenangan. Tapi ketika hari sidang tiba dan kamu terlambat karena terlalu lelah dari pesta semalam, tidak ada satupun yang peduli. Teman-teman pestamu menghilang saat kamu di-DO dari kampus. Kini kamu tersisa sendirian, tanpa gelar, tanpa masa depan yang jelas, hanya dengan kenangan pesta yang tak berarti.';
      case 'bad_gambling':
        return 'Ending yang paling kelam menanti Andi. Judi adalah permainan tanpa pemenang sejati. Setiap taruhan membawa harapan palsu, setiap kemenangan kecil membutakan mata dari kehancuran besar yang menanti. Uang kuliah habis, tabungan ludes, bahkan hutang menumpuk. Tekanan semakin besar hingga akhirnya semuanya runtuh. Sidang tidak pernah terjadi, gelar sarjana tinggal mimpi. Yang tersisa hanya penyesalan, hutang yang menggunung, dan bahkan ancaman hukuman penjara. Judi tidak pernah menjanjikan kemenangan, hanya kehancuran total. Sekarang kamu kehilangan segalanya.';
      default:
        return 'Perjalanan Andi telah berakhir. Setiap keputusan yang diambil membawa konsekuensinya masing-masing. Hidup adalah tentang pilihan, dan pilihanmu telah menentukan jalan cerita ini.';
    }
  };

  const endingMessage = getEndingMessage(video.endingType);
  const words = endingMessage.split(' ');

  useEffect(() => {
    // Mulai animasi pesan moral setelah delay
    const timer = setTimeout(() => {
      setShowMoralMessage(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMoralMessage && visibleWords < words.length) {
      const timer = setTimeout(() => {
        setVisibleWords(prev => prev + 1);
      }, 200); // Delay antar kata (ms) - diperlambat untuk efek lebih jelas

      return () => clearTimeout(timer);
    }
  }, [showMoralMessage, visibleWords, words.length]);

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
        {/* Ending Icon */}
        <div className="ending-header">
          <div 
            className="ending-icon"
            style={{ borderColor: getEndingColor(video.endingType) }}
          >
            {getEndingIcon(video.endingType)}
          </div>
        </div>

        {/* Ending Message - Animasi Kata per Kata */}
        {showMoralMessage && (
          <div className="ending-message-container">
            <div className="ending-message-quote">"</div>
            <div className="ending-message-text">
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <span
                    className={`ending-word ${index < visibleWords ? 'visible' : ''}`}
                  >
                    {word}
                  </span>
                  {index < words.length - 1 && ' '}
                </React.Fragment>
              ))}
            </div>
            <div className="ending-message-quote closing-quote">"</div>
          </div>
        )}

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