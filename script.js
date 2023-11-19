// Dashboard

// Declare and initialize sliders variables
let wrapper = document.querySelector('#wrapper');
let dashboardLogo = document.querySelector('#logo');
let home = document.querySelector('#home');
let projects = document.querySelector('#projects');
let cV = document.querySelector('#cv');
let certificates = document.querySelector('#certificates');
let contacts = document.querySelector('#contacts');

let settings = document.querySelector('#settings');
let support = document.querySelector('#support');
let privacy = document.querySelector('#privacy')

wrapper.style.gridTemplateColumns = 'repeat(5, 1fr)';

// Sliders folding
dashboardLogo.addEventListener('click', function() {
    if ( wrapper.style.gridTemplateColumns === 'repeat(5, 1fr)' ) {
        wrapper.style.gridTemplateColumns = '58px repeat(4, 1fr)';
        dashboardLogo.style.marginLeft = '-7px';
        dashboardLogo.innerHTML = '<span class="material-symbols-outlined">dashboard</span>';
        home.innerHTML = '<span class="material-symbols-outlined">home</span>';
        projects.innerHTML = '<span class="material-symbols-outlined">terminal</span>';
        cV.innerHTML = '<span class="material-symbols-outlined">developer_guide</span>';
        certificates.innerHTML = '<span class="material-symbols-outlined">license</span>';
        contacts.innerHTML = '<span class="material-symbols-outlined">contact_mail</span>';

        settings.innerHTML = '<span class="material-symbols-outlined">settings</span>';
        support.innerHTML = '<span class="material-symbols-outlined">live_help</span>';
        privacy.innerHTML = '<span class="material-symbols-outlined">verified_user</span>';
    } else {
        wrapper.style.gridTemplateColumns = 'repeat(5, 1fr)';
        dashboardLogo.style.marginLeft = '';
        dashboardLogo.innerHTML = '<span class="material-symbols-outlined">dashboard</span> Dashboard';
        home.innerHTML = '<span class="material-symbols-outlined">home</span> Home';
        projects.innerHTML = '<span class="material-symbols-outlined">terminal</span> Projects';
        cV.innerHTML = '<span class="material-symbols-outlined">developer_guide</span> My CV';
        certificates.innerHTML = '<span class="material-symbols-outlined">license</span> Certificates';
        contacts.innerHTML = '<span class="material-symbols-outlined">contact_mail</span> Contacts';

        settings.innerHTML = '<span class="material-symbols-outlined">settings</span> Settings';
        support.innerHTML = '<span class="material-symbols-outlined">live_help</span> Support';
        privacy.innerHTML = '<span class="material-symbols-outlined">verified_user</span> Privacy';
    }
});
