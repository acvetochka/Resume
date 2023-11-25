import work from '../data/work.json';

const companyList = document.querySelector('.company-list');

function renderWorkExperience() {
  const markup = work
    .map(
      ({ position, date, company, place, duties }) => `<li class="company-item">
            <h3 class="work-position">${position}
            </h3>
            <p class="period">${date}</p>
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
