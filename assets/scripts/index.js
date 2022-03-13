import {data} from './episodes.js';

/*

how the json works:
episodio-* (for normal episodes)
emails-* (for emails episodes)
especial-natal (for the unique xmas special episode)

and inside each episode obj we have: a 'title', a 'descricao' and a 'id'
the id is consecutive in integers

video to learn how to do it: https://www.youtube.com/watch?v=vqrjFnq3-uo&t=123s

*/ 
window.addEventListener('load', () => {
    player.start();
})

console.log(data[0].title, data[0].id, data[20].id);