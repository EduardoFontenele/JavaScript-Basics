//            01234567
let string = 'Um texto'
console.log(string[4])
console.log(string.charAt(7))
console.log(string.concat(' em um lindo dia'))
console.log(string.indexOf('texto'))
console.log(string.replace('Um', 'Outro'))
console.log(string.length)
console.log(string.slice(-0, -5))
console.log(string.split(' ', 2))

const nome = prompt('Digite seu nome:')
document.body.innerHTML += `Seu nome é ${nome} <br> `; 
document.body.innerHTML += `Seu nome tem ${nome.length} letras<br>`
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br>`
document.body.innerHTML += `O primeiro indice da primeira letra 'a' do seu nome é ${nome.indexOf('a')} <br>` 
document.body.innerHTML += `O último indice da primeira letra 'a' do seu nome é ${nome.lastIndexOf('a')} <br>`
document.body.innerHTML += `As palavras do seu nome são ${nome.split(' ')} <br>`
