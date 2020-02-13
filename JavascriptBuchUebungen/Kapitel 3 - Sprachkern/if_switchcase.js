"use strict"

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

let age = 17;
let isAtleast18 = false;

if (!isNaN(parseFloat(age)) && isFinite(age)) {
    console.log("Es ist eine endliche Zahl")
} else {
    console.log("Das ist keine gültige Zahl")
}

if (age >= 18) {
    isAtleast18 = true
} 

console.log(isAtleast18)


//mit Auswahloperator als ternärem Operator
isAtleast18 = age >=18 ? true : false;
console.log(isAtleast18)

//switch case
let testResult = 0;

switch(testResult) {
    case 0:
        console.log("bestanden");
        break;
    case 1:
        console.log("Infomeldung");
        break;
    case 3:
        console.log("fehlgeschlagen");
        break;
    default:
        console.log("Unbekannt")
}