import addDe from '../data/de/addition.json';
import addEn from '../data/certificates.json';

const additionList = document.querySelector('.addition-list');
const currentURL = window.location.href;
let add = addEn;

function renderCertificates() {
  // if (currentURL.includes('de.html')) {
  //   add = addDe;
  // } else {
  //   add = addEn;
  // }

  const markup = add
    .map(({ name, date }) => {
      return `<li class="education-item">
            <h4 class="education-uni">${name}</h4>
          </li>`;
    })
    .join('');

  additionList.innerHTML = markup;
}

renderCertificates();
