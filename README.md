# 🎬 Movie Streaming App - Google Drive Edition

Platform streaming video dengan integrasi Google Drive. 100% GRATIS!

## ✨ Features

- 🎥 Video streaming via Google Drive
- 📱 Fully responsive design
- 🎨 Modern UI/UX
- ⚡ Fast loading with React
- 🚀 Easy deployment to Vercel

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Routing**: React Router DOM v6
- **Styling**: CSS3 (Custom)
- **Hosting**: Vercel
- **Video**: Google Drive

## 📦 Installation

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/movie-streaming-app.git
cd movie-streaming-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Google Drive Video

1. Upload video ke Google Drive
2. Set sharing: "Anyone with the link"
3. Copy File ID dari link
4. Edit `src/data/videos.js`:
   ```javascript
   const VIDEO_FILE_ID = "YOUR_FILE_ID_HERE";
   ```

### 4. Run Development Server

```bash
npm start
```

Buka http://localhost:3000

## 🚀 Deployment ke Vercel

### Via GitHub (Recommended)

1. Push ke GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Connect ke Vercel:
   - Buka https://vercel.com
   - Login dengan GitHub
   - Import repository
   - Deploy!

### Via Vercel CLI

```bash
npm install -g vercel
vercel
vercel --prod
```

## 📁 Project Structure

```
movie-streaming-app/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── VideoPlayerGoogleDrive.jsx
│   │   ├── PosterSection.jsx
│   │   ├── Synopsis.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── VideoPlayerPage.jsx
│   ├── data/
│   │   └── videos.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── vercel.json
```

## 🎯 How to Get Google Drive File ID

1. Upload video ke Google Drive
2. Klik kanan → "Get link"
3. Set: "Anyone with the link"
4. Copy link:
   ```
   https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing
   ```
5. File ID adalah bagian tengah: `1a2b3c4d5e6f7g8h9i0j`

## ⚙️ Configuration

### Add More Videos

Edit `src/data/videos.js`:

```javascript
export const videos = {
  1: {
    id: 1,
    title: "Video 1",
    fileId: "FILE_ID_1",
    // ...
  },
  2: {
    id: 2,
    title: "Video 2",
    fileId: "FILE_ID_2",
    // ...
  }
};
```

### Customize Colors

Edit CSS files atau create theme variables in `index.css`:

```css
:root {
  --primary-color: #e50914;
  --bg-color: #141414;
  --text-color: white;
}
```

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## 🐛 Troubleshooting

### Video tidak muncul?

1. Check File ID sudah benar
2. Pastikan Google Drive sharing: "Anyone with link"
3. Test URL: `https://drive.google.com/file/d/FILE_ID/preview`
4. Clear cache dan refresh

### Build failed?

```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing 404 di Vercel?

Pastikan ada file `vercel.json` dengan content:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 💡 Tips

1. **Compress video** sebelum upload untuk faster loading
2. **Use good thumbnails** untuk better UX
3. **Test di mobile** sebelum deploy
4. **Enable caching** di browser untuk better performance

## 📄 License

MIT License - Feel free to use for personal or commercial projects

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📧 Contact

For support or questions, please open an issue.

---

Made with ❤️ using React and Google Drive
