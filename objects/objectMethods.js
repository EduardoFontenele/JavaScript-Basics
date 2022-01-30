// Object.keys = retorna um array com as chaves do objeto
// Object.freeze = congela o objeto, impedindo de ser alterado
// Object.defineProperty = define a propriedade de uma chave
// Object.defineProperties = define a propriedade de várias chaves

const produto = {nome: 'Caneca', preco: 20}
const outroProduto = {...produto} // Usando spread operator para copiar um objeto
console.log(outroProduto, produto)
outroProduto.nome = 'Camisa'
outroProduto.preco = 100
console.log(outroProduto, produto)

// Usando Object.assign para copiar um objeto

const caneca = Object.assign({}, produto)
console.log(caneca)
console.log(Object.keys(produto))
Object.freeze(caneca)
caneca.nome = 'Tenis'
console.log(caneca)

// getOwnPropertyDescriptor

console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'))