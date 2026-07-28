import { getData } from "../utils/getData";

const techSkillsList = document.querySelector('.tech-skills-list');

function renderTechSkills() {
  const techSkills = getData('techSkills');

  const markup = techSkills
    .map(techSkill => {
      const { name, skills } = techSkill;

      return `<li class="tech-skills-category">
          <p class="tech-skills-name">${name}</p>
          <ul class="tech-skills-category-list">
          ${skills
          .map(skill => {
            return `<li class="tech-skills-item">${skill}</li>`;
          })
          .join('')}
          </ul>
        </li>`;
    })
    .join('');

  techSkillsList.innerHTML = markup;
}

renderTechSkills();
