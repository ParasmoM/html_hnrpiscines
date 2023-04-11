console.log('debut du script');
const BTN = document.querySelector('#hamberger');
const SPAN = document.querySelector('#hamberger span');
const MENU_BUTTON = document.querySelector('.menu-btn');

BTN.addEventListener('click', () => {
    BTN.classList.toggle('active');

    if (BTN.className === 'menu active') {
        SPAN.innerHTML = 'Fermer le menu';
    } else { 
        SPAN.innerHTML = 'Menu';
    }
});





