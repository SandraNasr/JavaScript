"use strict"

let students = [
    "Max Müller",
    "Erika Mustermann",
    "Annika Müller",
    "Max Mustermann"
]

//Prüfen, ob ein Element im Array vorhanden ist
console.log(students.indexOf("Max Müller")) //0 = vorhanden
console.log(students.indexOf("Ma Müller")) //-1 = nicht vorhanden

//Arrays sortieren
students.sort()
console.log(students)

students.reverse()
console.log(students)

//Wichtig: Sparse arrays!
students[3] = "Joker"
console.log(students)

//students[30] = "Später Joker" // erzeugt sparse Elemente dazwischen, langsamer
//console.log(students)

//Entfernen mit splice
students.splice(0,1)
console.log(students)

//Hinzufügen mit splice
students.splice(1, 0, "Joker")
console.log(students)