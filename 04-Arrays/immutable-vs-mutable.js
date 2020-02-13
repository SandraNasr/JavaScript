"use strict"

/*
*Strings sind immutable -- unveränderlich
*ursprünglicher Wert wird gelöscht, dann neuer erzeugt, aber String kann nicht verändert werden
*es wird immer mit einer Kopie gearbeitet
*man kann hinzufügen, aber nicht ein einzelnes Zeichen ersetzen
*/
let greeting = "Hallo Welt"

greeting = "Hallo"
console.log(greeting)

/*Arrays sind mutable -- veränderlich
*/
let students = [
    "Max",
    "Moritz"
]

let copy = students
students.push("Joker")
console.log(copy)

//Mutable und const
const students2 = [
    "Max",
    "Moritz"
]
students2.push("Joker") //das ist erlaubt
console.log(students2)

students2 = ["Sandra", "Joe"] //assignment to constant variable nicht erlaubt
console.log(students2)