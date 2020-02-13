'use strict'

//Object.create kann in einer Laufzeitumgebung verwendet werden, wenn keine Klassensyntax zur Verfügung steht
let item = Object.create(Object.prototype, {
    name: {
        value: 'Eine Geschichte von Liebe und Finsternis'
    },
    price: {
        value: 15.50
    },
    author: {
        value: 'Amos Oz'
    },
    isbn: {
        value: '978-3518459683'
    },
    printDescription: {
        value: function() {
            console.log(this.author + ": " + this.name)
        }
    }
});

item.printDescription()