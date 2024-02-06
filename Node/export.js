console.log(module.exports ===  this);
console.log(module.exports === exports);
// module.exports so exporta o que está embaixo dele,
//mas sem acessar diretamente ao require do arquivo

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;

console.log(module.exports)

exports = {
    nome: 'teste'
}

console.log(module.exports)
