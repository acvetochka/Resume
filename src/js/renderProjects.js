import projectsEn from '../data/projects.json';
import projectsDe from '../data/de/projects.json';
import gitIcon from '../img/icons.svg';

const projectList = document.querySelector('.projects-list');
const moreProjectList = document.querySelector('.more-projects-list');

const currentURL = window.location.href;
let projects = projectsEn;

function render(arr, projects) {
  const markup = arr
    .map(({ title, src, github, technologies, description }) => {
      return `
          <li class="project-item">
            <div class="project">
              <a href=${github} target="_blank" class="project-link">
               <svg width="20" height="20" class="github-icon">
                <use width="20" height="20" href="${gitIcon}#icon-github" />
               </svg>
              </a>
              <a href=${src} target="_blank" class="project-link">${title}</a>
            </div>
            ${description
              .map(item => `<p class="project-text">${item}</p>`)
              .join('')}
            <p class="project-bracket"> Technologies: ${technologies
              .map(item => `${item}`)
              .join(', ')}  </p>
          </li>`;
    })
    .join('');
  projects.innerHTML = markup;
}

function renderButton() {
  const buttonSeeMore = () => {
    return `<li><button class="button-more">See more</button></li>`;
  };

  projectList.insertAdjacentHTML('beforeend', buttonSeeMore());

  const button = document.querySelector('.button-more');

  button.addEventListener('click', handleClick);

  function handleClick(e) {
    button.style.display = 'none';
    moreProjectList.style.display = 'block';
  }
}

function renderProjects() {
  if (currentURL.includes('de.html')) {
    projects = projectsDe;
  } else {
    projects = projectsEn;
  }

  const firstProjects = projects.slice(0, 3);
  const additionProjects = projects.slice(3);

  // const markupFirstProjects =
  render(firstProjects, projectList);
  renderButton();
  render(additionProjects, moreProjectList);

  // console.log(button);
  // const markup = projects
  //   .map(({ title, src, github, technologies, description }) => {
  //     return `
  //         <li class="project-item">
  //           <div class="project">
  //             <a href=${github} target="_blank" class="project-link">
  //              <svg width="20" height="20" class="github-icon">
  //               <use width="20" height="20" href="${gitIcon}#icon-github" />
  //              </svg>
  //             </a>
  //             <a href=${src} target="_blank" class="project-link">${title}</a>
  //           </div>
  //           ${description
  //             .map(item => `<p class="project-text">${item}</p>`)
  //             .join('')}
  //           <p class="project-bracket"> Technologies: ${technologies
  //             .map(item => `${item}`)
  //             .join(', ')}  </p>
  //         </li>`;
  //   })
  //   .join('');
  // // projectList.innerHTML = markup;
  // projectList.insertAdjacentHTML('beforeend', markup);
}

renderProjects();

// <div class="project-link-group"></div>
// <img class="project-icon" alt="github icon" src=${gitIcon} width="20" height="20"/>
// <div width="20" height="20"></div>
