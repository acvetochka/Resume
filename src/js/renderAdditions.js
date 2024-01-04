// import eduEn from '../data/education.json';
// import eduDe from '../data/de/education.json';
import addition from '../data/de/addition.json';

const additionList = document.querySelector('.addition-list');
const currentURL = window.location.href;
// let edu = eduEn;

function renderAddition() {
  // if (currentURL.includes('de.html')) {
  //   edu = eduDe;
  // } else {
  //   edu = eduEn;
  // }

  const markup = addition
    .map(({ name, location, date, degree }) => {
      const deg = degree => {
        if (degree) {
          return 'Abschluss: ' + degree;
        } else {
          return '';
        }
      };

      return `<li class="education-item">
            <h4 class="education-uni">${name}</h4>
            <p class="period">${date}<span class="line"> | </span>${location}</p>
            <p class="education-spec">
        ${deg(degree)}</p>
          </li>`;
    })
    .join('');

  additionList.innerHTML = markup;
}

renderAddition();
