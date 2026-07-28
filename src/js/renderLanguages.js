import { getData } from "../utils/getData";

const langList = document.querySelector('.languages-list');

function renderLanguages() {
  const lang = getData('lang');

  const markup = lang
    .map(
      ({ title, level, cefr, grade }) =>
        `<li class="languages-item"><span class="languages-text">
      ${title}:  
      ${grade === "native" ? `${level}` : `${cefr}`}</span ></li > `
    )
    .join('');

  langList.innerHTML = markup;
}

renderLanguages();
