function tratarErroElancar(erro) {
throw new Error('Ocorreu um erro!'); 
// Lançando o erro para ser capturado pelo try/catch no index.js
//     throw new Error('Ocorreu um erro!');
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase( ) + "!!!");
    } catch (e) {
        tratarErroElancar(e)
    }
    finally {
        console.log('final')
    }
}

const obj = {nome: 'roberto'}
imprimirNomeGritado(obj)