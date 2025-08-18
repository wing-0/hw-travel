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