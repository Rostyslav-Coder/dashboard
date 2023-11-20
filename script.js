// Dashboard

// Declare and initialize sliders variables
let mainGridContainer = document.querySelector('#main-grid-container');
let dashboardLogo = document.querySelector('#dashboard');
let home = document.querySelector('#home');
let projects = document.querySelector('#projects');
let cV = document.querySelector('#cv');
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
        cV.innerHTML = (
            '<a href="#curriculum-vitae-link"><span class="material-symbols-outlined">developer_guide</span></a>'
            );
        certificates.innerHTML = (
            '<a href="#certificates-link"><span class="material-symbols-outlined">license</span></a>'
            );
        contacts.innerHTML = (
            '<span class="material-symbols-outlined">contact_mail</span>'
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
        cV.innerHTML = (
            '<a href="#curriculum-vitae-link"><span class="material-symbols-outlined">developer_guide</span> My CV</a>'
            );
        certificates.innerHTML = (
            '<a href="#certificates-link"><span class="material-symbols-outlined">license</span> Certificates</a>'
            );
        contacts.innerHTML = (
            '<span class="material-symbols-outlined">contact_mail</span> Contacts'
            );
    }
});
