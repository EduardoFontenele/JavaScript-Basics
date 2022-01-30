const pessoa = {
    nome: 'Eduardo',
    idade: 21,
    nacionalidade: 'BR'
}

console.log(pessoa)
console.log(pessoa['nome'])
console.log(pessoa.nome)

// Factory functions

const criaPessoa = function(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        get falaIdade() {
            console.log(this.idade)
        }
    }
}

const p1 = criaPessoa('Eduardo', 'Fontenele', 21)
console.log(p1)
p1.falaIdade

const Pessoa = function(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    Object.defineProperty(this, 'idade', {
        enumerable: true,
        value: idade,
        writable: true,        
    })
}

const p2 = new Pessoa('Eduardo', 'Fontenele', 21)
console.log(p2)

console.log('/////////////////////////////////////////////////////////////////////////////////////////////////////////')

function clientCPF(nome, cpf) {
    this.nome = nome

    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        get: function() {
            return cpf
        },
        set: function(value) {
            if(typeof value !== 'number') {
                console.log('This is not a number')
                return 
            }
            
        }
    })
}

const cliente1 = new clientCPF('João Amoedo', 33423299806)
cliente1.cpf = 'ablueblablau'
console.log(Object.values(cliente1))


