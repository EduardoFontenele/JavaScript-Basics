/* let n1 = 1 // number
let n2 = 2 // number - inteiro
let n3 = 1.329449 // ponto flutuante


console.log(n1 + n2)
console.log(n1.toString() + n2)
console.log(Number.isInteger(n1))
console.log(Number.isNaN(n1))
console.log(Number.isInteger(n3))
console.log(n3.toFixed(2))

console.log(Math.floor(n3))
console.log(Math.ceil(n3))
console.log(Math.round(n3))
console.log(Math.ceil(Math.random() * (10 - 0))) */

const numero = Number(prompt('Seu número é:'))
const numeroTitulo = document.getElementById('numero-titulo')
const numeroSqr = document.getElementById('sqr')
const numeroPot = document.getElementById('pot')
const numeroPlus1000 = document.getElementById('maisMil')
const numeroLog = document.getElementById('log')
const numeroInt = document.getElementById('int')

numeroTitulo.innerHTML = numero
numeroSqr.innerHTML = Math.sqrt(numero).toFixed(2)
numeroPot.innerHTML = numero ** 2
numeroPlus1000.innerHTML = numero + 1
numeroLog.innerHTML = Math.log10(numero)
numeroInt.innerHTML = Number.isInteger(numero)