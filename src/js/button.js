const btn = document.querySelectorAll('.btn');
const btnIcon = document.querySelectorAll('.btn-icon');
const btnText = document.querySelectorAll('.btn-text');
const body = document.querySelector('.body');
function bodyFixed() {
  if (bgSlide.className === 'menu-bg menu-bg--open') {
     body.className = 'body body--overflow';
  } else {
    body.className = 'body';
  }
};

const aboutUsWrapper = document.querySelector('.section-services__text-wrapper');
const brandWrapper = document.querySelector('.section-brand__wrapper');
const techWrapper = document.querySelector('.section-technics__wrapper');

function clickBtn() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
      btnIcon[i].classList.toggle('rotate');
      if (btnText[i].innerText === 'Показать всё') {
          btnText[i].innerText = 'Скрыть';
      } else {
          btnText[i].innerText = 'Показать всё';
      }
    })
  }
}
clickBtn();

const btnServ = document.getElementById('section-service__btn');
btnServ.addEventListener('click', function (){
    clickBtn();
    aboutUsWrapper.classList.toggle('section-services__text-wrapper--show');
    clickBtn();
});

const btnBrand = document.getElementById('section-brand__btn');
btnBrand.addEventListener('click', function (){
    clickBtn();
    brandWrapper.classList.toggle('section-brand__wrapper');
    clickBtn();
});

const btnTech = document.getElementById('section-technics__btn');
btnTech.addEventListener('click', function (){
    clickBtn();
    techWrapper.classList.toggle('section-technics__wrapper');
    clickBtn();
});

const bgSlide = document.querySelector('.menu-bg');
const mainMenu = document.querySelector('.main-menu');
const menuChat = document.querySelector('.menu-chat');
const menuCall = document.querySelector('.menu-call');

const btnBurger = document.querySelector('.btn-circle--burger');
btnBurger.addEventListener('click', function () {
  bodyFixed();
    if (mainMenu.className === 'main-menu main-menu--close') {
        mainMenu.className = 'main-menu main-menu--open';
        bgSlide.className = 'menu-bg menu-bg--open';

    } else {
        mainMenu.className = 'main-menu main-menu--close';
        bgSlide.className = 'menu-bg menu-bg--close';
    }
    mainMenu.classList.toggle('main-menu--shadow');
});

function close() {
    bgSlide.className = 'menu-bg menu-bg--close';
    mainMenu.className = 'main-menu main-menu--close';
    menuChat.className = 'menu-chat menu-chat--close';
    menuCall.className = 'menu-call menu-call--close';
}

bgSlide.addEventListener ('click', function() {
  close();
  bodyFixed();
})

const btnClose = document.querySelectorAll('.btn-circle--close');
for (let i = 0; i < btnClose.length; i++) {
    btnClose[i].onclick = function () {
        close();
        bodyFixed();
    }
}

const btnCall = document.querySelectorAll('.btn-circle--call');
for (let i = 0; i < btnCall.length; i++) {
  btnCall[i].addEventListener('click', function() {
    if (menuCall.className === 'menu-call menu-call--close') {
         menuCall.className = 'menu-call menu-call--open';
         bgSlide.className = 'menu-bg menu-bg--open';
         mainMenu.className = 'main-menu main-menu--close';
         menuChat.className = 'menu-chat menu-chat--close';
         bodyFixed();
     } else {
         menuCall.className = 'menu-call menu-call--close';
         bgSlide.className = 'menu-bg menu-bg--close';
     }
  });
}

const btnChat = document.querySelectorAll('.btn-circle--chat');
for (let i = 0; i < btnChat.length; i++) {
    btnChat[i].addEventListener('click', function(){
        if (menuChat.className === 'menu-chat menu-chat--close') {
            menuChat.className = 'menu-chat menu-chat--open';
            bgSlide.className = 'menu-bg menu-bg--open';
            mainMenu.className = 'main-menu main-menu--close';
            menuCall.className = 'menu-call menu-call--close';
            bodyFixed();
        } else {
            menuChat.className = 'menu-chat menu-chat--close';
            bgSlide.className = 'menu-bg menu-bg--close';
        }
    });
}
