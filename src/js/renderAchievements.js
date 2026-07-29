import { getData } from "../utils/getData";


const achievementsList = document.querySelector('.achievements-list');

function renderAchievements() {
  // const internship = getData('internship');
  const achievements = getData('achievements');

  const markup = achievements
    .map(
      ({ title, description }) => `<li class="achievement-item">
           <h3 class="internship-position">${title}
            </h3>
            <p class="achievement-text">${description}</p>
                   
            </li>`
    )
    .join('');
  achievementsList.innerHTML = markup;

}

renderAchievements();
//   <p class="company">${company}<span class="line"> | </span>${place}</p>
//    <ul class="technologies-list">
//   ${technologies
// .map(skill => `<li class="technology-item">${skill}</li>`)
// .join('')}
//   </ul>
//   <ul class="work-list">
//   ${duties
// .map(duty => `<li class="work-list-item">${duty}</li>`)
// .join('')}
//   </ul>