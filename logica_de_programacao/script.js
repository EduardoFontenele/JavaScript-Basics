const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const cronometro = document.querySelector('.cronometro')


function iniciarCronometro() {
    
let segundos = 0
let timer

function gerarSegundos(segundos) {
    const tempo = new Date(segundos * 1000)
    return tempo.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

function iniciaCronometro() {
    timer = setInterval(function() {
        segundos++;
        cronometro.innerHTML = gerarSegundos(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function(event) {
    clearInterval(timer)
    iniciaCronometro()
})

pausar.addEventListener('click', function(event) {
    clearInterval(timer)
})

zerar.addEventListener('click', function(event) {
    clearInterval(timer)
    cronometro.innerHTML = '00:00:00'
    segundos = 0
})
}

iniciarCronometro()
