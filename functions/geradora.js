// Funções geradoras possuem a característica de entregar inúmeros valores
// mas não precisa gerar todos imediatamente

function* geradora1() {
    yield 'Valor 1'
    yield 'Valor 2'
    yield 'Valor 3'
}

const g1 = geradora1()
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)


for (let valor of g1) {
    console.log(valor)
}

function* generateId() {
    let i = 0
    while(true) yield i++
}

const ids = generateId()
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value)