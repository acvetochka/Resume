import contacts from '../data/contacts.json';
import icons from '../img/icons.svg';

const contactsList = document.querySelector('.contacts-list');

function renderContacts() {
  const markup = contacts
    .map(({ name, href, text, target, rel, src }) => {
      console.log(src);

      return `
      <li class="contact-item">
       <a href=${href} rel="noopener noreferrer nofollow" target=${target} class="contact-link">
         <svg width="20" height="20" class="github-icon">
            <use width="20" height="20" href="${icons}#icon-${name}" />
         </svg>
        ${text}</a>
      </li>`;
    })
    .join('');

  contactsList.innerHTML = markup;
}

renderContacts();
