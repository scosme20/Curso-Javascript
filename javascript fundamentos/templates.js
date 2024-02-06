const nome = 'Maze';

const concatenacao = 'Olá ' + nome + '!';

const template = `
Olá
${nome}!`;
//Template strings fornece uma maneira fácil de interpolar variáveis ​​e expressões em strings.
//use crases (``) em vez de aspas ("") para definir uma string:

console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
//O método toUpperCase() de valores String retorna esta string convertida em maiúsculas.

console.log(`Ei... ${up('Cuidado')}!`);
/*Aqui foi feita uma chamada a partir da constante
up, pois ela está recebendo uma arrow function*/