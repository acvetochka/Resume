!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},r=n.parcelRequire0784;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},n.parcelRequire0784=r),r.register("iE7OH",(function(t,n){var i,a;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},a=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,n){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var a={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),a[e]=t),t}})),r("iE7OH").register(JSON.parse('{"EVgbq":"de.ddbc65d3.js","hbV9o":"alona-kuznietsova.8b0e6345.jpg","d9SZC":"icons.31ffc6c0.svg"}'));var o;o=JSON.parse('[{"name":"Alona Kuznietsova","position":"Junior Frontend Developer","description":"I am a Frontend developer, focusing on HTML, CSS, JavaScript, and React, and I am constantly expanding my knowledge in this area. I have experience with the SASS preprocessor, BEM methodology, Tailwind CSS, and Emotion-styles. I can create adaptive layouts and use adaptive graphics in projects. Additionally, I have experience working as a Team Leader and as a Scrum Master in a team project. I am proficient in searching for and using information from various sources. I am able to quickly learn new activities and easily adapt to working with new computer programs. I possess an analytical mindset and have experience in remote work.","link":"./de.html","lang":"DE"}]');var s;s=JSON.parse('[{"name":"Alona Kuznietsova","position":"Junior Frontend Entwicklerin","description":"Ich bin ein Frontend-Entwicklerin und konzentriere mich auf HTML, CSS, JavaScript und React. Ich erweitere ständig mein Wissen in diesem Bereich. Ich habe Erfahrung mit dem SASS-Präprozessor, der BEM-Methodik, Tailwind CSS und Emotion-Styles. Ich kann adaptive Layouts erstellen und adaptive Grafiken in Projekten verwenden. Darüber hinaus habe ich Erfahrung als Teamleiter und als Scrum Master in einem Teamprojekt. Ich kann nach Informationen aus verschiedenen Quellen suchen und diese nutzen. Ich bin in der Lage, mich schnell in neue Tätigkeiten einzuarbeiten und mich problemlos in neue Computerprogramme einzuarbeiten. Ich habe eine analytische Denkweise und Erfahrung in der Arbeit im Homeoffice.","link":"./index.html","lang":"EN"}]');var c;c=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("hbV9o");document.querySelector(".about");var l,u=document.querySelector(".about-container"),d=window.location.href;l=(d.includes("de.html")?t(s):t(o)).map((function(e){var n=e.name,i=e.position,a=e.description,r=e.link,o=e.lang;return'\n      <div class="about-container">\n       <div class="lang">\n        <a href='.concat(r,' class="lang-link">').concat(o,'</a>\n       </div>\n       <div class="photo-wrapper"> \n        <img src=').concat(t(c),' alt="photo" class="photo" width="250" height="250">\n       </div>\n       <div>\n        <h1 class="about-name">').concat(n,'</h1>\n        <h2 class="about-position">').concat(i,'</h2>\n        <p class="about-description">').concat(a,"</p>\n       </div>\n       </div>\n        ")})).join(""),u.innerHTML=l;var p;p=JSON.parse('[{"title":"SmileBar","src":"https://smilebarlviv.com/","github":"https://github.com/SoftRyzen-internship/smile_bar","technologies":["Next JS"," Tailwind CSS"," Sanity","Telegram bot API"],"description":["Commercial team project by SoftRyzen. Role: Developer","Responsive, cross-browser website for a professional dental cleaning studio in Lviv. It uses the Sanity administrative panel and Telegram chat bot."]},{"title":"Car Rental","src":"https://acvetochka.github.io/car-rental","github":"https://github.com/acvetochka/car-rental","technologies":["React JS"," Redux Toolkit"," Axios"],"description":["React-App","Car-rental website. On the site, the possibility of filtering cars and adding them to favorites has been                                implemented. The project used Emotion-styled"]},{"title":"Carp Travel","src":"https://carp-travel-xi.vercel.app","github":"https://github.com/acvetochka/carp-travel","technologies":["React JS"," Next.js"," Vercel"],"description":["React-App on the Next.js","Website is a business card offering active recreation in the Carpathians. Features: Responsive Design, Swiper Integration. The project used Tailwind CSS, React Hook Form"]},{"title":"Goose Track","src":"https://nazarmural.github.io/goose-track-project/","github":"https://github.com/acvetochka/goose-track-project","technologies":["React JS","Redux Toolkit","Node.js","Express.js","MongoDB"],"description":["Team-project. Role: Frontend Team Lead, Scrum Master, Developer.","Event calendar management application! The project has Google-authorization. Stylized using Emotion-styled"]},{"title":"Phonebook","src":"https://acvetochka.github.io/Phonebook/","github":"https://github.com/acvetochka/Phonebook","technologies":["React JS","Redux Toolkit","Axios"],"description":["React-App","Application for storing contacts with authorization. The project used Emotion-styled."]},{"title":"Booksheft","src":"https://nazarmural.github.io/project-bookshelf/","github":"https://github.com/NazarMural/project-bookshelf","technologies":["HTML","SASS","JS","Parcel","Rest API","Firebase"],"description":["Team-project. Role: Developer. ","A platform for searching and buying books. Website with a responsive layout. App component with Public and Private routes, AuthPage page logic."]},{"title":"Mimino","src":"https://acvetochka.github.io/mimino/","github":"https://github.com/acvetochka/mimino/","technologies":["HTML","SASS","JS","Parcel"],"description":["Team-project. Role: Team-lead, developer.","Website of the hotel and restaurant complex. Adaptive layout and adaptive graphics were implemented. Build project on github, check for build errors and live page performance."]},{"title":"WebStudio","src":"https://acvetochka.github.io/WebStudio/","github":"https://github.com/acvetochka/WebStudio/","technologies":["HTML5","SASS","BEM","JS"],"description":["Individual project ","Business card site. Adaptive layout and adaptive graphics are implemented in the project."]}]');var m;m=JSON.parse('[{"title":"SmileBar","src":"https://smilebarlviv.com/","github":"https://github.com/SoftRyzen-internship/smile_bar","technologies":["Next JS"," Tailwind CSS"," Sanity","Telegram bot API"],"description":["Kommerzielles Teamprojekt von SoftRyzen. Rolle: Entwickler","Responsive, plattformübergreifende Website für ein professionelles Studio für Zahnreinigung in Lwiw. Es verwendet das Sanity-Verwaltungspanel und einen Telegram-Chatbot."]},{"title":"Car Rental","src":"https://acvetochka.github.io/car-rental","github":"https://github.com/acvetochka/car-rental","technologies":["React JS"," Redux Toolkit"," Axios"],"description":["React-App","Autovermietungswebsite. Auf der Website wurde die Möglichkeit zur Filterung von Autos und dem Hinzufügen zu den Favoriten umgesetzt. Das Projekt verwendete Emotion-Styles."]},{"title":"Carp Travel","src":"https://carp-travel-xi.vercel.app","github":"https://github.com/acvetochka/carp-travel","technologies":["React JS"," Next.js"," Vercel"],"description":["React-App mit Next.js","Die Website dient als Visitenkarte für aktive Erholung in den Karpaten. Merkmale: responsives Design, Integration von Swiper. Das Projekt verwendete Tailwind CSS und React Hook Form."]},{"title":"Goose Track","src":"https://nazarmural.github.io/goose-track-project/","github":"https://github.com/acvetochka/goose-track-project","technologies":["React JS","Redux Toolkit","Node.js","Express.js","MongoDB"],"description":["Teamprojekt. Rolle: Frontend Team Lead, Scrum Master, Entwickler.","Anwendungsmanagement für den Veranstaltungskalender! Das Projekt verfügt über Google-Autorisierung und ist stilisiert mit Emotion-Styles."]},{"title":"Phonebook","src":"https://acvetochka.github.io/Phonebook/","github":"https://github.com/acvetochka/Phonebook","technologies":["React JS","Redux Toolkit","Axios"],"description":["React-App","Anwendung zur Speicherung von Kontakten mit Autorisierung. Das Projekt verwendete Emotion-Styles."]},{"title":"Booksheft","src":"https://nazarmural.github.io/project-bookshelf/","github":"https://github.com/NazarMural/project-bookshelf","technologies":["HTML","SASS","JS","Parcel","Rest API","Firebase"],"description":["Teamproject. Rolle: Entwickler. ","Plattform zum Suchen und Kaufen von Büchern. Website mit responsivem Layout. App-Komponente mit öffentlichen und privaten Routen sowie Logik für die Authentifizierungsseite."]},{"title":"Mimino","src":"https://acvetochka.github.io/mimino/","github":"https://github.com/acvetochka/mimino/","technologies":["HTML","SASS","JS","Parcel"],"description":["Teamprojekt. Rolle: Team Lead, Entwickler.","Website des Hotel- und Restaurantkomplexes. Eine adaptive Layout- und adaptive Grafik wurden umgesetzt. Das Projekt wurde auf GitHub erstellt, auf Build-Fehler überprüft und die Leistung der Live-Seite überwacht."]},{"title":"WebStudio","src":"https://acvetochka.github.io/WebStudio/","github":"https://github.com/acvetochka/WebStudio/","technologies":["HTML5","SASS","BEM","JS"],"description":["Einzelprojekt","Visitenkarten-Website. Im Projekt wurden ein adaptives Layout und adaptive Grafiken implementiert."]}]');var h;h=r("aNJCr").getBundleURL("EVgbq")+r("iE7OH").resolve("d9SZC");var g=document.querySelector(".projects-list"),f=(document.querySelector(".more-projects-list"),window.location.href);!function(e,n){var i=e.map((function(e){var n=e.title,i=e.src,a=e.github,r=e.technologies,o=e.description;return'\n          <li class="project-item">\n            <div class="project">\n              <a href='.concat(a,' target="_blank" class="project-link">\n               <svg width="20" height="20" class="github-icon">\n                <use width="20" height="20" href="').concat(t(h),'#icon-github" />\n               </svg>\n              </a>\n              <a href=').concat(i,' target="_blank" class="project-link">').concat(n,"</a>\n            </div>\n            ").concat(o.map((function(e){return'<p class="project-text">'.concat(e,"</p>")})).join(""),'\n            <p class="project-bracket"> Technologies: ').concat(r.map((function(e){return"".concat(e)})).join(", "),"  </p>\n          </li>")})).join("");n.innerHTML=i}(f.includes("de.html")?t(m):t(p),g);var v;v=JSON.parse('[{"position":"Leading specialist for the processing of written and electronic objections","date":"July 2021 - August 2021","company":"Ukrposhta","place":"Kyiv, Ukraine","duties":["Handling of complaints from natural and legal persons","Processing of requests from state and local authorities, law enforcement, judicial and regulatory authorities (use of Lotus Notes and the electronic document management system IT-Enterprise)","Processing of lawyers\' applications"]},{"position":"Chief Specialist of the Postal Security Service","date":"April 2013 - July 2021","company":"Ukrposhta","place":"Kyiv, Ukraine","duties":["Creation, management and maintenance of a database of crimes committed by third parties (in Excel program)","Analysis of data on offences in the field of postal communications","Control of the results of the response of law enforcement and judicial authorities to reports of criminal offences in the company\'s field of activity","Analysis of the results of the work of the security departments in the regions","Preparation of crime reports and analytical certificates to the Ministry of Infrastructure of Ukraine"]},{"position":"Office Clerk","date":"January 2008 - April 2013","company":"Inter TV Channel","place":"Kyiv, Ukraine","duties":["Document management","Work with electronic document management (\\"Delo\\", \\"Terrasoft\\" programs)"]},{"position":"Dispatcher","date":"September 2007 - January 2008","company":"Inter TV Channel","place":"Kyiv, Ukraine","duties":["Receiving and forwarding incoming and internal calls"]},{"position":"Postal Service Operator","date":"September 2006 - September 2007","company":"Ukrposhta","place":"Kyiv, Ukraine","duties":["Processing incoming and outgoing post and money transfers","Distributing pensions and financial aid","Selling stamps, goods, and magazines"]}]');var b;b=JSON.parse('[{"position":"Verantwortlicher Mitarbeiterin für die Bearbeitung schriftlicher und elektronischer Einsprüche","date":"July 2021 - August 2021","company":"Ukrposhta","place":"Kiew, Ukraine","duties":["Behandlung von Beschwerden von natürlichen und juristischen Personen","Verarbeitung von Anfragen von staatlichen und lokalen Behörden, Strafverfolgungs-, Justiz- und Regulierungsbehörden (Verwendung von Lotus Notes und dem elektronischen Dokumentenmanagementsystem IT-Enterprise)","Verarbeitung von Anträgen von Anwälten"]},{"position":"Leitender Angestellter von Postsicherung","date":"April 2013 - July 2021","company":"Ukrposhta","place":"Kiew, Ukraine","duties":["Erstellung, Verwaltung und Pflege einer Datenbank von Straftaten, die von Dritten begangen wurden (im Excel-Programm)","Analyse von Daten zu Straftaten im Bereich der Postkommunikation","Kontrolle der Ergebnisse der Reaktion der Strafverfolgungs- und Justizbehörden auf Berichte über Straftaten im Tätigkeitsbereich des Unternehmens","Analyse der Ergebnisse der Arbeit der Sicherheitsabteilungen in den Regionen","Erstellung von Kriminalitätsberichten und analytischen Zertifikaten für das Ministerium für Infrastruktur der Ukraine"]},{"position":"Bürokauffrau","date":"Januar 2008 - April 2013","company":"Inter TV Kanal","place":"Kiew, Ukraine","duties":["Dokumentenmanagement","Arbeit mit elektronischer Dokumentenverwaltung („Delo“, „Terrasoft“-Programme)"]},{"position":"Dispatcherin","date":"September 2007 - Januar 2008","company":"Inter TV Kanal","place":"Kiew, Ukraine","duties":["Eingehende und interne Anrufe empfangen und umleiten"]},{"position":"Kauffrau für Postdienstleistungen","date":"September 2006 - September 2007","company":"Ukrposhta","place":"Kiew, Ukraine","duties":["Verarbeitung von ein- und ausgehenden Postsendungen und Geldüberweisungen","Ausgabe von Renten und Geldleistungen","Implementierung von Briefmarken, Gütern und Zeitschriften"]}]');var k=document.querySelector(".company-list"),S=window.location.href;!function(){var e=(S.includes("de.html")?t(b):t(v)).map((function(e){var t=e.position,n=e.date,i=e.company,a=e.place,r=e.duties;return'<li class="company-item">\n            <div class="position-container"><h3 class="work-position">'.concat(t,'\n            </h3>\n            <p class="period">').concat(n,'</p>\n            </div>\n            <p class="company">').concat(i,'<span class="line"> | </span>').concat(a,'</p>\n            <ul class="work-list">\n            ').concat(r.map((function(e){return'<li class="work-list-item">'.concat(e,"</li>")})).join(""),"\n            </ul>\n          </li>")})).join("");k.innerHTML=e}();var w;w=JSON.parse('[{"name":"IBM Data Science","location":"Coursera","period":"July 2024 - February 2025","degree":"IBM Data Science","href":"https://www.coursera.org/account/accomplishments/professional-cert/7L8PJB19V8I3","date":"02/2025"},{"name":"German course for work - B2","location":"Inlingua Memmingen, Memmingen (Germany)","period":"December 2023 - July 2024","degree":"Telc DTB B2","href":"https://results.telc.net/certificate/e59a4434-def0-4a98-9f1f-0a18ed5c9667/099e5994-3d0e-45c5-a045-a2e4ce733d84/ba614583-64cf-4d94-bca3-7d252ab461f6","date":"07/2024"},{"name":"VueJS Start","location":"ITVDN","period":"May 2024 - June 2024","degree":"VueJS","href":"https://testprovider.com/ru/search-certificate/tp03262156","date":"06/2024"},{"name":"Course \\"Basics DevOps and Kubernetes\\"","location":"Prometheus","period":"March 2024 - May 2024","degree":"Basics of DevOps und Kubernetes","href":"https://certs.prometheus.org.ua/downloads/ca1a768be03f488fabceb66fa91e2c5c/Certificate.pdf","date":"05/2024"},{"name":"TypeScript Course","location":"ITVDN","period":"February 2024 - March 2024","degree":"TypeScript","href":"https://testprovider.com/ru/search-certificate/tp71981169","date":"03/2024"},{"name":"Google Digital Marketing and e-Commerce","location":"Coursera","period":"January 2024 - March 2024","degree":"Digital Marketing and e-Commerce","href":"https://www.coursera.org/account/accomplishments/professional-cert/VUH3LRL3AADW","date":"03/2024"},{"name":"English Intermadiate Course","location":"Study Less School","period":"August 2023 - December 2023","degree":"English B1","href":"https://online.fliphtml5.com/ajgpd/vsal/","date":"12/2023"},{"name":"German integration course","location":"Inlingua Memmingen, Memmingen (Germany)","period":"April 2023 - August 2023","degree":"Telc DTZ B1, LiD","href2":"https://www.linkedin.com/in/alona-kuznietsova/details/certifications/1635544727939/single-media-viewer/?profileId=ACoAADspLvsB65Njn3v9EgSCL9OWgtOLiUx09FU","href":"https://online.fliphtml5.com/ajgpd/hcga/","date":"10/2023"},{"name":"FullStack Developer Course","location":"IT School GoIT, Kyiv (Ukraine)","period":"November 2022 - October 2023","degree":"FullStack Developer","href2":"https://www.linkedin.com/in/alona-kuznietsova/details/certifications/1635544730567/single-media-viewer/?profileId=ACoAADspLvsB65Njn3v9EgSCL9OWgtOLiUx09FU","href":"https://online.fliphtml5.com/ajgpd/eflf/","date":"08/2023"}]');var y;y=JSON.parse('[{"name":"IBM Data Science","location":"Coursera","period":"Juli 2024 - Februar 2025","degree":"IBM Data Science","href":"https://www.coursera.org/account/accomplishments/professional-cert/7L8PJB19V8I3","date":"02/2025"},{"name":"Berufssprachkurs - B2","location":"Inlingua Memmingen, Memmingen","period":"Dezember 2023 - Juli 2024","degree":"Telc DTB B2","href":"https://results.telc.net/certificate/e59a4434-def0-4a98-9f1f-0a18ed5c9667/099e5994-3d0e-45c5-a045-a2e4ce733d84/ba614583-64cf-4d94-bca3-7d252ab461f6","date":"07/2024"},{"name":"VueJS Start","location":"ITVDN","period":"Mai 2024 - Juni 2024","degree":"VueJS","href":"https://testprovider.com/ru/search-certificate/tp03262156","date":"06/2024"},{"name":"Kurs \\"Grundlagen von DevOps und Kubernetes\\"","location":"Prometheus","period":"März 2024 - Mai 2024","degree":"Grundlagen von DevOps und Kubernetes","href":"https://certs.prometheus.org.ua/downloads/ca1a768be03f488fabceb66fa91e2c5c/Certificate.pdf","date":"05/2024"},{"name":"TypeScript Kurs","location":"ITVDN","period":"Februar 2024 - März 2024","degree":"TypeScript","href":"https://testprovider.com/ru/search-certificate/tp71981169","date":"03/2024"},{"name":"Google Digital Marketing and e-Commerce","location":"Coursera","period":"Januar 2024 - März 2024","degree":"Google Digital Marketing and e-Commerce","href":"https://www.coursera.org/account/accomplishments/professional-cert/VUH3LRL3AADW","date":"03/2024"},{"name":"Englisch B1 Kurs","location":"Study Less","period":"August 2023 - Dezember 2023","degree":"Englisch B1","href":"https://online.fliphtml5.com/ajgpd/vsal/","date":"12/2023"},{"name":"Integrationskurs","location":"Inlingua Memmingen, Memmingen","period":"April 2023 - August 2023","degree":"Telc DTZ B1, LiD","href2":"https://www.linkedin.com/in/alona-kuznietsova/details/certifications/1635544727939/single-media-viewer/?profileId=ACoAADspLvsB65Njn3v9EgSCL9OWgtOLiUx09FU","href":"https://online.fliphtml5.com/ajgpd/hcga/","date":"10/2023"},{"name":"FullStack Developer Kurs","location":"IT Schule GoIT, Kiew (Ukraine)","period":"November 2022 - Oktober 2023","degree":"FullStack Developer","href2":"https://www.linkedin.com/in/alona-kuznietsova/details/certifications/1635544730567/single-media-viewer/?profileId=ACoAADspLvsB65Njn3v9EgSCL9OWgtOLiUx09FU","href":"https://online.fliphtml5.com/ajgpd/eflf/","date":"08/2023"}]');var T=document.querySelector(".further-list"),A=window.location.href;!function(){var e=(A.includes("de.html")?t(y):t(w)).map((function(e){var t=e.name,n=e.period,i=e.location;return'<li class="further-item">\n            <div class="name_container"><h3 class="further-position">'.concat(t,'</span>\n            </h3>\n            <p class="company">').concat(i,'</p>\n            </div>\n            <p class="period">').concat(n,"</p>\n            \n            </li>")})).join("");T.innerHTML=e}();var j;j=JSON.parse('[{"position":"Frontend Developer","company":"SoftRyzen","place":"Kyiv, Ukraine","date":"November 2023 - December 2023","duties":["Participated in the development of a website for a professional teeth whitening studio in Lviv (SmileBar)","Developed the \\"Advantages\\" and \\"FAQ\\" sections with tab functionality","Designed visual elements, including backgrounds, animations, and metadata integration","Configured style variables in the tailwind.config file","Studied documentation for Sanity and Telegram Bot API to understand their integration in the project","Collaborated with the team to resolve cross-browser issues, using various libraries to optimize tabs and backgrounds","Worked within an Agile team, utilizing Figma for design and Trello for task management"]},{"position":"Lawyer","company":"Legal Sector of the State Emergency Service of Ukraine","place":"Kyiv, Ukraine","date":"Oktober 2021 - December 2021","duties":["Practiced documentation management and compliance procedures during employee hiring and termination processes","Reviewed and processed case materials, ensuring adherence to procedural standards","Conducted analytical work, including review and drafting of contracts and claims","Collaborated with state systems for process tracking, gaining experience with data management and systemized workflows (e.g., ЄСІТС, АСВП)"]}]');var D;D=JSON.parse('[{"position":"Frontend Entwicklerin","company":"SoftRyzen","place":"Kiew, Ukraine","date":"November 2023 - Dezember 2023","duties":["Teilnahme an der Entwicklung einer Website für ein professionelles Zahnaufhellungsstudio in Lwiw (SmileBar)","Entwicklung der Abschnitte \\"Vorteile\\" und \\"FAQ\\" mit Registerkartenfunktionalität","Gestaltung visueller Elemente, einschließlich Hintergründe, Animationen und Integration von Metadaten","Konfiguration von Stilvariablen in der Datei tailwind.config","Einarbeitung in die Dokumentation von Sanity und Telegram Bot API, um deren Integration in das Projekt zu verstehen","Zusammenarbeit mit dem Team zur Lösung von Kompatibilitätsproblemen, unter Verwendung verschiedener Bibliotheken zur Optimierung von Registerkarten und Hintergründen","Zusammenarbeit mit dem Team nach der Agile-Methodik unter Verwendung von Figma für Design und Trello für Aufgabenmanagement"]},{"position":"Juristin","company":"Rechtsabteilung des Staatlichen Notdienstes der Ukraine","place":"Kiew, Ukraine","date":"Oktober 2021 - Dezember 2021","duties":["Verwaltung von Dokumenten und Sicherstellung der Einhaltung von Verfahren bei der Einstellung und Entlassung von Mitarbeitern","Bearbeitung von Unterlagen und Sicherstellung ihrer Einhaltung der Verfahrensnormen","Analytische Arbeit, einschließlich der Überprüfung und Erstellung von Verträgen und Forderungen","Zusammenarbeit mit staatlichen Systemen zur Überwachung von Fällen, wobei ich Erfahrung im Umgang mit Daten und systematisierten Prozessen (z. B. ЄСІТС, АСВП) gesammelt habe"]}]');var E=document.querySelector(".internship-list"),M=window.location.href;!function(){var e=(M.includes("de.html")?t(D):t(j)).map((function(e){var t=e.position,n=e.date,i=e.company,a=e.place,r=e.duties;return'<li class="internship-item">\n           <div class="position-container"><h3 class="internship-position">'.concat(t,'\n            </h3>\n            <p class="period">').concat(n,'</p>\n            </div> \n            <p class="company">').concat(i,'<span class="line"> | </span>').concat(a,'</p>\n            <ul class="work-list">\n            ').concat(r.map((function(e){return'<li class="work-list-item">'.concat(e,"</li>")})).join(""),"\n            </ul>\n          </li>")})).join("");E.innerHTML=e}();var L;L=JSON.parse('["HTML5","CSS3/SASS","Adaptive design","A11y","GIT/Github","JavaScript","TypeScript","Python","REST API","JSON/Yaml","Axios","WebPack","Parcel","React","Redux","Redux Toolkit","Next.js","Node.js","MongoDB","Express.js","Markdown","Swagger","SQL"]');var R;R=JSON.parse('["Self-motivation","Responsibility","Multitasking","Flexibility","Time Management","Teamwork"]');var I;I=JSON.parse('["Selbstmotivation","Verantwortung","Multitasking","Flexibilität","Zeitmanagement","Teamarbeit"]');var J=document.querySelector(".tech-skills-list"),P=document.querySelector(".soft-skills-list"),B=window.location.href,C=t(R);function x(e){return e.map((function(e){return'<li class="soft-skills-item"><span class="soft-skills-text">'.concat(e,"</span></li>")})).join("")}C=B.includes("de.html")?t(I):t(R),J.innerHTML=x(t(L)),P.innerHTML=x(C);var z;z=JSON.parse('[{"title":"English","level":"Intermediate","cefr":"B1"},{"title":"German","level":"Upper-Intermediate","cefr":"B2"},{"title":"Ukrainian","level":"Native","cefr":"C2"},{"title":"Russian","level":"Proficiency","cefr":"C2"}]');var N;N=JSON.parse('[{"title":"Englisch","level":"Intermediate","cefr":"B1"},{"title":"Deutsch","level":"Upper-Intermediate","cefr":"B2"},{"title":"Ukrainisch","level":"Native","cefr":"C2"},{"title":"Rusisch","level":"Proficiency","cefr":"C2"}]');var O=document.querySelector(".languages-list"),U=window.location.href,F=t(z);F=U.includes("de.html")?t(N):t(z),function(){var e=F.map((function(e){var t=e.title,n=e.level,i=e.cefr;return'<li class="languages-item"><span class="languages-text">'.concat(t,": ").concat(n," | ").concat(i,"</span></li>")})).join("");O.innerHTML=e}();var H;H=JSON.parse('[{"name":"phone","href":"tel:+4915141896120","text":"+49(151)418-96-120","target":"_self","src":"../img/email.svg"},{"name":"email","href":"mailto:acvetochka@gmail.com","text":"acvetochka@gmail.com","target":"_self","src":"../img/email.svg"},{"name":"whatsapp","href":"https://wa.me/30961270693","text":"+380(96)127-06-93","target":"_blank","rel":"noopener noreferrer nofollow","src":"../img/email.svg"},{"name":"linkedin","href":"https://www.linkedin.com/in/alona-kuznietsova/","text":"LinkedIn","target":"_blank","rel":"noopener noreferrer nofollow","src":"../img/email.svg"},{"name":"location","href":"https://maps.app.goo.gl/Rs829S1gaSCQ58WX7","text":"Erkheim, Germany","rel":"noopener noreferrer nofollow","src":"../img/email.svg"},{"name":"github","href":"https://github.com/acvetochka","text":"GitHub","target":"_blank","rel":"noopener noreferrer nofollow","src":"../img/email.svg"}]');var K=document.querySelector(".contacts-list");!function(){var e=t(H).map((function(e){var n=e.name,i=e.href,a=e.text,r=e.target,o=(e.rel,e.src);return console.log(o),'<li class="contact-item">\n   <a href='.concat(i,' rel="noopener noreferrer nofollow" target=').concat(r,' class="contact-link">\n   <svg width="20" height="20" class="github-icon">\n              <use width="20" height="20" href="').concat(t(h),"#icon-").concat(n,'" />\n               </svg>\n   ').concat(a,"</a></li>")})).join("");K.innerHTML=e}();var V=document.querySelector(".addition-list-sidebar"),G=window.location.href;!function(){var e=(G.includes("de.html")?t(y):t(w)).map((function(e){var t=e.href,n=e.date,i=e.degree,a="<a href=".concat(t,' rel="noopener noreferrer nofollow" target="_blank" class="education-course">').concat(i,"</a> ");if(""===t&&(a='<span class="education-course">'.concat(i,"</span>")),n)return'<li class="education-item">\n        <span>\n          '.concat(a,"\n          - ").concat(n,"</span>\n        </li>")})).join("");V.innerHTML=e}();var W;W=JSON.parse('[{"uni":"Odesa National Academy of Telecommunications O.S. Popov","date":"10/2006 - 06/2010","location":"Odessa, Ukraine","spec":"Telecommunication engineer","degree":"Master of Telecommunication"},{"uni":"European University","date":"09/2020 - 12/2021","location":"Kyiv, Ukraine","spec":"Law ","degree":"Master of Law"}]');var _;_=JSON.parse('[{"uni":"Odessa Nationale Akademie für Kommunikation","date":"09/2006 - 06/2010","location":"Odessa, Ukraine","spec":"Telekommunikation Ingenieur","degree":"Master-Abschluss in Telekommunikation"},{"uni":"Europäische Universität","date":"09/2020 - 12/2021","location":"Kiew, Ukraine","spec":"Jura","degree":"Master-Abschluss in Jura"}]');var q=document.querySelector(".education-list-sidebar"),Z=window.location.href;!function(){var e=(Z.includes("de.html")?t(_):t(W)).map((function(e){var t=e.uni,n=e.date,i=e.location,a=(e.spec,e.degree);return'<li class="education-item">\n      <h4 class="education-spec">'.concat(a,'</h4>\n      <p class="education-uni">').concat(t,'</p>\n      <p class="period">').concat(n,'<span class="line"> | </span>').concat(i,"</p>\n      </li>")})).join("");q.innerHTML=e}(),document.getElementById("downloadPDF").addEventListener("click",(function(){var e=document.body;html2pdf().from(e).set({margin:1,filename:"page.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:1},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}}).save()})),document.getElementById("openPdfLink").addEventListener("click",(function(e){e.preventDefault(),fetch("/generate-pdf").then((function(e){e.ok?window.open("/pdfs/page.pdf","_blank"):alert("PDF generation failed. Please try again later.")})).catch((function(e){console.error("Error generating PDF:",e),alert("An error occurred while generating PDF.")}))}))}();
//# sourceMappingURL=de.ddbc65d3.js.map
