const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30
}

console.log(pessoa1)

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa2 = criaPessoa('Maria', 'Fernandes', 21)
console.log(pessoa2)

