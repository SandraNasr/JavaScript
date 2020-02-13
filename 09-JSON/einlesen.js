"use strict"

// Wir lesen die "data.json"-Datei ein!
//
// ACHTUNG: fs.readFileSync() ist i.d.R. ein Anti-Pattern und 
//          ziemlich langsam. Darauf gehen wir aber noch ein :)

const fs = require("fs")

//node lädt ein Dateisystemmodul
const data = fs.readFileSync("data.json", {encoding: "utf-8"})

console.log("data:\n", data)
console.log("typeOf data:", typeof data)

//gibt nur das 1. Zeichen des Strings zurück
console.log(data[0])

//String übergeben und Liste von Objekten erhalten
const dataObj = JSON.parse(data)
console.log(dataObj)
console.log(dataObj[0])

