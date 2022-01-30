const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Fontenele',
    idade: 21,
    endereco: {
        rua: 'Praça Graúna',
        numero: 'Quadra 209'
    }
}

// Método padrão de acessar uma chave de um objeto
console.log(pessoa.endereco)

// Usando operador destructuring
const {nome, ...resto} = pessoa
console.log(resto)

