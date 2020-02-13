'use strict'

//Erweiterungen verhindern über Object.preventExtensions()
//man kann aber bestehende Eigenschaften und Methoden verändern
let maxima = {
    firstName: 'Maxima',
    lastName: 'Musterfrau'
}

console.log(Object.isExtensible(maxima));
maxima.age = 35;
console.log('Alter von '+ maxima.firstName + ': ' + maxima.age);
Object.preventExtensions(maxima);
console.log(Object.isExtensible(maxima));
//Eigenschaft ändern geht:
maxima.lastName = 'Muster';
console.log(Object.getOwnPropertyDescriptor(maxima, 'firstName').enumerable);

//maxima.length = 1.70; //wirft TypeError

//Objekte versiegeln über Object.seal()
//Objekte sind dann nicht mehr erweiterbar und bestehende Eigenschaften nicht mehr konfigurierbar
let max = {
    firstName: 'Max',
    lastName: 'Muster'
}
Object.seal(max);
console.log(Object.isSealed(max));


//über Object.freeze() dürfen zusätzlich keine Werte verändert werden
