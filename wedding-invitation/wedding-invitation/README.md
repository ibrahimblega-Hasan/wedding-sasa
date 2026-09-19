# Wedding Invitation — Vintage Hand-Drawn (React + Vite)

Undangan digital mobile-first. Semua data ada di `src/data/wedding.js`.

## Menjalankan
```bash
npm install      # pasang dependency
npm run dev      # development di http://localhost:5173
npm run build    # build production ke folder dist/
npm run preview  # cek hasil build
```

## Deploy ke Vercel
1. Upload project ke GitHub.
2. Buka vercel.com → **Add New → Project** → pilih repo.
3. Framework: **Vite** (otomatis terdeteksi). Build: `npm run build`, Output: `dist`.
4. Klik **Deploy**. Atau lewat CLI: `npm i -g vercel && vercel --prod`.

## HOW TO CUSTOMIZE
Semua ada di `src/data/wedding.js`; component tidak perlu diubah.

- **Nama pengantin**: `groom` / `bride` → `name`, `nick` (nama pendek untuk tampilan besar), `father`, `mother`.
- **Foto**: taruh file di `public/assets/images/` (mis. `groom.jpg`, `bride.jpg`), lalu sesuaikan `photo`. Jika file tidak ada, ilustrasi pasangan tampil sebagai pengganti.
- **Tanggal**: `wedding.date` (teks) dan `wedding.shortDate` (tampilan cover).
- **Countdown**: `wedding.countdownDate`, format `2026-06-06T06:00:00+07:00`.
- **Lokasi**: `wedding.venue`, `wedding.address`, jam di `akad.time` dan `reception.time`.
- **Peta perjalanan**: `map.origin1`, `map.origin2`, `map.destination`.
- **Google Maps**: `wedding.mapUrl` — buka lokasi di Google Maps → Bagikan → salin link.
- **Musik**: taruh MP3 di `public/assets/music/wedding.mp3` atau ubah `music`.
- **Gallery**: isi array `gallery` dengan `{ src: "/assets/images/g1.jpg", caption: "Teks" }`. Kosong = section disembunyikan.
- **QRIS**: simpan gambar di `public/assets/images/qris.jpg`, atur `bank.qris`.
- **Rekening**: `bank.name`, `bank.accountNumber`, `bank.accountName`.
- **Love story**: `story.title`, `story.years`, `story.paragraphs`.
- **Ayat**: `quote.source`, `quote.text`, `quote.note`.
- **Dress code**: `dressCode.theme`, `colors` (nama + hex), `note`.
- **Wishes**: contoh komentar di `wishes`. Ucapan baru disimpan di localStorage browser masing-masing tamu (tanpa backend). Untuk ucapan yang terlihat semua tamu, sambungkan ke backend seperti Supabase atau Firebase.
- **SEO / judul tab**: ubah `<title>` dan meta di `index.html`.
- **Ilustrasi**: `src/assets/illustrations/index.jsx`.
- **Warna**: variabel `:root` di `src/index.css`.
