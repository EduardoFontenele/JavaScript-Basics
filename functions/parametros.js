function falaOi() {console.log('oi')}
falaOi()

// As funções possuem uma variável especial chamada arguments, que armazena na memória qualquer parâmetro passado na execução do código, mesmo que não sejam declarados
// na hora de criar a função

function semParametros() {
    let total = 0
    for(let numero of arguments) {
        total += numero
    }
    console.log(total)
}

semParametros(1, 1, 1, 1, 1)

// Funções também podem receber valores padrão nos parâmetros
function soma(a, b = 0) {
    console.log(a + b)
}

soma(1, 1)

// Destructuring function
function objeto({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

objeto({nome: 'Eduardo', sobrenome: 'Fontenele', idade: 21})

// Rest operator na função - Só pode ser usado no último parâmetro formal da função

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
    }

    console.log(acumulador)
}

conta('*', 1, 10, 1, 1, 10)
