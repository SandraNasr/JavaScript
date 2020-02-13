'use strict'

//KONTEXTOBJEKT
//Objektmethode, in der per this eine Eigenschaft des Objekts ausgelesen wird

let person = {
    name: 'Mira',
    getName: function() {
        return this.name;
    }
}

console.log(person.getName())

//in einer globalen Funktion bezieht sich this auf das globale Objekt
let person2 = {
    name: 'Sonia',
    getName: getNameGlobal
}

function getNameGlobal() {
    return this.name;
}

console.log(person2.getName())
