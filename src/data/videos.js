// ======================
// FILE ID GOOGLE DRIVE
// ======================
const MAIN_VIDEO_ID = "1T-yaauqCki4BXBAJ3b0R5r9lSrAewlvh";

// (OPSIONAL) Trailer – boleh sama dulu
const TRAILER_VIDEO_ID = MAIN_VIDEO_ID;

// ======================
// DATABASE VIDEO (PLAYER)
// ======================
export const videos = {
  1: {
    id: 1,
    title: "Harga Sebuah Penundaan",
    type: "google-drive",

    // MAIN VIDEO
    fileId: MAIN_VIDEO_ID,

    // TRAILER (optional)
    trailerFileId: TRAILER_VIDEO_ID,

    description: `Satu tugas ditunda. Satu keputusan diabaikan.
Andi, mahasiswa semester akhir, berada di persimpangan hidupnya.
Di tengah tekanan skripsi dan godaan kehidupan kampus,
setiap pilihan menentukan masa depannya.`,

    year: "2025",
    rating: "13+",
    duration: "20 menit",
    genre: "Drama"
  }
};

// ======================
// HOME PAGE (POSTER / GRID)
// ======================
export const movieCategories = {
  trending: [
    {
      id: 7,
      title: "Harga Sebuah Penundaan",
      thumbnail: "/images/3.png"
    },
    {
      id: 1,
      title: "Editor dan aktor",
      thumbnail: "/images/2.png"
    },
    {
      id: 2,
      title: "Aktris dan Laporan",
      thumbnail: "/images/3.png"
    },
    {
      id: 3,
      title: "Aktris dan poster",
      thumbnail: "/images/4.png"
    },
    {
      id: 4,
      title: "Aktor dan laporan",
      thumbnail: "/images/5.png"
    },
    {
      id: 5,
      title: "videographer dan editor",
      thumbnail: "/images/6.png"
    },
    {
      id: 6,
      title: "web dev dan aktor",
      thumbnail: "/images/1.png"
    },
    {
      id: 8,
      title: "Harga Sebuah Penundaan 2",
      thumbnail: "/images/6.png"
    },
  ]
};

// ======================
// FEATURED MOVIE (BANNER)
// ======================
export const featuredMovie = {
  id: 1,
  title: "Harga Sebuah Penundaan",
  type: "google-drive",

  description: `Andi adalah mahasiswa semester 8
yang hidupnya berada di ambang kelulusan.
Kebiasaan menunda, godaan bermain, dan pilihan-pilihan kecil
perlahan menjauhkan dirinya dari masa depan yang ia impikan.`,

  backdrop:
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop&q=80",

  rating: "13+",
  year: "2025",
  duration: "20 menit"
};
