document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
    const mobileMenu = document.querySelector(".navbar .mobile-menu-item");

    toggleButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        console.log("button tiggered");
    });
});

//if (document.readyState !== 'loading') {
    //console.log('document is already ready, just execute code here');
    //myInitCode();
//} else {
    //document.addEventListener('DOMContentLoaded', function(){
        //console.log('document was not ready, place code here');
        //myInitCode();
    //});
//}
function myInitCode() {}

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
    const swarp = localStorage.getItem("darkmode");
    console.log(swarp);
    swarp == "active" ? disableDarkmode(): enableDarkmode();})
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
