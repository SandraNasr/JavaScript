"use strict"

const items = [15, 25, 30]

/**
 * Berechnet die Summe der Zahlen in einer Liste
 * 
 * @param {number[]} liste Die Liste, die aufsummiert wird
 * @returns{number} Die komplette Summe
 */
function summe(liste)
{
    let s = 0
    for (let element of liste)
    {
        s += element
    }

    return s
}

let itemSumme = summe(items)
console.log(itemSumme)