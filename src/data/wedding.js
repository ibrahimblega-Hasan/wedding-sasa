// SEMUA data undangan ada di sini. Ganti isinya, component tidak perlu diubah.
export const weddingData = {
  groom: { name: "Raka Pratama", nick: "Raka", father: "Bambang Susilo", mother: "Sri Wahyuni", photo: "/assets/images/groom.jpg" },
  bride: { name: "Ayu Lestari", nick: "Ayu", father: "Hendra Wijaya", mother: "Dewi Kartika", photo: "/assets/images/bride.jpg" },
  wedding: {
    date: "Sabtu, 05 Juni 2027",
    shortDate: "05 . 06 . 2027",
    countdownDate: "2027-06-05T06:00:00+07:00",
    akad: { time: "06.00 WIB" },
    reception: { time: "09.00 - 12.00 WIB" },
    venue: "Gedung Serbaguna Batu",
    address: "Jl. Raya Punten No. 12, Kota Batu, Jawa Timur",
    mapUrl: "https://maps.google.com/?q=Kota+Batu"
  },
  map: { origin1: "Tulungagung", origin2: "Malang", destination: "Batu" },
  intro: "Two people, raised in different places, brought together by fate",
  quote: {
    source: "Q.S Ar-Rum : 21",
    text: "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antara kamu rasa kasih dan sayang.",
    note: "Dengan penuh syukur, kami mengundang Anda untuk hadir dan mendoakan awal perjalanan kami."
  },
  story: {
    title: "Weaving the Story",
    years: "(2024–2027)",
    paragraphs: [
      "Our story was never about the perfect circumstances.",
      "It was every journey that grew in ways that were easy to understand, and every distance that taught us how to wait.",
      "Two cities, many late-night calls, and one quiet decision: to keep choosing each other.",
      "Today we begin a new chapter, and we would love for you to be part of it."
    ]
  },
  dressCode: {
    theme: "Soft Pastel",
    note: "Please avoid wearing bright colors.",
    colors: [
      { name: "Butter Yellow", hex: "#F3E3A3" }, { name: "Blush Pink", hex: "#F0CFCB" },
      { name: "Soft Peach", hex: "#F5D3B8" }, { name: "Powder Blue", hex: "#C9D9E4" },
      { name: "Sage Green", hex: "#B7C4A8" }, { name: "Lavender", hex: "#D5CBE3" },
      { name: "Champagne", hex: "#EBDDBE" }, { name: "Warm Beige", hex: "#DCC9AC" }
    ]
  },
  gallery: [
    // { src: "/assets/images/g1.jpg", caption: "First hello" }
  ],
  wishes: [
    { name: "Dianita", msg: "Happy wedding, semoga bahagia selalu!" },
    { name: "Mba Vita", msg: "Semoga menjadi keluarga sakinah, mawaddah, warahmah." }
  ],
  bank: { name: "BANK BCA", accountNumber: "1234567890", accountName: "Raka Pratama", qris: "/assets/images/qris.jpg" },
  music: "/assets/music/wedding.mp3"
};
