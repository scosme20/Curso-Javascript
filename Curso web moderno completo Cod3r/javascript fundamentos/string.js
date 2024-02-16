const nome = "sebastiao Cosme";

console.log(nome.charAt(3));
console.log(nome.charAt(5));
//O método charAt() retorna o caractere especificado a partir de uma string.

console.log(nome.charCodeAt(3));
//O método charCodeAt() retorna o Unicode do caractere em um índice (posição) especificado em uma string.

console.log(nome.indexOf('3'));
/*O método indexOf() retorna o primeiro índice
em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.*/

console.log(nome.substring(1));
console.log(nome.substring(0, 3));
/*O método substring() de valores String retorna a parte desta string desde o índice
inicial até e excluindo o índice final, ou até o final da string se nenhum índice final for fornecido.*/

console.log('Meu nome é'.concat(nome).concat("Agostinho"));
/*combina o conteúdo de duas ou mais strings e tem como resultado 
uma nova sequência de caracteres contendo todos os valores passados como parâmetro.*/

console.log(nome.replace("Cosme", 'Agostinho'));
/*O método replace() percorre toda a string em busca da sequência de caracteres a ser substituída.
Caso essa sequência de caracteres não seja encontrada, nenhuma substituição é realizada;
caso seja encontrada, uma nova string, com a substituição feita, é devolvida pelo método. */

console.log('Bianca', 'Melissa', 'Avril'.split(','));
/*O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array
e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro
na chamada do método. */

