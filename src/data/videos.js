export const interactiveVideos = {
  // ============================================
  // VIDEO 1 - INTRO (Pilihan Awal)
  // ============================================ 
  "1rlehP0TOxr_KWPGIX7EzwF0iUjbKjJ2_": {
    id: "1rlehP0TOxr_KWPGIX7EzwF0iUjbKjJ2_",
    title: "Trailer: Harga Sebuah Penundaan",
    description: "Cuplikan singkat perjalanan interaktif Andi.",
    fileId: "1rlehP0TOxr_KWPGIX7EzwF0iUjbKjJ2_",
    isTrailer: true // Penanda bahwa ini trailer
  },
  video1: {
    id: "video1",
    // title: "Intro - Pilihan Hidup",
    // description: "Perjalanan seorang mahasiswa yang harus memilih jalannya",
    fileId: "1b13XucAawCf1pBPsVg7V0kKa7MNZFH_s", // Intro https://drive.google.com/file/d/1b13XucAawCf1pBPsVg7V0kKa7MNZFH_s/view?usp=sharing
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
    // title: "Pilihan Tidak Lulus",
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
    // title: "Ending: Sukses Lulus",
    // description: "Kamu berhasil lulus dengan nilai bagus dan mendapat pekerjaan impian!",
    //https://drive.google.com/file/d/1czByKUWQ24tMDUqv0IllRuEehDd3nx6w/view?usp=sharing
    fileId: "1czByKUWQ24tMDUqv0IllRuEehDd3nx6w",
    duration: 300,
    isEnding: true,
    endingType: "good",
    endingMessage: "🎓 Selamat! Kamu berhasil meraih kesuksesan!",
    endingStats: {
      title: "Hasil Akhir",
      items: [
        { label: "status", value: "Andi Lulus Kuliah" },
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
    // title: "Ending: Kecanduan Game",
    // description: "Kamu terlalu asyik main game dan melupakan tanggung jawab...",
    fileId: "1c4gWJY1EQHnoPjSu58WK3p3QeHt7vtEu",
    //https://drive.google.com/file/d/1c4gWJY1EQHnoPjSu58WK3p3QeHt7vtEu/view?usp=sharing
    duration: 300,
    isEnding: true,
    endingType: "bad",
    endingMessage: "🎮 Kamu kehilangan banyak kesempatan karena kecanduan game",
    endingStats: {
      title: "Hasil Akhir",
      items: [
        { label: "Jam Main Game", value: "2000+ jam" },
        { label: "Kesempatan Hilang", value: "Banyak" },
        { label: "Ending", value: "Andi Tidak Lulus Kuliah" }
      ]
    }
  },

  // ============================================
  // VIDEO 4 - ENDING: PERGAULAN BEBAS
  // ============================================
  video4_pergaulan: {
    id: "video4_pergaulan",
    //title: "Ending: Pergaulan Bebas",
    //description: "Terjebak dalam pergaulan yang salah membawamu ke jalan yang keliru...",
    //https://drive.google.com/file/d/1AqLjwad3eI7hnUoXnCBuQkbFGwVw1KTT/view?usp=sharing
    fileId: "1AqLjwad3eI7hnUoXnCBuQkbFGwVw1KTT",
    duration: 180,
    isEnding: true,
    endingType: "bad",
    endingMessage: "🍺 Pergaulan yang salah membuat hidupmu berantakan",
    endingStats: {
      title: "Hasil Akhir",
      items: [
        { label: "Kesehatan", value: "Menurun dan sakit" },
        { label: "Reputasi", value: "Rusak" },
        { label: "Ending", value: "Andi tidak lulus kuliaj" }
      ]
    }
  },

  // ============================================
  // VIDEO 5 - ENDING: JUDI
  // ============================================
  video5_judi: {
    id: "video5_judi",
    // title: "Ending: Berjudi",
    // description: "Mencoba mencari jalan pintas dengan berjudi berakhir dengan kerugian besar...",
    //https://drive.google.com/file/d/12rkKxr0Knv58R2XmrRKrrdF2DxZ9MhYF/view?usp=sharing
    fileId: "12rkKxr0Knv58R2XmrRKrrdF2DxZ9MhYF",
    duration: 300,
    isEnding: true,
    endingType: "bad",
    endingMessage: "🎰 Judi hanya membawa kehancuran finansial dan mental",
    endingStats: {
      title: "Hasil Akhir",
      items: [
        { label: "efek", value: "kecanduan dan implusif" },
        { label: "Hutang", value: "Rp 100 juta" },
        { label: "Ending", value: "Masuk Penjara dan tidak lulus kuliah" }
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
