import addDe from '../data/de/addition.json';
import addEn from '../data/addition.json';

const additionList = document.querySelector('.addition-list-sidebar');
const currentURL = window.location.href;
let add = addEn;

function renderAdditionSidebar() {
  if (currentURL.includes('de.html')) {
    add = addDe;
  } else {
    add = addEn;
  }

  const markup = add
    .map(({ name, location, href, date, period, degree }) => {
      const deg = degree => {
        if (degree) {
          return 'Abschluss: ' + degree;
        } else {
          return '';
        }
      };

      return `<li class="education-item">
      <span>
            <a href=${href} class="education-course">${degree}</a> - ${date}</span>
          </li>`;
    })
    .join('');

  additionList.innerHTML = markup;
}

renderAdditionSidebar();
