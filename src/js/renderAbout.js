import photo from 'url:../img/alonaKuz.jpg';
import { getData } from '../utils/getData';

const aboutContainer = document.querySelector('.about-container');

function renderAbout() {
  const aboutData = getData('about');

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
       
       <div class="photo-wrapper"> 
        <img src=${photo} alt="photo" class="photo" width="250" height="250" fetchpriority=high title="Alona Kuznietsova">
       </div>
       <div class="about-wrapper">
        <div class="about-name-wrapper">
          <h1 class="about-name">${name}</h1>
          <div class="lang">
            <a href=${pdf} class="lang-link" target="_blank" title=${pdfTitle}>
                <svg width="20" height="20" class="pdf-icon">
                  <use width="20" height="20" xlink:href="#icon-pdf" />
                </svg>
            </a>
          <a href=${link} class="lang-link" title=${linkTitle}>${lang}</a>
        </div>
       </div>
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
