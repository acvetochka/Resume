import { getData } from "../utils/getData";

const eduList = document.querySelector('.education-list-sidebar');

function renderEducation() {
  const edu = getData('edu');

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
      <h4 class="education-spec">${degree}</h4>
      <p class="education-uni">${uni}</p>
      <p class="period">${date}<span class="line"> | </span>${location}</p>
      </li>`;
    })
    .join('');
  eduList.innerHTML = markup;
}

renderEducation();
