import contacts from '../data/contacts.json';

const contactsList = document.querySelector('.contacts-list');

function renderContacts() {
  const markup = contacts
    .map(
      ({ src, text, target, rel }) => `<li class="contact-item">
   <a href=${src} rel="noopener noreferrer nofollow" target=${target} class="contact-link">${text}</a></li>`
    )
    .join('');

  contactsList.innerHTML = markup;
}

renderContacts();
