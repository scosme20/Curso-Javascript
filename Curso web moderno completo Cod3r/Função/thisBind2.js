function pessoa() {
    this.idade = 0
    const self = this
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa
