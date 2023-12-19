function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},a=n.parcelRequire0784;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequire0784=a),a.register("kyEFX",(function(t,n){var i,o;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"5ZPII":"de.a042d56a.js","81AOh":"alona-kuznietsova.8b0e6345.jpg","hm5VY":"icons.b5290343.svg"}'));var r;r=JSON.parse('[{"name":"Alona Kuznietsova","position":"Junior Frontend Developer","description":"I am a Frontend developer, focusing on HTML, CSS, JavaScript, and React, and I am constantly expanding my knowledge in this area. I have experience with the SASS preprocessor, BEM methodology, Tailwind CSS, and Emotion-styles. I can create adaptive layouts and use adaptive graphics in projects. Additionally, I have experience working as a Team Leader and as a Scrum Master in a team project. I am proficient in searching for and using information from various sources. I am able to quickly learn new activities and easily adapt to working with new computer programs. I possess an analytical mindset and have experience in remote work.","link":"./de.html","lang":"DE"}]');var s;s=JSON.parse('[{"name":"Alona Kuznietsova","position":"Junior Frontend Entwicklerin","description":"Ich bin ein Frontend-Entwicklerin und konzentriere mich auf HTML, CSS, JavaScript und React. Ich erweitere ständig mein Wissen in diesem Bereich. Ich habe Erfahrung mit dem SASS-Präprozessor, der BEM-Methodik, Tailwind CSS und Emotion-Styles. Ich kann adaptive Layouts erstellen und adaptive Grafiken in Projekten verwenden. Darüber hinaus habe ich Erfahrung als Teamleiter und als Scrum Master in einem Teamprojekt. Ich kann nach Informationen aus verschiedenen Quellen suchen und diese nutzen. Ich bin in der Lage, mich schnell in neue Tätigkeiten einzuarbeiten und mich problemlos in neue Computerprogramme einzuarbeiten. Ich habe eine analytische Denkweise und Erfahrung in der Arbeit im Homeoffice.","link":"./index.html","lang":"EN"}]');var c;c=new URL(a("kyEFX").resolve("81AOh"),import.meta.url).toString();const l=document.querySelector(".about"),p=window.location.href;let u=t(r);!function(){u=p.includes("de.html")?t(s):t(r),console.log(p);const e=u.map((({name:e,position:n,description:i,link:o,lang:a})=>`\n      <div class="lang">\n        <a href=${o} class="lang-link">${a}</a>\n      </div>\n      <div class="photo-wrapper"> \n        <img src=${t(c)} alt="photo" class="photo" width="250" height="250">\n      </div>\n      <div>\n      <h1 class="about-name">${e}</h1>\n        <h2 class="about-position">${n}</h2>\n        <p class="about-description">${i}\n        </p>\n        </div>`)).join("");l.innerHTML=e}();var d;d=JSON.parse('[{"title":"SmileBar","src":"https://smilebarlviv.com/","github":"https://github.com/SoftRyzen-internship/smile_bar","technologies":["Next JS"," Tailwind CSS"," Sanity","Telegram bot API"],"description":["Commercial team project by SoftRyzen. Role: Developer","Responsive, cross-browser website for a professional dental cleaning studio in Lviv. It uses the Sanity administrative panel and Telegram chat bot."]},{"title":"Car Rental","src":"https://acvetochka.github.io/car-rental","github":"https://github.com/acvetochka/car-rental","technologies":["React JS"," Redux Toolkit"," Axios"],"description":["React-App","Car-rental website. On the site, the possibility of filtering cars and adding them to favorites has been                                implemented. The project used Emotion-styled"]},{"title":"Carp Travel","src":"https://carp-travel-xi.vercel.app","github":"https://github.com/acvetochka/carp-travel","technologies":["React JS"," Next.js"," Vercel"],"description":["React-App on the Next.js","Website is a business card offering active recreation in the Carpathians. Features: Responsive Design, Swiper Integration. The project used Tailwind CSS, React Hook Form"]},{"title":"Goose Track","src":"https://nazarmural.github.io/goose-track-project/","github":"https://github.com/acvetochka/goose-track-project","technologies":["React JS","Redux Toolkit","Node.js","Express.js","MongoDB"],"description":["Team-project. Role: Frontend Team Lead, Scrum Master, Developer.","Event calendar management application! The project has Google-authorization. Stylized using Emotion-styled"]},{"title":"Phonebook","src":"https://acvetochka.github.io/Phonebook/","github":"https://github.com/acvetochka/Phonebook","technologies":["React JS","Redux Toolkit","Axios"],"description":["React-App","Application for storing contacts with authorization. The project used Emotion-styled."]},{"title":"Booksheft","src":"https://nazarmural.github.io/project-bookshelf/","github":"https://github.com/NazarMural/project-bookshelf","technologies":["HTML","SASS","JS","Parcel","Rest API","Firebase"],"description":["Team-project. Role: Developer. ","A platform for searching and buying books. Website with a responsive layout. App component with Public and Private routes, AuthPage page logic."]},{"title":"Mimino","src":"https://acvetochka.github.io/mimino/","github":"https://github.com/acvetochka/mimino/","technologies":["HTML","SASS","JS","Parcel"],"description":["Team-project. Role: Team-lead, developer.","Website of the hotel and restaurant complex. Adaptive layout and adaptive graphics were implemented. Build project on github, check for build errors and live page performance."]},{"title":"WebStudio","src":"https://acvetochka.github.io/WebStudio/","github":"https://github.com/acvetochka/WebStudio/","technologies":["HTML5","SASS","BEM","JS"],"description":["Individual project ","Business card site. Adaptive layout and adaptive graphics are implemented in the project."]}]');var h;h=new URL(a("kyEFX").resolve("hm5VY"),import.meta.url).toString();const m=document.querySelector(".projects-list");!function(){const e=t(d).map((({title:e,src:n,github:i,technologies:o,description:a})=>`\n          <li class="project-item">\n            <div class="project">\n              <a href=${i} target="_blank" class="project-link">\n               <svg width="20" height="20" class="github-icon">\n                <use width="20" height="20" href="${t(h)}#icon-github" />\n               </svg>\n              </a>\n              <a href=${n} target="_blank" class="project-link">${e}</a>\n            </div>\n            ${a.map((e=>`<p class="project-text">${e}</p>`)).join("")}\n            <p class="project-bracket"> Technologies: ${o.map((e=>`${e}`)).join(", ")}  </p>\n          </li>`)).join("");m.innerHTML=e}();var g;g=JSON.parse('[{"position":"Leading specialist for the processing of written and electronic objections","date":"July 2021 - August 2021","company":"Ukrposhta","place":"Kyiv, Ukraine","duties":["Handling of complaints from natural and legal persons","Processing of requests from state and local authorities, law enforcement, judicial and regulatory authorities (use of Lotus Notes and the electronic     document management system IT-Enterprise)","Processing of lawyers\' applications"]},{"position":"Chief Specialist of the Postal Security Service","date":"April 2013 - July 2021","company":"Ukrposhta","place":"Kyiv, Ukraine","duties":["Creation, management and maintenance of a database of crimes committed by third parties (in Excel program)","Analysis of data on offences in the field of postal communications","Control of the results of the response of law enforcement and judicial authorities to reports of criminal offences in the company\'s field of activity","Analysis of the results of the work of the security departments in the regions","Preparation of crime reports and analytical certificates to the Ministry of Infrastructure of Ukraine"]}]');const f=document.querySelector(".company-list");!function(){const e=t(g).map((({position:e,date:t,company:n,place:i,duties:o})=>`<li class="company-item">\n            <h3 class="work-position">${e}\n            </h3>\n            <p class="period">${t}</p>\n            <p class="company">${n}<span class="line"> | </span>${i}</p>\n            <ul class="work-list">\n            ${o.map((e=>`<li class="work-list-item">${e}</li>`)).join("")}\n            </ul>\n          </li>`)).join("");f.innerHTML=e}();var v;v=JSON.parse('[{"uni":"Odesa National Academy of Telecommunications O.S. Popov","date":"September 2006 - Juny 2010","location":"Odessa, Ukraine","spec":"Telecommunication engineer","degree":"Master\'s degree"},{"uni":"IT School GoIT","date":"November 2022 - October 2023","location":"Kyiv, Ukraine","spec":"Fullstack Developer"},{"uni":"European University","date":"September 2020 - December 2021","location":"Kyiv, Ukraine","spec":"Law ","degree":"Master\'s degree"}]');const b=document.querySelector(".education-list");!function(){const e=t(v).map((({uni:e,date:t,location:n,spec:i,degree:o})=>{return`<li class="education-item">\n            <h4 class="education-uni">${e}</h4>\n            <p class="period">${t}<span class="line"> | </span>${n}</p>\n            <p class="education-spec">${i}\n        ${a=o,a?" | "+a:""}</p>\n          </li>`;var a})).join("");b.innerHTML=e}();var k;k=JSON.parse('["HTML5/CSS3/SASS","Responsive/Adaptive design","GIT/Github","JavaScript","REST API","Axios","WebPack","Parcel","React/Redux/Redux Toolkit","Next.js","Node.js","MongoDB","Express.js"]');var S;S=JSON.parse('["Self-motivation","Responsibility","Multitasking","Flexibility","Time Management","Teamwork"]');const y=document.querySelector(".tech-skills-list"),w=document.querySelector(".soft-skills-list");function T(e){return e.map((e=>`<li class="soft-skills-item"><span class="soft-skills-text">${e}</span></li>`)).join("")}y.innerHTML=T(t(k)),w.innerHTML=T(t(S));var j;j=JSON.parse('[{"title":"English","level":"Pre-Intermediate","cefr":"A2"},{"title":"German","level":"Intermediate","cefr":"B1"},{"title":"Ukrainian","level":"Native","cefr":"C2"},{"title":"Russian","level":"Proficiency","cefr":"C2"}]');const x=document.querySelector(".languages-list");!function(){const e=t(j).map((({title:e,level:t,cefr:n})=>`<li class="languages-item"><span class="languages-text">${e}: ${t} | ${n}</span></li>`)).join("");x.innerHTML=e}();var A;A=JSON.parse('[{"src":"tel:+4915141896120","text":"+49(151)418-96-120","target":"_self"},{"src":"mailto:acvetochka@gmail.com","text":"acvetochka@gmail.com","target":"_self"},{"src":"https://t.me/acvetochka","text":"Telegram","target":"_blank","rel":"noopener noreferrer nofollow"},{"src":"https://wa.me/30961270693","text":"WhatsApp","target":"_blank","rel":"noopener noreferrer nofollow"},{"src":"https://www.linkedin.com/in/alona-kuznietsova/","text":"LinkedIn","target":"_blank","rel":"noopener noreferrer nofollow"},{"src":"https://github.com/acvetochka","text":"GitHub","target":"_blank","rel":"noopener noreferrer nofollow"}]');const R=document.querySelector(".contacts-list");!function(){const e=t(A).map((({src:e,text:t,target:n,rel:i})=>`<li class="contact-item">\n   <a href=${e} rel="noopener noreferrer nofollow" target=${n} class="contact-link">${t}</a></li>`)).join("");R.innerHTML=e}();
//# sourceMappingURL=de.a042d56a.js.map
