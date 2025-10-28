import about from '../data/about.json';
import aboutDe from '../data/de/about.json';
import photo from 'url:../img/alonaKuz.jpg';

const aboutSection = document.querySelector('.about');
const aboutContainer = document.querySelector('.about-container');
const currentURL = window.location.href;
let aboutData = about;

function renderAbout() {
  if (currentURL.includes('de.html')) {
    aboutData = aboutDe;
  } else {
    aboutData = about;
  }

  const markup = aboutData
    .map(
      ({
        name,
        position,
        technologies,
        description,
        link,
        lang,
        pdf,
        pdfTitle,
        linkTitle,
      }) => `
      <div class="about-container">
       <div class="lang">
       <a href=${pdf} class="lang-link" target="_blank" title=${pdfTitle}>Pdf</a>
        <a href=${link} class="lang-link" title=${linkTitle}>${lang}</a>
       </div>
       <div class="photo-wrapper"> 
        <img src=${photo} alt="photo" class="photo" width="250" height="250" fetchpriority=high title="Alona Kuznietsova">
       </div>
       <div>
        <h1 class="about-name">${name}</h1>
        <h2 class="about-position">${position}</h2>
        <h3 class="about-technologies">${technologies}</h3>
        <p class="about-description">${description}</p>
       </div>
       </div>
        `
    )
    .join('');
  aboutContainer.innerHTML = markup;
}

renderAbout();
