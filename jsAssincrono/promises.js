// Callback hell - Não aconselhável

/* esperaAi('Frase A', rand(1, 4), function() {
    esperaAi('Frase B',  rand(1, 4), function() {
        esperaAi('Frase C', rand(1, 4), function() {
            console.log('Terminei')
        })
    })
}) */


function rand(min, max) {
        return Math.round(Math.random() * ((max - min)) + min) * 1000
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject()
        }

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}



esperaAi('Estabelecendo conexão com o servidor...', rand(1, 2))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Resgatando dados do usuário...', rand(1, 2))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Verificando acesso', rand(1, 2))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(13131231, rand(1, 2))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .catch(err => {
        console.log('Erro: conexão não estabelecida, tente novamente')
    })
