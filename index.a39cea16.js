!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=o.parcelRequire0784;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},o.parcelRequire0784=i),i.register("iE7OH",(function(t,o){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,o){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.a39cea16.js","hbV9o":"alona-kuznietsova.8b0e6345.jpg","d9SZC":"icons.b5290343.svg"}'));var r;r=JSON.parse('[{"name":"Alona Kuznietsova","position":"Junior Frontend Developer","description":"I am a Front-End developer. I focus on HTML, CSS, JavaScript, React and am constantly expanding my knowledge in this area. I have experience with SASS preprocessor, BEM methodology, Tailwind CSS and Emotion-styles. I can create adaptive layout and use adaptive graphics in projects. I have experience working as a Team leader and as a Scrum Master in a team project. I can search for and use information from various sources. I am able to quickly learn new activities, easily master the work in new computer programs. I have an analytical mindset. I have experience in remote work."}]');var c;c=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("hbV9o");var s,l=document.querySelector(".about");s=t(r).map((function(e){var o=e.name,n=e.position,a=e.description;return"\n      <img src=".concat(t(c),' alt="photo" class="photo">\n      <div>\n      <h1 class="about-name">').concat(o,'</h1>\n        <h2 class="about-position">').concat(n,'</h2>\n        <p class="about-description">').concat(a,"\n        </p>\n        </div>")})).join(""),l.innerHTML=s;var p;p=JSON.parse('[{"title":"SmileBar","src":"https://smilebarlviv.com/","github":"https://github.com/SoftRyzen-internship/smile_bar","technologies":["Next JS"," Tailwind CSS"," Sanity","Telegram bot API"],"description":["Commercial team project by SoftRyzen. Role: Developer","Responsive, cross-browser website for a professional dental cleaning studio in Lviv. It uses the Sanity administrative panel and Telegram chat bot."]},{"title":"Car Rental","src":"https://acvetochka.github.io/car-rental","github":"https://github.com/acvetochka/car-rental","technologies":["React JS"," Redux Toolkit"," Axios"],"description":["React-App","Car-rental website. On the site, the possibility of filtering cars and adding them to favorites has been                                implemented. The project used Emotion-styled"]},{"title":"Carp Travel","src":"https://carp-travel-xi.vercel.app","github":"https://github.com/acvetochka/carp-travel","technologies":["React JS"," Next.js"," Vercel"],"description":["React-App on the Next.js","Website is a business card offering active recreation in the Carpathians. Features: Responsive Design, Swiper Integration. The project used Tailwind CSS, React Hook Form"]},{"title":"Goose Track","src":"https://nazarmural.github.io/goose-track-project/","github":"https://github.com/acvetochka/goose-track-project","technologies":["React JS","Redux Toolkit","Node.js","Express.js","MongoDB"],"description":["Team-project. Role: Frontend Team Lead, Scrum Master, Developer.","Event calendar management application! The project has Google-authorization. Stylized using Emotion-styled"]},{"title":"Phonebook","src":"https://acvetochka.github.io/Phonebook/","github":"https://github.com/acvetochka/Phonebook","technologies":["React JS","Redux Toolkit","Axios"],"description":["React-App","Application for storing contacts with authorization. The project used Emotion-styled."]},{"title":"Booksheft","src":"https://nazarmural.github.io/project-bookshelf/","github":"https://github.com/NazarMural/project-bookshelf","technologies":["HTML","SASS","JS","Parcel","Rest API","Firebase"],"description":["Team-project. Role: Developer. ","A platform for searching and buying books. Website with a responsive layout. App component with Public and Private routes, AuthPage page logic."]},{"title":"Mimino","src":"https://acvetochka.github.io/mimino/","github":"https://github.com/acvetochka/mimino/","technologies":["HTML","SASS","JS","Parcel"],"description":["Team-project. Role: Team-lead, developer.","Website of the hotel and restaurant complex. Adaptive layout and adaptive graphics were implemented. Build project on github, check for build errors and live page performance."]},{"title":"WebStudio","src":"https://acvetochka.github.io/WebStudio/","github":"https://github.com/acvetochka/WebStudio/","technologies":["HTML5","SASS","BEM","JS"],"description":["Individual project ","Business card site. Adaptive layout and adaptive graphics are implemented in the project."]}]');var u;u=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("d9SZC");var h=document.querySelector(".projects-list");!function(){var e=t(p).map((function(e){var o=e.title,n=e.src,a=e.github,i=e.technologies,r=e.description;return'\n          <li class="project-item">\n            <div class="project">\n              <a href='.concat(a,' target="_blank" class="project-link">\n               <svg width="20" height="20" class="github-icon">\n                <use width="20" height="20" href="').concat(t(u),'#icon-github" />\n               </svg>\n              </a>\n              <a href=').concat(n,' target="_blank" class="project-link">').concat(o,"</a>\n            </div>\n            ").concat(r.map((function(e){return'<p class="project-text">'.concat(e,"</p>")})).join(""),'\n            <p class="project-bracket"> Technologies: ').concat(i.map((function(e){return"".concat(e)})).join(", "),"  </p>\n          </li>")})).join("");h.innerHTML=e}();var d;d=JSON.parse('[{"position":"Leading specialist for the processing of written and electronic objections","date":"July 2021 - August 2021","company":"Ukrposhta","place":"Kyiv, Ukraine","duties":["Handling of complaints from natural and legal persons","Processing of requests from state and local authorities, law enforcement, judicial and regulatory authorities (use of Lotus Notes and the electronic     document management system IT-Enterprise)","Processing of lawyers\' applications"]},{"position":"Chief Specialist of the Postal Security Service","date":"April 2013 - July 2021","company":"Ukrposhta","place":"Kyiv, Ukraine","duties":["Creation, management and maintenance of a database of crimes committed by third parties (in Excel program)","Analysis of data on offences in the field of postal communications","Control of the results of the response of law enforcement and judicial authorities to reports of criminal offences in the company\'s field of activity","Analysis of the results of the work of the security departments in the regions","Preparation of crime reports and analytical certificates to the Ministry of Infrastructure of Ukraine"]}]');var m=document.querySelector(".company-list");!function(){var e=t(d).map((function(e){var t=e.position,o=e.date,n=e.company,a=e.place,i=e.duties;return'<li class="company-item">\n            <h3 class="work-position">'.concat(t,'\n            </h3>\n            <p class="period">').concat(o,'</p>\n            <p class="company">').concat(n,'<span class="line"> | </span>').concat(a,'</p>\n            <ul class="work-list">\n            ').concat(i.map((function(e){return'<li class="work-list-item">'.concat(e,"</li>")})).join(""),"\n            </ul>\n          </li>")})).join("");m.innerHTML=e}();var f;f=JSON.parse('[{"uni":"Odesa National Academy of Telecommunications O.S. Popov","date":"September 2006 - Juny 2010","location":"Odessa, Ukraine","spec":"Telecommunication engineer","degree":"Master\'s degree"},{"uni":"IT School GoIT","date":"November 2022 - October 2023","location":"Kyiv, Ukraine","spec":"Fullstack Developer"},{"uni":"European University","date":"September 2020 - December 2021","location":"Kyiv, Ukraine","spec":"Law ","degree":"Master\'s degree"}]');var g=document.querySelector(".education-list");!function(){var e=t(f).map((function(e){var t,o=e.uni,n=e.date,a=e.location,i=e.spec,r=e.degree;return'<li class="education-item">\n            <h4 class="education-uni">'.concat(o,'</h4>\n            <p class="period">').concat(n,'<span class="line"> | </span>').concat(a,'</p>\n            <p class="education-spec">').concat(i,"\n        ").concat((t=r)?" | "+t:"","</p>\n          </li>")})).join("");g.innerHTML=e}();var v;v=JSON.parse('["HTML5/CSS3/SASS","Responsive/Adaptive design","GIT/Github","JavaScript","REST API","Axios","WebPack","Parcel","React/Redux/Redux Toolkit","Next.js","Node.js","MongoDB","Express.js"]');var b;b=JSON.parse('["Self-motivation","Responsibility","Multitasking","Flexibility","Time Management","Teamwork"]');var S=document.querySelector(".tech-skills-list"),k=document.querySelector(".soft-skills-list");function y(e){return e.map((function(e){return'<li class="soft-skills-item"><span class="soft-skills-text">'.concat(e,"</span></li>")})).join("")}S.innerHTML=y(t(v)),k.innerHTML=y(t(b));var w;w=JSON.parse('[{"title":"English","level":"Pre-Intermediate","cefr":"A2"},{"title":"German","level":"Intermediate","cefr":"B1"},{"title":"Ukrainian","level":"Native","cefr":"C2"},{"title":"Russian","level":"Proficiency","cefr":"C2"}]');var j=document.querySelector(".languages-list");!function(){var e=t(w).map((function(e){var t=e.title,o=e.level,n=e.cefr;return'<li class="languages-item"><span class="languages-text">'.concat(t,": ").concat(o," | ").concat(n,"</span></li>")})).join("");j.innerHTML=e}();var T;T=JSON.parse('[{"src":"tel:+4915141896120","text":"+49(151)418-96-120","target":"_self"},{"src":"mailto:acvetochka@gmail.com","text":"acvetochka@gmail.com","target":"_self"},{"src":"https://t.me/acvetochka","text":"Telegram","target":"_blank","rel":"noopener noreferrer nofollow"},{"src":"https://wa.me/30961270693","text":"WhatsApp","target":"_blank","rel":"noopener noreferrer nofollow"},{"src":"https://www.linkedin.com/in/alona-kuznietsova/","text":"LinkedIn","target":"_blank","rel":"noopener noreferrer nofollow"},{"src":"https://github.com/acvetochka","text":"GitHub","target":"_blank","rel":"noopener noreferrer nofollow"}]');var x=document.querySelector(".contacts-list");!function(){var e=t(T).map((function(e){var t=e.src,o=e.text,n=e.target;e.rel;return'<li class="contact-item">\n   <a href='.concat(t,' rel="noopener noreferrer nofollow" target=').concat(n,' class="contact-link">').concat(o,"</a></li>")})).join("");x.innerHTML=e}()}();
//# sourceMappingURL=index.a39cea16.js.map
