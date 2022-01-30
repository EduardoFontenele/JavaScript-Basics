// Arrays são estruturas indexadas
const nomes = ['Eduardo', 'João', 'Lucas']
console.log(nomes)

// Cada nome no Array equivale a um índice, que por sua vez começa do número 0 e não 1
for(let indices in nomes) {
    console.log(indices)
}

for(let valores of nomes) {
    console.log(valores)
}

// Array é considerado uma função em JavaScript, e por isso possui métodos internos
console.log(typeof Array)

nomes.push('Marcelo') // Adiciona um elemento pelo final
console.log(nomes)
nomes.pop() // Remove um elemento pelo final
console.log(nomes)
const nomes2 = nomes.slice(0, -1) // O método slice remove uma fatia (slice) do Array e joga em um novo
console.log(nomes2)
const nomeRemovido = nomes.pop()
console.log('Nome removido: ',nomeRemovido)

// Usando métodos de Array em uma String, que também são estruturas indexadas
const meuNome = 'Marcus Eduardo Rocha Fontenele'
const meuNomeArray = meuNome.split(' ')
console.log(meuNomeArray)
const meuNomeReverso = meuNomeArray.reverse()
console.log(meuNomeReverso)
const meuNomeReversoJunto = meuNomeArray.join(' ')
console.log(meuNomeReversoJunto)
console.log(meuNomeReversoJunto.toUpperCase())

