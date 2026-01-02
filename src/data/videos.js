// const VIDEO_INTRO_ID = "1gdb-g0hruuDmr_F68_nVmXqcJsaCL0aQ";
// const TRAILER_VIDEO_ID = "1rlehP0TOxr_KWPGIX7EzwF0iUjbKjJ2_";
// const VIDEO_LULUS_ID = "1gdb-g0hruuDmr_F68_nVmXqcJsaCL0aQ"; // Ganti dengan ID video 2
// const VIDEO_GAME_ID = "15Px9OQSrp_bn4L6e7F8dc1ESmZUp6dNN"; // Ganti dengan ID video 3
// const VIDEO_PERGUALAN_ID = "1HQp_K3nqisWlwMrl5paF9_7oboPreNyu"; // Ganti dengan ID video 4
// const VIDEO_JUDI_ID = "1Vk_cUGNZGJQhCHjFsYnq2oY4eMqRLM6U"; // Ganti dengan ID video 5

// export const movieCategories = {
//   trending: [
//     { id: 7, title: "Harga Sebuah Penundaan", thumbnail: "/images/3.png" },
//     { id: 1, title: "Editor dan aktor", thumbnail: "/images/2.png" },
//     { id: 2, title: "Aktris dan Laporan", thumbnail: "/images/3.png" },
//     { id: 3, title: "Aktris dan poster", thumbnail: "/images/4.png" },
//     { id: 4, title: "Aktor dan laporan", thumbnail: "/images/5.png" },
//     { id: 5, title: "videographer dan editor", thumbnail: "/images/6.png" },
//     { id: 6, title: "web dev dan aktor", thumbnail: "/images/1.png" },
//     { id: 8, title: "Harga Sebuah Penundaan 2", thumbnail: "/images/6.png" }
//   ]
// };

export const interactiveVideos = {
  // ============================================
  // VIDEO 1 - INTRO (Pilihan Awal)
  // ============================================ https://drive.google.com/file/d/1rlehP0TOxr_KWPGIX7EzwF0iUjbKjJ2_/view?usp=sharing
  "1rlehP0TOxr_KWPGIX7EzwF0iUjbKjJ2_": {
    id: "1rlehP0TOxr_KWPGIX7EzwF0iUjbKjJ2_",
    title: "Trailer: Harga Sebuah Penundaan",
    description: "Cuplikan singkat perjalanan interaktif Andi.",
    fileId: "1rlehP0TOxr_KWPGIX7EzwF0iUjbKjJ2_",
    isTrailer: true // Penanda bahwa ini trailer
  },
  video1: {
    id: "video1",
    title: "Intro - Pilihan Hidup",
    description: "Perjalanan seorang mahasiswa yang harus memilih jalannya",
    fileId: "1gdb-g0hruuDmr_F68_nVmXqcJsaCL0aQ", // Intro
    duration: 180,
    pauseAt: 175,
    decisions: [
      {
        id: "lulus",
        label: "✅ Lulus Kuliah",
        description: "Fokus belajar dan raih kesuksesan",
        nextVideo: "video2_lulus",
        color: "#00ff00"
      },
      {
        id: "tidak_lulus",
        label: "❌ Tidak Lulus Kuliah",
        description: "Pilih jalan yang berbeda...",
        nextVideo: "video1_choice",
        color: "#ff0000"
      }
    ],
    isStartVideo: true
  },

  // ============================================
  // VIDEO 1 CHOICE - TIDAK LULUS (Sub-choices)
  // ============================================
  video1_choice: {
    id: "video1_choice",
    title: "Pilihan Tidak Lulus",
    description: "Kamu memilih tidak lulus, sekarang harus pilih jalanmu...",
    // Tidak ada fileId, duration, pauseAt → langsung muncul button 
    isChoiceOnly: true,
    decisions: [
      {
        id: "malas_game",
        label: "🎮 Malas & Main Game",
        description: "Kecanduan game dan lupa segalanya",
        nextVideo: "video3_game",
        color: "#9146ff"
      },
      {
        id: "pergaulan",
        label: "🍺 Pergaulan Bebas",
        description: "Terjebak dalam pergaulan yang salah",
        nextVideo: "video4_pergaulan",
        color: "#ff6b6b"
      },
      {
        id: "judi",
        label: "🎰 Berjudi",
        description: "Mencoba keberuntungan dengan cara yang salah",
        nextVideo: "video5_judi",
        color: "#ffd700"
      }
    ]
  },

  // ============================================
  // VIDEO 2 - ENDING: LULUS
  // ============================================
  video2_lulus: {
    id: "video2_lulus",
    title: "Ending: Sukses Lulus",
    description: "Kamu berhasil lulus dengan nilai bagus dan mendapat pekerjaan impian!",
    fileId: "1T-yaauqCki4BXBAJ3b0R5r9lSrAewlvh",
    duration: 300,
    isEnding: true,
    endingType: "good",
    endingMessage: "🎓 Selamat! Kamu berhasil meraih kesuksesan!",
    endingStats: {
      title: "Statistik Akhir",
      items: [
        { label: "IPK", value: "3.75" },
        { label: "Keputusan Benar", value: "1/1" },
        { label: "Ending", value: "Terbaik" }
      ]
    }
  },

  // ============================================
  // VIDEO 3 - ENDING: MALAS & GAME
  // ============================================
  video3_game: {
    id: "video3_game",
    title: "Ending: Kecanduan Game",
    description: "Kamu terlalu asyik main game dan melupakan tanggung jawab...",
    fileId: "15Px9OQSrp_bn4L6e7F8dc1ESmZUp6dNN",
    //https://drive.google.com/file/d/15Px9OQSrp_bn4L6e7F8dc1ESmZUp6dNN/view?usp=sharing
    duration: 300,
    isEnding: true,
    endingType: "bad",
    endingMessage: "🎮 Kamu kehilangan banyak kesempatan karena kecanduan game",
    endingStats: {
      title: "Statistik Akhir",
      items: [
        { label: "Jam Main Game", value: "2000+ jam" },
        { label: "Kesempatan Hilang", value: "Banyak" },
        { label: "Ending", value: "Buruk" }
      ]
    }
  },

  // ============================================
  // VIDEO 4 - ENDING: PERGAULAN BEBAS
  // ============================================
  video4_pergaulan: {
    id: "video4_pergaulan",
    title: "Ending: Pergaulan Bebas",
    description: "Terjebak dalam pergaulan yang salah membawamu ke jalan yang keliru...",
    // fileId: "1gdb-g0hruuDmr_F68_nVmXqcJsaCL0aQ",
    fileId: "1HQp_K3nqisWlwMrl5paF9_7oboPreNyu",
    //https://drive.google.com/file/d/1HQp_K3nqisWlwMrl5paF9_7oboPreNyu/view?usp=sharing
    duration: 180,
    isEnding: true,
    endingType: "bad",
    endingMessage: "🍺 Pergaulan yang salah membuat hidupmu berantakan",
    endingStats: {
      title: "Statistik Akhir",
      items: [
        { label: "Kesehatan", value: "Menurun" },
        { label: "Reputasi", value: "Rusak" },
        { label: "Ending", value: "Buruk" }
      ]
    }
  },

  // ============================================
  // VIDEO 5 - ENDING: JUDI
  // ============================================
  video5_judi: {
    id: "video5_judi",
    title: "Ending: Berjudi",
    description: "Mencoba mencari jalan pintas dengan berjudi berakhir dengan kerugian besar...",
    fileId: "1Vk_cUGNZGJQhCHjFsYnq2oY4eMqRLM6U",
    duration: 300,
    isEnding: true,
    endingType: "bad",
    endingMessage: "🎰 Judi hanya membawa kehancuran finansial dan mental",
    endingStats: {
      title: "Statistik Akhir",
      items: [
        { label: "Uang Hilang", value: "Rp 50 juta" },
        { label: "Hutang", value: "Rp 100 juta" },
        { label: "Ending", value: "Sangat Buruk" }
      ]
    }
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get video by ID
 */
export function getVideoById(videoId) {
  return interactiveVideos[videoId];
}

/**
 * Get starting video
 */
export function getStartVideo() {
  return Object.values(interactiveVideos).find(video => video.isStartVideo);
}

/**
 * Get all endings
 */
export function getAllEndings() {
  return Object.values(interactiveVideos).filter(video => video.isEnding);
}

/**
 * Count total endings
 */
export function getTotalEndings() {
  return getAllEndings().length;
}

/**
 * Get ending statistics
 */
export function getEndingStats(videoId) {
  const video = getVideoById(videoId);
  return video?.endingStats || null;
}
