let btnBlanc = document.querySelector('.btn-blanc')
let btnNoir = document.querySelector('.btn-noir')
let elementNav = document.querySelectorAll('.nav-link')
let logo = document.querySelector('.logo')
let legend = document.querySelectorAll('.text')
let grandTitre = document.querySelectorAll('.title')
let navBar = document.querySelector('.navbar')
let header = document.querySelector('header')
// console.log(legend);
// console.log(btnNoir);
// console.log(navBar);

// mode sombre
let sombre = () => {
    document.body.style = "background-color:black"
    navBar.classList.replace('bg-light', 'bg-noir')
    logo.style.color = "white"
    elementNav.forEach(element => {
        element.style.color = "white"
    });
    legend.forEach(element => {
        element.style.color = "white"
    });
    grandTitre.forEach(element => {
        element.style.color = "white"
    });
    logo.style ="color:white"
    btnNoir.style.border = "white solid 1px"
}


btnNoir.addEventListener('click', sombre)

let blanc = () => {
    document.body.style = "background-color:white"
    navBar.classList.replace('bg-noir', 'bg-light')
    logo.style.color ="black"
    elementNav.forEach(element => {
        element.style.color = "black"    
    });
    legend.forEach(element => {
        element.style.color = "black"    
    });
    grandTitre.forEach(element => {
        element.style.color = "black"    
    });
}
btnBlanc.addEventListener('click', blanc)



// navbar

// window.onscroll = function ( ) {
//     header.style = "height:70px"
//     navBar.classList.replace('flex-column', 'flex-row')
//     navBar.style = "position:fixed ; top:0; left:0 ; right:0 ; background-color:white; z-index:99"
// }


window.addEventListener('scroll', ()=> {
    header.style = "height:70px"
    navBar.classList.replace('flex-column', 'flex-row')
    navBar.style = "position:fixed ; top:0; left:0 ; right:0 ; z-index:99"

    if (window.scrollY == 0) {
        navBar.classList.replace('flex-row', 'flex-column')
        navBar.style.backgroundColor = null 
    }
})

