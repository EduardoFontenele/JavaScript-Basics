/* const randomNumber = function(min = 1000, max = 2000) {
    let number = Math.random() * (max - min) + min
    return Math.round(number)
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback()
    }, randomNumber())
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback()
    }, randomNumber())
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback()
    }, randomNumber())
} */

// Callback hell
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Adeus')
//         })
//     })
// })

// f1(f1Callback)

// function f1Callback() {
//     f2(f2Callback)
// }

// function f2Callback() {
//     f3(goodbyeCallback)
// }

// function goodbyeCallback() {
//     console.log('Terminamos aqui. Adeus.')
// }

function callFunction(x = 1, y = 1, callback) {
    if(callback) callback()
    console.log(x + y)
}

callFunction(1, 1, callback())

function callback() {
    console.log('Hora da callback')
    callback2()
}

function callback2() {
    console.log('Fui chamada também')
    callback3()
}

function callback3() {
    console.log('Adeus')
}
