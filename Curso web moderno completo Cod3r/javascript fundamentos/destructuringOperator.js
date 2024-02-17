const pessoa = {
    nome: 'Ana',
    idade: '5',
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const {nome, idade} = pessoa
//Usando o destructuring para obter dados dentro do objeto pessoa
console.log(nome, idade)

const  {nome: n, idade: i} = pessoa
// Renomeando as chaves ao usar o destructuring
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

//Exemplo mais complexo

const {endereço: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)