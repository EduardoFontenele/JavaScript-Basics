const Produto = function(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra o valor
        writable: false, // Permite apagar/reescrever
        configurable: false // Permite configurar
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false
        }
    })
}

const camisa = new Produto('Nike', 199, 2)
console.log(camisa)
camisa.estoque = 'Adidas'
console.log(camisa)
console.log(Object.keys(camisa))

for(let keys in camisa) {
    console.log(keys)
}