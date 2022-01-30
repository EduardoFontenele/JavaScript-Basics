const data = new Date(2019, 3, 20, 15, 14)
console.log(data.toString())
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())

function retornaHoraEmSegundos(segundos) {
    const hora = new Date(segundos * 1000)
    return hora.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
    })
  }
  
console.log(retornaHoraEmSegundos(10))
let segundos = 0

function iniciaRelogio() {
    const timer = setInterval(function() {
        segundos++,
        retornaHoraEmSegundos(segundos)
    }, 1000)
    console.log(timer) 
}

iniciaRelogio()