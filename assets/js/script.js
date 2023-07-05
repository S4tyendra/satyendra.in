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
        removeActive();
    } catch (error) {

    }

    const url = document.location.pathname;
    const clsnm = url.replaceAll("/", "");
    // alert(clsnm);
    let myList = ['skills', 'studies', 'projects', 'blog', 'contact', ''];
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
                elements.forEach(element => {
                    element.classList.add("active");

                });
            }
        }
    } else {
        document.querySelector('.notfndpage').classList.add("active");
        // navigationLinks[0].classList.add("active");
    }

    console.log(url);

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
        {text: text1, element: document.getElementById("p1")},
        {text: text2, element: document.getElementById("p2")},
        {text: text3, element: document.getElementById("p3")},
        {text: text4, element: document.getElementById("p4")},
    ];

    for (const {text, element} of paragraphs) {
        await animateText(text, element);
        element.textContent = element.textContent.replace(" |", " ");
    }
}


window.addEventListener('load', () => {
    // Remove the active class to hide the preloader
    setTimeout(() => {
        runAnimation();
    }, 20);

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
    let btn = document.querySelector('.form-btn');
    btn.addEventListener('click', sendmsg);


    const cards = document.getElementsByClassName('card');
    const usernames = ['s4tyendra', 's4tyendra', 's4tyendra', 's4tyendra', 's4tyendra', '918790863694', 'satyendra_xd', 's4tyendra', 's4tyendra', 's4tyendra'];
    const platforms = ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'whatsapp', 'snapchat', 'github', 'reddit', 'telegram'];

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const username = usernames[i];
        const platform = platforms[i];

        card.addEventListener('click', function () {
            openLink(platform, username);
        });
    }
}

function openLink(platform, username) {
    let url = '';

    switch (platform) {
        case 'facebook':
            url = 'https://www.facebook.com/' + username;
            break;
        case 'instagram':
            url = 'https://www.instagram.com/' + username;
            break;
        case 'twitter':
            url = 'https://www.twitter.com/' + username;
            break;
        case 'linkedin':
            url = 'https://www.linkedin.com/in/' + username;
            break;
        case 'youtube':
            url = 'https://www.youtube.com/@' + username;
            break;
        case 'whatsapp':
            url = 'https://wa.me/' + username;
            break;
        case 'snapchat':
            url = 'https://www.snapchat.com/add/' + username;
            break;
        case 'github':
            url = 'https://github.com/' + username;
            break;
        case 'reddit':
            url = 'https://www.reddit.com/user/' + username;
            break;
        case 'telegram':
            url = 'https://telegram.dog/' + username;
            break;
        default:
            break;
    }

    if (url !== '') {
        window.open(url, '_blank');
    }
}

localStorage.setItem('_id', window.location.pathname.replaceAll('/', ''));

const btns = `<div class="card card-for-link">
    <i class="fab fa-facebook"></i>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-instagram"></i>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-twitter"></i>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-linkedin"></i>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-youtube"></i>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-whatsapp"></i>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-snapchat"></i>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-github"></i>
  </div>
  <div class="card card-for-link">
    <i class="fab fa-reddit"></i>
  </div>
    <div class="card card-for-link">
    <i class="fab fa-telegram"></i>
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

const socialBtn = document.querySelector('.cssbuttons-io-button');
const main = document.querySelector('.main');

socialBtn.addEventListener('click', showLoadingAndHideBtnWithLoading);

function hideMain() {
    main.classList.add('fade-out');
}

function showMain() {
    main.classList.remove('fade-out');
}

function showLoading() {
    main.innerHTML = loader;
}

function showBtns() {
    main.innerHTML = btns;
}

function showLoadingAndHideBtnWithLoading() {
    const pth = localStorage.getItem('_id');
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
        window.location.href = currentUrl + '?showSocial=true';
    }


}

if (window.location.href.includes('?showSocial=true')) {
    showLoading();
    setTimeout(() => {
        hideMain();
        setTimeout(() => {
            showBtns();
            showMain();
            addLinks();
        }, 200);
    }, 2000);

    const newUrl = window.location.href.replaceAll('?showSocial=true', '');
    window.history.pushState(null, '', newUrl);
}