import {data} from './episodes.js';

/*

how the json works:
episodio-* (for normal episodes)
emails-* (for emails episodes)
especial-natal (for the unique xmas special episode)

and inside each episode obj we have: a 'title', a 'descricao' and a 'id', and once i put 'extra' but its just in one obj that i don't remember wich

*/ 

const image = document.querySelector('.player__img');
const title = document.querySelector('.player__title');

image.src = './assets/images/testeImage.png';
image.style.borderRadius = '1rem';
title.textContent = data[`episodio-${data['episodio-1'].id}`].title;   

console.log(data["episodio-1"].title, data['episodio-1'].id, data['emails-1'].id);