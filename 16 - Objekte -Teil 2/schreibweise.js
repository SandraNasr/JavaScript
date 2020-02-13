"use strict"

function runCallback(cb) {
    cb()
}

const data = {
    //kompakte Schreibweise (ohne function) erst seit ES6
    todos: ["Javascript lernen", "React lernen"], 
    addTodo(todo) {
        runCallback(() => this.todos.push(todo))
        console.log(this)
    }
    
    
    //etwas kompakter in einer Zeile
    /*   
    addTodo: function(todo) {
        runCallback(() => this.todos.push(todo))
        console.log(this)
    }
    */
    /*addTodo: function(todo) {
        runCallback(() => 
        this.todos.push(todo)
        )}*/
}

data.addTodo("3. Todo")