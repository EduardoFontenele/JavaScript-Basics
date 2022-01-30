// Retorna um novo array de mesmo tamanho do original e realiza uma operação sobre ele

const numeros = [1, 2, 3, 5, 10, 35, 50, 70, 40, 100, 55]
const numerosDobrados = numeros.map(valor => valor * 2)
console.log(numerosDobrados)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

// Retornando uma string com o nome da pessoa
const nomes = pessoas.map(pessoas => pessoas.nome)
console.log(nomes)

// Retornando um array com as idades
const idades = pessoas.map(pessoas => pessoas.idade)
console.log(idades)

// Retornando um array de objetos novo com ids
const comIds = pessoas.map(function(object, index) {
    const newObject = {...object}
    newObject.id = index
    return newObject
})
console.log(comIds)