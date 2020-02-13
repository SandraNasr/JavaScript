"use strict"

const data = {
    todos: ["JavaScript lernen", "Node.js lernen"],
    addTodo: function(todo) {
        //data.todos.push(todo)
        //this ist Kontext dieser Funktion
        this.todos.push(todo)
        this.printTodos()
    },
    printTodos: function() {
        console.log(this.todos)
    }
}


data.addTodo("3. Todo hinzugefügt")
//console.log(data)
//data.printTodos()

