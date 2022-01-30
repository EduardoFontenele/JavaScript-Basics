function rand(min = 1, max = 3) {
    return Math.round(Math.random() * ((max - min)) + min) * 1000
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Erro - tente novamente')
        }

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

// esperaAi('Fase 1', rand(1, 3))
//     .then(valor => {
//         console.log(console.log(valor))
//         return esperaAi('Fase 2', rand(1, 3))
//     })
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase 3', rand(1, 3))
//     })
//     .then(valor => {
//         console.log(valor)
//     })
//     .catch(err => {
//         console.log(err)
//     })

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand())
        console.log(fase1)
        const fase2 = await esperaAi('Fase 2', rand())
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', rand())
        console.log(fase3)
        console.log('Terminamos na ' + fase3)
    } catch(err) {
        console.log(err)
    }
}

executa()