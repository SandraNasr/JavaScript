'use strict'

let userInputLength = -2;
let array;

try {
    array = createArray(userInputLength)
    console.log(array)
} catch (error) {
    console.log(error.name); //Typ des Fehlers
    console.log(error.message) //Beschreibung, was fehlgeschlagen ist
}

function createArray(array) {
    return new Array(array);
}

//Fehler auslösen mit throw (funktioniert nur im Browser, nicht im Terminal)
function checkAge(age) {
    if (isNaN(parseFloat(age))) {
        throw new TypeError('Es muss eine Zahl eingegeben werden');
    } else if  (age < 0)
    {
        throw new RangeError('Alter darf nicht negativ sein')
    } 
    
    else {
        return true;
    }
}
console.log(checkAge(5));
console.log(checkAge(-5));
console.log(checkAge('Mira'));
