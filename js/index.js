document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-menu-item");

    toggleButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});

let maxShown = 0;
const scroll = window.scrollY;
const progress = scroll / total;
const current = Math.ceil(progress * 4);
if (total <= 0) return;
const blocks = document.querySelectorAll('.block');
for (let i = 0; i < blocks.length; i++) {
    if (i < maxShown) {
        blocks[i].classList.add('visible');
    } else {
        blocks[i].classList.remove('visible');
    }
};
window.addEventListener('scroll',updateVisibility);
updateVisibility();

let darkmode = localStorage.getItem('darkkmode')
const themeSwitch = document.getElementById('theme-switch')
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}


if (darkmode === "active") enableDarkmode()
themeSwitch.addEventListener("click", () => {
    darkmode !=="active" ? enableDarkmode() : disableDarkmode()
})
