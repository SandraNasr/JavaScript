"use strict"

let students = [
    "Max Müller",
    "Erika Mustermann",
    "Annika Müller",
    "Max Mustermann"
]

console.log(students)

//Was ist der Typ von einem Array: object
console.log(typeof students)
console.log(students instanceof Array)

//Wie viele Elemente sind in einem Array
console.log(students.length)

//Auf ein einzelnes Element zugreifen
console.log(students[0])

//Element hinzufügen, ändert das Array
students.push("Joker", "Sandra")

console.log(students)

//Letztes Element entfernen
const lastElement = students.pop()
console.log(lastElement)
console.log(students)

//Ein Element überschreiben
students[0] = "Maximilian Müller"
console.log(students)