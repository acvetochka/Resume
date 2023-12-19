import langEn from '../data/languages.json';
import langDe from '../data/de/languages.json';

const langList = document.querySelector('.languages-list');
const currentURL = window.location.href;
let lang = langEn;

if (currentURL.includes('de.html')) {
  lang = langDe;
} else {
  lang = langEn;
}
function renderLanguages() {
  const markup = lang
    .map(
      ({ title, level, cefr }) =>
        `<li class="languages-item"><span class="languages-text">${title}: ${level} | ${cefr}</span></li>`
    )
    .join('');

  langList.innerHTML = markup;
}

renderLanguages();
