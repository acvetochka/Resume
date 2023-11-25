import projects from './data/projects.json';

const projectList = document.querySelector('.projects-list');

function renderProjects() {
  const markup = projects
    .map(({ title, src, github, technologies, description }) => {
      return `
          <li class="project-item">
            <div class="project">
              <a href=${src} target="_blank" class="project-link">${title}</a>
              <a href=${github} target="_blank" class="project-link">Github</a>
              <span class="project-bracket"> [ ${technologies
                .map(item => `${item}`)
                .join(', ')} ] </span>
            </div>
            ${description.map(item => `<p>${item}</p>`).join('')}
          </li>`;
    })
    .join('');
  projectList.innerHTML = markup;
}

renderProjects();
