function Produto(nome, preco, estoque) {
    
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Mensagem')
            }

            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
p1.estoque = 13
console.log(p1.estoque)

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            if(typeof valor !== 'string') {
                throw new TypeError('This is not a string');
            }

        }
    }
}

const p2 = criaProduto('Tenis Adidas')
console.log(p2.nome)
p2.nome = 13123
console.log(p2.nome)
