function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor inválido! A área (${area})m2 é maior`)
    } else {
        return area
    }
    }
    console.log(area(2,2))
    console.log(area(2))
    console.log(area())
    console.log(area(2, 3, 17, 22, 44))
    console.log(area(5, 5))

