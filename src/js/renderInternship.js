import { getData } from "../utils/getData";


const internshipList = document.querySelector('.internship-list');

function renderWorkExperience() {
  const internship = getData('internship');

  const markup = internship
    .map(
      ({ position, date, company, place, duties, technologies }) => `<li class="internship-item">
           <div class="position-container"><h3 class="internship-position">${position}
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
          </li>`
    )
    .join('');
  internshipList.innerHTML = markup;

}

renderWorkExperience();


