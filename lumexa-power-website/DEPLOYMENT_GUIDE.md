# Lumexa Power Website - Deployment Guide

## 📦 Complete Project Structure

This is a Next.js 14 website optimized for Vercel deployment with static export.

## 🚀 Quick Deploy to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Create GitHub Repository**
   ```bash
   # On GitHub.com, create new repository named "lumexa-power-website"
   # Don't initialize with README
   ```

2. **Upload Code to GitHub**
   ```bash
   cd lumexa-power-website
   git init
   git add .
   git commit -m "Initial commit: Lumexa Power website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/lumexa-power-website.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your site will be live at: https://lumexa-power-website.vercel.app

### Method 2: Direct Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd lumexa-power-website

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: lumexa-power-website
# - Directory: ./
# - Override settings? No

# Production deployment
vercel --prod
```

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm or yarn

### Setup

```bash
# Navigate to project
cd lumexa-power-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit: http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

## 📁 Project Structure

```
lumexa-power-website/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── page.tsx                 # Homepage
│   ├── about/                   # About page
│   │   └── page.tsx
│   ├── contact/                 # Contact page
│   │   └── page.tsx
│   ├── investors/               # Investors page
│   │   └── page.tsx
│   ├── markets/                 # Markets page
│   │   └── page.tsx
│   ├── news/                    # News page
│   │   └── page.tsx
│   └── technology/              # Technology page
│       └── page.tsx
├── components/                   # React components
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Footer
│   └── home/                    # Homepage sections
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Solution.tsx
│       ├── HowItWorks.tsx
│       ├── KeyAdvantages.tsx
│       ├── ByTheNumbers.tsx
│       ├── TargetMarkets.tsx
│       ├── Comparison.tsx
│       ├── GulfRegion.tsx
│       ├── Team.tsx
│       ├── Traction.tsx
│       └── FinalCTA.tsx
├── public/                       # Static assets
│   ├── images/                  # Image files
│   │   ├── logo.svg
│   │   ├── hero-bg.jpg
│   │   └── og-image.jpg
│   ├── downloads/               # Downloadable PDFs
│   │   ├── investor-deck.pdf
│   │   └── whitepaper.pdf
│   └── favicon.ico
├── styles/                       # Additional styles (if needed)
├── package.json                  # Dependencies
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🎨 Customization Guide

### Update Content

All content is in component files. To update:

1. **Homepage sections**: Edit files in `components/home/`
2. **Other pages**: Edit files in `app/[page-name]/page.tsx`
3. **Header/Footer**: Edit `components/Header.tsx` and `components/Footer.tsx`

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'lumexa-navy': '#1e3c72',    // Your primary blue
  'lumexa-blue': '#4A90E2',    // Light blue
  'lumexa-gold': '#FFD700',    // Gold accent
  'lumexa-orange': '#FF6B35',  // Orange CTA
  'lumexa-green': '#4CAF50',   // Success green
},
```

### Add Images

1. Place images in `public/images/`
2. Reference in code: `/images/your-image.jpg`
3. For optimization, use Next.js Image component

### Add Pages

Create new page:
```bash
mkdir app/new-page
touch app/new-page/page.tsx
```

Add content:
```typescript
export default function NewPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1>New Page Title</h1>
        {/* Your content */}
      </div>
    </div>
  )
}
```

## 🔧 Configuration Files

### next.config.js
- Configures static export for Vercel
- Disables image optimization for static export
- **Don't change unless you know what you're doing**

### tailwind.config.js
- Defines custom colors, fonts, and styles
- Safe to customize colors and extend theme

### tsconfig.json
- TypeScript compiler settings
- **Don't change unless necessary**

## 📱 Responsive Design

All components are mobile-first and responsive:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Test responsiveness:
```bash
npm run dev
# Open http://localhost:3000
# Use browser DevTools (F12) to test different screen sizes
```

## 🔍 SEO Configuration

### Update Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  keywords: 'your, keywords, here',
  // ... other meta tags
}
```

### Add Sitemap

Create `app/sitemap.ts`:

```typescript
export default function sitemap() {
  return [
    {
      url: 'https://lumexapower.com',
      lastModified: new Date(),
    },
    {
      url: 'https://lumexapower.com/about',
      lastModified: new Date(),
    },
    // Add all pages
  ]
}
```

## 📧 Contact Form Integration

### Option 1: Formspree (Easiest)

1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update contact form action URL

### Option 2: Web3Forms

1. Sign up at https://web3forms.com
2. Get your access key
3. Add to contact form

### Option 3: EmailJS

1. Sign up at https://www.emailjs.com
2. Configure email service
3. Add EmailJS SDK and configure

## 🎯 Analytics Setup

### Google Analytics 4

1. Get GA4 tracking ID
2. Add to `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=YOUR-GA4-ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR-GA4-ID');
  `}
</Script>
```

## 🚨 Troubleshooting

### Build Errors

```bash
# Clear cache
rm -rf .next
npm run build
```

### Deploy Fails

1. Check Vercel logs
2. Ensure all dependencies in package.json
3. Verify Next.js config is correct

### Images Not Loading

1. Verify images are in `public/images/`
2. Use correct path: `/images/filename.jpg`
3. Check file extensions match

### Styling Issues

```bash
# Rebuild Tailwind
npm run build
```

## 📦 Adding Dependencies

```bash
# Install new package
npm install package-name

# Redeploy
git add .
git commit -m "Add package-name"
git push

# Vercel will auto-deploy
```

## 🔐 Environment Variables

For sensitive data (API keys, etc.):

1. Create `.env.local`:
```
NEXT_PUBLIC_API_KEY=your-key-here
```

2. Add to `.gitignore`:
```
.env.local
```

3. Add to Vercel dashboard:
   - Project Settings → Environment Variables

## 🌐 Custom Domain

### Add Custom Domain to Vercel

1. Go to Vercel Dashboard → Your Project
2. Click "Domains"
3. Add "lumexapower.com"
4. Follow DNS configuration instructions
5. Wait for DNS propagation (up to 48 hours)

### DNS Settings

Point your domain to Vercel:
```
A Record: 76.76.21.21
CNAME: cname.vercel-dns.com
```

## ✅ Pre-Launch Checklist

- [ ] All content reviewed and proofread
- [ ] Images optimized (< 500KB each)
- [ ] Contact form tested and working
- [ ] All links tested (no 404s)
- [ ] Mobile responsive on all pages
- [ ] SEO meta tags configured
- [ ] Favicon added
- [ ] Analytics installed
- [ ] Social sharing images (OG images)
- [ ] Privacy Policy and Terms added
- [ ] Performance tested (Lighthouse > 90)

## 📚 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev

## 🆘 Getting Help

1. **Vercel Support**: https://vercel.com/support
2. **Next.js Discord**: https://discord.gg/nextjs
3. **Stack Overflow**: Tag questions with `next.js`

## 📝 License

© 2026 Lumexa Power Inc. All rights reserved.

---

**Ready to deploy? Let's go! 🚀**

```bash
git push origin main
# Watch it deploy on Vercel!
```
