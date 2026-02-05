# Lumexa Power Website

World's first non-tracking 24/7 solar thermal power system.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit: http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## 📦 Deploy to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: Lumexa Power website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/lumexa-power-website.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

## 📁 Project Structure

```
lumexa-power-website/
├── app/                 # Next.js 14 App Router
├── components/          # React components
├── public/              # Static assets
├── package.json         # Dependencies
└── README.md           # This file
```

## 🎨 Customization

- **Content**: Edit files in `components/home/`
- **Colors**: Update `tailwind.config.js`
- **Pages**: Add new pages in `app/`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)

## 📝 License

© 2026 Lumexa Power Inc. All rights reserved.
