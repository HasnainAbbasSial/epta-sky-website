# Fix: Resend API Key Invalid Error

## 🔍 The Problem

Your Resend API key format is incorrect. Resend API keys **must start with `re_`**.

**Current key (WRONG)**: `2f138a5c-26d2-47e4-8098-eba4221f1f48`  
**Correct key format**: `re_UB7VFUK...` (starts with `re_`)

---

## ✅ Step-by-Step Fix

### Step 1: Get Your Correct API Key

1. Go to **https://resend.com/api-keys**
2. Login to your account
3. Find the API key that starts with **`re_`**
4. Click **"Copy"** to copy the entire key
5. It should look like: `re_UB7VFUKabc123...` (much longer)

> **Important**: Copy the ENTIRE key, not just part of it!

---

### Step 2: Update Vercel Environment Variable

#### Option A: Via Vercel Dashboard (Easiest)

1. Go to **https://vercel.com**
2. Click on your **epta-sky-website** project
3. Click **Settings** (top navigation)
4. Click **Environment Variables** (left sidebar)
5. Find **`RESEND_API_KEY`** in the list
6. Click the **"..."** menu (three dots) → **Edit**
7. **Delete** the old value
8. **Paste** your new API key (the one starting with `re_`)
9. Make sure these are checked:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
10. Click **Save**

#### Option B: Delete and Re-add

If Edit doesn't work:
1. Click **"..."** next to `RESEND_API_KEY` → **Remove**
2. Confirm removal
3. Click **Add New** at the top
4. **Name**: `RESEND_API_KEY`
5. **Value**: Paste your `re_...` key
6. Check all three environments
7. Click **Add**

---

### Step 3: Redeploy Your Site

After updating the environment variable:

1. Go to **Deployments** tab (top navigation)
2. Find the latest deployment (top of the list)
3. Click the **"..."** menu (three dots)
4. Click **Redeploy**
5. Confirm by clicking **Redeploy** again
6. Wait 2-3 minutes for deployment to complete

---

### Step 4: Test Your Contact Form

1. Visit your live website
2. Go to the Contact page
3. Fill out the form
4. Click Submit
5. You should see **"Message Sent!"** instead of an error

---

## 📬 Getting the Correct API Key

If you can't find your API key:

### Create a New One:
1. Go to https://resend.com/api-keys
2. Click **"Create API Key"**
3. Name it: `Epta Sky Production`
4. Permissions: **Full Access** (or at least "Sending Access")
5. Click **Add**
6. **COPY THE KEY IMMEDIATELY** - you can only see it once!
7. Use this new key in Steps 2 and 3 above

---

## 🎯 Quick Checklist

- [ ] Got the correct API key starting with `re_`
- [ ] Updated `RESEND_API_KEY` in Vercel Environment Variables
- [ ] Checked all three environments (Production, Preview, Development)
- [ ] Redeployed the site from Vercel
- [ ] Tested the contact form on live site
- [ ] Received success message (no more "API key invalid" error)

---

## ⚠️ Important Notes

1. **Never share your API key publicly** - it's in `.env.local` which is gitignored ✓
2. **The old key format won't work** - Resend changed their format, old keys are invalid
3. **Domain verification is separate** - even with verified domain, you need the right API key format
4. **Redeploy is required** - environment variable changes don't apply until you redeploy

---

## 🆘 Still Having Issues?

If you still see errors after following all steps:

1. **Check Vercel Deployment Logs**:
   - Go to Deployments → Click on latest deployment → View Function Logs
   - Look for any Resend-related errors

2. **Verify the API Key**:
   - Make sure you copied the ENTIRE key
   - No extra spaces at the beginning or end
   - Starts with `re_`

3. **Check Resend Dashboard**:
   - Go to https://resend.com/emails
   - See if any emails appear there (even if they failed)
   - This confirms the API key is being recognized

---

**Your contact form will work once you update the API key!** 🚀
