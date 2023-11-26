import edu from '../data/education.json';

const eduList = document.querySelector('.education-list');

function renderEducation() {
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
