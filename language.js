const defaultLanguage = "en";

function getSavedLanguage() {
  return localStorage.getItem("footballQuizLanguage") || defaultLanguage;
}

function setLanguage(lang) {
  localStorage.setItem("footballQuizLanguage", lang);
}

function t(key) {
  const lang = getSavedLanguage();
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key];
  }
  return translations[defaultLanguage][key] || key;
}

function updateLanguageButtons() {
  const currentLang = getSavedLanguage();
  const buttons = document.querySelectorAll(".lang-btn");

  buttons.forEach(btn => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function buildLanguageSelector(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <button class="lang-btn" data-lang="en" onclick="changeLanguage('en')" aria-label="English">🇬🇧</button>
    <button class="lang-btn" data-lang="es" onclick="changeLanguage('es')" aria-label="Español">🇪🇸</button>
    <button class="lang-btn" data-lang="pt" onclick="changeLanguage('pt')" aria-label="Português">🇵🇹</button>
    <button class="lang-btn" data-lang="fr" onclick="changeLanguage('fr')" aria-label="Français">🇫🇷</button>
    <button class="lang-btn" data-lang="it" onclick="changeLanguage('it')" aria-label="Italiano">🇮🇹</button>
  `;

  updateLanguageButtons();
}

function changeLanguage(lang) {
  setLanguage(lang);
  location.reload();
}
