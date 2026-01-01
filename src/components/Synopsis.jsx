import React from "react";
import "./Synopsis.css";

function Synopsis() {
  return (
    <div className="synopsis" id="tentang">
      <div className="synopsis-container">
        <h2 className="synopsis-title">Tentang Film</h2>
        <div className="synopsis-content">
          <p>
            Harga Sebuah Penundaan adalah film drama interaktif yang mengangkat potret realistis kehidupan mahasiswa tingkat akhir. Cerita berpusat pada Andi, seorang mahasiswa semester 8 di Institut Teknologi Nasional (ITENAS), yang mulai merasa waktu tidak lagi berpihak kepadanya. Segalanya bermula saat Andi menghadiri wisuda seorang sahabat—momen yang seharusnya membahagiakan, namun justru menjadi tamparan keras. Peringatan dari teman-teman dan dosennya menyadarkan Andi bahwa kebiasaan menunda telah menempatkannya di persimpangan hidup yang krusial.
          </p>
          <p>
            Dalam kesehariannya, Andi dihadapkan pada berbagai godaan yang terasa dekat dan nyata: kenyamanan bermain game hingga larut malam, ajakan pesta yang menjauhkannya dari tanggung jawab akademik, serta godaan judi online yang menjanjikan jalan pintas namun berujung kehancuran. Setiap pilihan yang ia ambil membawa konsekuensi, perlahan membentuk masa depan yang berbeda.
          </p>
          <p>
            Sebagai film dengan alur non-linear, Harga Sebuah Penundaan memberi kebebasan kepada penonton untuk menentukan keputusan Andi di setiap titik penting. Pilihan-pilihan tersebut akan membawa cerita menuju beragam kemungkinan akhir—mulai dari kelulusan yang penuh perjuangan hingga kegagalan pahit yang sarat penyesalan. Melalui pendekatan interaktif ini, film tidak hanya menyajikan kisah, tetapi juga mengajak penonton berefleksi tentang arti waktu, tanggung jawab, dan harga yang harus dibayar dari setiap penundaan dalam hidup.
          </p>
          <div className="synopsis-details">
            <div className="detail-item">
              <h3>Mata Kuliah</h3>
              <p>Teknik Multimedia</p>
            </div>
            <div className="detail-item">
              <h3>Genre</h3>
              <p>Film Interaktif</p>
            </div>
            <div className="detail-item">
              <h3>Tahun</h3>
              <p>2025</p>
            </div>
            <div className="detail-item">
              <h3>Durasi</h3>
              <p>20 menit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Synopsis;
