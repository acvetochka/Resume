// import contacts from '../data/contacts.json';
import {contacts} from '../data/contacts.js';

const contactsList = document.querySelector('.contacts-list');


let src = "";

function renderContacts() {

  const markup = contacts
    .map(
      ({ name, href, text, target, rel, src }) => {
        console.log(src);

        return `<li class="contact-item">
   <a href=${href} rel="noopener noreferrer nofollow" target=${target} class="contact-link">
   <img width="20" height="20" src=${src}/>
   ${text}</a></li>`}
  )
  .join('');
  
  contactsList.innerHTML = markup;
}

//<img src='../img/${name}.svg'/>
renderContacts();
