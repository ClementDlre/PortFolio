function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang); // sauvegarde
}

document.addEventListener("DOMContentLoaded", () => {
  // appliquer la langue sauvegardée au chargement
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);

  // attacher les boutons s'ils existent sur la page
  const btnFr = document.getElementById("lang-fr");
  const btnEn = document.getElementById("lang-en");

  if (btnFr) btnFr.addEventListener("click", () => setLanguage("fr"));
  if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));
});