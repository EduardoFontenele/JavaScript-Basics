// Ex 1 - Função que recebe dois números e retorna o maior]

function maiorNumeroEntre(x, y) {
    if(x > y) {
        console.log(x)
    } else {
        console.log(y)
    }
}

const maiorNumero = (x, y) => x > y ? x : y


maiorNumeroEntre(5, 5.0000001)
console.log(maiorNumero(2, 1))

// Ex 2 - Função que recebe dois valores (em pixel, por exemplo) e verifica se a foto está em formato paisagem ou retrato

function formatoFoto(base, altura) {
    if(base > altura) {
        console.log (`A foto possui ${base} pixels de base e ${altura} pixels de altura, portanto está no formato paisagem.`)
    } else {
        console.log(`A foto possui ${base} pixels de base e ${altura} pixels de altura, portanto está no formato retrato.`)
    }
}

formatoFoto(1080, 1920)
formatoFoto(1920, 1200)

// Ex 3 - Função que recebe um valor e checa se é divisivel por 3, por 5, e pelos 2 ao mesmo tempo

const checaNumeroIf = function(numero) {
    if(numero % 5 === 0 && numero % 3 === 0) {
        return `O número é divisível tanto por 3 quanto por 5`
    } else if (numero % 5 === 0) {
        return 'O número é divisível por 5'
    } else if (numero % 3 === 0) {
        return 'O número é divisível por 3'
    } else {
        return 'O número não é divisível nem por 3 nem por 5'
    }
}

const checaNumeroIf2 = function(numero)  {
    if(typeof numero !== 'number') return 'Isso não é um número';
    if(numero % 3 === 0) return `${numero} é divisível por 3`;
    if(numero % 5 === 0) return `${numero} é divisível por 5`;
    if(numero % 3 === 0 && numero % 5 === 0) return `${numero} é divisível tanto por 3 quanto por 5`;
    if (numero % 3 !== 0 || numero % 5 !== 0) return `${numero} não é divisível nem por 3 nem por 5`
}

console.log(checaNumeroIf(2))
console.log(checaNumeroIf(4))
console.log(checaNumeroIf(5))
console.log(checaNumeroIf(9))
console.log(checaNumeroIf(15))
console.log(checaNumeroIf(30))
console.log(checaNumeroIf(22))

console.log(checaNumeroIf2(5))
console.log(checaNumeroIf2('Alô, galera'))
console.log(checaNumeroIf2(8))
console.log(checaNumeroIf2(13))
console.log(checaNumeroIf2(9))
console.log(checaNumeroIf2(27))




function callback1(callback) {
    if (callback === true) {
        callback2()
    }
}

console.log(callback1())