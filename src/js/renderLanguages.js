import lang from '../data/languages.json';

const langList = document.querySelector('.languages-list');

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
