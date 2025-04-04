// import techSkills from '../data/techSkills.json';
import softSkillsEn from '../data/softSkills.json';
import softSkillsDe from '../data/de/softSkills.json';

// const techSkillsList = document.querySelector('.tech-skills-list');
const softSkillsList = document.querySelector('.soft-skills-list');

const currentURL = window.location.href;
let softSkills = softSkillsEn;

if (currentURL.includes('de.html')) {
  softSkills = softSkillsDe;
} else {
  softSkills = softSkillsEn;
}

function renderSkills(arr) {
  const markup = arr
    .map(
      item =>
        `<li class="soft-skills-item"><span class="soft-skills-text">${item}</span></li>`
    )
    .join('');
  return markup;
}

// techSkillsList.innerHTML = renderSkills(techSkills);
softSkillsList.innerHTML = renderSkills(softSkills);
