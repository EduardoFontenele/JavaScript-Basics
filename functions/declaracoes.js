// Literal declaration (ocorre hoisting)
function falaOi() {
    console.log('Oi')
}
falaOi()

// Funções são first-class object
// Function expression
const souUmDado = function() {
    console.log('Sou um dado')
}

const executaFuncao = function(funcao) {
    funcao()
}
executaFuncao(souUmDado)

// Arrow function
const funcaoArrow = () => 'Sou uma function'
const varFunction = funcaoArrow()
console.log(varFunction)

const obj = {
    falar() {
        console.log('Estou falando')
    }
}

obj.falar()