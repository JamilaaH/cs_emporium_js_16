let btnBlanc = document.querySelector('.btn-blanc')
let btnNoir = document.querySelector('.btn-noir')
let elementNav = document.querySelectorAll('.nav-link')
let logo = document.querySelector('.logo')
let legend = document.querySelectorAll('.text')
let grandTitre = document.querySelectorAll('.title')
console.log(legend);
// console.log(btnNoir);

// mode sombre
let sombre = () => {
    document.body.style = "background-color:black"
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
}


btnNoir.addEventListener('click', sombre)

let blanc = () => {
    document.body.style = "background-color:white"
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

// 