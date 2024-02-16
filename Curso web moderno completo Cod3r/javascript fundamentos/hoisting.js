/*uma definição estrita de elevação sugere que as declarações de variáveis e 
funções são fisicamente movidas para o topo do seu código, mas isso não é 
realmente o que acontece. Em vez disso, as declarações de variável e função 
são colocadas na memória durante a fase de compilação, mas permanecem 
exatamente onde você as digitou no seu código. */

console.log('a =', a)
var a = 2;
console.log('a =', a)

console.log('b =', b)
let b = 2; 
console.log('b =', b)