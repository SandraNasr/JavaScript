"use strict"

/*setTimeout(function() {
    console.log("Hallo Welt")
}, 1000)*/

function runCallback(cb) {
    cb()
}

//2 verschiedene Funktionstypen
//bei Schreibweise function () {} wird das this von außen gesetzt
//bei Fat-Arrow-Schreibweise () => {} wird ein existierendes this weiterverwendet
const data = {
    todos: ["JavaScript lernen", "Node.js lernen"],
    addTodo: function(todo) {
        runCallback(() => {
            this.todos.push(todo)
        })        
    }
}


data.addTodo("3. Todo hinzugefügt")
console.log(data)