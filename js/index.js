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

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

    toggleButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});

if (darkmode === "active") enableDarkmode()
themeSwitch.addEventListener("click", () => {
    darkmode !=="active" ? enableDarkmode() : disableDarkmode()
})