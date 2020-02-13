"use string"

let greeting = " ---------Hallo Welt!--------"

//Anzahl der Zeichen in einem String
console.log(greeting.length)

//Ein einzelnes Zeichen abfragen
console.log(greeting.charAt(0))
console.log(greeting[10])

//Wo findet sich ein Zeichen in einem String
console.log(greeting.indexOf("!"))
console.log(greeting[20])
console.log(greeting.indexOf("---")) //findet immer das 1. Vorkommen in einem String
console.log(greeting.indexOf("---", 20))

//Groß- bzw. Kleinbuchstaben
console.log(greeting.toUpperCase())
console.log(greeting) //Variable verändert sich nie, sondern nur Kopie erstellt

//Text ersetzen
console.log(greeting.replace("!", "!!!"))

//Leerzeichen rechts und links vom String entfernen
console.log(greeting.trim())
console.log(greeting.trim().length)

