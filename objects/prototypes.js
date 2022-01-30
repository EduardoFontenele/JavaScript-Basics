// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

// Instância
const pessoa1 = new Pessoa('Eduardo', 'Fontenele')
const pessoa2 = new Pessoa('Milena', 'Marques')
console.log(pessoa1, pessoa1.nomeCompleto())

const filho = {
    nome: 'Eduardo'
}

const pai = {
    nome: 'Marcelo'
}

const avo = {
    nome: 'Mário',
    sobrenome: 'Fontenele',
    getNomeInteiro: function() {
        return this.nome + ' ' + this.sobrenome
    }
}


filho.__proto__ = pai
pai.__proto__ = avo

console.log('///////////////////////////////////////////////////////////////////////')
console.log(filho.getNomeInteiro())
