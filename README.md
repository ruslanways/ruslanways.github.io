# GRADO Travel — Website

This repository contains the source code for **GRADO Travel**, a modern travel agency specializing in:

- Individual trips  
- Flights  
- Hotels  
- Tailor-made itineraries  
- Visa support  

Our mission is to provide personalized travel planning and help clients explore the world with confidence.

The website is currently a simple one-page landing, but it will expand into a multi-page project including service details, visa guidance, itineraries, and travel tools.

---

## 🚀 Live Website

**https://grado.lviv.ua**

Published via **GitHub Pages** (source: `main` branch, `/(root)`), with **Cloudflare** as DNS/proxy.

---

## 🧱 Project Structure
```text
/
├── index.html               # Main landing page
├── favicon.ico              # Root favicon (required for browsers)
├── site.webmanifest         # PWA / icon metadata
├── assets/
│   ├── css/                 # Stylesheets
│   ├── icons/               # Favicon + Apple Touch Icons
│   └── img/                 # (future) Images and photos
└── README.md
```
Additional pages (e.g., `/about`, `/services`, `/visa`, `/contact`) will be added as the project grows.

---

## 🎨 Tech Stack

- **HTML5** — Clean, semantic markup  
- **CSS3** — Custom responsive styling  
- **GitHub Pages** — Static hosting and deployment from `main`  
- **Cloudflare** — DNS, proxy, and HTTPS handling  

No frameworks are used at this stage to keep the project lightweight and fast.

---

## 🛠️ Development

To edit or extend the website:

1. Clone the repository:
```bash
git clone https://github.com/ruslanways/ruslanways.github.io
```
2.	Edit the HTML/CSS files locally.
3.	Commit and push changes:
```bash
git add .
git commit -m "Update styles and layout"
git push
```

GitHub Pages automatically deploys after pushes to `main`.

## ⚡ Deployment Reminder

- Deployment source: GitHub Pages -> `main` branch + `/(root)`  
- Update flow: edit files -> `git add .` -> `git commit` -> `git push origin main`  
- Cloudflare does not build this site; it serves/proxies `grado.lviv.ua` in front of GitHub Pages.

## 📱 Icons & Manifest

Favicons and PWA icons are stored in:
`assets/icons/`

The repository includes:
-	favicon.ico
-	PNG favicons (16×16, 32×32)
-	Apple Touch icon
-	Android Chrome icons
-	site.webmanifest

These provide full support for browsers, iOS/Android devices, and “Add to Home Screen”.

## 🌍 Contact

- Email: agent@grado.lviv.ua
- Telegram: @ruslanways
- Instagram: @gradolviv

Based in Lviv, Ukraine — working with travelers worldwide.

## 📌 License

This project is proprietary and part of the GRADO Travel brand.
Feel free to browse the code, but reuse of content or branding is not allowed without permission.
