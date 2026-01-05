# Complete Vercel Deployment Guide for Epta Sky Website

This guide will walk you through deploying your Next.js website to Vercel step-by-step.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- ✅ Your website runs without errors locally (`npm run dev`)
- ✅ You have your `.env.local` file with all API keys
- ✅ You have a GitHub account (free tier is fine)
- ✅ You have a Vercel account (we'll create one if not)

---

## Step 1: Push Your Code to GitHub

### 1.1 Install Git (If Not Already Installed)
Download and install Git from: https://git-scm.com/downloads

### 1.2 Initialize Git Repository
Open your terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Initial commit - Epta Sky website ready for deployment"
```

### 1.3 Create GitHub Repository
1. Go to https://github.com
2. Click **"New"** (green button) or **"+"** → **"New repository"**
3. Repository name: `epta-sky-website` (or any name you prefer)
4. Keep it **Public** (or Private if you have a paid GitHub account)
5. **DO NOT** check "Add a README" or any initialization options
6. Click **"Create repository"**

### 1.4 Connect Local Code to GitHub
GitHub will show you commands. Copy the ones that look like this (replace `YOUR-USERNAME` with your actual GitHub username):

```bash
git remote add origin https://github.com/YOUR-USERNAME/epta-sky-website.git
git branch -M main
git push -u origin main
```

Paste them into your terminal and run them. You might be asked to login - use your GitHub credentials.

---

## Step 2: Create Vercel Account & Connect GitHub

### 2.1 Sign Up for Vercel
1. Go to https://vercel.com
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### 2.2 Import Your Project
1. On the Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find your `epta-sky-website` repository in the list
3. Click **"Import"**

---

## Step 3: Configure Your Deployment

### 3.1 Project Settings
Vercel will auto-detect that it's a Next.js project. You should see:
- **Framework Preset**: Next.js (auto-detected ✓)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (auto-filled ✓)
- **Output Directory**: `.next` (auto-filled ✓)

**Leave all these as default** - Vercel is smart!

### 3.2 Add Environment Variables
This is **CRITICAL** - your website won't work without these!

Click **"Environment Variables"** (expand the section if collapsed)

Add the following variables **one by one**:

#### Variable 1: NEXT_PUBLIC_SANITY_PROJECT_ID
- **Name**: `NEXT_PUBLIC_SANITY_PROJECT_ID`
- **Value**: `7i7bhl77`
- **Environment**: Check all three (Production, Preview, Development)
- Click **"Add"**

#### Variable 2: NEXT_PUBLIC_SANITY_DATASET
- **Name**: `NEXT_PUBLIC_SANITY_DATASET`
- **Value**: `production`
- **Environment**: Check all three
- Click **"Add"**

#### Variable 3: RESEND_API_KEY
- **Name**: `RESEND_API_KEY`
- **Value**: `2f138a5c-26d2-47e4-8098-eba4221f1f48`
- **Environment**: Check all three
- Click **"Add"**

> **⚠️ IMPORTANT**: Make sure you check all three environment types for each variable!

---

## Step 4: Deploy!

### 4.1 Start Deployment
Click the big **"Deploy"** button at the bottom.

### 4.2 Wait for Build
Vercel will now:
1. Clone your code from GitHub
2. Install all dependencies (`npm install`)
3. Build your Next.js application (`npm run build`)
4. Deploy it to their global CDN

This usually takes **2-4 minutes**. You'll see a live log of the process.

### 4.3 Success!
When you see **"🎉 Deployment Complete"** or similar, your site is live!

You'll get a URL like: `https://epta-sky-website-[random-id].vercel.app`

Click **"Visit"** to see your live website!

---

## Step 5: Set Up Custom Domain (Optional but Recommended)

### 5.1 Add Your Domain
1. From your Vercel dashboard, click on your project
2. Go to **"Settings"** tab
3. Click **"Domains"** in the left sidebar
4. Type your domain (e.g., `eptasky.com`)
5. Click **"Add"**

### 5.2 Configure DNS
Vercel will provide DNS records. You need to add these to your domain registrar:

**If you want `eptasky.com`:**
- Type: `A Record`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)

**If you want `www.eptasky.com`:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

> **Where to add these?** Login to wherever you bought your domain (GoDaddy, Namecheap, Google Domains, etc.) and look for "DNS Settings" or "DNS Management"

### 5.3 Wait for DNS Propagation
- DNS changes can take **10 minutes to 48 hours** (usually 10-30 minutes)
- Vercel will automatically issue an SSL certificate (HTTPS) once DNS is verified

---

## Step 6: Access Your Sanity Studio Online

Your Sanity Studio is now accessible at:
- **Live URL**: `https://your-domain.vercel.app/studio`
- **Or**: `https://epta-sky-website-[random-id].vercel.app/studio`

### 6.1 Update Sanity CORS Settings
You need to allow your Vercel domain to access Sanity:

1. Go to https://www.sanity.io/manage
2. Select your project (`7i7bhl77`)
3. Click **"API"** in the left menu
4. Scroll to **"CORS Origins"**
5. Click **"Add CORS origin"**
6. Add your Vercel URL: `https://your-domain.vercel.app`
7. Check **"Allow credentials"**
8. Click **"Save"**

Repeat this for:
- Your custom domain (if you added one)
- `http://localhost:3000` (for local development)

---

## Step 7: Test Your Live Website

Visit your deployed website and verify:
- ✅ Homepage loads correctly
- ✅ All navigation links work
- ✅ Blog posts are visible
- ✅ Case studies are clickable
- ✅ Contact form works
- ✅ Images load properly
- ✅ Sanity Studio at `/studio` is accessible

---

## 🔄 Making Updates After Deployment

### Automatic Deployments
Every time you push code to GitHub, Vercel will automatically rebuild and deploy!

```bash
# Make your changes to the code
git add .
git commit -m "Description of changes"
git push
```

Wait 2-3 minutes, and your changes will be live!

### Updating Content (Sanity)
Changes in Sanity Studio are **instant** - no deployment needed! Just:
1. Go to `your-domain.vercel.app/studio`
2. Edit/add content
3. Click "Publish"
4. Refresh your website to see changes

---

## 🚨 Troubleshooting

### "Module not found" errors during build
- Make sure all dependencies are in `package.json`
- Run `npm install` locally first to verify

### Environment variables not working
- Double-check spelling and values in Vercel dashboard
- Make sure you selected all three environments (Production, Preview, Development)
- **Redeploy** after adding variables (Settings → Deployments → Click "..." → Redeploy)

### Images not loading
- Check that `cdn.sanity.io` is in your `next.config.ts` under `remotePatterns` ✓ (already configured!)

### Contact form not sending emails
- Verify your `RESEND_API_KEY` is correct in Vercel environment variables
- Check Resend dashboard for any error logs

### 404 on Sanity Studio
- Verify CORS settings in Sanity dashboard include your Vercel URL
- Check that environment variables are set correctly

---

## 📊 Monitoring Your Live Site

### Vercel Analytics (Free)
1. Go to your project in Vercel
2. Click **"Analytics"** tab
3. See real-time visitor data, page views, performance metrics

### Google Analytics
Your site already has Google Analytics integrated! 
- View your data at https://analytics.google.com

---

## 💡 Pro Tips

1. **Preview Deployments**: Every GitHub branch gets its own preview URL - perfect for testing before going live!
2. **Rollback**: Made a mistake? Go to Deployments → find a previous good deployment → click "Promote to Production"
3. **Edge Functions**: Your contact form runs on Vercel's edge network - lightning fast worldwide!
4. **Automatic HTTPS**: Vercel handles SSL certificates automatically - always secure!

---

## 🎉 You're Live!

Congratulations! Your website is now:
- ✅ Deployed globally on Vercel's CDN
- ✅ Auto-updating with every GitHub push
- ✅ Running with auto-scaling
- ✅ Protected with free SSL/HTTPS
- ✅ Backed up on GitHub

**Your live website**: https://your-domain.vercel.app

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Sanity Docs**: https://www.sanity.io/docs
- **Next.js Docs**: https://nextjs.org/docs

**Ready to share your website with the world!** 🚀
