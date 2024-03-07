//pessoa -> 123 {...}

const pessoa = {nome: 'Joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome:'Ana'} isso vai dar erro

Object.freeze(pessoa)


pessoa.end = 'Rua ABC'
pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome : 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)