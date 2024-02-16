//par nome/valor

const saudacao ="Exemplo 1" //Contexto léxico 1

function exec() {
    const saudacao = "Exemplo 2"// Contexto Léxico 
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor, onde cada um desses 
//pares é conhecido como propriedade.
const cliente ={
    nome: "Pedro",
    idade :30,
    peso:85.4,
    endereco:{
        logradouro:"Rua ABC",
        numero:987
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)