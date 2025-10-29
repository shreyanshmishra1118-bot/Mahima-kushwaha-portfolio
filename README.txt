(Please rename this file to README.md to see the proper formatting on GitHub)

# Responsive Portfolio Website with Blog

A clean, modern, and responsive single-page portfolio website for Mahima Kushwaha, a Web Developer Intern. This project showcases skills, provides interactive tools, and features an integrated blog. It is built using React and styled with Tailwind CSS (via CDN).

## Features

-   **Single-Page Application:** Smooth scrolling navigation between sections.
-   **Responsive Design:** Looks great on desktops, tablets, and mobile devices.
-   **Interactive Tools:** Includes a Calculator, To-Do List, and Temperature Converter.
-   **Blog:** A clean, modal-based blog a reader for articles.
-   **Modern UI/UX:** Features a custom cursor, subtle animations, and a preloader for a polished user experience.

## Preparing for GitHub

To make this project clean and ready for your GitHub repository, you can safely delete the following unused or redundant files:

-   `components/Projects.tsx`
-   `blog1.html`
-   `blog2.html`
-   `style.css`
-   `script.js`
-   `README.txt` (after renaming to README.md)

It is also recommended to create a `.gitignore` file to prevent unnecessary files (like editor configuration or OS files) from being tracked in your repository.

## File Structure (Cleaned)

-   `index.html`: Main entry point for the application.
-   `index.tsx`: Root React script that renders the application.
-   `App.tsx`: The main React application component.
-   `components/`: Directory containing all React components.
    -   `About.tsx`
    -   `Blog.tsx`
    -   `BlogPage.tsx`
    -   `Contact.tsx`
    -   `EmailLink.tsx`
    -   `Footer.tsx`
    -   `Header.tsx`
    -   `Hero.tsx`
    -   `Modal.tsx`
    -   `Preloader.tsx`
    -   `Report.tsx`
    -   `SectionTitle.tsx`
    -   `SocialLinks.tsx`
    -   `Tools.tsx`
    -   `tools/`: Sub-directory for tool components.
-   `types.ts`: TypeScript type definitions.
-   `favicon.svg`: SVG icon for the website.
-   `metadata.json`: Project metadata.
-   `README.md`: This file.
-   `.gitignore`: (Recommended)

## One-Click Deployment to GitHub Pages

Follow these simple steps to deploy this website for free using GitHub Pages.

**1. Create a GitHub Repository**
   - Create a new public repository on GitHub.

**2. Upload Files**
   - Upload the cleaned project files and folders to the root of your new repository.

**3. Enable GitHub Pages**
   - In your repository, go to `Settings` -> `Pages`.
   - Under "Build and deployment", select the source as `Deploy from a branch`.
   - Set the branch to `main` (or `master`) and the folder to `/ (root)`.
   - Click `Save`.

**4. Visit Your Live Site**
   - Wait for about a minute for the deployment to complete.
   - Your live portfolio will be available at: `https://<Your-GitHub-Username>.github.io/<your-repository-name>/`

## Local Development

Since this project uses CDN links for React and Tailwind CSS, there's no complex build setup required. You can run it locally by simply opening the `index.html` file in your browser, preferably with a live server extension (like "Live Server" in VS Code) to handle module loading correctly.
