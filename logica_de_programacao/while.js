/* let i = 0

while(i <= 10) {
    console.log(i);
    i++;
} */

function gerarNumeroAleatorio (min, max) {
   let numero = Math.random() * (max  - min) + min;
   return Math.floor(numero)
}

const randomNumber = gerarNumeroAleatorio(0, 100)
console.log(randomNumber)

let random = gerarNumeroAleatorio(1, 50)

while (random !== 32) {
    random = gerarNumeroAleatorio(1, 50)
    console.log(random)
}