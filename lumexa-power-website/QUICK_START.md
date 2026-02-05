# 🚀 QUICK START GUIDE - Lumexa Power Website

## ✅ What You Have

A complete Next.js 14 website ready to deploy to Vercel. All files are production-ready!

---

## 📦 STEP 1: Download the Website

The complete website is in the folder: **lumexa-power-website**

Download this entire folder to your computer.

---

## 🌐 STEP 2: Deploy to Vercel (3 Minutes)

### Option A: Via GitHub (Recommended - Auto-deploys on every change)

#### 1. Create GitHub Repository

1. Go to https://github.com
2. Click the "+" icon → "New repository"
3. Name it: `lumexa-power-website`
4. Make it **Public** or **Private** (your choice)
5. **DO NOT** check "Add README"
6. Click "Create repository"

#### 2. Upload Your Code

Open Terminal/Command Prompt and navigate to the downloaded folder:

```bash
# Navigate to your downloaded folder
cd /path/to/lumexa-power-website

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Lumexa Power website"

# Add your GitHub repository (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/lumexa-power-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 3. Deploy on Vercel

1. Go to https://vercel.com
2. Click "Sign Up" (use your GitHub account)
3. After login, click "Add New Project"
4. Click "Import" next to your `lumexa-power-website` repository
5. Vercel will auto-detect Next.js - **don't change any settings**
6. Click "Deploy"
7. Wait 2-3 minutes
8. **DONE!** Your site is live! 🎉

Your URL will be: `https://lumexa-power-website.vercel.app`

---

### Option B: Direct Upload to Vercel (Faster, but manual updates)

#### 1. Install Vercel CLI

```bash
npm install -g vercel
```

#### 2. Navigate to Your Folder

```bash
cd /path/to/lumexa-power-website
```

#### 3. Deploy

```bash
# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (Choose your account)
# - Link to existing project? No
# - What's your project's name? lumexa-power-website
# - In which directory is your code located? ./
# - Want to override settings? No

# After preview deploy, deploy to production:
vercel --prod
```

**DONE!** Your site is live!

---

## 🖥️ STEP 3: Test Locally (Optional)

Want to see it on your computer first?

### 1. Install Node.js

Download from: https://nodejs.org (get version 18 or newer)

### 2. Install Dependencies

```bash
cd /path/to/lumexa-power-website
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Open Browser

Go to: http://localhost:3000

You'll see your website running locally!

---

## 🎨 STEP 4: Customize Content

### Update Homepage Content

All content is in the `components/home/` folder:

- `Hero.tsx` - Top banner with headline
- `Problem.tsx` - Problem statement
- `Solution.tsx` - Your solution
- `HowItWorks.tsx` - System explanation
- etc.

**To edit:**
1. Open the file in any text editor (VS Code recommended)
2. Find the text you want to change
3. Edit it
4. Save the file
5. If using GitHub + Vercel: `git add .` → `git commit -m "Update content"` → `git push`
6. Vercel will auto-deploy in 2 minutes!

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'lumexa-navy': '#1e3c72',    // Change this hex code
  'lumexa-gold': '#FFD700',    // Change this hex code
  // etc.
}
```

### Add Images

1. Place your images in the `public/images/` folder
2. Reference them in your code: `/images/your-image.jpg`

---

## 🌐 STEP 5: Add Custom Domain

### Once Your Site is Deployed on Vercel:

1. Go to your Vercel Dashboard
2. Click on your project
3. Go to "Settings" → "Domains"
4. Click "Add Domain"
5. Type: `lumexapower.com`
6. Follow the DNS configuration instructions
7. Wait 24-48 hours for DNS propagation

**Your site will be live at:** https://lumexapower.com

---

## 📁 Folder Structure Explained

```
lumexa-power-website/
│
├── app/                          ← All your pages
│   ├── globals.css              ← Global styles
│   ├── layout.tsx               ← Header & Footer wrapper
│   ├── page.tsx                 ← Homepage (imports components)
│   ├── about/page.tsx           ← About page
│   ├── contact/page.tsx         ← Contact page
│   ├── investors/page.tsx       ← Investors page
│   ├── markets/page.tsx         ← Markets page
│   ├── news/page.tsx            ← News page
│   └── technology/page.tsx      ← Technology page
│
├── components/                   ← Reusable components
│   ├── Header.tsx               ← Top navigation
│   ├── Footer.tsx               ← Bottom footer
│   └── home/                    ← Homepage sections
│       ├── Hero.tsx             ← Top banner
│       ├── Problem.tsx          ← Problem section
│       ├── Solution.tsx         ← Solution section
│       ├── HowItWorks.tsx       ← How it works
│       ├── KeyAdvantages.tsx    ← Advantages
│       ├── ByTheNumbers.tsx     ← Statistics
│       ├── TargetMarkets.tsx    ← Market info
│       ├── Comparison.tsx       ← Comparison table
│       ├── GulfRegion.tsx       ← Gulf region focus
│       ├── Team.tsx             ← Team section
│       ├── Traction.tsx         ← Milestones
│       └── FinalCTA.tsx         ← Call to action
│
├── public/                       ← Static files (images, PDFs)
│   ├── images/                  ← Put images here
│   ├── downloads/               ← Put PDFs here
│   ├── favicon.ico              ← Browser icon
│   └── robots.txt               ← SEO file
│
├── package.json                  ← Dependencies (DON'T EDIT)
├── next.config.js               ← Next.js config (DON'T EDIT)
├── tailwind.config.js           ← Colors & styling (EDIT THIS)
├── tsconfig.json                ← TypeScript config (DON'T EDIT)
├── .gitignore                   ← Git ignore file
└── README.md                    ← Documentation
```

---

## ✏️ Common Edits You'll Want to Make

### 1. Update Company Name/Logo

Edit: `components/Header.tsx`

Find:
```typescript
<div className="text-2xl font-bold text-lumexa-navy">
  LUMEXA <span className="text-lumexa-gold">POWER</span>
</div>
```

Change to your branding.

### 2. Update Homepage Headline

Edit: `components/home/Hero.tsx`

Find:
```typescript
<h1 className="text-5xl md:text-7xl font-bold mb-6">
  LUMEXA POWER
</h1>
```

Change the text.

### 3. Update Footer Contact Info

Edit: `components/Footer.tsx`

Find:
```typescript
<li>📧 info@lumexapower.com</li>
<li>📍 Abu Dhabi, UAE</li>
```

Change to your real contact info.

### 4. Add Your Team Photos

1. Place photos in: `public/images/team/`
2. Name them: `founder.jpg`, `cto.jpg`, etc.
3. Edit: `components/home/Team.tsx`
4. Add image tags:
```typescript
<img src="/images/team/founder.jpg" alt="Founder" />
```

---

## 🚨 Troubleshooting

### "npm not found"
**Solution:** Install Node.js from https://nodejs.org

### "Build failed on Vercel"
**Solution:** Check Vercel logs. Usually a missing dependency or syntax error.

### "Images not showing"
**Solution:** 
1. Make sure images are in `public/images/`
2. Use path: `/images/filename.jpg` (starting with `/`)

### "Changes not showing after deploy"
**Solution:**
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Wait 2-3 minutes for Vercel to deploy

### "Site is slow"
**Solution:**
1. Optimize images (compress to < 500KB each)
2. Use WebP format for images
3. Remove unused code

---

## 📞 Need Help?

1. **Vercel Support:** https://vercel.com/support
2. **Next.js Docs:** https://nextjs.org/docs
3. **Vercel Discord:** https://vercel.com/discord

---

## ✅ Pre-Launch Checklist

Before going live, make sure:

- [ ] All text content is updated (no "Lorem ipsum" or placeholder text)
- [ ] Team photos added
- [ ] Contact email is correct
- [ ] All links work (click every link!)
- [ ] Mobile responsive (test on phone)
- [ ] Images are optimized (< 500KB each)
- [ ] Favicon added (browser tab icon)
- [ ] Analytics installed (Google Analytics)
- [ ] Privacy Policy page added
- [ ] Contact form works

---

## 🎯 Next Steps After Launch

1. **Add Analytics:**
   - Sign up for Google Analytics
   - Add tracking code to `app/layout.tsx`

2. **Set Up Contact Form:**
   - Use Formspree.io or Web3Forms
   - Update `app/contact/page.tsx`

3. **Add Blog:**
   - Create `app/blog/` folder
   - Add blog posts

4. **SEO Optimization:**
   - Add meta descriptions to each page
   - Submit sitemap to Google Search Console

5. **Performance:**
   - Run Lighthouse test (in Chrome DevTools)
   - Aim for 90+ score

---

## 🎉 Congratulations!

You now have a professional, production-ready website deployed on Vercel!

**Your live site:** `https://lumexa-power-website.vercel.app`

Share it with investors, customers, and the world! 🚀

---

**Questions?** See DEPLOYMENT_GUIDE.md for more detailed instructions.

**© 2026 Lumexa Power Inc.**
