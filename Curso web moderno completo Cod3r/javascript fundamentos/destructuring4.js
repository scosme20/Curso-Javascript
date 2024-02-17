function rand ([min = 0, max = 1000]) {
    if(min > max) (min, max) = (max - min)
    const valor = math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand[40, 50]) //retornará um número aleatório entre 40 e 50
console.log(rand[992])
//retornará um número aleatório entre 0 e 992
console.log(rand([, 10]))
console.log(rand([]))
//console.log(rand()) lança erro porque os parâmetros estão fora do formato correto</s