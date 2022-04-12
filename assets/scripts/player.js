
window.player = {
    image: document.querySelector('.player__img'),
    title: document.querySelector('.player__title'),
    play_button: document.querySelector('#play'),
    return_button: document.querySelector('#return'),
    next_button: document.querySelector('#next'),
    
    start() {
        this.image.src = './assets/images/testeImage.png';
        this.image.style.borderRadius = '1rem'; 
        this.title.innerText = data[0].title;
    },

    play(){
    },
}
import {data} from './episodes.js';