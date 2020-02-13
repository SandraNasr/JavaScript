'use strict'

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
};


//Hinzufügen einer neuen Eigenschaft und Methode
item.publisher = 'Rheinwerk Verlag';
item.order = function() {
    console.log('Das Buch wurde erfolgreich bestellt');
};

console.log(item.publisher);
item.order();

//Eigenschaften und Methoden eines Objekts überschreiben bzw. mit neuen WErten belegen
item.publisher = 'Neuer Verlag';
item.order = function () {
    console.log('Das Buch wurde von ' + this.publisher + ' erfolgreich bestellt.')
}
console.log(item.publisher);
item.order();

//Erstellen über Helfermethoden (mit Object.defineProperty() und Object.defineProperties())

//Objekteigenschaften und -methoden löschen
console.log('_price' in item);
delete item['_price']; //hier mit [] da _, ansonsten item.price
console.log('_price' in item);

//Objekteigenschaften und -methoden ausgeben
/*for (let property in item) {
    console.log('Name:', property);
    console.log('Wert:', item[property])
}
*/

//Object.keys(), Object.values(), Object.entries()
let properties = Object.keys(item); //erzeugt Array
for (let i = 0; i < properties.length; i++) {
    let property = properties[i];
    console.log('Name:', property);
    console.log('Wert:', item[property]);
};

printArray(properties);
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
};

let keys = Object.keys(item);
console.log('Keys:', keys);

let values = Object.values(item);
console.log('Values:', values);

let entries = Object.entries(item);
console.log('Entries:', entries);
console.log('Value des 1. Entrys:', entries[0][1]);

//Vererbung
let max = {
    firstName: 'Max'
}

let maxMustermann = Object.create(max, {
    lastName: {
        value: 'Mustermann',
        enumerable: true   //ist aufzählbar, darüber kann iteriert werden
    }
});

//gibt auch die vererben Eigenschaften/Methoden aus
console.log(maxMustermann.firstName);
for (let i in maxMustermann) {
    console.log(i);
}

//gibt nicht die vererbten ~ aus
let propertiesMax = Object.keys(maxMustermann);
console.log('Properties von Max Mustermann:', propertiesMax);