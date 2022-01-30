// todo objeto é criado automaticamente como filho do objeto "mestre" Object.
// Object possui uma função construtora, então criar um Objeto com notação literal é o mesmo que fazer o seguinte:

const objectA = new Object
objectA.nome = 'Eduardo'
objectA.sobrenome = 'Fontenele'
objectA.idade = 21
console.log(objectA)

const objectB = {
    nome: 'Milena',
    // __proto__: Object.prototype
}

// Definindo um prototype para o ObjectB através de um método
Object.setPrototypeOf(objectB, objectA)
console.log(objectB.idade)

// Utilizando numa constructor function nosssa
function Produto (nome, preco) {

    Object.defineProperties(this, {
        nome: {
            value: nome,
            enumerable: true,
            writable: true,
            configurable: true,
        },
        preco: {
            value: preco,
            enumerable: true,
            writable: true,
            configurable: true,
        },
        precoInicial: {
            value: preco,
            writable: false,
            configurable: false,
        }
    })

}

Produto.prototype.desconto = function (percentual) {
    if (percentual > 0 && percentual < 100) {
        this.preco = this.preco - (this.preco * (percentual / 100))
    }
}

Produto.prototype.resetarPreco = function() {
    this.preco = this.precoInicial
}


const camisaNike = new Produto('Camisa Nike', 200)

camisaNike.desconto(0)
console.log(camisaNike)
camisaNike.desconto(50)
console.log(camisaNike)
camisaNike.resetarPreco()
console.log(camisaNike)



