'use strict'

//Getter und Setter mit Literalschreibweise
let item = {
    _name: 'Schrödinger programmiert Java',
    _price: 44.90,
    _author: 'Philip Ackermann',
    _isbn: '978-34234243423',
    set name(newName) {
        if (typeof newName === 'string') {
            console.log('Neuen Namen setzen');
            this._name = newName;
        } else {
            throw new TypeError('Name muss eine Zeichenkette sein!')
        }
    },
    get name() {
        console.log('Namen zurückgeben');
        return this._name;
    }
}
console.log(item.name);
item.name = 'Schrödinger programmiert Java - Fachbuch';

//Getter und Setter bei Verwendung von Klassen (mit Konstruktor siehe Buch , da legacy)
class Item {
    constructor(name, price, author, isbn) {
        this._name = name;
        this._price = price;
        this._author = author;
        this._isbn = isbn;
    }
    set name (newName) {
        if (typeof newName === 'string') {
            console.log('Neuen Namen setzen');
            this._name = newName;
        } else {
            console.log('Name muss eine Zeichenkette sein')
        }
    }
    get name () {
        console.log('Namen zurückgeben');
        return this._name;
    }
}

let classItem = new Item(
    'Yoga: Der Weg zu Gesundheit und Harmonie',
    29.95,
    'B.K.S. Iyengar',
    '978-3831026548'
)

console.log(classItem.name);
classItem.name = 'Yoga'
console.log(classItem.name);

//Getter und Setter bei Verwendung von Object.create()
let objectItem = Object.create(Object.prototype, {
    name: {
      set: function(newName) {
        if (typeof newName === 'string') {
          console.log('Neuen Namen setzen');
          this._name = newName;
        } else {
          throw new TypeError('Name muss eine Zeichenkette sein.')
        }
      },
      get: function() {
          console.log('Namen zurückgeben');
          return this._name;
      }
      /* Analog für die anderen Eigenschaften. */
    }
  });
objectItem.name = 'Neues Yoga-Buch';
console.log(objectItem.name);


