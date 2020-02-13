'use strict'

class Item {
    constructor(name, price, author, isbn) {
        this.name = name;
    this.price = price;
    this.author = author;
    this.isbn = isbn;
    }
    printDescription() {
        console.log(this.author + ": " + this.name);
    }
}

let item = new Item 
('Ashtanga Yoga für Einsteiger: Schritt für Schritt zu neuer Energie', 
12.99,
'Tara Fraser', 
'978-3432108193');

console.log('ISBN:', item.isbn)
item.printDescription()
console.log('Prototyp:', Item.prototype);
console.log('Oder so: Prototyp:', item.__proto__);
console.log('Oder auch so: Prototyp:', Object.getPrototypeOf(item));
console.log('Konstruktor: ', item.constructor);