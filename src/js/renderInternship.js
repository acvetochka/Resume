import internshipEn from '../data/internship.json';
import internshipDe from '../data/de/internship.json';

const internshipList = document.querySelector('.internship-list');
const currentURL = window.location.href;
let internship = internshipEn;

function renderWorkExperience() {
  if (currentURL.includes('de.html')) {
    internship = internshipDe;
  } else {
    internship = internshipEn;
  }

  const markup = internship
    .map(
      ({ position, date, company, place, duties }) => `<li class="internship-item">
            <h3 class="internship-position">${position}
            </h3>
            <p class="period">${date}</p>
            <p class="company">${company}<span class="line"> | </span>${place}</p>
            <ul class="internship-list">
            ${duties
              .map(duty => `<li class="internship-list-item">${duty}</li>`)
              .join('')}
            </ul>
          </li>`
    )
    .join('');
  internshipList.innerHTML = markup;
  
}

renderWorkExperience();
