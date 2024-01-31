// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika sparepart menu di klik
document.querySelector('#sparepart-menu').onclick = () => {
navbarNav.classList.toggle('active');
};

// toggle class active untuk search form 
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};


// klik diluar element
const sparepart = document.querySelector('#sparepart-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if(!sparepart.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});