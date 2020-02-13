"use strict"

const items = [15, 25, 30]

function summe(liste)
{
    let s = 0
    for (let element of items)
    {
        s += element
    }
    
    return s
}
let itemsSum = summe(items)

console.log(itemsSum)
console.log(itemsSum === 70)

//return beeendet die Funktion

function sayHello()
{
    console.log("Hallo")

    return 5

    console.log("Welt")
}

sayHello()
let n = sayHello()
console.log(n)

//indexOf Funktion
function indexOf (liste, value)
{
    for (const i in liste)
    {
        if (liste[i] === value)
        {
            return i
        }
    }

    //wenn das Element nicht gefunden wurde, wird -1 zurückgegeben
    return -1
}

console.log(indexOf(["Hallo", "Welt", "!"], "Welt"))