import { getData } from "../utils/getData";

const additionList = document.querySelector('.addition-list-sidebar');

function renderAdditionSidebar() {
  const cert = getData('cert');

  const markup = cert
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
