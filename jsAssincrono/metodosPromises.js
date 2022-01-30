
function rand(min, max) {
    return Math.round(Math.random() * ((max - min)) + min) * 1000
}

function esperaAi(msg, tempo) {
return new Promise((resolve, reject) => {

    setTimeout(() => {
        if(typeof msg !== 'string') {
            reject()
        }
        resolve(msg)
    }, tempo)
})
}

// Promise.all , Promise.race, Promise.resolve, Promise.reject

// Promise all - resolve todas as promises da cadeia, caso seja possível. Se não, retorna o erro
const promises1 = [
    'Começo',
    esperaAi('Primeira promise', 1000),
    esperaAi('Segunda promise', 1000),
    esperaAi('Terceira promise', 1000),
    'Fim'
]

Promise.all(promises1)
    .then(valor => {
        console.log(valor)
    })
    .catch(err => {
        console.log('Erro: tipo inválido')
    })

// Promise race
const promises2 = [
    esperaAi('Primeira promise', rand(1, 5)),
    esperaAi('Segunda promise', rand(1, 5)),
    esperaAi('Terceira promise', rand(1, 5)),
] 

Promise.race(promises2)
    .then(valor => {
        console.log(valor)
    })