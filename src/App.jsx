
import { useState } from "react";

import "./App.css";

const projects = [
  {
    number: "01",
    name: "DailyMystery",
    category: { fr: "Jeu en ligne", en: "Online game" },
    description: {
      fr: "Un jeu de devinettes où chaque question met ta logique à l'épreuve. Joue, trouve les réponses et accumule des points.",
      en: "A riddle game where every question tests your logic. Play, find the answers, and collect points.",
    },
    url: "https://daily-mystery-nine.vercel.app/",
    style: "mystery",
    icon: "✦",
  },
  {
    number: "02",
    name: "ExcuseIA",
    category: { fr: "Outil web", en: "Web tool" },
    description: {
      fr: "Un site pour trouver des idées d'excuses selon différentes situations, avec plusieurs styles et la possibilité de garder ses préférées.",
      en: "A website for finding excuse ideas for different situations, with different styles and the ability to save favourites.",
    },
    url: "https://excuse-ia.vercel.app/",
    style: "excuse",
    icon: "✳",
  },
  {
    number: "03",
    name: "Dual Paths Together",
    category: { fr: "Projet web", en: "Web project" },
    description: {
      fr: "Découvre Dual Paths Together, un projet web accessible directement en ligne.",
      en: "Discover Dual Paths Together, a web project you can explore online.",
    },
    url: "https://dual-paths-together.lovable.app/",
    style: "dual",
    icon: "⟡",
  },
];

function App() {
  const [language, setLanguage] = useState("fr");
  const [menuOpen, setMenuOpen] = useState(false);

  const isFr = language === "fr";

  const text = {
    navProjects: isFr ? "Projets" : "Projects",
    navAbout: isFr ? "À propos" : "About",
    navContact: isFr ? "Contact" : "Contact",
    badge: isFr ? "Deux esprits. Des idées sans limites." : "Two minds. Ideas without limits.",
    heroLine1: isFr ? "Nous créons" : "We build",
    heroLine2: isFr ? "des expériences" : "digital",
    heroLine3: isFr ? "digitales." : "experiences.",
    heroDescription: isFr
      ? "Nous imaginons et développons des sites web avec une seule idée en tête : transformer des idées en projets concrets."
      : "We design and build websites with one goal in mind: turning ideas into real projects.",
    explore: isFr ? "Découvrir nos projets" : "Explore our projects",
    contactButton: isFr ? "Parlons de ton idée ↗" : "Let's talk about your idea ↗",
    projectsEyebrow: isFr ? "CE QUE NOUS CRÉONS" : "WHAT WE CREATE",
    projectsTitle: isFr ? "Nos projets." : "Our projects.",
    projectsDescription: isFr
      ? "Chaque projet est une occasion d'apprendre, de créer et d'aller plus loin."
      : "Every project is an opportunity to learn, create, and go further.",
    visit: isFr ? "Visiter le site" : "Visit website",
    aboutEyebrow: isFr ? "QUI SOMMES-NOUS ?" : "WHO ARE WE?",
    aboutTitle1: isFr ? "Deux passionnés," : "Two passionate",
    aboutTitle2: isFr ? "une même ambition." : "minds, one ambition.",
    aboutDescription:
      "Nous sommes deux jeunes passionnés par la création de sites web. Nous développons nos propres projets et voulons aider d'autres personnes à donner vie à leurs idées en ligne.",
    aboutNote: isFr
      ? "Nous apprenons en créant, en testant et en améliorant chaque projet."
      : "We learn by building, testing, and improving every project.",
    whatWeDo: isFr ? "CE QUE NOUS FAISONS" : "WHAT WE DO",
    service1: isFr ? "Création de sites web" : "Website creation",
    service2: isFr ? "Développement de projets" : "Project development",
    service3: isFr ? "Idées et solutions digitales" : "Digital ideas and solutions",
    contactEyebrow: isFr ? "UN PROJET EN TÊTE ?" : "HAVE A PROJECT IN MIND?",
    contactTitle1: isFr ? "Créons quelque" : "Let's build",
    contactTitle2: isFr ? "chose ensemble." : "something together.",
    contactDescription: isFr
      ? "Tu as une idée, une question ou un projet ? Écris-nous, nous serons ravis d'en discuter."
      : "Have an idea, a question, or a project? Send us a message. We'd love to hear about it.",
    emailButton: isFr ? "Nous envoyer un e-mail ↗" : "Send us an email ↗",
    footerText: isFr ? "Conçu avec passion." : "Made with passion.",
    footerBack: isFr ? "Retour en haut ↑" : "Back to top ↑",
    openMenu: isFr ? "Ouvrir le menu" : "Open menu",
  };

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <div className="site-wrapper" id="top">
      <header className="navbar">
        <a className="brand" href="#top" aria-label="WebDuo home">
          <span className="brand-symbol">W<span>D</span></span>
          <span className="brand-name">Web<span>Duo</span></span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={text.openMenu}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <button onClick={() => scrollTo("projects")}>{text.navProjects}</button>
          <button onClick={() => scrollTo("about")}>{text.navAbout}</button>
          <button onClick={() => scrollTo("contact")}>{text.navContact}</button>
          <button
            className="language-toggle"
            onClick={() => setLanguage(isFr ? "en" : "fr")}
            aria-label="Change language"
          >
            <span className={isFr ? "language-active" : ""}>FR</span>
            <span className="language-divider">/</span>
            <span className={!isFr ? "language-active" : ""}>EN</span>
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-container">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              {text.badge}
            </div>

            <h1>
              {text.heroLine1}
              <br />
              <span className="gradient-text">{text.heroLine2}</span>
              <br />
              {text.heroLine3}
            </h1>

            <p className="hero-description">{text.heroDescription}</p>

            <div className="hero-actions">
              <button className="button-primary" onClick={() => scrollTo("projects")}>
                {text.explore} <span>↘</span>
              </button>
              <button className="button-secondary" onClick={() => scrollTo("contact")}>
                {text.contactButton}
              </button>
            </div>

            <div className="hero-bottom-note">
              <span className="note-line" />
              <span>{isFr ? "IMAGINER · CONSTRUIRE · AMÉLIORER" : "IMAGINE · BUILD · IMPROVE"}</span>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-orbit orbit-three" />
            <div className="art-glow" />
            <div className="art-core">
              <span className="core-w">W</span>
              <span className="core-d">D</span>
            </div>
            <div className="floating-card floating-card-top">
              <span className="floating-icon">✦</span>
              <span>{isFr ? "Une idée" : "An idea"}</span>
            </div>
            <div className="floating-card floating-card-bottom">
              <span className="floating-check">↗</span>
              <span>{isFr ? "Un projet concret" : "A real project"}</span>
            </div>
            <div className="art-star star-one">✧</div>
            <div className="art-star star-two">✦</div>
            <div className="art-star star-three">·</div>
          </div>

          <div className="hero-scroll">
            <span className="scroll-line" />
            <span>{isFr ? "FAIS DÉFILER POUR EXPLORER" : "SCROLL TO EXPLORE"}</span>
          </div>
        </section>

        <section className="projects-section section-container" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">{text.projectsEyebrow}</p>
              <h2>{text.projectsTitle}</h2>
            </div>
            <p className="section-intro">{text.projectsDescription}</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.style}`} key={project.name}>
                <div className="project-card-top">
                  <span className="project-number">{project.number} / 03</span>
                  <span className="project-icon">{project.icon}</span>
                </div>

                <div className="project-preview" aria-hidden="true">
                  {project.style === "mystery" && (
                    <div className="mystery-preview">
                      <div className="preview-mini-label">DAILY / MYSTERY</div>
                      <div className="mystery-symbol">?</div>
                      <div className="preview-dots"><i /><i /><i /><i /><i /></div>
                    </div>
                  )}

                  {project.style === "excuse" && (
                    <div className="excuse-preview">
                      <div className="excuse-spark">✳</div>
                      <div className="excuse-preview-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="excuse-pill">IA ✦</div>
                    </div>
                  )}

                  {project.style === "dual" && (
                    <div className="dual-preview">
                      <div className="dual-path path-left" />
                      <div className="dual-path path-right" />
                      <div className="dual-center">↗</div>
                      <div className="dual-small-dot dot-left" />
                      <div className="dual-small-dot dot-right" />
                    </div>
                  )}
                </div>

                <div className="project-info">
                  <span className="project-category">{project.category[language]}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description[language]}</p>
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text.visit} <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-container" id="about">
          <div className="about-visual">
            <div className="about-visual-frame">
              <div className="about-photo-placeholder">
                <div className="placeholder-symbol">W<span>D</span></div>
                <p>{isFr ? "Arnold & son coéquipier" : "Arnold & teammate"}</p>
                <span>{isFr ? "Bientôt, notre photo ici" : "Our photo coming soon"}</span>
              </div>
              <div className="about-corner corner-top-left" />
              <div className="about-corner corner-bottom-right" />
            </div>
            <div className="about-visual-label">
              <span className="status-dot" />
              {isFr ? "EN TRAIN DE CRÉER" : "BUSY CREATING"}
            </div>
          </div>

          <div className="about-content">
            <p className="section-eyebrow">{text.aboutEyebrow}</p>
            <h2>
              {text.aboutTitle1}
              <br />
              <span className="gradient-text">{text.aboutTitle2}</span>
            </h2>
            <p className="about-description">{text.aboutDescription}</p>
            <p className="about-note">{text.aboutNote}</p>

            <div className="services">
              <p className="services-title">{text.whatWeDo}</p>
              <div className="service-item"><span>01</span>{text.service1}<span className="service-arrow">↗</span></div>
              <div className="service-item"><span>02</span>{text.service2}<span className="service-arrow">↗</span></div>
              <div className="service-item"><span>03</span>{text.service3}<span className="service-arrow">↗</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-container" id="contact">
          <div className="contact-card">
            <div className="contact-decoration decoration-one" />
            <div className="contact-decoration decoration-two" />
            <div className="contact-content">
              <p className="section-eyebrow">{text.contactEyebrow}</p>
              <h2>
                {text.contactTitle1}
                <br />
                <span className="gradient-text">{text.contactTitle2}</span>
              </h2>
              <p>{text.contactDescription}</p>
              <a className="button-primary email-button" href="mailto:gmarnoldbs@gmail.com">
                {text.emailButton}
              </a>
              <span className="contact-email">gmarnoldbs@gmail.com</span>
            </div>
            <div className="contact-orb" aria-hidden="true">↗</div>
          </div>
        </section>
      </main>

      <footer className="footer section-container">
        <a className="brand footer-brand" href="#top">
          <span className="brand-symbol">W<span>D</span></span>
          <span className="brand-name">Web<span>Duo</span></span>
        </a>
        <p>© {new Date().getFullYear()} WebDuo. {text.footerText}</p>
        <button className="footer-back" onClick={() => scrollTo("top")}>
          {text.footerBack}
        </button>
      
      </footer>
      
    </div>
  );
}

export default App;