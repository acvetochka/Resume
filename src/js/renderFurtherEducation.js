import furtherEn from '../data/addition.json';
import furtherDe from '../data/de/addition.json';

const furtherList = document.querySelector('.further-list');
const currentURL = window.location.href;
let further = furtherEn;

function renderFurtherEducation() {
  if (currentURL.includes('de.html')) {
    further = furtherDe;
  } 
  else {
    further = furtherEn;
  }

  const markup = further
    .map(
      ({ name, period, location }) => `<li class="further-item">
            <div class="name_container"><h3 class="further-position">${name}</span>
            </h3>
            <p class="company">${location}</p>
            </div>
            <p class="period">${period}</p>
            
            </li>`
          )
          .join('');
          furtherList.innerHTML = markup;
          
          // <span class="line">|</span>
}

{/* <ul class="further-list">
${duties
  .map(duty => `<li class="further-list-item">${duty}</li>`)
  .join('')}
</ul> */}

renderFurtherEducation();
