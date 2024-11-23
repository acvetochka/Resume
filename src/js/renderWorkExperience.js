import workEn from '../data/work.json';
import workDe from '../data/de/work.json';

const companyList = document.querySelector('.company-list');
const currentURL = window.location.href;
let work = workEn;

function renderWorkExperience() {
  if (currentURL.includes('de.html')) {
    work = workDe;
  } else {
    work = workEn;
  }

  const markup = work
    .map(
      ({ position, date, company, place, duties }) => `<li class="company-item">
            <div class="position-container"><h3 class="work-position">${position}
            </h3>
            <p class="period">${date}</p>
            </div>
            <p class="company">${company}<span class="line"> | </span>${place}</p>
            <ul class="work-list">
            ${duties
              .map(duty => `<li class="work-list-item">${duty}</li>`)
              .join('')}
            </ul>
          </li>`
    )
    .join('');
  companyList.innerHTML = markup;
}

renderWorkExperience();
