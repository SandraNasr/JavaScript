"use strict"

let a = true

if (a) {
    console.log("Hallo Welt")
}

let zahl1 = 5
let zahl2 = 6

if (zahl1 <= zahl2 )
{
    console.log("stimmt")
}
else
{
    console.log("Stimmt nicht")
}

let students = ["Max", "Monika"]

if (students.indexOf("Erika") === -1)
{
    console.log("Nicht in Liste")
}

let studentCount = 10

if (studentCount < 5)
{
    console.log("Es sind noch viele Plätze frei")
}
else
{
    if (studentCount < 8)
    {
        console.log("Es sind noch wenige Plätze frei")
    }
    else 
    {
        if (studentCount < 10)
    {
        console.log("Es sind noch klaum Plätze frei")
    }
    else{
        console.log("Es sind keine Plätze mehr frei")
    }
    }
}