"use strict"

// = vs. == vs. ===

// Zuweisung einer Variable
let message = "Hallo Welt!"

// Vergleich, macht automatische Umwandlungen
//die Zahl wird implizit in einen Boolean umgewandelt
console.log("true == 1:", true == 1) //1 wird automatisch in true umgewandelt
console.log("true != 1:", true != 1)

// Strikter Vergleich
console.log("true === 1:", true === 1) //1 wird nicht automatisch in true umgewandelt
console.log("true !== 1:", true !== 1)

// Probleme
console.log("0" == false) //ergibt true

// https://github.com/denysdovhan/wtfjs
console.log("[] == ![]:", [] == ![])