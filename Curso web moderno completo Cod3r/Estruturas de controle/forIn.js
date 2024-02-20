const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas) { //laço de repetição para percorrer a lista "notas"
    console.log(notas[i])
}

//Outra forma mais moderna e recomendada é utilizar o for...of
for (let nota of notas) {
    console.log(nota);
}

const pessoa = {
    nome: "Ana",
    sobrenome:"Silva",
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}