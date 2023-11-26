import techSkills from '../data/techSkills.json';
import softSkills from '../data/softSkills.json';

const techSkillsList = document.querySelector('.tech-skills-list');
const softSkillsList = document.querySelector('.soft-skills-list');

function renderSkills(arr) {
  const markup = arr
    .map(
      item =>
        `<li class="soft-skills-item"><span class="soft-skills-text">${item}</span></li>`
    )
    .join('');
  return markup;
}

techSkillsList.innerHTML = renderSkills(techSkills);
softSkillsList.innerHTML = renderSkills(softSkills);
