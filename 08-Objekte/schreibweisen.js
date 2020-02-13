"use strict"

const student1 = {
    name: "Max Mustermann",
    age: 21,
    2019: "Ungarisch",
    "gewünschter Kurs": "Arabisch"
}

console.log(student1.age)

//mit eckigen Klammern Variablen möglich, dynamischer Eintrag
const property = "age"
console.log(student1[property])
console.log(student1["na" + "me"])