# Content Management Guide for Epta Sky Website

## 🎯 Quick Start

Your CMS (Content Management System) is accessible at: **http://localhost:3000/studio**

## 📝 How to Manage Your Content

### Creating a New Blog Post

1. Go to [http://localhost:3000/studio](http://localhost:3000/studio)
2. Click on **"Post"** in the left sidebar
3. Click **"Create New"**
4. Fill in the following fields:
   - **Title**: Your article title
   - **Slug**: Click the **"Generate"** button next to this field (IMPORTANT!)
   - **Main Image**: Upload your featured image
   - **Body**: Write your article content (supports headings, images, lists, etc.)
   - **Excerpt**: A short summary for the blog list page
   - **Published At**: Set the publish date
5. Click **"Publish"** at the bottom

> **⚠️ CRITICAL**: Always click the "Generate" button next to the Slug field. This creates the URL-friendly version of your title (e.g., "my-article" instead of "My Article").

### Deleting Content

1. Go to your CMS at [http://localhost:3000/studio](http://localhost:3000/studio)
2. Find the item you want to delete (Post, Service, Case Study, etc.)
3. Click on it to open the editor
4. Look at the **top-right corner** of the editing pane
5. Click the **"⋮" (three vertical dots)** menu button
6. Select **"Delete..."** from the dropdown
7. Confirm the deletion by clicking **"Delete now"**

> **Note**: If you don't see a delete option, make sure the document is published first. You can only delete published documents.

### Adding Images to Articles

**For the Main Image** (the thumbnail):
- Upload using the "Main Image" field at the top of the post editor

**For Images Inside the Article Text**:
1. Place your cursor where you want the image
2. Click the **"+"** button in the editor
3. Select **"Image"**
4. Upload your image
5. Add alt text (optional but recommended for SEO)

## 🚫 Understanding Error Messages

### "Cannot Read Properties of Null"

**What it means**: You have a post/service/case study in your CMS that is missing a SLUG (the URL part).

**How to fix it**:
1. Go to the CMS
2. Find the item causing the error
3. Either:
   - Click "Generate" next to the Slug field and then "Publish"
   - OR delete the item if you don't need it

**Good news**: Your website is now "bulletproof"! Even if you forget to add a slug, the website will simply skip that item instead of crashing!

## 🎨 Best Practices

1. **Always Generate Slugs**: Never type slugs manually. Always use the "Generate" button.
2. **Publish After Editing**: Changes won't appear on your website until you click "Publish".
3. **Use High-Quality Images**: For best results, use images at least 1200px wide.
4. **Write Clear Excerpts**: These appear on the blog list page, so make them compelling!
5. **Test Before Publishing**: Preview your content in the CMS before publishing.

## 🚀 Development vs Production

### Current Mode: Development
- Running with `npm run dev`
- You see detailed error messages (red screens)
- Hot reload: changes appear instantly

### Production Mode (For Live Website)
- Run with `npm run build` then `npm start`
- Users see clean error pages instead of technical details
- Optimized for speed and performance

**When to switch**: Only switch to production mode when you're ready to deploy your website to a live server.

## 📞 Need Help?

If you encounter any issues:
1. Check if the Slug is generated (most common issue)
2. Make sure you clicked "Publish" after editing
3. Refresh your browser (Ctrl+F5)
4. Restart the development server (`npm run dev`)
