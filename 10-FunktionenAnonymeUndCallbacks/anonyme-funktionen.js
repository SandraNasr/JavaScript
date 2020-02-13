"use strict"

//1. Art = function declaration
function sayHello()
{
    console.log("Say hello")
}
 sayHello()

 //2. Art, anonyme Funktionen
 //function expression
 const sayHello2 = function() {
    console.log("Say hello2")
 }
 sayHello2()
 
 //3. Art, fat arrow function
 //function expression
 const sayHello3 = () => {
    console.log("Say hello3")
 }
 sayHello3()

 //warum benötigen wir anonyme Funktionen
 //Modul laden und darüber auf ein Dateisystem zugreifen (hier aktuellen Ordner lesen)
 const fs = require("fs") 
 fs.readdir(__dirname, (err, files) => {
    console.log(files)
 })

 const sayHello4 = () => {
    console.log("Say hello4")
 }
 
 //Funktion wird so nicht ausgeführt, Funktion wird als Wert einer Variablen ausgegeben
 console.log("sayHello", sayHello4)

 //so wird die Funktion ausgeführt mit Rückgabewert undefined
 console.log("sayHello", sayHello4())

 const a = sayHello4
 a() 