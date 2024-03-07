class lancamento  {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome,
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes,
        this.ano = ano
        this.lancamento = []
    }
    addlancamentos(...lancamento) {
        lancamento.forEach( l => this.lancamento.push(l)) 
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamento.forEach( l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    } 
}

const salario = new lancamento('Salario', 45000)
const contaDeLuz = new lancamento('Conta de Luz', -220)


const contas = new cicloFinanceiro(6, 2018)
contas.addlancamentos(salario, contaDeLuz)
console.log(contas.sumario())