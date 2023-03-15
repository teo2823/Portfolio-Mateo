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

// SHOW X


