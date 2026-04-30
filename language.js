const availableLanguages = ["en", "es", "pt", "fr", "it"];

const languageFlags = {
  en: "🇬🇧",
  es: "🇪🇸",
  pt: "🇵🇹",
  fr: "🇫🇷",
  it: "🇮🇹"
};

function detectBrowserLanguage(){
  const browserLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();

  if(browserLang.startsWith("es")) return "es";
  if(browserLang.startsWith("pt")) return "pt";
  if(browserLang.startsWith("fr")) return "fr";
  if(browserLang.startsWith("it")) return "it";

  return "en";
}

function getSavedLanguage(){
  let savedLang = localStorage.getItem("footballQuizLanguage");

  if(savedLang && availableLanguages.includes(savedLang)){
    return savedLang;
  }

  const detectedLang = detectBrowserLanguage();
  localStorage.setItem("footballQuizLanguage", detectedLang);
  return detectedLang;
}

function setLanguage(lang){
  if(!availableLanguages.includes(lang)) return;

  localStorage.setItem("footballQuizLanguage", lang);
  location.reload();
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
        aria-label="${lang}"
        title="${lang.toUpperCase()}"
      >
        ${languageFlags[lang]}
      </button>
    `;
  });

  container.innerHTML = html;
}
