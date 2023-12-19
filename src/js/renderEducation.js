import eduEn from '../data/education.json';
import eduDe from '../data/de/education.json';

const eduList = document.querySelector('.education-list');
const currentURL = window.location.href;
let edu = eduEn;

function renderEducation() {
  if (currentURL.includes('de.html')) {
    edu = eduDe;
  } else {
    edu = eduEn;
  }

  const markup = edu
    .map(({ uni, date, location, spec, degree }) => {
      const deg = degree => {
        if (degree) {
          return ' | ' + degree;
        } else {
          return '';
        }
      };

      return `<li class="education-item">
            <h4 class="education-uni">${uni}</h4>
            <p class="period">${date}<span class="line"> | </span>${location}</p>
            <p class="education-spec">${spec}
        ${deg(degree)}</p>
          </li>`;
    })
    .join('');

  eduList.innerHTML = markup;
}

renderEducation();
