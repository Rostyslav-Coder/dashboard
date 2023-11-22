// Dashboard

// Declare and initialize sliders variables
let mainGridContainer = document.querySelector('#main-grid-container');
let dashboardLogo = document.querySelector('#dashboard');
let home = document.querySelector('#home');
let projects = document.querySelector('#projects');
let cv = document.querySelector('#cv');
let certificates = document.querySelector('#certificates');
let contacts = document.querySelector('#contacts');

mainGridContainer.style.gridTemplateColumns = 'repeat(5, 1fr)';

// Sliders folding
dashboardLogo.addEventListener('click', function() {
    if ( mainGridContainer.style.gridTemplateColumns === 'repeat(5, 1fr)' ) {
        mainGridContainer.style.gridTemplateColumns = '58px repeat(4, 1fr)';
        dashboardLogo.style.marginLeft = '-7px';
        dashboardLogo.innerHTML = (
            '<span class="material-symbols-outlined">dashboard</span>'
            );
        home.innerHTML = (
            '<a href="#top-link"><span class="material-symbols-outlined">home</span></a>'
            );
        projects.innerHTML = (
            '<a href="#project-link"><span class="material-symbols-outlined">terminal</span></a>'
            );
        cv.innerHTML = (
            '<a href="#curriculum-vitae-link"><span class="material-symbols-outlined">developer_guide</span></a>'
            );
        certificates.innerHTML = (
            '<a href="#certificates-link"><span class="material-symbols-outlined">license</span></a>'
            );
        contacts.innerHTML = (
            '<a href="#contact-link"><span class="material-symbols-outlined">contact_mail</span></a>'
            );
    } else {
        mainGridContainer.style.gridTemplateColumns = 'repeat(5, 1fr)';
        dashboardLogo.style.marginLeft = '';
        dashboardLogo.innerHTML = (
            '<span class="material-symbols-outlined">dashboard</span> Dashboard'
            );
        home.innerHTML = (
            '<a href="#top-link"><span class="material-symbols-outlined">home</span> Home</a>'
            );
        projects.innerHTML = (
            '<a href="#project-link"><span class="material-symbols-outlined">terminal</span> Projects</a>'
            );
        cv.innerHTML = (
            '<a href="#curriculum-vitae-link"><span class="material-symbols-outlined">developer_guide</span> My CV</a>'
            );
        certificates.innerHTML = (
            '<a href="#certificates-link"><span class="material-symbols-outlined">license</span> Certificates</a>'
            );
        contacts.innerHTML = (
            '<a href="#contact-link"><span class="material-symbols-outlined">contact_mail</span> Contacts</a>'
            );
    }
});

// Устанавливаем тему при загрузке страницы
document.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.setAttribute('class', 'light');
        document.getElementById('color-theme').innerHTML = '<img src="svg/moon.svg" alt="light mode logo">';
    } else {
        document.documentElement.setAttribute('class', 'dark');
        document.getElementById('color-theme').innerHTML = '<img src="svg/sun.svg" alt="dark mode logo">';
    }
});
  
// Переключаем тему при клике
document.getElementById('color-theme').addEventListener('click', function() {
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
  