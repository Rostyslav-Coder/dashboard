// Dashboard

// Declare and initialize color theme
const colorTheme = document.querySelector("#color-theme");

// Declare and initialize main container
const mainGridContainer = document.querySelector("#main-grid-container");

// Declare and initialize sliders variables
const sliderButtons = {
  dashboardLogo: document.querySelector("#dashboard"),
  home: document.querySelector("#home"),
  projects: document.querySelector("#projects"),
  cv: document.querySelector("#cv"),
  certificates: document.querySelector("#certificates"),
  contacts: document.querySelector("#contacts"),
};

// Declare and initialize twisted slider content
const twistedSlider = {
  dashboard: `<span class="material-symbols-outlined">
      dashboard
    </span>`,
  home: `<a href="#top-link">
      <span class="material-symbols-outlined">home</span>
    </a>`,
  projects: `<a href="#project-link">
      <span class="material-symbols-outlined">terminal</span>
    </a>`,
  cv: `<a href="#curriculum-vitae-link">
      <span class="material-symbols-outlined">developer_guide</span>
    </a>`,
  certificates: `<a href="#certificates-link">
      <span class="material-symbols-outlined">license</span>
    </a>`,
  contacts: `<a href="#contact-link">
      <span class="material-symbols-outlined">contact_mail</span>
    </a>`,
};

// Declare and initialize expanded slider content
const expandedSlider = {
  dashboard: `<span class="material-symbols-outlined">
      dashboard
    </span> Dashboard`,
  home: `<a href="#top-link">
      <span class="material-symbols-outlined">home</span> Home
    </a>`,
  projects: `<a href="#project-link">
      <span class="material-symbols-outlined">terminal</span> Projects
    </a>`,
  cv: `<a href="#curriculum-vitae-link">
      <span class="material-symbols-outlined">developer_guide</span> My CV
    </a>`,
  certificates: `<a href="#certificates-link">
      <span class="material-symbols-outlined">license</span> Certificates
    </a>`,
  contacts: `<a href="#contact-link">
      <span class="material-symbols-outlined">contact_mail</span> Contacts
    </a>`,
};

mainGridContainer.style.gridTemplateColumns = "repeat(5, 1fr)";

// Sliders folding
sliderButtons.dashboardLogo.addEventListener("click", () => {
  if (mainGridContainer.style.gridTemplateColumns === "repeat(5, 1fr)") {
    mainGridContainer.style.gridTemplateColumns = "58px repeat(4, 1fr)";
    sliderButtons.dashboardLogo.style.marginLeft = "-7px";
    sliderButtons.dashboardLogo.innerHTML = twistedSlider.dashboard;
    sliderButtons.home.innerHTML = twistedSlider.home;
    sliderButtons.projects.innerHTML = twistedSlider.projects;
    sliderButtons.cv.innerHTML = twistedSlider.cv;
    sliderButtons.certificates.innerHTML = twistedSlider.certificates;
    sliderButtons.contacts.innerHTML = twistedSlider.contacts;
  } else {
    mainGridContainer.style.gridTemplateColumns = "repeat(5, 1fr)";
    sliderButtons.dashboardLogo.style.marginLeft = "";
    sliderButtons.dashboardLogo.innerHTML = expandedSlider.dashboard;
    sliderButtons.home.innerHTML = expandedSlider.home;
    sliderButtons.projects.innerHTML = expandedSlider.projects;
    sliderButtons.cv.innerHTML = expandedSlider.cv;
    sliderButtons.certificates.innerHTML = expandedSlider.certificates;
    sliderButtons.contacts.innerHTML = expandedSlider.contacts;
  }
});

// Set The Thema When Loading The Page
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.setAttribute("class", "light");
    document.getElementById("color-theme").innerHTML =
      "<img src='svg/moon.svg' alt='light mode logo' />";
  } else {
    document.documentElement.setAttribute("class", "dark");
    document.getElementById("color-theme").innerHTML =
      "<img src='svg/sun.svg' alt='dark mode logo' />";
  }
});

// Switch the Themas on click
colorTheme.addEventListener("click", () => {
  if (document.documentElement.getAttribute("class") === "light") {
    document.documentElement.setAttribute("class", "dark");
    colorTheme.innerHTML = "<img src='svg/sun.svg' alt='dark mode logo' />";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("class", "light");
    colorTheme.innerHTML = "<img src='svg/moon.svg' alt='light mode logo' />";
    localStorage.setItem("theme", "light");
  }
});
