const numeros = [1, 4, 52, 75, 12, 16, 34, 3, 43, 10]
const numerosMenoresQueDez = numeros.filter(numeros => numeros < 10)
console.log(numerosMenoresQueDez)
const numerosMaioresQueDez = numeros.filter(numeros => numeros > 10)
console.log(numerosMaioresQueDez)
const dez = numeros.filter(numero => numero === 10)
console.log(dez)

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const pessoasIdosas = pessoas.filter(pessoas => pessoas.idade > 50)
console.log(pessoasIdosas)

const pessoasComNomeGrande = pessoas.filter(pessoas => pessoas.nome.length > 5)
console.log(pessoasComNomeGrande)