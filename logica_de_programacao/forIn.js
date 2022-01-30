const frutas = ['Pera', 'Uva', 'Maçã']

//for(i = 0; i < frutas.length; i++) {
//    console.log("índice", i,":",frutas[i])
//}

// for in lê os index de um array ou chaves de um objeto
for(let i in frutas) {
    console.log(frutas[i])
}

// usando for in em um objeto
const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Fontenele',
    idade: 21
}
for(let key in pessoa) {
    console.log(key, pessoa[key])
}