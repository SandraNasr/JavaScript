"use strict"

let s = "3.641"

//Sting in Ganzzahl umwandeln (10 ist 10er-Zahlensystem), alles nach Komma abgeschnitten
console.log(parseInt(s, 10))

//String in Kommazahl umwandeln
console.log(parseFloat(s))

//Achtung beim Rechnen mit Kommazahlen
let result = (1/99) * 99
console.log(result)

let result2 = 50.35 % 6 - 2.35 //Hier gibt es einen Rundungsfehler
console.log(result2)

//Lösung: Kommazahlen vermeiden!
let result3 = 5035 % 600 - 235 //Hier gibt es einen kleinen Rundungsfehler
console.log(result3)

//Zahl zu String
let n = 3.141
console.log("" + n)
console.log(n.toString())
console.log(n.toExponential())
console.log(n.toFixed(2)) //Nur 2 Kommastellen
console.log(n.toPrecision(2)) //2 Stellen insgesamt