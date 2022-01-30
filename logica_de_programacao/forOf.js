const nome = 'Eduardo Fontenele'

// iterando com for clássico
for(let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

// iterando com for in
for (let i in nome) {
    console.log(nome[i])
}

const nomes = ['Edu', 'Zé', 'João', 'Marcola', 'Pedrão']

// iterando com for of 
for (let value of nomes) {
    console.log(value)
}

// forEach
nomes.forEach((nomes,i) => console.log(i, nomes))

// For - geralmente com iteráveis (arrays, strings e objects)
// For in - Retorna o índice/chave do array/objeto 
// For of - Retorna o valor do array