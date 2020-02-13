"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")

  addStudentButton.addEventListener("click", () => {
    
    //ein separater Objektbaum wird erstellt
    const liElement = document.createElement("li")
    liElement.innerText = "Hallo"
    liElement.classList.add("list-group-item")

    //dann wird das Element in den Objektbaum geschrieben
    let ulElement = document.querySelector("ul.list-group")
    ulElement.appendChild(liElement)
  })
})
