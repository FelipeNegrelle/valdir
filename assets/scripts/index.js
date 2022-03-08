import {data} from './episodes.js';

/*

how the json works:
episodio-* (for normal episodes)
emails-* (for emails episodes)
especial-natal (for the unique xmas special episode)

and inside each episode obj we have: a 'title', a 'descricao' and a 'id'

*/ 

console.log(data["episodio-1"].title, data['episodio-1'].id, data['emails-1'].id)