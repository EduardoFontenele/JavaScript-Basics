
const numeros = [1, 2, 3, 5, 10, 35, 50, 70, 40, 100, 55] 
const totalNumeros = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador -= valor
    return acumulador
}, 0)
console.log(totalNumeros)

// Retornando diferentes coisas
const menorNumero = numeros.reduce((previousValue, currentValue) => currentValue > previousValue ? previousValue : currentValue)
console.log(menorNumero)
const maiorNumero = numeros.reduce((previousValue, currentValue) => currentValue > previousValue ? currentValue : previousValue)
console.log(maiorNumero)
const ultimoNumeroPar = numeros.reduce((previousValue, currentValue) => currentValue % 2 === 0 ? currentValue : previousValue)
console.log(ultimoNumeroPar)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

// Retornando a pessoa mais velha

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)

const maisVelha2 = pessoas.reduce((previousValue, currentValue) => currentValue.idade > previousValue.idade ? currentValue : previousValue)
console.log(maisVelha2)

