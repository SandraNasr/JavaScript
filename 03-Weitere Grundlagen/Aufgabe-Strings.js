"use strict"

let shopping = "       Apfel, Pfirsich, ++++Avocado, Mango    "

shopping = shopping.trim()
console.log(shopping)

let plus = shopping.indexOf("+")

let shopping1 = shopping.substr(0, plus)
let shopping2 = shopping.substr(plus +4)

console.log(shopping1 + shopping2)

shopping = shopping.replace("++++", "")

//console.log(shopping)

shopping = shopping.replace(",", "\n-").replace(",", "\n-").replace(",", "\n-")
console.log("-".repeat(20) + "\nEinkaufsliste:\n- " + shopping + "\n" + "-".repeat(20))
