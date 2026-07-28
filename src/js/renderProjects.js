import projectsEn from '../data/projects.json';
import projectsDe from '../data/de/projects.json';
// import gitIcon from 'url:../img/icons.svg';

const projectList = document.querySelector('.projects-list');
const moreProjectList = document.querySelector('.more-projects-list');

const currentURL = window.location.href;
let projects = projectsEn;

if (currentURL.includes('de.html')) {
  projects = projectsDe;
} else {
  projects = projectsEn;
}

function render(arr, projects) {
  const markup = arr
    .map(
      ({ title, src, github, technologies, text = [], description, date }) => {
        const linkTitle = title.split(' ').join('_');
        return `
          <li class="project-item">
            <div class="project-name-wrapper">
            <div class="project">
              <a href=${github} target="_blank" class="project-link" title=${`Code-${linkTitle}`}>
               <svg width="20" height="20" class="github-icon">
                <use width="20" height="20" xlink:href="#icon-github" />
               </svg>
              </a>
              <a href=${src} target="_blank" class="project-link" title=${`Website-${linkTitle}`}>${title}</a>
            </div>
            <div class="project-date">
            ${date.map(item => `<p >${item}</p>`).join('')}
            </div>
            </div>
            <ul class="technologies-list">
            ${technologies
            .map(skill => `<li class="technology-item">${skill}</li>`)
            .join('')}
            </ul>
            ${text &&
          text
            .map(item => `<p class="project-text text">${item}</p>`)
            .join('')
          }
            <ul class="work-list">
            ${description
            .map(item => `<li class="work-list-item">${item}</li>`)
            .join('')}
            </ul>
          </li>`;
      }
    )
    .join('');
  projects.innerHTML = markup;
}

render(projects, projectList);

function renderButton() {
  const buttonSeeMore = () => {
    return `<li><button class="button-more">See more projects</button></li>`;
  };

  projectList.insertAdjacentHTML('beforeend', buttonSeeMore());

  const button = document.querySelector('.button-more');
  // const buttonHidden = document.querySelector('.button-hidden');

  button.addEventListener('click', handleClick);

  function handleClick() {
    button.style.display = 'none';
    moreProjectList.style.display = 'block';
    // buttonHidden.style.display = 'block';
  }
}
