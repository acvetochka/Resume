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
      ({
        position,
        date,
        company,
        place,
        duties,
        technologies = [],
        reference,
      }) => `<li class="company-item">
            <div class="position-container"><h3 class="work-position">${position}
            </h3>
            <p class="period">${date}</p>
            </div>
            <p class="company">${company}<span class="line"> | </span>${place}</p>
            <ul class="technologies-list">
            ${technologies
              .map(skill => `<li class="technology-item">${skill}</li>`)
              .join('')}
            </ul>
            <ul class="work-list">
            ${duties
              .map(duty => `<li class="work-list-item">${duty}</li>`)
              .join('')}
            </ul>
            ${
              (reference &&
                `<div class="reference-container"><p class="text">Reference: </p>
               <a href=${reference.website} target="_blank" class="project-link reference-link">Website</a> |
              <a href=${reference.github} target="_blank" class="project-link reference-link">GitHub</a>
              </div>`) ||
              ''
            }
          </li>`
    )
    .join('');
  companyList.innerHTML = markup;
}

renderWorkExperience();
