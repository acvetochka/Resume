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
    .map(({ href, date, degree }) => {
      const linkDegree = degree.split(' ').join('_');

      let link = `<a href=${href} rel="noopener noreferrer nofollow" target="_blank" class="education-course" title=${`Show_${linkDegree}`}>${degree}</a> `;

      if (href === '') {
        link = `<span class="education-course">${degree}</span>`;
      }
      if (date) {
        return `<li class="education-item">
        <span>
          ${link}
          - ${date}</span>
        </li>`;
      }
    })
    .join('');

  additionList.innerHTML = markup;
}

renderAdditionSidebar();
