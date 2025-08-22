document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-menu-item");

    toggleButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode','active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode',null);
};



    //enableDarkmode()
themeSwitch.addEventListener("click", () => {
    darkmode == "active" ? disableDarkmode(): enableDarkmode();})
// enableDarkmode() =()=>
//     {
//     darkmode =="active";
//     theme.update();
// },
// disableDarkmode =()=>
// {
//     darkmode == "null";
//     theme.update();
// }});


//darkmode == "active" ? enableDarkmode(): disableDarkmode()
//enableDarkmode =()=>
    //{
    //darkmode =="active";
    //theme.update;
//},
//disableDarkmode =()=>
//{
    //darkmode == "null";
    //theme.update;
//}
