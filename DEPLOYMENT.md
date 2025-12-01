# Quick Deployment Guide

## Pre-Deployment Checklist

### 1. Update Domain URLs
Replace `https://tradenotes.com` with your actual domain in:
- [ ] `src/app/sitemap.ts` (line 4)
- [ ] `src/app/layout.tsx` (line 47)
- [ ] `public/robots.txt` (line 5)

### 2. Test Build
```bash
npm run build
npm run start
```

### 3. Environment Variables (if needed)
Create `.env.production`:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 4. Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or use Vercel Dashboard:
1. Push to GitHub
2. Import to Vercel
3. Deploy

## Post-Deployment
- [ ] Submit sitemap to Google Search Console
- [ ] Test all pages on mobile
- [ ] Verify social sharing (Open Graph)
- [ ] Monitor for errors

## Support
- Build issues? Check Next.js docs
- Deployment issues? Check Vercel docs
- Need help? Review the full walkthrough
