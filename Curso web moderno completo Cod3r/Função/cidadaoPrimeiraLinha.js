//função em js é first-class object (citizens)
//higher order function, funções que recebem funções como 
//parâmetro ou retornam uma função.

//Criar função de forma literal

function fun1(){ }

//Armazenar função em uma variavel

const fun2 = function () { }

//Armazenar Função em um array

const array = [function (a, b){ return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar funçao dentro de um objeto

const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar função como um parametro
function run(func){
    func()
    }
run(function(){ console.log('Executando...') })

//Uma função pode retornar/conter uma função como resultado
function soma(a ,b){
   return function (c){
    return a + b + c
    }
    }
console.log(soma(2, 3)(4))

const cincoMais = soma(2, 3)
console.log(cincoMais(4))