# Deployment & Setup Guide for Epta Sky Website

## 1. Sanity CMS Setup (Important)
Since this website uses Sanity for content (Blogs, Services), you need to set up a Sanity project.

1.  **Create Sanity Project**:
    - Run the following command in your terminal (inside the project folder):
      ```bash
      npx sanity init
      ```
    - Login if asked.
    - Create a **new project**.
    - Choose **Clean project with no predefined schemas** (since we already created schemas).
    - When asked "Use TypeScript?", say **Yes**.
    - When asked "Use the embedded Studio?", say **Yes**.
    - This will update `sanity.config.ts` and `sanity.cli.ts` with your REAL Project ID.

2.  **Manually Update (If `sanity init` overwrites too much)**:
    - If needed, just find your Project ID from [manage.sanity.io](https://manage.sanity.io).
    - Open `src/sanity/env.ts` and update:
      ```typescript
      export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
      ```

3.  **Add CORS Origin**:
    - Go to [manage.sanity.io](https://manage.sanity.io) -> Your Project -> API -> CORS Origins.
    - Add `http://localhost:3000` (Allow credentials).
    - Add your Vercel domain later (e.g. `https://epta-sky.vercel.app`).

4.  **Create Content**:
    - Run `npm run dev`.
    - Go to `http://localhost:3000/studio`.
    - Login and create Posts, Services, and Testimonials!

## 2. Deploy to Vercel (Free)

1.  **Push to GitHub**:
    - Create a new repository on GitHub.
    - Run:
      ```bash
      git init
      git add .
      git commit -m "Initial commit"
      git remote add origin https://github.com/yourusername/epta-sky.git
      git push -u origin main
      ```

2.  **Connect to Vercel**:
    - Go to [Vercel.com](https://vercel.com).
    - "Add New" -> "Project" -> Import your GitHub repo.
    - **Environment Variables**:
      Add these variables in the Vercel dashboard:
      - `NEXT_PUBLIC_SANITY_PROJECT_ID`: (Your Sanity Project ID)
      - `NEXT_PUBLIC_SANITY_DATASET`: production

3.  **Deploy**:
    - Click **Deploy**.

## 3. Customizing Content
- **Pages**: Edit text in `src/app/page.tsx` (Home), `src/app/about/page.tsx`, etc.
- **Components**: Edit `src/components/layout/Header.tsx` for links.
- **Styles**: Change colors in `src/app/globals.css`.
