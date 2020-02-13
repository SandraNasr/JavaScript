"use strict"

const student = {
    name: "Joe",
    age: 40,
    enrolled: "H"
}

console.log(student)

//wenn eine Eigenschaft nicht existiert, wird undefined ausgegeben
//es wird immer überprüft, ob die Eigenschaft existiert und dann ob sie einen positiven Wert, der zu true ausgewertet werden kann, hat
console.log(student.new)

if (student.enrolled)
{
    console.log("Hallo Welt")
}

const student2 = {
    name: "Joe",
    age: 40,
    enrolled: false,
    numberOfCourses: 0
}

//über in-Operator wird geprüft, ob es in einem Objekt einen bestimmten Schlüssel gibt
if ("enrolled" in student)
{
    console.log("enrolled in student")
}

if ("numberOfCourses" in student2)
{
    console.log("numberOfCourses in student")
}