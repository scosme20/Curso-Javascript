let valor //não inicializa (undefined)
console.log(valor);

valor = null //ausencia de valor
console.log(valor);

//null é um tipo primitivo, undefined também é um tipo primitivo

const produto = {}
console.log(produto.preco)
//console.log(produto.preco.toFixed()) Erro! não tem
console.log(produto.desconto) // undefined
console.log(produto.nome) // undefined
console.log(produto)

produto.preco = 30;
console.log(produto)