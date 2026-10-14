const fs = require('fs');
const path = require('path');

const SCRATCH = 'C:/Users/zaids/AppData/Local/Temp/claude/d--Purwadhika-CodeChallange-PersonalWebsite-PersonalWebsite/61eb4c1c-b57a-4b18-88ed-9b8662f740ec/scratchpad';

const images = JSON.parse(fs.readFileSync(path.join(SCRATCH, 'images_b64.json'), 'utf8'));
const img = (key) => `data:image/png;base64,${images[key]}`;

const projects = [
  {
    title: 'Nora Photobooth — Event Services & Admin Management Platform',
    image: 'nora',
    technologies: ['Nuxt 4', 'Vue 3', 'Pinia', 'Tailwind CSS', 'Go', 'Gin', 'GORM', 'PostgreSQL', 'JWT', 'Cloudinary', 'Google Sheets API'],
    situation: 'A photobooth rental business needed a marketing website to showcase packages and past events, plus a back-office system for staff to manage content and track finances without touching the database directly.',
    task: 'Build a public-facing site to present rental packages, galleries, and testimonials, alongside a secured admin dashboard for full content and financial management, backed by a robust and independently deployable API.',
    action: 'Developed the frontend with Nuxt 4, Vue 3, and Pinia for state management, styled with Tailwind CSS. Built a layered REST API in Go using the Gin framework, with GORM and PostgreSQL for structured data. Implemented JWT-based authentication with role-based access control, integrated Cloudinary for media uploads, and connected the finance module to the Google Sheets API.',
    result: 'Delivered a fully functional platform with a public marketing site driving inquiries via WhatsApp, and a role-protected admin dashboard for managing packages, gallery, reviews, and finances — all served by an independently deployed Go API.',
    live: 'https://www.noraphotobooth.online',
  },
  {
    title: 'FreshPress — Laundry Services App',
    image: 'freshpress',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Express.js', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Midtrans', 'OpenCage'],
    situation: 'On-demand laundry services needed a dynamic platform to bridge customers, outlet operations, and delivery services into one streamlined workflow.',
    task: 'Develop a full-stack web application covering user and order management, role-based dashboards for staff, and reliable order/point tracking logic.',
    action: 'Implemented secure authentication and a seamless ordering flow with Next.js and TypeScript. Built multi-role access control for Admin, Super Admin, and Drivers. Engineered relational database schemas with PostgreSQL and Prisma ORM, and integrated Midtrans for payments plus OpenCage and Geolocation for delivery tracking.',
    result: 'Delivered a fully functional, deployed laundry service platform with real-time order tracking, role-based operations, and integrated payment and location services.',
    live: 'https://freshpress-laundry.vercel.app',
  },
  {
    title: 'LokaHajat — Event Management Platform',
    image: 'lokahajat',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Express.js', 'Node.js', 'PostgreSQL', 'Prisma ORM'],
    situation: 'Event organizers and attendees needed a reliable platform to discover events, book tickets securely, and manage ticket sales without relying on scattered manual processes.',
    task: 'Develop a comprehensive, full-stack event ticketing platform covering event discovery and booking, a referral and loyalty point system, and an organizer dashboard.',
    action: 'Built a dynamic frontend with React.js, TypeScript, and Tailwind CSS for browsing events and completing a secure checkout flow. Engineered custom business logic for referral mechanics. Developed a CMS-style organizer dashboard with Express.js, Node.js, PostgreSQL, and Prisma ORM.',
    result: 'Delivered a fully functional, deployed event ticketing platform with automated referral rewards and real-time organizer analytics.',
    live: 'https://lokahajat.vercel.app/',
  },
  {
    title: 'UD. Rejeki Barokah — Business Website',
    image: 'rejeki',
    technologies: ['React.js', 'Tailwind CSS'],
    situation: 'UD. Rejeki Barokah, a building materials and metal fabrication shop in Jombang, Indonesia, had no online presence to showcase its products and reach customers beyond word of mouth.',
    task: "Build a responsive business website to present the shop's steel products and fabrication services, and make it easy for customers to get in touch.",
    action: 'Built a fully responsive UI with React.js and Tailwind CSS, featuring a product and services showcase, customer testimonials, and clear contact information with direct WhatsApp and phone call-to-action buttons.',
    result: 'Delivered a live business website that gives the shop a professional online presence and a simple way for customers to browse offerings and reach out directly.',
    live: 'https://www.zaidsyaifulfatih.online',
  },
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Zaid Syaiful Fatih — Portfolio</title>
<style>
  @page { size: A4; margin: 16mm 14mm; }
  * { box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #2d3748; margin: 0; font-size: 10.3pt; line-height: 1.5; }
  h1, h2, h3 { margin: 0; }
  .header { display: flex; align-items: center; gap: 18px; border-bottom: 3px solid #2563eb; padding-bottom: 14px; margin-bottom: 18px; }
  .header img { width: 78px; height: 78px; border-radius: 50%; object-fit: cover; border: 2px solid #2563eb; }
  .header h1 { font-size: 22pt; color: #1e293b; }
  .header h1 span { color: #2563eb; }
  .header h2 { font-size: 11.5pt; font-weight: 500; color: #64748b; margin-top: 2px; }
  .contact-line { margin-top: 6px; font-size: 8.8pt; color: #475569; }
  .contact-line a { color: #2563eb; text-decoration: none; }
  .contact-line .sep { color: #cbd5e1; margin: 0 6px; }

  section { margin-bottom: 16px; }
  .section-title { font-size: 12.5pt; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1.5px solid #dbeafe; padding-bottom: 4px; margin-bottom: 10px; }

  p.body-text { color: #475569; text-align: justify; margin: 0 0 6px; }

  .chips { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 6px; }
  .chip { background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; border-radius: 10px; padding: 2px 9px; font-size: 8pt; font-weight: 500; }

  .projects { display: flex; flex-direction: column; gap: 34px; }
  .project-card { display: flex; align-items: flex-start; gap: 26px; page-break-inside: avoid; break-inside: avoid; }
  .project-card + .project-card { page-break-before: always; break-before: page; padding-top: 20px; }
  .project-info-col { width: 42%; min-width: 42%; }
  .project-info-col img { width: 100%; border-radius: 6px; object-fit: cover; display: block; margin-top: 10px; }
  .project-body { flex: 1; padding-left: 4px; }
  .project-title { font-size: 13.5pt; font-weight: 700; color: #1e293b; margin-bottom: 10px; line-height: 1.3; }
  .project-link { font-size: 8.6pt; color: #2563eb; text-decoration: none; font-weight: 600; display: inline-block; margin-top: 12px; }
  .star-block { margin-top: 0; }
  .star-item { margin-bottom: 10px; }
  .star-label { display: block; font-size: 8.6pt; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.4px; margin-bottom: 2px; }
  .star-text { font-size: 8.8pt; color: #64748b; text-align: justify; line-height: 1.55; }

  .footer-note { text-align: center; font-size: 7.8pt; color: #94a3b8; margin-top: 12px; }
</style>
</head>
<body>

  <div class="header">
    <img src="${img('photo')}" alt="Zaid Syaiful Fatih" />
    <div>
      <h1>Zaid <span>Syaiful Fatih</span></h1>
      <h2>Portfolio Projects</h2>
      <div class="contact-line">
        <a href="mailto:zaidsyaifulfatih98@gmail.com">zaidsyaifulfatih98@gmail.com</a>
        <span class="sep">|</span>
        <a href="https://github.com/zaidsyaifulfatih98">github.com/zaidsyaifulfatih98</a>
        <span class="sep">|</span>
        <a href="https://mypersonal-website-kohl.vercel.app">https://mypersonal-website-kohl.vercel.app</a>
      </div>
    </div>
  </div>

  <section>
    <div class="projects">
      ${projects.map(p => `
      <div class="project-card">
        <div class="project-info-col">
          <div class="project-title py-5">${esc(p.title)}</div>
          <div class="chips py-5">${p.technologies.map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div>
          <img class="py-5"src="${img(p.image)}" alt="${esc(p.title)}" />
        </div>
        <div class="project-body">
          <div class="star-block">
            <div class="star-item"><span class="star-label">Situation</span><div class="star-text">${esc(p.situation)}</div></div>
            <div class="star-item"><span class="star-label">Task</span><div class="star-text">${esc(p.task)}</div></div>
            <div class="star-item"><span class="star-label">Action</span><div class="star-text">${esc(p.action)}</div></div>
            <div class="star-item"><span class="star-label">Result</span><div class="star-text">${esc(p.result)}</div></div>
          </div>
          <a class="project-link" href="${p.live}">${p.live.replace(/^https?:\/\//, '')} ↗</a>
        </div>
      </div>`).join('')}
    </div>
  </section>

  <div class="footer-note">Generated from zaidsyaifulfatih.online — Portfolio PDF</div>

</body>
</html>
`;

const outPath = path.join(SCRATCH, 'portfolio.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('HTML written to', outPath);
