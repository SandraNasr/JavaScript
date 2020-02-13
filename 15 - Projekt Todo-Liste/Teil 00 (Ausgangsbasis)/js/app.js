'use strict';

const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
    const newTodoElement = document.querySelector(".new-todo") //so kann eine Klasse geholt werden, wenn nur eine vorhanden ist
    const todoListElement = document.querySelector(".todo-list")
    const footerElement = document.querySelector(".footer")
    const todoCountElement = document.querySelector(".todo-count strong") //verschachteltes Element holen
    const clearButton = document.querySelector(".clear-completed")
    
    
    const refreshFooter = () => {
        if (todoListElement.childElementCount === 0) {
            footerElement.style.display = "none"
        }
        else {
            footerElement.style.display = ""
        }

        /*let todoCounter = 0
        for (const todoListItem of todoListElement.children){
            if (!todoListItem.classList.contains("completed")) {
                todoCounter++
            }
        }*/
        //Alle Listenelemente, die nicht die Klasse "completed haben" (kompakte Schreibweise)
        let todoCounter = todoListElement.querySelectorAll("li:not(.completed)").length 
        todoCountElement.innerText = todoCounter

        
        clearButton.addEventListener("click", () => {
            for (const todoListItem of todoListElement.children){
                todoListItem.remove()
                }
                todoCountElement.innerText = 0
            })
            
    }

    refreshFooter()

    
    const addCallbacksForLi = (liElement) => {
        const checkboxElement = liElement.querySelector(".toggle")
        const destroybuttonElement = liElement.querySelector(".destroy")

        checkboxElement.addEventListener("change", () => {
            if (checkboxElement.checked === true) {
                liElement.classList.add("completed")
            }
            else {
                liElement.classList.remove("completed")
                refreshFooter()
            }
        })
        destroybuttonElement.addEventListener("click", () => {
            liElement.remove()
            refreshFooter()            
        })
    }
    
    newTodoElement.addEventListener("keydown", (event) => {
        if (event.keyCode === KEY_ENTER) {
            const text = newTodoElement.value

            if (text === "") {
                return
            }
            
            //DOM-Struktur erstellen
            const liElement = document.createElement("li")
                        
            const divElement = document.createElement("div")
            divElement.classList.add("view")
            const labelElement = document.createElement("label")
            //toggle-Kreis für Auswahl
            const inputElement = document.createElement("input")
            inputElement.type = "checkbox"
            inputElement.classList.add("toggle")

            //x, um den Eintrag zu entfernen
            const buttonElement = document.createElement("button")
            buttonElement.classList.add("destroy")
            
            labelElement.appendChild(document.createTextNode(text))
            
            divElement.appendChild(inputElement)
            divElement.appendChild(labelElement)
            divElement.appendChild(buttonElement)
            
            liElement.appendChild(divElement)
            
            //Funktionsaufruf zum Entfernen bzw. Bearbeiten des Listeneintrags
            addCallbacksForLi(liElement)

            

            //das neue Listenelement soll an den Anfang der ToDo-Liste
            todoListElement.prepend(liElement)

            newTodoElement.value = ""

            //Funktionsaufruf für Footer
            refreshFooter()
        }
    })
    
           
});

