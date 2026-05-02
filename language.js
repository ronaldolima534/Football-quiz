const availableLanguages = ["en", "es", "pt", "fr", "it"];

const languageFlags = {
  en: "https://flagcdn.com/gb.svg",
  es: "https://flagcdn.com/es.svg",
  pt: "https://flagcdn.com/pt.svg",
  fr: "https://flagcdn.com/fr.svg",
  it: "https://flagcdn.com/it.svg"
};

const languageNames = {
  en: "English",
  es: "Español",
  pt: "Português",
  fr: "Français",
  it: "Italiano"
};

const quizSlugByLang = {
  en: {
    transfers: "guess-player-by-transfers",
    "player-clues": "guess-player-by-club-nationality-number-position",
    "nationality-club": "guess-club-by-player-nationalities"
  },
  es: {
    transfers: "adivina-jugador-por-transferencias",
    "player-clues": "adivina-jugador-por-club-nacionalidad-dorsal-posicion",
    "nationality-club": "adivina-club-por-nacionalidad-de-jugadores"
  },
  pt: {
    transfers: "adivinhe-jogador-por-transferencias",
    "player-clues": "adivinhe-jogador-por-clube-nacionalidade-numero-posicao",
    "nationality-club": "adivinhe-clube-por-nacionalidade-dos-jogadores"
  },
  fr: {
    transfers: "devinez-joueur-par-transferts",
    "player-clues": "devinez-joueur-par-club-nationalite-numero-poste",
    "nationality-club": "devinez-club-par-nationalite-des-joueurs"
  },
  it: {
    transfers: "indovina-giocatore-dai-trasferimenti",
    "player-clues": "indovina-giocatore-da-club-nazionalita-numero-ruolo",
    "nationality-club": "indovina-club-dalla-nazionalita-dei-giocatori"
  }
};

const modeBySlug = {
  "guess-player-by-transfers": "transfers",
  "guess-player-by-club-nationality-number-position": "player-clues",
  "guess-club-by-player-nationalities": "nationality-club",

  "adivina-jugador-por-transferencias": "transfers",
  "adivina-jugador-por-club-nacionalidad-dorsal-posicion": "player-clues",
  "adivina-club-por-nacionalidad-de-jugadores": "nationality-club",

  "adivinhe-jogador-por-transferencias": "transfers",
  "adivinhe-jogador-por-clube-nacionalidade-numero-posicao": "player-clues",
  "adivinhe-clube-por-nacionalidade-dos-jogadores": "nationality-club",

  "devinez-joueur-par-transferts": "transfers",
  "devinez-joueur-par-club-nationalite-numero-poste": "player-clues",
  "devinez-club-par-nationalite-des-joueurs": "nationality-club",

  "indovina-giocatore-dai-trasferimenti": "transfers",
  "indovina-giocatore-da-club-nazionalita-numero-ruolo": "player-clues",
  "indovina-club-dalla-nazionalita-dei-giocatori": "nationality-club"
};

function getLanguageFromPath(){
  const path = window.location.pathname;

  if(path.startsWith("/es/")) return "es";
  if(path.startsWith("/pt/")) return "pt";
  if(path.startsWith("/fr/")) return "fr";
  if(path.startsWith("/it/")) return "it";
  if(path.startsWith("/en/")) return "en";

  return null;
}

function detectBrowserLanguage(){
  const browserLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();

  if(browserLang.startsWith("es")) return "es";
  if(browserLang.startsWith("pt")) return "pt";
  if(browserLang.startsWith("fr")) return "fr";
  if(browserLang.startsWith("it")) return "it";

  return "en";
}

function getSavedLanguage(){
  const pathLang = getLanguageFromPath();

  if(pathLang){
    localStorage.setItem("footballQuizLanguage", pathLang);
    return pathLang;
  }

  const savedLang = localStorage.getItem("footballQuizLanguage");

  if(savedLang && availableLanguages.includes(savedLang)){
    return savedLang;
  }

  const detectedLang = detectBrowserLanguage();
  localStorage.setItem("footballQuizLanguage", detectedLang);
  return detectedLang;
}

function getCurrentQuizModeFromUrl(){
  const params = new URLSearchParams(window.location.search);
  const queryMode = params.get("mode");

  if(queryMode) return queryMode;

  const parts = window.location.pathname.split("/").filter(Boolean);
  const lastPart = parts[parts.length - 1];

  return modeBySlug[lastPart] || null;
}

function getPageName(){
  const path = window.location.pathname;

  if(path.endsWith("/daily-quiz.html")) return "daily-quiz.html";
  if(path.endsWith("/about.html")) return "about.html";
  if(path.endsWith("/contact.html")) return "contact.html";
  if(path.endsWith("/quiz-template.html")) return "quiz-template.html";

  return "index.html";
}

function setLanguage(lang){
  if(!availableLanguages.includes(lang)) return;

  localStorage.setItem("footballQuizLanguage", lang);

  const mode = getCurrentQuizModeFromUrl();

  if(mode && quizSlugByLang[lang] && quizSlugByLang[lang][mode]){
    window.location.href = `/${lang}/${quizSlugByLang[lang][mode]}`;
    return;
  }

  const page = getPageName();

  if(page === "index.html"){
    window.location.href = `/${lang}/`;
    return;
  }

  window.location.href = `/${lang}/${page}`;
}

function t(key){
  const lang = getSavedLanguage();

  if(typeof translations === "undefined"){
    return key;
  }

  if(translations[lang] && translations[lang][key]){
    return translations[lang][key];
  }

  if(translations.en && translations.en[key]){
    return translations.en[key];
  }

  return key;
}

function buildLanguageSelector(containerId){
  const container = document.getElementById(containerId);
  if(!container) return;

  const currentLang = getSavedLanguage();

  let html = "";

  availableLanguages.forEach(lang => {
    html += `
      <button 
        class="lang-btn ${currentLang === lang ? "active" : ""}" 
        onclick="setLanguage('${lang}')"
        aria-label="${languageNames[lang]}"
        title="${languageNames[lang]}"
      >
        <img 
          src="${languageFlags[lang]}" 
          alt="${languageNames[lang]}"
          class="flag-img"
        >
      </button>
    `;
  });

  container.innerHTML = html;
}
