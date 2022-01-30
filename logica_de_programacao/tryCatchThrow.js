/* try {
    console.log(varInexistente)
} catch (err) {
    console.log('varInexistente  não existe')
} */

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw  new TypeError ('Erro de tipo')
    } 
    return x + y
}

try {
    console.log(soma(1, 1))
    console.log(soma('a', 1))
} catch (error) {
    //console.log(error)
    console.log(error)
}

