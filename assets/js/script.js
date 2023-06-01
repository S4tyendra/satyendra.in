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
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
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
    removeActive();
    const url = document.location.pathname;
    const clsnm = url.replaceAll("/", "");
    if (url === "/") {
        pages[0].classList.add("active");
        navigationLinks[0].classList.add("active");
    } else {
        const button = document.getElementById("" + clsnm);
        button.classList.add("active");
        const elements = document.querySelectorAll("." + clsnm);

        if (elements.length > 0) {
            elements.forEach(element => {
                element.classList.add("active");

            });
        }
    }

    console.log(url);

};
window.addEventListener("popstate", onPopState);

function sendmsg() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const data = {
        name: name, email: email, message: message,
    }
    fetch("https://api.telegram.org/bot1963945108:AAFyo9bg2k4BImXsAHgghYg2bEkkdaiDe4g/sendMessage?chat_id=1089528685&text=" + name + ", " + email + ", " + message);
    alert("Message sent successfully");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

async function typewrite() {
    const text1 = `As a versatile developer with a passion for technology, I have a diverse range of skills that I bring to the table. I am a skilled backend developer with expertise in creating frontend applications, websites, and web scraping.`;
    const text2 = `My ability to work seamlessly with teams has helped me to develop effective communication and collaboration skills, enabling me to contribute meaningfully to any project. I am also a quick learner, always eager to learn new technologies and improve my skills.`;
    const text3 = `
In addition to my technical expertise, I am a detail-oriented individual who takes pride in delivering high-quality work. My commitment to excellence is reflected in my portfolio, which showcases my ability to create user-friendly, functional, and visually appealing applications.
  `;
    const text4 = `
Whether you need a developer who can handle complex backend processes or create stunning frontend interfaces, I have the skills and expertise to meet your needs. Contact me today to learn more about how I can help bring your project to life.
  `;
    const p1 = document.getElementById("p1");

    let i = 0;
    const intervalId = setInterval(() => {
        p1.textContent += text1[i];
        i++;
        if (i === text1.length) {
            clearInterval(intervalId);
        }
    }, 10);
    const p2 = document.getElementById("p2");

    let j = 0;
    const intervalId1 = setInterval(() => {
        p2.textContent += text2[j];
        j++;
        if (j === text2.length) {
            clearInterval(intervalId1);
        }
    }, 10);
}


const text1 = `As a versatile developer with a passion for technology, I have a diverse range of skills that I bring to the table. I am a skilled backend developer with expertise in creating frontend applications, websites, and web scraping.`;
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
            //p.textContent += text[i];
            p.textContent = p.textContent.replaceAll(" |", "") + text[i] + ` |`;
            i++;
            if (i === text.length) {
                p.textContent = p.textContent.replaceAll("|", "");
                clearInterval(intervalId);
                resolve();
            }
        }, 10);

    });
}

async function runAnimation() {
    await animateText(text1, document.getElementById("p1"));
    await animateText(text2, document.getElementById("p2"));
    await animateText(text3, document.getElementById("p3"));
    await animateText(text4, document.getElementById("p4"));
}

setTimeout(() => {
    runAnimation();
}, 20);
