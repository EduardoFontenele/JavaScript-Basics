const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(nums)

let [primeiroNum, segundoNum, ...resto] = nums
console.log(primeiroNum, segundoNum)
console.log(resto)

const lista = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1, lista2, lista3] = lista
console.log(lista1[0])