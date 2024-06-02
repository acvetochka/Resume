import addDe from '../data/de/addition.json';
import addEn from '../data/addition.json';

const additionList = document.querySelector('.addition-list');
const currentURL = window.location.href;
let add = addEn;

function renderAddition() {
  if (currentURL.includes('de.html')) {
    add = addDe;
  } else {
    add = addEn;
  }

  const markup = add
    .map(({ name, location, date, degree }) => {
      const deg = degree => {
        if (degree) {
          return 'Abschluss: ' + degree;
        } else {
          return '';
        }
      };

      return `<li class="education-item">
            <h4 class="education-course">${name}</h4>
            <p class="period">${date}<span class="line"> | </span>${location}</p>
            <p class="education-add-spec">
        ${deg(degree)}</p>
          </li>`;
    })
    .join('');

  additionList.innerHTML = markup;
}

renderAddition();
