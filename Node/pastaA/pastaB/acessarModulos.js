const moduloAcess = require('../../moduloA')

const saudacao = require('../../../node_modules/saudacao/index')
console.log(saudacao.Ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(3500)