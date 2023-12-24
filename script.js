// Dashboard

// Declare and initialize sliders variables
const mainGridContainer = document.querySelector('#main-grid-container');
const dashboardLogo = document.querySelector('#dashboard');
const home = document.querySelector('#home');
const projects = document.querySelector('#projects');
const cv = document.querySelector('#cv');
const certificates = document.querySelector('#certificates');
const contacts = document.querySelector('#contacts');

const twistedSlider = {
  dashboard: (
    '<span class="material-symbols-outlined">dashboard</span>'
  ),
  home: (
    `<a href="#top-link">
      <span class="material-symbols-outlined">home</span>
    </a>`
  ),
  projects: (
    `<a href="#project-link">
      <span class="material-symbols-outlined">terminal</span>
    </a>`
  ),
  cv: (
    `<a href="#curriculum-vitae-link">
      <span class="material-symbols-outlined">developer_guide</span>
    </a>`
  ),
  certificates: (
    `<a href="#certificates-link">
      <span class="material-symbols-outlined">license</span>
    </a>`
  ),
  contacts: (
    `<a href="#contact-link">
      <span class="material-symbols-outlined">contact_mail</span>
    </a>`
  ),
};

const expandedSlider = {
  dashboard: (
    '<span class="material-symbols-outlined">dashboard</span> Dashboard'
  ),
  home: (
    `<a href="#top-link">
      <span class="material-symbols-outlined">home</span> Home
    </a>`
  ),
  projects: (
    `<a href="#project-link">
      <span class="material-symbols-outlined">terminal</span> Projects
    </a>`
  ),
  cv: (
    `<a href="#curriculum-vitae-link">
      <span class="material-symbols-outlined">developer_guide</span> My CV
    </a>`
  ),
  certificates: (
    `<a href="#certificates-link">
      <span class="material-symbols-outlined">license</span> Certificates
    </a>`
  ),
  contacts: (
    `<a href="#contact-link">
      <span class="material-symbols-outlined">contact_mail</span> Contacts
    </a>`
  ),
};

mainGridContainer.style.gridTemplateColumns = 'repeat(5, 1fr)';

// Sliders folding
dashboardLogo.addEventListener('click', () => {
  if (mainGridContainer.style.gridTemplateColumns === 'repeat(5, 1fr)') {
    mainGridContainer.style.gridTemplateColumns = '58px repeat(4, 1fr)';
    dashboardLogo.style.marginLeft = '-7px';
    dashboardLogo.innerHTML = twistedSlider.dashboard;
    home.innerHTML = twistedSlider.home;
    projects.innerHTML = twistedSlider.projects;
    cv.innerHTML = twistedSlider.cv;
    certificates.innerHTML = twistedSlider.certificates;
    contacts.innerHTML = twistedSlider.contacts;
  } else {
    mainGridContainer.style.gridTemplateColumns = 'repeat(5, 1fr)';
    dashboardLogo.style.marginLeft = '';
    dashboardLogo.innerHTML = expandedSlider.dashboard;
    home.innerHTML = expandedSlider.home;
    projects.innerHTML = expandedSlider.projects;
    cv.innerHTML = expandedSlider.cv;
    certificates.innerHTML = expandedSlider.certificates;
    contacts.innerHTML = expandedSlider.contacts;
  }
});

// Set The Thema When Loading The Page
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('class', 'light');
    document.getElementById('color-theme').innerHTML = (
      '<img src="svg/moon.svg" alt="light mode logo">'
    );
  } else {
    document.documentElement.setAttribute('class', 'dark');
    document.getElementById('color-theme').innerHTML = (
      '<img src="svg/sun.svg" alt="dark mode logo">'
    );
  }
});

// Switch the Themas on click
// eslint-disable-next-line func-names
document.getElementById('color-theme').addEventListener('click', function () {
  if (document.documentElement.getAttribute('class') === 'light') {
    document.documentElement.setAttribute('class', 'dark');
    this.innerHTML = '<img src="svg/sun.svg" alt="dark mode logo">';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('class', 'light');
    this.innerHTML = '<img src="svg/moon.svg" alt="light mode logo">';
    localStorage.setItem('theme', 'light');
  }
});
