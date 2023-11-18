const wrapper = document.querySelector('#wrapper');
const dashboardLogo = document.querySelector('#logo');
const home = document.querySelector('#home');
const profile = document.querySelector('#profile');
const messages = document.querySelector('#messages');
const history_ = document.querySelector('#history');
const tasks = document.querySelector('#tasks');
const communities = document.querySelector('#communities');
const settings = document.querySelector('#settings');
const support = document.querySelector('#support');
const privacy = document.querySelector('#privacy')


dashboardLogo.addEventListener('click', function() {
    if ( wrapper.style.gridTemplateColumns === 'repeat(5, 1fr)' ) {
        wrapper.style.gridTemplateColumns = '58px repeat(4, 1fr)';
        dashboardLogo.innerHTML = '<span class="material-symbols-outlined">dashboard</span>';
        home.innerHTML = '<span class="material-symbols-outlined">home</span>';
        profile.innerHTML = '<span class="material-symbols-outlined">contact_emergency</span>';
        messages.innerHTML = '<span class="material-symbols-outlined">chat_bubble</span>';
        history_.innerHTML = '<span class="material-symbols-outlined">schedule</span>';
        tasks.innerHTML = '<span class="material-symbols-outlined">filter_none</span>';
        communities.innerHTML = '<span class="material-symbols-outlined">groups</span>';
        settings.innerHTML = '<span class="material-symbols-outlined">settings</span>';
        support.innerHTML = '<span class="material-symbols-outlined">live_help</span>';
        privacy.innerHTML = '<span class="material-symbols-outlined">verified_user</span>';
    } else {
        wrapper.style.gridTemplateColumns = 'repeat(5, 1fr)';
        dashboardLogo.innerHTML = '<span class="material-symbols-outlined">dashboard</span> Dashboard';
        home.innerHTML = '<span class="material-symbols-outlined">home</span> Home';
        profile.innerHTML = '<span class="material-symbols-outlined">contact_emergency</span> Profile';
        messages.innerHTML = '<span class="material-symbols-outlined">chat_bubble</span> Messages';
        history_.innerHTML = '<span class="material-symbols-outlined">schedule</span> History';
        tasks.innerHTML = '<span class="material-symbols-outlined">filter_none</span> Tasks';
        communities.innerHTML = '<span class="material-symbols-outlined">groups</span> Communities';
        settings.innerHTML = '<span class="material-symbols-outlined">settings</span> Settings';
        support.innerHTML = '<span class="material-symbols-outlined">live_help</span> Support';
        privacy.innerHTML = '<span class="material-symbols-outlined">verified_user</span> Privacy';
    }
});
