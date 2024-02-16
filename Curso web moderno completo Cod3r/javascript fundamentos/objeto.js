/*Um objeto é uma coleção de dados e/ou funcionalidades relacionadas
(que geralmente consistem em diversas variáveis
e funções — que são chamadas de propriedades e 
métodos quando estão dentro de objetos).
*/

const prod1 = {}
prod1.nome = 'Smartphone Iphone 15'
prod1.preco = 10.000
prod1['desconto legal'] = 0.40 //evitar atributos com espaço
console.log(prod1);

const prod2 = {
    nome: 'Notebook Dell',
    preco: 3000.60,
};

console.log(prod2);