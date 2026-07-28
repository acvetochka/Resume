// import eduEn from '../data/education.json';
// import eduDe from '../data/de/education.json';

// const eduList = document.querySelector('.education-list');
// const currentURL = window.location.href;
// let edu = eduEn;

// function renderEducation() {
//   if (currentURL.includes('de.html')) {
//     edu = eduDe;
//   } else {
//     edu = eduEn;
//   }

//   const markup = edu
//     .map(({ uni, date, location, spec, degree }) => {
//       const deg = degree => {
//         if (degree) {
//           return ' | ' + degree;
//         } else {
//           return '';
//         }
//       };

//       return `<li class="education-item">
//       <h4 class="education-spec">${degree}</h4>
//       <p class="education-uni">${uni}</p>
//       <p class="period">${date}<span class="line"> | </span>${location}</p>
//       </li>`;
//     })
//     .join('');

//     // ${deg(degree)}</p>
//   eduList.innerHTML = markup;
// }

// renderEducation();
