const saudacao = function(nome) {
    return `Olá, ${nome}`
}

console.log(saudacao('Eduardo'))

const soma = function(a = 0, b = 0) {
    const valor = a + b
    return valor
}

console.log(soma(1, 1))
console.log(soma())

const raiz = function(n) {
    return Math.sqrt(n)
}

console.log(raiz(256))
console.log(raiz(16))

const sqrt = n => Math.sqrt(n)

console.log(sqrt(2))
console.log(sqrt(100))