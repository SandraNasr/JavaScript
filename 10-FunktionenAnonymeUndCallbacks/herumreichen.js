"use strict"

const fs = require("fs")

//zeige alle Dateien, die im aktuellen Ordner liegen, __dirname existiert nur wenn über node ausgeführt wird nicht im Browser
//wenn kein Fehler aufgetreten ist, stehen die gesamten Dateien, die in diesem Ordner existieren

//auch hier hat man die Variable f zur Verfügung, man kann sie als Parameter übergeben
function f(err, files) {
    console.log(files)
}

fs.readdir(__dirname, f)

//oder so
fs.readdir(__dirname, (err, files) => {
    console.log(files)
})


//oder so
/*const f = (err, files) => {
    console.log(files)
}

fs.readdir(__dirname, f)
*/

//Bespiel mit Datei einlesen
//1. Parameter ist ein error, 2. Parameter ist ein Buffer
fs.readFile("daten.txt", {encoding: "utf8"}, (err, data) => {
    console.log(data)
})