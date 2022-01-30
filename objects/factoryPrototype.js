// Métodos desacoplados
const falar = {
    falar() { console.log(`${this.nome} está falando`) }
}

const beber = {
    beber() {
        console.log(`${this.nome} está falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está falando`)
    }
}

// Jogando os métodos no objeto que será passado como prototipo na factory
const pessoaPrototype = {...falar, ...beber, ...comer}

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}

const p1 = criaPessoa('Eduardo', 'Fontenele')
console.log(p1)
p1.falar()
p1.beber()
p1.comer()

const p2 = criaPessoa('Milena', 'Marques')
console.log(p2)