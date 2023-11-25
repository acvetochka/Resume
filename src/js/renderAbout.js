import about from '../data/about.json';

const aboutSection = document.querySelector('.about');

function renderAbout() {
  const markup = about
    .map(
      ({ name, position, description }) => `<h1 class="about-name">${name}</h1>
        <h2 class="about-position">${position}</h2>
        <p class="about-description">${description}
        </p>`
    )
    .join('');
  aboutSection.innerHTML = markup;
}

renderAbout();
