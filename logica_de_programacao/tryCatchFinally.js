// try {
//     console.log(a)
// } catch(err) {
//     console.log('Deu erro')
// } finally {
//     console.log('Finally sempre é executado')
// }

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date')
    }

    if(!data) {
        data = new Date()
    }
    
    return data.toLocaleTimeString('pt-BR')
}

const hora = retornaHora()
console.log(hora)