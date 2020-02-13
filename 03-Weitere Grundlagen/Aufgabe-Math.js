"use strict"

//Münzeneingabe
let input = "15,37€"

input = input.replace(",", ".")

let change = parseFloat(input)

change = change * 100
console.log(change)
//Wie viele 2 € Münzen zurückzugeben
let twoEuro = Math.floor(change / 200)
console.log("- " + twoEuro + " x 2 €")

change = change - (twoEuro * 200)
console.log(change)
let oneEuro = Math.floor(change / 100)
console.log("- " + oneEuro + " x 1 €")

change = change - (oneEuro * 100)
console.log(change)




