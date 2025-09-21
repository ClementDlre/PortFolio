function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang); // Sauvegarde le choix
}

// Au chargement : appliquer la langue sauvegardée ou par défaut (fr)
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);

  document.getElementById("lang-fr").addEventListener("click", () => setLanguage("fr"));
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
});