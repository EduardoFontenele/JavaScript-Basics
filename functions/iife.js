// Funções imediatas são funções que são invocadas imediatamente
// IIFE stands for Immediately Invoked Function Expression
// Muito útil para fugir do escopo global e possuir um contexto léxico próprio para cada função

(function() {

    function createName(name, surname) {
        return name + ' ' + surname
    }
    
    function greetings() {
        let completeName = createName('Eduardo', 'Fontenele')
        return `${completeName}, welcome to the newest version of the BLABLABLA`
    }
    console.log(greetings())
})()

const nameExample = 'Mário'
console.log(nameExample)