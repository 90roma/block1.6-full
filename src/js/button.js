let btnServ = document.getElementById('section-service__btn');
let aboutUsWrapper = document.querySelector('.section-services__text-wrapper');
let bntServIcon = document.querySelector('.section-services__btn-icon');
let btnServText = document.querySelector('.section-services__btn-text');

let btnBrand = document.getElementById('section-brand__btn');
let brandWrapper = document.querySelector('.section-brand__wrapper');
let btnBrandIcon = document.querySelector('.section-brand__btn-icon');
let btnBrandText = document.querySelector('.section-brand__btn-text');

let btnTech = document.getElementById('section-technics__btn')
let techWrapper = document.querySelector('.section-technics__wrapper');
let btnTechIcon = document.querySelector('.section-technics__btn-icon');
let btnTechText = document.querySelector('.section-technics__btn-text');

let bgSlide = document.querySelector('.menu-bg');
let btnBurger = document.querySelector('.header__btn-circle--burger');
let mainMenu = document.querySelector('.main-menu');
let btnClose = document.querySelector('.main-menu__btn-circle--close');

let menuChat = document.querySelector('.menu-chat');
let btnChat = document.getElementById('btnChat');
let btnChatMobile = document.getElementById('btnChatMobile');
let btnCloseChat = document.querySelector('.menu-chat__btn-circle--close');

let menuCall = document.querySelector('.menu-call');
let btnCalls = document.getElementById('btnCalls');
let btnCallMob = document.getElementById('btnCallMob');
let btnCloseCall = document.querySelector('.menu-call__btn-circle--close');

btnCalls.addEventListener('click', function () {
    if (menuCall.className === 'menu-call menu-call--close') {
        menuCall.className = 'menu-call menu-call--open';
        bgSlide.className = 'menu-bg menu-bg--open';
        mainMenu.className = 'main-menu main-menu--close';
    } else {
        menuCall.className = 'menu-call menu-call--close';
        bgSlide.className = 'menu-bg menu-bg--close';
    }
});
btnCallMob.addEventListener('click', function () {
    if (menuCall.className === 'menu-call menu-call--close') {
        menuCall.className = 'menu-call menu-call--open';
        bgSlide.className = 'menu-bg menu-bg--open';
        mainMenu.className = 'main-menu main-menu--close';
    } else {
        menuCall.className = 'menu-call menu-call--close';
        bgSlide.className = 'menu-bg menu-bg--close';
    }
});


btnChat.addEventListener('click', function() {
    if (menuChat.className === 'menu-chat menu-chat--close') {
        menuChat.className = 'menu-chat menu-chat--open';
        bgSlide.className = 'menu-bg menu-bg--open';
        mainMenu.className = 'main-menu main-menu--close';
    } else {
        menuChat.className = 'menu-chat menu-chat--close';
        bgSlide.className = 'menu-bg menu-bg--close';
    }
});
btnChatMobile.addEventListener('click', function() {
    if (menuChat.className === 'menu-chat menu-chat--close') {
        menuChat.className = 'menu-chat menu-chat--open';
        bgSlide.className = 'menu-bg menu-bg--open';
        mainMenu.className = 'main-menu main-menu--close';
    } else {
        menuChat.className = 'menu-chat menu-chat--close';
        bgSlide.className = 'menu-bg menu-bg--close';
    }
});

btnCloseChat.onclick = function () {
    bgSlide.className = 'menu-bg menu-bg--close';
    menuChat.className = 'menu-chat menu-chat--close';
};
btnCloseCall.onclick = function () {
    bgSlide.className = 'menu-bg menu-bg--close';
    menuCall.className = 'menu-call menu-call--close';
};

btnServ.addEventListener('click', function (){
    aboutUsWrapper.classList.toggle('section-services__text-wrapper--show');
    bntServIcon.classList.toggle('section-services__btn-icon');
    if (btnServText.innerText === 'Читать далее') {
        btnServText.innerText = 'Скрыть';
    } else {
        btnServText.innerText = 'Читать далее';
    }
});
btnBrand.addEventListener('click', function() {
  brandWrapper.classList.toggle('section-brand__wrapper--show');
  btnBrandIcon.classList.toggle('section-brand__btn-icon');
   if (btnBrandText.innerText === 'Показать всё') {
       btnBrandText.innerText = 'Скрыть';
  } else {
       btnBrandText.innerText = 'Показать всё';
   }
});
btnTech.addEventListener('click', function (){
    techWrapper.classList.toggle('section-technics__wrapper--show');
    btnTechIcon.classList.toggle('section-technics__btn-icon');
    if (btnTechText.innerText === 'Показать всё') {
        btnTechText.innerText = 'Скрыть';
    } else {
        btnTechText.innerText = 'Показать всё';
    }
});

btnBurger.addEventListener('click', function () {
    if (mainMenu.className === 'main-menu main-menu--close') {
        mainMenu.className = 'main-menu main-menu--open';
        bgSlide.className = 'menu-bg menu-bg--open';
    } else {
        mainMenu.className = 'main-menu main-menu--close';
        bgSlide.className = 'menu-bg menu-bg--close';
    }
    mainMenu.classList.toggle('main-menu--shadow');
});

btnClose.addEventListener('click', function (){
    mainMenu.classList.toggle('main-menu--shadow');
    if (mainMenu.className === 'main-menu main-menu--open') {
        mainMenu.className = 'main-menu main-menu--close';
        bgSlide.className = 'menu-bg menu-bg--close';
    } else {
        mainMenu.className = 'main-menu main-menu--open';
        bgSlide.className = 'menu-bg menu-bg--open';
    }
});
bgSlide.onclick = function() {
    bgSlide.className = 'menu-bg menu-bg--close';
    mainMenu.className = 'main-menu main-menu--close';
    menuChat.className = 'menu-chat menu-chat--close';
    menuCall.className = 'menu-call menu-call--close';
};



