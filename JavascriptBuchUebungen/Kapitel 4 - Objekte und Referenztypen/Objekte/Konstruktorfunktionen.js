'use strict'

//Funktion,die als Konstruktorfunktion verwendet werden kann (beginnen mit Großbuchstabe)
//legacy!
function Item(name, price, author, isbn) {
    this.name = name;
    this.price = price;
    this.author = author;
    this.isbn = isbn;
    this.printDescription = function () {
        console.log(this.author + ': ' + this.name)
    }
}

//Aufruf der Funktion über das Schlüsselwort new
let japan = new Item('Meine japanische Küche - Rezepte für jeden Tag', 39.9, 'Stevan Paul', 3881179518);

japan.printDescription();

//Prototypen = das Objekt, das als Basis für die über die Konstruktorfunktion zu erzeugenden Objekte dient
console.log('Prototyp:', Item.prototype);
console.log('Oder so: Prototyp:', japan.__proto__);
console.log('Oder auch so: Prototyp:', Object.getPrototypeOf(japan));
console.log('Konstruktor: ', japan.constructor);
console.log('Wurde das Objekt Japan mit der Konstruktorfunktion Item erstellt?', japan instanceof Item);

