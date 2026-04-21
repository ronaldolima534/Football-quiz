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
    <button class="lang-btn" data-lang="en" onclick="changeLanguage('en')" aria-label="English">
      <img src="https://flagcdn.com/w40/gb.png" alt="English">
    </button>

    <button class="lang-btn" data-lang="es" onclick="changeLanguage('es')" aria-label="Español">
      <img src="https://flagcdn.com/w40/es.png" alt="Español">
    </button>

    <button class="lang-btn" data-lang="pt" onclick="changeLanguage('pt')" aria-label="Português">
      <img src="https://flagcdn.com/w40/pt.png" alt="Português">
    </button>

    <button class="lang-btn" data-lang="fr" onclick="changeLanguage('fr')" aria-label="Français">
      <img src="https://flagcdn.com/w40/fr.png" alt="Français">
    </button>

    <button class="lang-btn" data-lang="it" onclick="changeLanguage('it')" aria-label="Italiano">
      <img src="https://flagcdn.com/w40/it.png" alt="Italiano">
    </button>
  `;

  updateLanguageButtons();
}

function changeLanguage(lang) {
  setLanguage(lang);
  location.reload();
}
