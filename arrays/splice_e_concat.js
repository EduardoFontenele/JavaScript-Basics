// Splice é um método short-hand que faz o que todos anteriores fazem em um só

const nomes = ['Eduardo', 'Breno', 'Tom', 'Samuel', 'Lincon']
console.log(nomes)
// nomes.splice(indice, delete, elem1, elem2, elem2, elemX...)

const removidos = nomes.splice(0, 3)
console.log(nomes, removidos)

// Para concatenar arrays é muito simples. Basta usar ou o método concat() ou o operador rest/spread

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]

console.log(a3)
const a4 = a1.concat(a2)
console.log(a4)