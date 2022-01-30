/* 
Operadores lógicos
&& -> AND
|| -> OR
! -> NOT
*/

console.log(true && true)
console.log(true || false)
console.log(true && false)
console.log(false || false)
console.log(!false && true)

let user = 'Luiz'
let password = '123456'

const validLogin = user === 'Luiz' && password === '123456'
console.log(validLogin)