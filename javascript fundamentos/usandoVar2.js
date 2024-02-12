var numero = 1

{
    {
        var numero = 2
        console.log('Dentro =', numero)
    }
}

console.log('Fora = ', numero)

//Variavel var é de escopo global e por isso ela na maioria das vezes vai estar
//disponivel em varios escopos e sucetivel a mudanças fora do escopo em que foi
//declarada quanto dentro.