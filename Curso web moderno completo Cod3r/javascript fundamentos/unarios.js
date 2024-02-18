let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //retorna true pois o valor de 
//++num1 é igual a --num2, e o ++num1 é incrementado 
//em 1 antes de ser comparado
console.log(num1 === num2) //retorna true pois o valor de
//num1 é igual ao valor de num2 (ainda que tenham sido alterados anteriormente)