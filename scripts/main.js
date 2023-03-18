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

//seccion about me
const aboutMe = document.querySelector('.aboutmeDivTr');


//Funcion de mostrar imagen al scrollear
let effect = (entrys, observador)=>{
    entrys.forEach((entry) => {
        if(entry.isIntersecting){

            entry.target.classList.add('visible');
        } 
        
    });
}

const observador = new IntersectionObserver(effect, {
    root: null,
    rootMargin: '0px 0px 300px 0px',
    threshold: 1.0
});

observador.observe(aboutMe);


//cards
const firstCard = document.querySelector('.card_1');
const secondCard = document.querySelector('.card_2');
const threecard = document.querySelector('.card_3');
const fourCard = document.querySelector('.card_4');
//Animacion para mostrar los proyectos
let effectCard = (entrys, observadorDos)=>{
    entrys.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('transition_effect');
        } 
        
    });
}
const observadorDos = new IntersectionObserver(effectCard, {
    root: null,
    rootMargin: '0px 0px 600px 0px',
    threshold: 1.0
});

observadorDos.observe(firstCard);
observadorDos.observe(secondCard);
observadorDos.observe(threecard);
observadorDos.observe(fourCard);


//DEFAULT ANIMATION
const titleSlider = document.querySelector('.slider__title_effect');
const titleProjects = document.querySelector('.projects__title_effect');
const titleContact = document.querySelector('.contact__title_effect');
const pContact = document.querySelector('.contact__p_effect');


let effectDefault = (entrys, observadorTres)=>{
    entrys.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('effectscroll');
        } 
        
    });
}
const observadorTres = new IntersectionObserver(effectDefault, {
    root: null,
    rootMargin: '0px 0px 300px 0px',
    threshold: 1.0
});

observadorTres.observe(titleSlider);
observadorTres.observe(titleProjects);
observadorTres.observe(titleContact);
observadorTres.observe(pContact);

let contactForm = document.querySelector('.contact__div_effect');
let buttonProjects = document.querySelector('.projects__btn_effect');
let slider = document.querySelector('.slider_effect')


let effectContact = (entrys, observadorCuatro)=>{
    entrys.forEach((entry) => {
        if(entry.isIntersecting){
            console.log(entry)
            entry.target.classList.add('effectsdiv');
        } 
        
    });
}
const observadorCuatro = new IntersectionObserver(effectContact, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

observadorCuatro.observe(contactForm);
observadorCuatro.observe(buttonProjects);
observadorCuatro.observe(slider);



