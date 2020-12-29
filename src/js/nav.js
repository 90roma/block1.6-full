const activeVertical = document.querySelectorAll('.main-menu__nav-item');
const activeHorizon = document.querySelectorAll('.section-services__nav-item');

for (let i = 0; i < activeVertical.length; i++) {
  activeVertical[i].addEventListener('click', function() {
    for (let i = 0; i < activeVertical.length; i++) {
      activeVertical[i].classList.remove('nav-item--vertical--active');
    }
    this.classList.add('nav-item--vertical--active');
  })
}

for (let i = 0; i < activeHorizon.length; i++) {
  activeHorizon[i].addEventListener('click', function() {
    for (let i = 0; i < activeHorizon.length; i++) {
      activeHorizon[i].classList.remove('nav-item--horizon--active');
    }
    this.classList.add('nav-item--horizon--active');
  })
}
