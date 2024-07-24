import contacts from '../data/contacts.json';
import email from '../img/email.svg';
import linkedin from '../img/linkedin.svg';
import phone from '../img/phone.svg';
import whatsapp from '../img/whatsapp.svg';
import github from '../img/whatsapp.svg';



const contactsList = document.querySelector('.contacts-list');

function getIcon(name, src){
  switch(name){
    case "phone":
      src = phone;
      break;
    case "email":
      src = email;
      break;
    case "linkedin":
      src = linkedin;
      break;
    case "whatsapp":
      src = whatsapp;
      break;
    case "github":
      src = github;
      break;
    case "telegram":
      src= phone;
      break;
    default:
      break;
    }
}

let src = "";

function renderContacts() {

  const markup = contacts
    .map(
      ({ name, href, text, target, rel, src }) => {
        // getIcon(name, src);
        console.log(src);

        return `<li class="contact-item">
   <a href=${href} rel="noopener noreferrer nofollow" target=${target} class="contact-link">
   ${text}</a></li>`}
  )
  .join('');
  
  contactsList.innerHTML = markup;
}

//<img src='../img/${name}.svg'/>
renderContacts();
