
window.player = {
    image: document.querySelector('.player__img'),
    title: document.querySelector('.player__title'),
    
    start() {
        this.image.src = './assets/images/testeImage.png';
        this.image.style.borderRadius = '1rem'; 
        this.title.innerText = data[0].title;
    },
}
import {data} from './episodes.js';
