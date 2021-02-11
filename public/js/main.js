let btnBlanc = document.querySelector('.btn-blanc')
let btnNoir = document.querySelector('.btn-noir')
let elementNav = document.querySelectorAll('.nav-link')
let logo = document.querySelector('.logo')
let legend = document.querySelectorAll('.text')
let grandTitre = document.querySelectorAll('.title')
let navBar = document.querySelector('.navbar')
let nav = document.querySelector('.navbar-collapse')
console.log(nav);
let header = document.querySelector('header')
// console.log(legend);
// console.log(btnNoir);
// console.log(navBar);
let allBtn = document.querySelectorAll(".boutonCarou");


// mode sombre
let sombre = () => {
    document.body.style = "background-color:black"
    navBar.classList.replace('bg-blanc', 'bg-noir')
    logo.style.color = "white"
    elementNav.forEach(element => {
        element.style.color = "white"
    });
    allBtn.forEach(element => {
        element.classList.replace('btn-outline-dark', 'btn-outline-light')
    });
    legend.forEach(element => {
        element.style.color = "white"
    });
    allBtn.forEach(element => {
        element.classList.replace('btn-outline-dark', 'btn-outline-light')
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
    navBar.classList.replace('bg-noir', 'bg-blanc')
    logo.style.color ="black"
    elementNav.forEach(element => {
        element.style.color = "black"    
    });
    legend.forEach(element => {
        element.style.color = "black"    
    });
    allBtn.forEach(element => {
        element.classList.replace('btn-outline-light', 'btn-outline-dark')
    });

    grandTitre.forEach(element => {
        element.style.color = "black"    
    });
}
btnBlanc.addEventListener('click', blanc)



// navbar

window.addEventListener('scroll', ()=> {
    header.style = "height:70px"
    navBar.classList.replace('flex-column', 'flex-row')
    navBar.style = "position:fixed ; top:0; left:0 ; right:0 ; z-index:99;"
    nav.style ="margin-left:10%"

    if (window.scrollY == 0) {
        navBar.classList.replace('flex-row', 'flex-column')
        navBar.style.backgroundColor = null 
        nav.style ="margin-left:null"

    }
})


//modal de connexion 
let connexion = document.querySelector('#modale1')
let inscription = document.querySelector('#modale2')

let btnCo = document.querySelector('.connexion')
let btnSubs = document.querySelector('.inscription')

let btnSeCo = document.querySelector('.seConnecter')

let popUp = document.querySelector('#connexion')
let btnClose = document.querySelector('.fermer')
// console.log(btnSubs);


//bouton connexion du navbar

btnSeCo.addEventListener('click', ()=> {
    popUp.style = 'display: block'
})

btnClose.addEventListener('click', ()=> {
    popUp.style = 'display: none'
})



btnCo.addEventListener('click', ()=> {
    if (connexion.classList.contains('d-none')) {
        connexion.classList.remove('d-none')
    }
    inscription.classList.add('d-none')
})

btnSubs.addEventListener('click', ()=> {
    if (inscription.classList.contains('d-none')) {
        inscription.classList.remove('d-none')
    }
    connexion.classList.add('d-none')
})



// carrousel 

let btnUn = document.querySelector('.un')
let btnDeux = document.querySelector('.deux')
let btnTrois = document.querySelector('.trois')
let btnQuatre = document.querySelector('.quatre')
let test = document.querySelector('.test')


btnDeux.addEventListener('click', ()=> {
    test.style = "transform:translateX(-200px); transition:2s"    
})

btnTrois.addEventListener('click', ()=> {
    test.style = "transform:translateX(-400px); transition:2s"    
})
btnQuatre.addEventListener('click', ()=> {
    test.style = "transform:translateX(-600px); transition:2s"
    
})
btnUn.addEventListener('click', ()=> {
    test.style = "transform:translateX(0%); transition:2s"
    
})


console.log(allBtn);

// let myEvent = (e) => {
//     var btn = e.target
//     if (btn.classList.contains('deux')) {
//         test.style = "transform:translateX(-40%); transition:2s"
//     } else if (btn.classList.contains('trois')) {
//         test.style = "transform:translateX(-40%); transition:2s" 
        
//     } else if (btn.classList.contains('quatre')) {
//         test.style = "transform:translateX(-40%); transition:2s"
//     } else if (btn.classList.contains('un')) {
//         test.style = "transform:translateX(-40%); transition:2s"
//     }
// }
// allBtn.addEventListener('click', myEvent)

// console.log(test.clientWidth);
// console.log(test.offsetWidth);