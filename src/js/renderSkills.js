import { getData } from "../utils/getData";


const softSkillsList = document.querySelector('.soft-skills-list');

const softSkills = getData('softSkills');

function renderSkills(arr) {
  const markup = arr
    .map(
      item =>
        `<li class="soft-skills-item"><span class="soft-skills-text">${item}</span></li>`
    )
    .join('');
  return markup;
}

softSkillsList.innerHTML = renderSkills(softSkills);
