import about from '../data/about.json';
import photo from '../img/alona-kuznietsova.jpg';

const aboutSection = document.querySelector('.about');
  
function renderAbout() {
  const markup = about
    .map(
      ({ name, position, description }) => `
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
