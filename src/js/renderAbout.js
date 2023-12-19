import about from '../data/about.json';
import aboutDe from '../data/de/about.json';
import photo from '../img/alona-kuznietsova.jpg';

const aboutSection = document.querySelector('.about');
const currentURL = window.location.href;
let aboutData = about;

function renderAbout() {
  if (currentURL.includes('de.html')) {
    aboutData = aboutDe;
  } else {
    aboutData = about;
  }

  console.log(currentURL);

  const markup = aboutData
    .map(
      ({ name, position, description, link, lang }) => `
      <div class="lang">
        <a href=${link} class="lang-link">${lang}</a>
      </div>
      <div class="photo-wrapper"> 
        <img src=${photo} alt="photo" class="photo" width="250" height="250">
      </div>
      <div>
      <h1 class="about-name">${name}</h1>
        <h2 class="about-position">${position}</h2>
        <p class="about-description">${description}
        </p>
        </div>`
    )
    .join('');
  aboutSection.innerHTML = markup;
}

renderAbout();
