"use strict"

const students = [
    "Hallo",
    {firstname: "Ambarinus", lastname: "Bambus"},
    {firstname: "Maxima", lastname: "Mustermann"}
]

console.log("students:", students)
console.log("student1:", students[1])


for (const student of students)
{
    console.log("student:", student)
}

//auf der linken Seite stehen immer Strings, rechts jeder beliebige Wert auch Array
const obj = {
    items: ["Apfel", "Orange"]
}

console.log("obj:", obj)