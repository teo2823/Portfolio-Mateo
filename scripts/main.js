//BURGER MENU

let btnMenu = document.querySelector(".barras");
let menu = document.querySelector('.nav__menu');
let blurBkg = document.querySelector('.blur-background');

// x icon
let xmark = document.querySelector('.xmark');
let xmarkDiv = document.querySelector('.xmark-container');

btnMenu.addEventListener('click', ()=>{
    menu.style.width = '220px';
    blurBkg.style.display = 'block';
    xmarkDiv.style.display = 'flex';
    xmark.style.display = 'flex';
})
blurBkg.addEventListener('click', ()=>{
    menu.style.width = '0';
    blurBkg.style.display = 'none';
    xmarkDiv.style.display = 'none';
})

xmark.addEventListener('click', ()=>{
    menu.style.width = '0';
    blurBkg.style.display = 'none';
    xmark.style.display = 'none';
})

// animaciones

const aboutMe = document.querySelector('.aboutmeDivTr');
//Funcion de mostrar imagen al scrollear
let effect = (entrys, observador)=>{
    entrys.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry)
            entry.target.classList.add('visible');
        }
        
    });
}

const observador = new IntersectionObserver(effect, {
    root: null,
    rootMargin: '0px 0px 400px 0px',
    threshold: 1.0
});

observador.observe(aboutMe);




