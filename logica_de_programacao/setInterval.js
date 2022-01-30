// function retornaHora() {
//     let hora = new Date()
//     return hora.toLocaleTimeString('pt-BR', {
//         hour12: false
//     })
// }

// console.log(retornaHora())

// A função nativa setInterval recebe como parâmetros uma função callback(1) e depois o intervalo em milissegundos de
// quanto em quanto tempo ela deve ser executada.

// function callback() {
//     console.log(retornaHora())
// }

// const timer = setInterval(function() {
//     console.log(retornaHora())
// }, 1000)

// console.log(timer)
// De modo semelhante funciona a função setTimeout. Ela recebe no primeiro parâmetro uma função callback e no segundo parâmetro
// o tempo o qual ela deverá permanecer ativa antes de finalizar.

// setTimeout(function() {
//     clearInterval(timer)
//     console.log('Tchau')
// }, 4000)

// setTimeout(e = () => clearInterval(timer), 4000)

// setTimeout(e = () => clearInterval(console.log('Tchau')), 8000)

let segundos = 1

const contaAteDez = setInterval(function() {
    console.log(segundos++)
}, 1000)

setTimeout(function() {
    clearInterval(contaAteDez)
    console.log('Adeus')
}, 11000)


