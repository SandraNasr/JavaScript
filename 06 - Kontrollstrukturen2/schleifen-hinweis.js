"use strict"

const items = ["Obst", "Gemüse"]

console.log("items[0]:", items[0])
console.log('items["0"]:', items["0"])

//Schlüsseldatentyp i ist String
for (const i in items) 
{
  if (i === "0") {
    continue
  }

  console.log("i:", typeof i, i)  
}

//hier numerischer Index
for (let i = 0; i < items.length; i++) {
  if (i === 0) {
    continue
  }

  console.log("i:", typeof i, i)
}

// Variablen!
let sum = 0
const shoppingList = [123, 43, 50]

debugger 

for (const shoppingItem of shoppingList) {
  sum += shoppingItem
}
console.log("Die Summe ist:", sum)