import projectsEn from '../data/projects.json';
import projectsDe from '../data/de/projects.json';
import gitIcon from 'url:../img/icons.svg';

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
    .map(({ title, src, github, technologies, description, date }) => {
      return `
          <li class="project-item">
            <div class="project-name-wrapper">
            <div class="project">
              <a href=${github} target="_blank" class="project-link">
               <svg width="20" height="20" class="github-icon">
                <use width="20" height="20" xlink:href="${gitIcon}#icon-github" />
               </svg>
              </a>
              <a href=${src} target="_blank" class="project-link">${title}</a>
            </div>
            <div class="project-date">
            ${date.map(item => `<p >${item}</p>`).join('')}
            </div>
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

// function renderButtonHidden() {
//   const buttonHidden = () => {
//     return `<li><button class="button-hidden">Hidden</button></li>`;
//   };

//   moreProjectList.insertAdjacentHTML('afterend', buttonHidden());
//   const button = document.querySelector('.button-hidden');

//   button.addEventListener('click', handleClick);

//   function handleClick() {
//     // button.style.display = 'none';
//     moreProjectList.style.display = 'none';
//     button.style.display = 'none';
//   }
// }

// function renderProjects() {
//   if (currentURL.includes('de.html')) {
//     projects = projectsDe;
//   } else {
//     projects = projectsEn;
//   }

//   // const firstProjects = projects.slice(0, 3);
//   // const additionProjects = projects.slice(3);

//   // render(firstProjects, projectList);
//   // // renderButtonHidden();
//   // renderButton();
//   // render(additionProjects, moreProjectList);
//   render(projects, projectList)
// }

// renderProjects();
