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

function detectBrowserLanguage(){
  const browserLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();

  if(browserLang.startsWith("es")) return "es";
  if(browserLang.startsWith("pt")) return "pt";
  if(browserLang.startsWith("fr")) return "fr";
  if(browserLang.startsWith("it")) return "it";

  return "en";
}

function getSavedLanguage(){
  const savedLang = localStorage.getItem("footballQuizLanguage");

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
        aria-label="${languageNames[lang]}"
        title="${languageNames[lang]}"
      >
        <img 
          src="${languageFlags[lang]}" 
          alt="${languageNames[lang]}" 
          style="width:30px;height:22px;object-fit:cover;border-radius:4px;display:block;"
        >
      </button>
    `;
  });

  container.innerHTML = html;
}
