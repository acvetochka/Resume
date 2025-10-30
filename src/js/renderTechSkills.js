import techSkillsEn from '../data/techSkills.json';
import techSkillsDe from '../data/de/techSkills.json';

const techSkillsList = document.querySelector('.tech-skills-list');

const currentURL = window.location.href;
let techSkills = techSkillsEn;

if (currentURL.includes('de.html')) {
  techSkills = techSkillsDe;
} else {
  techSkills = techSkillsEn;
}

function renderTechSkills() {
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
