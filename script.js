const html = document.documentElement;
const languageButton = document.querySelector(".language-toggle");
const themeButton = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

function setLanguage(language) {
  html.lang = language;
  document.querySelectorAll("[data-fr][data-en]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  document.querySelector(".lang-fr").style.opacity =
    language === "fr" ? "1" : ".45";
  document.querySelector(".lang-en").style.opacity =
    language === "en" ? "1" : ".45";
}

languageButton.addEventListener("click", () => {
  setLanguage(html.lang === "fr" ? "en" : "fr");
});

themeButton.addEventListener("click", () => {
  const dark = html.dataset.theme === "dark";
  html.dataset.theme = dark ? "light" : "dark";
  themeButton.querySelector(".sun").style.display = dark ? "inline" : "none";
  themeButton.querySelector(".moon").style.display = dark ? "none" : "inline";
});

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }),
);

const socialLinks = document.querySelector(".site-footer > div");
socialLinks.className = "social-links";
socialLinks.innerHTML = `<a href="https://tiktok.com/@services.maintenance.inf" target="_blank" rel="noreferrer" aria-label="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3c.4 2.5 1.8 4 4 4v3.1c-1.5.1-2.9-.4-4-1.2v6.4a5.7 5.7 0 1 1-5-5.6v3.2a2.5 2.5 0 1 0 1.8 2.4V3H15Z"/></svg></a><a href="https://github.com/Santara-1-star" target="_blank" rel="noreferrer" aria-label="GitHub"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7 1 .7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg></a><a href="https://www.linkedin.com/in/mamadou-santara" target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 7.2A1.8 1.8 0 1 1 5.2 3.6a1.8 1.8 0 0 1 0 3.6ZM3.7 20.4h3V9h-3v11.4ZM8.6 9h2.9v1.6h.1c.4-.8 1.4-1.9 2.9-1.9 3.1 0 3.7 2 3.7 4.7v7h-3v-6.2c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2v6.3h-3V9Z"/></svg></a><a href="#accueil">Retour en haut ↑</a>`;
