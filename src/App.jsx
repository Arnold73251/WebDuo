
import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "DailyMystery",
    category: { fr: "Jeu de réflexion", en: "Puzzle game" },
    description: {
      fr: "Résous des énigmes, teste ta logique et tente de trouver les bonnes réponses. Un jeu quotidien pour te challenger.",
      en: "Solve riddles, test your logic, and find the right answers. A daily game designed to challenge you.",
    },
    tags: ["React", "JavaScript", "Game"],
    url: "https://daily-mystery-nine.vercel.app/",
    style: "mystery",
    icon: "✳",
  },
  {
    number: "02",
    name: "ExcuseIA",
    category: { fr: "Outil intelligent", en: "Smart tool" },
    description: {
      fr: "Crée des excuses adaptées à différentes situations grâce à une interface simple, rapide et facile à utiliser.",
      en: "Create excuses for different situations through a simple, fast, and easy-to-use interface.",
    },
    tags: ["React", "AI concept", "Web"],
    url: "https://excuse-ia.vercel.app/",
    style: "excuse",
    icon: "✧",
  },
  {
    number: "03",
    name: "Dual Paths Together",
    category: { fr: "Projet web", en: "Web project" },
    description: {
      fr: "Un projet web au concept original, pensé autour d'une expérience visuelle moderne et d'une navigation intuitive.",
      en: "An original web concept built around a modern visual experience and intuitive navigation.",
    },
    tags: ["Web design", "UI/UX", "Web"],
    url: "https://dual-paths-together.lovable.app/",
    style: "paths",
    icon: "↗",
  },
];

const translations = {
  fr: {
    navProjects: "Projets",
    navAbout: "À propos",
    navContact: "Contact",
    availability: "Projets personnels en développement",
    heroEyebrow: "STUDIO WEB INDÉPENDANT",
    heroLine1: "Des idées simples.",
    heroLine2: "Des projets",
    heroLine3: "qui prennent vie.",
    heroDescription:
      "Nous imaginons et créons des expériences web modernes, utiles et accessibles. Chaque projet est une nouvelle occasion d'apprendre et de construire.",
    viewProjects: "Découvrir nos projets",
    contactUs: "Nous contacter",
    scroll: "DÉFILER POUR EXPLORER",
    miniLabel: "NOS UNIVERS",
    miniTitle: "Trois idées, trois directions.",
    miniText: "Du jeu à la création web.",
    projectsEyebrow: "CE QUE NOUS CRÉONS",
    projectsTitle: "Nos projets",
    projectsDescription:
      "Des idées personnelles transformées en expériences web concrètes. Et ce n'est que le début.",
    visitProject: "Visiter le projet",
    aboutEyebrow: "DERRIÈRE L'ÉCRAN",
    aboutTitle: "Apprendre en créant.",
    aboutDescription:
      "WebDuo est un espace dédié à la création de projets web. Nous explorons le développement, le design et les idées numériques en construisant des projets concrets, étape par étape.",
    aboutPoint1Title: "Curiosité avant tout",
    aboutPoint1Text: "Tester, comprendre et découvrir de nouvelles possibilités.",
    aboutPoint2Title: "Construire pour apprendre",
    aboutPoint2Text: "Chaque projet nous aide à progresser et à faire mieux.",
    aboutPoint3Title: "Un design qui a du sens",
    aboutPoint3Text: "Des interfaces claires, modernes et agréables à utiliser.",
    contactEyebrow: "ON DISCUTE ?",
    contactTitle: "Une idée en tête ?",
    contactDescription:
      "Une question, une suggestion ou simplement envie de parler d'un projet ? Écris-nous.",
    emailButton: "Nous envoyer un e-mail",
    backTop: "Retour en haut ↑",
    footerText: "Imaginé avec curiosité. Construit projet après projet.",
    madeWith: "Un petit studio indépendant.",
    externalLink: "Ouvrir le projet",
  },
  en: {
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    availability: "Independent projects in development",
    heroEyebrow: "INDEPENDENT WEB STUDIO",
    heroLine1: "Simple ideas.",
    heroLine2: "Projects",
    heroLine3: "brought to life.",
    heroDescription:
      "We imagine and build modern, useful, and accessible web experiences. Every project is a new opportunity to learn and create.",
    viewProjects: "Explore our projects",
    contactUs: "Get in touch",
    scroll: "SCROLL TO EXPLORE",
    miniLabel: "OUR WORLDS",
    miniTitle: "Three ideas, three directions.",
    miniText: "From games to web creation.",
    projectsEyebrow: "WHAT WE CREATE",
    projectsTitle: "Our projects",
    projectsDescription:
      "Personal ideas transformed into real web experiences. And this is only the beginning.",
    visitProject: "Visit project",
    aboutEyebrow: "BEHIND THE SCREEN",
    aboutTitle: "Learning by creating.",
    aboutDescription:
      "WebDuo is a space dedicated to building web projects. We explore development, design, and digital ideas by creating real projects, one step at a time.",
    aboutPoint1Title: "Curiosity comes first",
    aboutPoint1Text: "Testing, understanding, and discovering new possibilities.",
    aboutPoint2Title: "Build to learn",
    aboutPoint2Text: "Every project helps us improve and do better.",
    aboutPoint3Title: "Design with purpose",
    aboutPoint3Text: "Clear, modern interfaces that are enjoyable to use.",
    contactEyebrow: "LET'S TALK",
    contactTitle: "Have an idea?",
    contactDescription:
      "A question, a suggestion, or just want to talk about a project? Send us a message.",
    emailButton: "Send us an email",
    backTop: "Back to top ↑",
    footerText: "Imagined with curiosity. Built one project at a time.",
    madeWith: "An independent little studio.",
    externalLink: "Open project",
  },
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="arrow-icon"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="external-icon"
    >
      <path
        d="M14 4h6v6M20 4l-9 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const [language, setLanguage] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[language];

  const closeMenu = () => setMenuOpen(false);

  const emailSubject = encodeURIComponent(
    language === "fr" ? "Contact depuis WebDuo" : "Contact from WebDuo"
  );

  const emailBody = encodeURIComponent(
    language === "fr"
      ? "Bonjour WebDuo,\n\nJe vous contacte à propos de..."
      : "Hello WebDuo,\n\nI am contacting you about..."
  );

  return (
    <div className="site-wrapper" id="top">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
          aria-label="WebDuo, accueil"
        >
          <span className="brand-symbol" aria-hidden="true">
            <span>W</span>
            <span>D</span>
          </span>
          <span className="brand-name">
            Web<span>Duo</span>
            <small>WEB STUDIO</small>
          </span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav
          className={`main-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Navigation principale"
        >
          <a href="#projects" onClick={closeMenu}>
            {t.navProjects}
          </a>
          <a href="#about" onClick={closeMenu}>
            {t.navAbout}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {t.navContact}
          </a>

          <div className="language-switch" aria-label="Choose language">
            <button
              type="button"
              className={language === "fr" ? "active" : ""}
              onClick={() => {
                setLanguage("fr");
                closeMenu();
              }}
              aria-pressed={language === "fr"}
            >
              FR
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => {
                setLanguage("en");
                closeMenu();
              }}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-container" aria-labelledby="hero-title">
          <div className="hero-content">
            <div className="status-line">
              <span className="status-dot" />
              {t.availability}
            </div>

            <p className="eyebrow">
              <span className="eyebrow-line" />
              {t.heroEyebrow}
            </p>

            <h1 id="hero-title">
              {t.heroLine1}
              <br />
              {t.heroLine2}
              <br />
              <span className="gradient-text">{t.heroLine3}</span>
            </h1>

            <p className="hero-description">{t.heroDescription}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.viewProjects}
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#contact">
                {t.contactUs}
              </a>
            </div>

            <a className="scroll-indicator" href="#projects">
              <span className="scroll-icon" aria-hidden="true">
                ↓
              </span>
              {t.scroll}
            </a>
          </div>

          <div className="hero-visual" aria-label="Illustration WebDuo">
            <div className="visual-glow" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="orbit-node node-one">W</div>
            <div className="orbit-node node-two">✳</div>
            <div className="orbit-node node-three">↗</div>

            <div className="hero-monogram">
              <span className="monogram-top">W</span>
              <span className="monogram-bottom">D</span>
              <div className="monogram-caption">IDEAS IN MOTION</div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon purple">✦</span>
              <span>
                <strong>Creative</strong>
                <small>Ideas & concepts</small>
              </span>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon blue">{"</>"}</span>
              <span>
                <strong>Build & learn</strong>
                <small>One step at a time</small>
              </span>
              <span className="mini-check">✓</span>
            </div>
          </div>
        </section>

        <section className="intro-strip" aria-label={t.miniLabel}>
          <div className="section-container intro-strip-inner">
            <div>
              <span className="strip-label">{t.miniLabel}</span>
              <h2>{t.miniTitle}</h2>
            </div>
            <p>{t.miniText}</p>
            <span className="strip-decoration" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>

        <section
          className="projects-section section-container section-spacing"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line" />
                {t.projectsEyebrow}
              </p>
              <h2 className="section-title" id="projects-title">
                {t.projectsTitle}
                <span className="title-period">.</span>
              </h2>
            </div>
            <p className="section-description">{t.projectsDescription}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card project-${project.style}`}
                key={project.name}
              >
                <div className="project-art">
                  <div className="project-art-grid" />
                  <span className="project-number">{project.number}</span>
                  <div className="project-art-symbol" aria-hidden="true">
                    {project.icon}
                  </div>
                  <div className="project-art-caption">
                    <span>WEBDUO</span>
                    <span>{project.number} / 03</span>
                  </div>
                </div>

                <div className="project-card-content">
                  <div className="project-category">
                    {project.category[language]}
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-description">
                    {project.description[language]}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.externalLink}: ${project.name}`}
                  >
                    {t.visitProject}
                    <ExternalIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-section section-container section-spacing"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-visual">
            <div className="about-frame">
              <div className="about-frame-inner">
                <div className="about-big-letters" aria-hidden="true">
                  WD
                </div>
                <div className="about-frame-caption">
                  <span>WEB</span>
                  <span>DESIGN</span>
                  <span>DEVELOPMENT</span>
                </div>
              </div>
              <span className="frame-corner corner-tl" />
              <span className="frame-corner corner-tr" />
              <span className="frame-corner corner-bl" />
              <span className="frame-corner corner-br" />
            </div>
            <div className="about-floating-note">
              <span className="note-star">✳</span>
              <span>
                <strong>Curiosity</strong>
                <small>drives creativity</small>
              </span>
            </div>
          </div>

          <div className="about-content">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              {t.aboutEyebrow}
            </p>
            <h2 className="section-title" id="about-title">
              {t.aboutTitle}
              <span className="title-period">.</span>
            </h2>
            <p className="about-description">{t.aboutDescription}</p>

            <div className="about-points">
              <div className="about-point">
                <span className="point-number">01</span>
                <div>
                  <h3>{t.aboutPoint1Title}</h3>
                  <p>{t.aboutPoint1Text}</p>
                </div>
              </div>
              <div className="about-point">
                <span className="point-number">02</span>
                <div>
                  <h3>{t.aboutPoint2Title}</h3>
                  <p>{t.aboutPoint2Text}</p>
                </div>
              </div>
              <div className="about-point">
                <span className="point-number">03</span>
                <div>
                  <h3>{t.aboutPoint3Title}</h3>
                  <p>{t.aboutPoint3Text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="contact-section section-container"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-panel">
            <div className="contact-orb contact-orb-one" />
            <div className="contact-orb contact-orb-two" />

            <div className="contact-content">
              <p className="eyebrow">
                <span className="eyebrow-line" />
                {t.contactEyebrow}
              </p>
              <h2 id="contact-title">{t.contactTitle}</h2>
              <p>{t.contactDescription}</p>

              <a
                className="button button-light"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=gmarnoldbs%40gmail.com&su=${emailSubject}&body=${emailBody}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.emailButton}
                <ArrowIcon />
              </a>
            </div>

            <div className="contact-decoration" aria-hidden="true">
              <div className="contact-decoration-ring ring-one" />
              <div className="contact-decoration-ring ring-two" />
              <span>✳</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-container footer-inner">
          <a className="brand footer-brand" href="#top" aria-label="WebDuo, accueil">
            <span className="brand-symbol" aria-hidden="true">
              <span>W</span>
              <span>D</span>
            </span>
            <span className="brand-name">
              Web<span>Duo</span>
              <small>WEB STUDIO</small>
            </span>
          </a>

          <p className="footer-message">{t.footerText}</p>

          <div className="footer-right">
            <a href="#top">{t.backTop}</a>
            <span>© {new Date().getFullYear()} WebDuo</span>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="section-container">
            <span>{t.madeWith}</span>
            <span>DESIGNED WITH INTENTION · BUILT WITH CURIOSITY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

