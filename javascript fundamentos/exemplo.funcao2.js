//Armazenando uma função dentro de uma variavel
//Ao invés de chamar a função diretamente, você pode armazenar em uma
// variável e chamá-la quando precisar.
const imprimirSoma = function(a, b){
    console.log(a + b)
    }
imprimirSoma(2, 3)

//armazenar uma arrow function dentro de uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//Retorno implícito

const subtracao = (a, b) => {
    return a - b
    }
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('legal')