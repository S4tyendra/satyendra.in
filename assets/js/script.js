"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  //modalContainer.classList.toggle("active");
  //overlay.classList.toggle("active");
};

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    filterItems[i].classList.remove("active");
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    for (let i = 0; i < filterItems.length; i++) {
      filterItems[i].classList.remove("active");
    }
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        try {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        } catch (error) {
          console.log(error);
        }
      }
    }
  });
}

function removeActive() {
  for (let i = 0; i < pages.length; i++) {
    try {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    } catch (_) {
      pages[i].classList.remove("active");
      navigationLinks[i].classList.remove("active");
    }
  }
}

function change(data) {
  window.history.pushState("", "", data);
}

const onPopState = function (event) {
  try {
    try {
      removeActive();
    } catch (error) {}

    const url = document.location.pathname;
    const clsnm = url.replaceAll("/", "");
    // alert(clsnm);
    let myList = ["skills", "studies", "projects", "blog", "contact", ""];
    if (myList.includes(clsnm)) {
      if (url === "/") {
        pages[0].classList.add("active");
        navigationLinks[0].classList.add("active");
      } else {
        const button = document.getElementById("" + clsnm);
        try {
          button.classList.add("active");
        } catch (_) {
          console.log(_);
        }
        const elements = document.querySelectorAll("." + clsnm);

        if (elements.length > 0) {
          elements.forEach((element) => {
            element.classList.add("active");
          });
        }
      }
    } else {
      document.querySelector(".notfndpage").classList.add("active");
      // navigationLinks[0].classList.add("active");
    }

    console.log(url);
  } catch (error) {
    window.history.back();
    alert("Something terrible happened.");
  }
};
window.addEventListener("popstate", onPopState);

// async function typewrite() {
//     const text1 = `As a versatile developer with a passion for technology, I have a diverse range of skills that I bring to the table. I am a skilled backend developer with expertise in creating frontend applications, websites, and web scraping.`;
//     const text2 = `My ability to work seamlessly with teams has helped me to develop effective communication and collaboration skills, enabling me to contribute meaningfully to any project. I am also a quick learner, always eager to learn new technologies and improve my skills.`;
//     const text3 = `
// In addition to my technical expertise, I am a detail-oriented individual who takes pride in delivering high-quality work. My commitment to excellence is reflected in my portfolio, which showcases my ability to create user-friendly, functional, and visually appealing applications.
//   `;
//     const text4 = `
// Whether you need a developer who can handle complex backend processes or create stunning frontend interfaces, I have the skills and expertise to meet your needs. Contact me today to learn more about how I can help bring your project to life.
//   `;
//     const p1 = document.getElementById("p1");

//     let i = 0;
//     const intervalId = setInterval(() => {
//         p1.textContent += text1[i];
//         i++;
//         if (i === text1.length) {
//             clearInterval(intervalId);
//         }
//     }, 10);
//     const p2 = document.getElementById("p2");

//     let j = 0;
//     const intervalId1 = setInterval(() => {
//         p2.textContent += text2[j];
//         j++;
//         if (j === text2.length) {
//             clearInterval(intervalId1);
//         }
//     }, 10);
// }

const text1 = `With a wide range of expertise in security, backend, and frontend development, I possess a versatile skill set that allows me to create robust and secure applications while delivering exceptional user experiences.`;
const text2 = `My ability to work seamlessly with teams has helped me to develop effective communication and collaboration skills, enabling me to contribute meaningfully to any project. I am also a quick learner, always eager to learn new technologies and improve my skills.`;
const text3 = `
In addition to my technical expertise, I am a detail-oriented individual who takes pride in delivering high-quality work. My commitment to excellence is reflected in my portfolio, which showcases my ability to create user-friendly, functional, and visually appealing applications.
`;
const text4 = `
Whether you need a developer who can handle complex backend processes or create stunning frontend interfaces, I have the skills and expertise to meet your needs. Contact me today to learn more about how I can help bring your project to life.
`;

function animateText(text, p) {
  return new Promise((resolve) => {
    let i = 0;
    const intervalId = setInterval(() => {
      p.textContent = text.slice(0, i) + ` |`;
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        resolve();
      }
    }, 25);
  });
}

async function runAnimation() {
  const paragraphs = [
    { text: text1, element: document.getElementById("p1") },
    { text: text2, element: document.getElementById("p2") },
    { text: text3, element: document.getElementById("p3") },
    { text: text4, element: document.getElementById("p4") },
  ];

  for (const { text, element } of paragraphs) {
    await animateText(text, element);
    element.textContent = element.textContent.replace(" |", " ");
  }
}

window.addEventListener("load", () => {
  // Remove the active class to hide the preloader
  setTimeout(() => {
    runAnimation();
  }, 20);
  if (window.location.href.includes("?showSocial=true")) {
    showLoading();
    setTimeout(() => {
      hideMain();
      setTimeout(() => {
        showBtns();
        showMain();
        addLinks();
      }, 200);
    }, 2000);

    const newUrl = window.location.href.replaceAll("?showSocial=true", "");
    window.history.pushState(null, "", newUrl);
  }
});

function sendmsg() {
  showSnackbar(
    "Failed to send message. Use any above links to contact me.\nApologies for the inconvenience.\n"
  );
}

function showSnackbar(msg) {
  var snackbar = document.getElementById("snackbar");
  snackbar.textContent = msg;
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 6000);
}

function addLinks() {
  let btn = document.querySelector(".form-btn");
  btn.addEventListener("click", sendmsg);

  const cards = document.getElementsByClassName("card");
  const usernames = [
    "s4tyendra",
    "s4tyendra",
    "s4tyendra",
    "s4tyendra",
    "s4tyendra",
    "918790863694",
    "satyendra_xd",
    "s4tyendra",
    "s4tyendra",
    "s4tyendra",
  ];
  const platforms = [
    "facebook",
    "instagram",
    "twitter",
    "linkedin",
    "youtube",
    "whatsapp",
    "snapchat",
    "github",
    "reddit",
    "telegram",
  ];

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const username = usernames[i];
    const platform = platforms[i];

    card.addEventListener("click", function () {
      openLink(platform, username);
    });
  }
}

function openLink(platform, username) {
  let url = "";

  switch (platform) {
    case "facebook":
      url = "https://www.facebook.com/" + username;
      break;
    case "instagram":
      url = "https://www.instagram.com/" + username;
      break;
    case "twitter":
      url = "https://www.twitter.com/" + username;
      break;
    case "linkedin":
      url = "https://www.linkedin.com/in/" + username;
      break;
    case "youtube":
      url = "https://www.youtube.com/@" + username;
      break;
    case "whatsapp":
      url = "https://wa.me/" + username;
      break;
    case "snapchat":
      url = "https://www.snapchat.com/add/" + username;
      break;
    case "github":
      url = "https://github.com/" + username;
      break;
    case "reddit":
      url = "https://www.reddit.com/user/" + username;
      break;
    case "telegram":
      url = "https://telegram.dog/" + username;
      break;
    default:
      break;
  }

  if (url !== "") {
    window.open(url, "_blank");
  }
}

localStorage.setItem("_id", window.location.pathname.replaceAll("/", ""));

const btns = `
  <div class="card card-for-link">
  <img id="twitr" src="../../assets/images/facebook.svg"/>
  </div>
  <div class="card card-for-link">
  <img id="twitr" src="../../assets/images/instagram.svg"/>
  </div>
  <div class="card card-for-link">
  <img id="twitr" src="../../assets/images/twitter.svg"/>
    
  </div>
  <div class="card card-for-link">
  <img id="twitr" src="../../assets/images/linkedin.svg"/>
  </div>
  <div class="card card-for-link">
  <img id="twitr" src="../../assets/images/youtube.svg"/>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-whatsapp"></i>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-snapchat"></i>
  </div>
  <div class="card card-for-link">
  <img id="twitr" src="../../assets/images/github.svg"/>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-reddit"></i>
  </div>
    <div class="card card-for-link">
    <img id="twitr" src="../../assets/images/telegram.svg"/>
  </div>`;

const loader = `<div class="spinner2 center">
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>`;

const socialBtn = document.querySelector(".cssbuttons-io-button");
const main = document.querySelector(".main");

socialBtn.addEventListener("click", showLoadingAndHideBtnWithLoading);

function hideMain() {
  main.classList.add("fade-out");
}

function showMain() {
  main.classList.remove("fade-out");
}

function showLoading() {
  main.innerHTML = loader;
}

function showBtns() {
  main.innerHTML = btns;
}

function showLoadingAndHideBtnWithLoading() {
  const pth = localStorage.getItem("_id");
  showLoading();
  if (pth === "contact") {
    showLoading();
    setTimeout(() => {
      hideMain();
      setTimeout(() => {
        showBtns();
        showMain();
        addLinks();
      }, 200);
    }, 2000);
  } else {
    const currentUrl = window.location.href;
    window.location.href = currentUrl + "?showSocial=true";
  }
}

// const data = [
//     {
//         repoLink: "https://github.com/s4tyendra/Python-Scripts",
//         description: "Mini Project with awesome Python scripts",
//         downloadLink: "https://github.com/s4tyendra/Python-Scripts/archive/master.zip",
//         category: "others",
//         projectName: "Python-Scripts"
//     },
//     {
//         repoLink: "https://github.com/s4tyendra/sports-iiitk",
//         description: "🏀 Repo for the Sports-IIITK website. Get the code for the coolest sports site at Indian Institute of Information Technology, Kota. (Forked from yashmangal112/sports-iiitk)",
//         downloadLink: "https://github.com/s4tyendra/sports-iiitk/archive/master.zip",
//         category: "web development",
//         projectName: "sports-iiitk"
//     },
//     {
//         repoLink: "https://github.com/s4tyendra/satya.devh.in",
//         description: "🌟 Code for the Satya.devh.in website!",
//         downloadLink: "https://github.com/s4tyendra/satya.devh.in/archive/master.zip",
//         category: "web development",
//         projectName: "satya.devh.in"
//     },
//     {
//         repoLink: "https://github.com/024x/REMINDER",
//         description: "🕒 Reminds you about classes 15 minutes before they start (Mail+Telegram) so you can avoid being fashionably late!",
//         downloadLink: "https://github.com/024x/REMINDER/archive/master.zip",
//         category: "others",
//         projectName: "REMINDER"
//     },
//     {
//         repoLink: "https://github.com/024x/fake-payment-screenshot-telegram-bot",
//         description: "💸 Create fake payment screenshots with PhonePe's dark mode because sometimes you just want to flex your imaginary wealth!",
//         downloadLink: "https://github.com/024x/fake-payment-screenshot-telegram-bot/archive/master.zip",
//         category: "bot development",
//         projectName: "fake-payment-screenshot-telegram-bot"
//     },
//     {
//         repoLink: "https://github.com/024x/app-website",
//         description: "📱 A relic of my app-hoarding days, this website showcases an app that no longer exists because apps come and go like trends!",
//         downloadLink: "https://github.com/024x/app-website/archive/master.zip",
//         category: "web development",
//         projectName: "app-website"
//     },
//     {
//         repoLink: "https://github.com/024x/test-websockets",
//         description: "🌐 Dive into the world of websockets with this repo. It's made with Flask, so it's as smooth as your favorite dance!",
//         downloadLink: "https://github.com/024x/test-websockets/archive/master.zip",
//         category: "web development",
//         projectName: "test-websockets"
//     },
//     {
//         repoLink: "https://github.com/024x/Search",
//         description: "🔍 Supercharge your searches with the power to perform multiple searches at once because Gen Z knows how to multitask!",
//         downloadLink: "https://github.com/024x/Search/archive/master.zip",
//         category: "others",
//         projectName: "Search"
//     },
//     {
//         repoLink: "https://github.com/024x/html-12-host",
//         description: "🌐 Upload HTML files and get direct view links that last for 12 hours, just like a fleeting half of Instagram story!",
//         downloadLink: "https://github.com/024x/html-12-host/archive/master.zip",
//         category: "web development",
//         projectName: "html-12-host"
//     },
//     {
//         repoLink: "https://github.com/024x/webapp",
//         description: "🚀 The starting point for a test webapp that connects to multiple APIs. It's so cool even the VSCO girls would approve! Now maintained by @naveen-X",
//         downloadLink: "https://github.com/024x/webapp/archive/master.zip",
//         category: "web development",
//         projectName: "webapp"
//     },
//     {
//         repoLink: "https://github.com/024x/server-installer",
//         description: "🚫 Install apps that are banned by hosting servers, because who wants to be bound by the rules of the establishment, maybe punishment, right?",
//         downloadLink: "https://github.com/024x/server-installer/archive/master.zip",
//         category: "web development",
//         projectName: "server-installer"
//     },
//     {
//         repoLink: "https://github.com/024x/pocket-base-server-db",
//         description: "🚀 Run this script to get your pocketbase DB server running! Just remember to change the admin password or you'll have a security situation on your hands!",
//         downloadLink: "https://github.com/024x/pocket-base-server-db/archive/master.zip",
//         category: "web development",
//         projectName: "pocket-base-server-db"
//     },
//     {
//         repoLink: "https://github.com/024x/servepod",
//         description: "🗣️ A simple echo with 'Websockets.' It's as hip as the latest TikTok trend, and it talks back to you!",
//         downloadLink: "https://github.com/024x/servepod/archive/master.zip",
//         category: "web development",
//         projectName: "servepod"
//     },
//     {
//         repoLink: "https://github.com/024x/empty",
//         description: "🌚 Yes, Empty! Because sometimes, less is more, just like your captions on Instagram!",
//         downloadLink: "https://github.com/024x/empty/archive/master.zip",
//         category: "others",
//         projectName: "empty"
//     },
//     {
//         repoLink: "https://github.com/024x/mongo-rgister-verify-flask",
//         description: "✉️ Sign up users and verify their emails with Flask and MongoDB. It's so efficient, even Gen Z can't believe it!",
//         downloadLink: "https://github.com/024x/mongo-rgister-verify-flask/archive/master.zip",
//         category: "web development",
//         projectName: "mongo-rgister-verify-flask"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/dcg",
//         description: "🚀 Upload files to Google Drive through Telegram with style!",
//         downloadLink: "https://github.com/im-Satyendra/dcg/archive/master.zip",
//         category: "bot development",
//         projectName: "Google Drive Uploader Telegram Bot"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/filestream",
//         description: "🌐 Stream files from Telegram on the internet, like having a free drive in the cloud!",
//         downloadLink: "https://github.com/im-Satyendra/filestream/archive/master.zip",
//         category: "web development",
//         projectName: "filestream"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/mails",
//         description: "📋 A pastebin for the nostalgia. It can be easily deployed to deta.sh for a blast from the past!",
//         downloadLink: "https://github.com/im-Satyendra/mails/archive/master.zip",
//         category: "web development",
//         projectName: "mails"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/rdp",
//         description: "🖥️ Get RDP access on Heroku because sometimes you need a remote desktop on the cloud!",
//         downloadLink: "https://github.com/im-Satyendra/rdp/archive/master.zip",
//         category: "others",
//         projectName: "Heroku RDP script"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/never1",
//         description: "📷 Send photos, get results, just like Google but with a twist! Plus, you can capture screenshots of webpages too!",
//         downloadLink: "https://github.com/im-Satyendra/never1/archive/master.zip",
//         category: "bot development",
//         projectName: "never1"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/mtdc",
//         description: "🚀 Run multiple Telegram bots simultaneously and conquer the digital world!",
//         downloadLink: "https://github.com/im-Satyendra/mtdc/archive/master.zip",
//         category: "bot development",
//         projectName: "mtdc"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/Ransomware-builder",
//         description: "⚔️ Introducing 'Blood Eagle' - not open source, but it's educational! Please use responsibly.",
//         downloadLink: "https://github.com/im-Satyendra/Ransomware-builder/archive/master.zip",
//         category: "others",
//         projectName: "Ransomware-builder"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/notifychanges",
//         description: "🕵️‍♀️ Waiting for the JEE made easy! This bot notifies you when changes are detected on the NTA website.",
//         downloadLink: "https://github.com/im-Satyendra/notifychanges/archive/master.zip",
//         category: "bot development",
//         projectName: "notifychanges"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/answersbot",
//         description: "📢 A bot to broadcast answers during online exams because sharing is caring (at least during lockdown)!",
//         downloadLink: "https://github.com/im-Satyendra/answersbot/archive/master.zip",
//         category: "bot development",
//         projectName: "answersbot"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/satya",
//         description: "📥 Download from almost all types of URLs using this Telegram bot. Fast, convenient, and it's like having your own download assistant!",
//         downloadLink: "https://github.com/im-Satyendra/satya/archive/master.zip",
//         category: "bot development",
//         projectName: "satya"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/dx123",
//         description: "🌐 A multiple data center hosting script for simple rename bots with thumbnails, just for you and your friends!",
//         downloadLink: "https://github.com/im-Satyendra/dx123/archive/master.zip",
//         category: "bot development",
//         projectName: "dx123"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/otp",
//         description: "📱 Send SMS to your loved ones and stay connected, because who doesn't love a surprise message!",
//         downloadLink: "https://github.com/im-Satyendra/otp/archive/master.zip",
//         category: "bot development",
//         projectName: "otp"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/uplnw",
//         description: "🚀 An amazing upload bot, because who can resist a free plan from Heroku!",
//         downloadLink: "https://github.com/im-Satyendra/uplnw/archive/master.zip",
//         category: "bot development",
//         projectName: "uplnw"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/nopmjee",
//         description: "📚 Sharing JEE courses for free with your team? This bot handles messages to prevent spam and keeps your team organized!",
//         downloadLink: "https://github.com/im-Satyendra/nopmjee/archive/master.zip",
//         category: "bot development",
//         projectName: "nopmjee"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/answe",
//         description: "📖 Scrape answers from the web and send them to users. Perfect for online exams when you're in the zone!",
//         downloadLink: "https://github.com/im-Satyendra/answe/archive/master.zip",
//         category: "bot development",
//         projectName: "answe"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/web-dl",
//         description: "📦 Download all files like a pro. Ever heard of HTTrack? It's like that, but even cooler!",
//         downloadLink: "https://github.com/im-Satyendra/web-dl/archive/master.zip",
//         category: "bot development",
//         projectName: "web-dl"
//     },
//     {
//         repoLink: "https://github.com/epsatya/eval",
//         description: "🐍 Run Python code right in the chat on Telegram! It's like having a mini Python playground in your pocket!",
//         downloadLink: "https://github.com/epsatya/eval/archive/master.zip",
//         category: "bot development",
//         projectName: "eval"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/snplnotes",
//         description: "📓 An index of inter notes from our class - because notes are life!",
//         downloadLink: "https://github.com/im-Satyendra/snplnotes/archive/master.zip",
//         category: "others",
//         projectName: "snplnotes"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/stunning-octo-chainsaw",
//         description: "🔪 Just random stuff, because learning is an adventure!",
//         downloadLink: "https://github.com/im-Satyendra/stunning-octo-chainsaw/archive/master.zip",
//         category: "others",
//         projectName: "stunning-octo-chainsaw"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/empety",
//         description: "🌑 Same as before, because sometimes, emptiness is the ultimate canvas for creativity!",
//         downloadLink: "https://github.com/im-Satyendra/empety/archive/master.zip",
//         category: "others",
//         projectName: "empety"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/myo",
//         description: "🤷 Can do some stuff, but I'm still in confusion!",
//         downloadLink: "https://github.com/im-Satyendra/myo/archive/master.zip",
//         category: "others",
//         projectName: "myo"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/wflows",
//         description: "📚 Upload and download notes with PHP - because knowledge should flow freely!",
//         downloadLink: "https://github.com/im-Satyendra/wflows/archive/master.zip",
//         category: "web development",
//         projectName: "wflows"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/mention",
//         description: "🗣️ Mention all the members in a group and get the party started!",
//         downloadLink: "https://github.com/im-Satyendra/mention/archive/master.zip",
//         category: "bot development",
//         projectName: "mention"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/vcpbot",
//         description: "🎵 Get the party going in Telegram voice chats with this player bot!",
//         downloadLink: "https://github.com/im-Satyendra/vcpbot/archive/master.zip",
//         category: "bot development",
//         projectName: "vcpbot"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/inlinefilesearch",
//         description: "🔍 Search channel files inline - because finding files should be a breeze!",
//         downloadLink: "https://github.com/im-Satyendra/inlinefilesearch/archive/master.zip",
//         category: "bot development",
//         projectName: "inlinefilesearch"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/buggy",
//         description: "🐛 Report bugs with style and extra features. It's like bug reporting on steroids! (In TG Groups)",
//         downloadLink: "https://github.com/im-Satyendra/buggy/archive/master.zip",
//         category: "bot development",
//         projectName: "buggy"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/unofficial",
//         description: "🦄 An unofficial collection of UB plugins. These are Python scripts that will make you go 'wow!'",
//         downloadLink: "https://github.com/im-Satyendra/unofficial/archive/master.zip",
//         category: "bot development",
//         projectName: "unofficial"
//     },
//     {
//         repoLink: "https://github.com/im-Satyendra/gpbot",
//         description: "🤖 Can't explain, you'll have to explore it yourself!",
//         downloadLink: "https://github.com/im-Satyendra/gpbot/archive/master.zip",
//         category: "bot development",
//         projectName: "gpbot"
//     }
// ];

// const ul = document.querySelector('.data-project-ul');

// data.forEach(item => {
//     const li = document.createElement('li');
//     li.classList.add('project-item', 'active');
//     li.setAttribute('data-filter-item', '');
//     li.setAttribute('data-category', item.category);

//     const a = document.createElement('a');
//     a.setAttribute('href', item.repoLink);

//     const contentCard = document.createElement('ul');
//     contentCard.classList.add('content-card');

//     const iconBox = document.createElement('div');
//     iconBox.classList.add('project-item-icon-box');
//     iconBox.innerHTML = '<ion-icon name="logo-github"></ion-icon>';

//     const title = document.createElement('h3');
//     title.classList.add('project-title');
//     title.textContent = item.projectName;

//     const description = document.createElement('p');
//     description.classList.add('project-description');
//     description.textContent = item.description;

//     const category = document.createElement('p');
//     category.classList.add('project-category');
//     category.textContent = item.category;

//     contentCard.appendChild(iconBox);
//     contentCard.appendChild(title);
//     contentCard.appendChild(description);
//     contentCard.appendChild(category);

//     a.appendChild(contentCard);
//     li.appendChild(a);

//     ul.appendChild(li);
// });
