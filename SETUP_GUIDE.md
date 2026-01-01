# 🚀 PANDUAN SETUP LENGKAP

## 📋 Daftar Isi
1. [Persiapan](#persiapan)
2. [Upload Video ke Google Drive](#upload-video)
3. [Setup Project](#setup-project)
4. [Testing Local](#testing-local)
5. [Deploy ke Vercel](#deploy)
6. [Troubleshooting](#troubleshooting)

---

## 1. PERSIAPAN

### Yang Anda Butuhkan:
- ✅ Node.js (Download dari https://nodejs.org)
- ✅ Git (Download dari https://git-scm.com)
- ✅ Code Editor (VS Code recommended)
- ✅ Akun GitHub (Gratis di https://github.com)
- ✅ Akun Vercel (Gratis di https://vercel.com)
- ✅ Akun Google Drive (Gratis)

### Check Installation:
```bash
node --version   # Harus v14 atau lebih baru
npm --version    # Biasanya ikut terinstall dengan Node.js
git --version    # Untuk version control
```

---

## 2. UPLOAD VIDEO KE GOOGLE DRIVE

### Step by Step:

1. **Buka Google Drive**
   - https://drive.google.com
   - Login dengan akun Google

2. **Upload Video**
   - Klik tombol "New" / "Baru"
   - Pilih "File upload" / "Upload file"
   - Pilih video Anda (118MB)
   - Tunggu upload selesai

3. **Set Sharing Permission**
   - Klik kanan pada video
   - Pilih "Share" / "Bagikan"
   - Klik "Change to anyone with the link" / "Ubah ke siapa saja yang memiliki link"
   - Pastikan set ke "Viewer" / "Dapat melihat"
   - Copy link yang muncul

4. **Extract File ID**
   
   Link Google Drive:
   ```
   https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing
   ```
   
   File ID adalah:
   ```
   1a2b3c4d5e6f7g8h9i0j
   ```
   
   **SIMPAN FILE ID INI!** Anda akan membutuhkannya nanti.

5. **Test Video**
   - Buka link ini di browser:
   ```
   https://drive.google.com/file/d/FILE_ID/preview
   ```
   - Ganti FILE_ID dengan File ID Anda
   - Jika video muncul dan bisa diputar, setup berhasil!

---

## 3. SETUP PROJECT

### Step 1: Extract Folder

1. Extract file `movie-streaming-app.zip` ke folder pilihan Anda
2. Buka folder dengan VS Code atau editor lain

### Step 2: Install Dependencies

Buka terminal di folder project:

```bash
cd movie-streaming-app
npm install
```

Tunggu proses instalasi selesai (2-5 menit).

### Step 3: Configure Google Drive File ID

Edit file: `src/data/videos.js`

Cari baris ini:
```javascript
const VIDEO_FILE_ID = "YOUR_GOOGLE_DRIVE_FILE_ID";
```

Ganti dengan File ID Anda:
```javascript
const VIDEO_FILE_ID = "1a2b3c4d5e6f7g8h9i0j";
```

**PENTING:** Hanya ganti yang di dalam tanda petik!

### Step 4: Save File

- Tekan `Ctrl + S` (Windows/Linux) atau `Cmd + S` (Mac)
- Pastikan file tersimpan

---

## 4. TESTING LOCAL

### Run Development Server:

```bash
npm start
```

Tunggu beberapa detik, browser akan otomatis buka http://localhost:3000

### Test Checklist:

- [ ] Homepage muncul dengan banner
- [ ] Klik tombol "Putar" di banner
- [ ] Halaman video player muncul
- [ ] Video dari Google Drive muncul
- [ ] Video bisa diputar
- [ ] Tombol "Kembali" berfungsi
- [ ] Poster bisa diklik
- [ ] Scroll smooth ke section "Tentang"

### Jika Ada Error:

**Error: "Cannot find module"**
```bash
npm install
```

**Error: "Port 3000 already in use"**
```bash
# Tutup aplikasi lain yang pakai port 3000
# Atau jalankan di port lain:
PORT=3001 npm start
```

**Video tidak muncul:**
- Check File ID sudah benar
- Check sharing Google Drive: "Anyone with link"
- Test direct URL: https://drive.google.com/file/d/FILE_ID/preview

---

## 5. DEPLOY KE VERCEL

### Method 1: Via GitHub (Recommended)

#### A. Push ke GitHub:

1. **Init Git** (jika belum):
```bash
git init
```

2. **Add files**:
```bash
git add .
```

3. **Commit**:
```bash
git commit -m "Initial commit - Movie streaming app"
```

4. **Create Repository di GitHub**:
   - Buka https://github.com/new
   - Repository name: `movie-streaming-app`
   - Visibility: Public (atau Private jika mau)
   - JANGAN centang "Initialize this repository with a README"
   - Klik "Create repository"

5. **Connect & Push**:
```bash
git remote add origin https://github.com/USERNAME/movie-streaming-app.git
git branch -M main
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub Anda.

#### B. Deploy di Vercel:

1. **Login Vercel**:
   - Buka https://vercel.com
   - Klik "Sign Up" (jika belum punya akun)
   - Pilih "Continue with GitHub"
   - Authorize Vercel

2. **Import Project**:
   - Klik "Add New..." → "Project"
   - Pilih repository: `movie-streaming-app`
   - Klik "Import"

3. **Configure**:
   - Framework Preset: Create React App (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `build` (default)
   - Klik "Deploy"

4. **Wait**:
   - Proses build: 2-5 menit
   - Status akan menjadi "Ready" jika berhasil

5. **Get URL**:
   - Anda akan dapat URL seperti:
   ```
   https://movie-streaming-app-username.vercel.app
   ```

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 6. TESTING PRODUCTION

### Test Production URL:

1. Buka URL deployment Anda
2. Test semua fitur:
   - [ ] Homepage loading
   - [ ] Banner muncul
   - [ ] Klik "Putar" → Video player muncul
   - [ ] Video bisa diputar
   - [ ] Navigation berfungsi
   - [ ] Responsive di mobile (F12 → Toggle device toolbar)

### Test di Mobile:

1. Buka URL di HP
2. Test touch interactions
3. Test video playback
4. Test scrolling smooth

### Share URL:

Kirim URL ke teman untuk testing eksternal!

---

## 7. TROUBLESHOOTING

### Build Failed di Vercel?

**Error: "Module not found: Can't resolve 'react-router-dom'"**
```bash
npm install react-router-dom
git add package.json package-lock.json
git commit -m "Add react-router-dom"
git push
```

**Error: "npm ERR! missing script: build"**
Check `package.json` ada script:
```json
"scripts": {
  "build": "react-scripts build"
}
```

### Video Tidak Muncul di Production?

1. **Check Console** (F12 → Console tab)
2. **Check File ID** di `videos.js`
3. **Check Sharing** Google Drive
4. **Test Direct URL**:
   ```
   https://drive.google.com/file/d/FILE_ID/preview
   ```

### Routing 404 Error?

Pastikan file `vercel.json` ada dan benar:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Slow Loading?

1. **Compress Video**:
   - Gunakan HandBrake atau online compressor
   - Target: 50-80MB

2. **Optimize Images**:
   - Gunakan WebP format
   - Compress dengan TinyPNG

---

## 8. NEXT STEPS

### Customize:

1. **Ganti Warna**:
   - Edit `src/index.css` atau component CSS files
   - Ganti `#e50914` dengan warna pilihan

2. **Tambah Video**:
   - Upload video baru ke Google Drive
   - Edit `src/data/videos.js`
   - Tambah entry baru

3. **Custom Domain** (Optional):
   - Beli domain (Namecheap, GoDaddy, dll)
   - Connect ke Vercel via Dashboard → Settings → Domains

4. **Analytics** (Optional):
   - Add Google Analytics
   - Vercel Analytics (built-in, gratis)

---

## 9. MAINTENANCE

### Update Content:

```bash
# Edit files
git add .
git commit -m "Update: description"
git push
```

Vercel akan auto-deploy setiap push ke main branch.

### Rollback:

1. Vercel Dashboard → Deployments
2. Pilih deployment sebelumnya
3. Klik "..." → "Promote to Production"

---

## ✅ CHECKLIST FINAL

Setup Complete:
- [ ] Video uploaded ke Google Drive
- [ ] File ID configured
- [ ] Local testing passed
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Production testing passed
- [ ] Mobile testing passed
- [ ] URL shared

Congratulations! 🎉 Aplikasi Anda sudah LIVE!

---

## 📞 Support

Jika ada pertanyaan:
1. Check dokumentasi di README.md
2. Search error di Google
3. Check Vercel logs di Dashboard

---

**Made with ❤️ for your success!**
