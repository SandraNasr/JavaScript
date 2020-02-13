"use strict"

const printStudentName = function () {
    console.log(this.lastname + "," + this.firstname)
}

const students = [
    {firstname: "Max", lastname: "Mustermann"},
    {firstname: "Erika", lastname: "Musterfrau"}
]

//.bind() erstellt eine neue Funktion , bei der der Kontext "this" auf 
//den entsprechenden Parameter (hier: students[0]) gesetzt ist

//diese können wir z.B. direkt danach ausführen

//früher eher bei Code, als noch kein Fat-Arrow-Code zur Verfügung stand
printStudentName.bind(students[0])()

//Beispiel für bind(), eher kompliziert, deswegen legacy!!
const data = {
    todos: ["JavaScript lernen", "Node.js lernen"],
    addTodo: function(todo) {
        setTimeout((function() {
            this.todos.push(todo)
            console.log(this)
        }).bind(this),1000)        
    }
}

data.addTodo("3. Todo")

//.apply() führt eine Funktion aus, hierbei wird der Kontext "this" auf
// den ersten Parameter (hier: students[1]) gesetzt

//Die Funktionsparameter werden als Array übergeben -hier rufen
//wir die Funktion ohne Parameter auf, daher übergeben wir ein leeres Array.

printStudentName.apply(students[1], [])