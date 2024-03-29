//object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensivel:', Object.preventExtensions(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escola branca'
delete produto.tag
console.log(produto)

//object.seal

const pessoa = {nome: 'Julana', idade: 35}
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//object.freeze = selado + valores constantes