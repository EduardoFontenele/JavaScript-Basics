// return
// retorna um valor
// termina a função
function soma(a, b) {
    return a + b;
}

console.log(soma(1, 1))

// Não confundir com uma função que exibe algo no console.log

function soma2(a, b) {
    console.log(a + b)
}

soma2(2, 2)

// Função que retorna valor e ajuda a criar um objeto mais rapidamente
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome}
}

const p1 = criaPessoa('Eduardo', 'Fontenele')
const p2 = {
    nome: 'Marcus',
    sobrenome: 'Rocha'
}

console.log(p1)
console.log(p2)

// Uma função pode inclusive retornar OUTRA função sem executá-la; a partir do momento que a função é retornada,
// a variável a qual ela foi atribuida se torna uma função por si só, que por sua vez irá retornar o valor de dentro da função mãe

function falaFrase(comeco) {
    return function(resto) {
        return comeco + ' ' + resto
    }
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo'))