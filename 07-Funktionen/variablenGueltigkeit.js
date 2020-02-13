"use strict"

let message = "Test"


//Variable in der Funktion wird ausgeführt da ist neu erstellt
/*function sayHello(name)
{
    const message = "Hallo " + name
    console.log(message) 
}
*/

//hier wird der Wert der Variablen überschrieben
function sayHello(name)
{
    message = "Hallo " + name
    console.log(message) 
}

sayHello("Max") 
console.log(message)

//Seiteneffekte

const students = ["Max"]

function addStudent(name)
{
    students.push(name)
}

console.log(students)
addStudent("Erika")
console.log(students)
