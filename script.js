const boardItem = document.querySelectorAll('.boardItem');

// import { player } from './test.js'

boardItem.forEach(e => e.addEventListener('click', (e) => {
    let item = e.target;

    item.style.animation = 'animationOutline 0.2s linear both' ;

}))

