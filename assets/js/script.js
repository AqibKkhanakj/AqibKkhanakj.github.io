'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * hire me scrolls to the contact section
 */

const hireMeBtn = document.querySelector(".about .btn-secondary");

if (hireMeBtn) {
  hireMeBtn.addEventListener("click", function (event) {

    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    event.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", "#contact");

  });
}



/**
 * day and night theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

const applyTheme = function (theme) {

  const isLight = theme === "light_theme";

  document.body.classList.toggle("light_theme", isLight);
  document.body.classList.toggle("dark_theme", !isLight);

  if (!themeToggleBtn) return;

  themeToggleBtn.classList.toggle("active", isLight);
  themeToggleBtn.setAttribute("aria-pressed", String(isLight));
  themeToggleBtn.setAttribute("aria-label", isLight ? "Switch to night mode" : "Switch to day mode");

};

if (themeToggleBtn) {

  applyTheme(localStorage.getItem("theme") === "light_theme" ? "light_theme" : "dark_theme");

  themeToggleBtn.addEventListener("click", function () {

    const nextTheme = document.body.classList.contains("dark_theme") ? "light_theme" : "dark_theme";

    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

  });

}