"use strict"

//hier wird die Konstante für den Keycode für Enter zugewiesen
const KEY_ENTER = 13

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")
  const nameInput = document.getElementById("nameInput")
  const studentList = document.getElementById("students-list")
  const agbInput = document.getElementById("agbInput")


  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault()

    console.log("agbInput:", agbInput.checked)

    if (agbInput.checked === false) {
      alert("Bitte AGB lesen!")
      return
    }

    const text = nameInput.value

    if (text === "") {
      return
    }

    const strongElement = document.createElement("strong")
    strongElement.appendChild(document.createTextNode(text))

    const liElement = document.createElement("li")
    liElement.appendChild(strongElement)
    liElement.classList.add("list-group-item")

    studentList.appendChild(liElement)

    nameInput.value = ""
  })

  //Tasten abfragen
  nameInput.addEventListener("keydown", (event) => {
    /*if (event.keyCode ===13) {
      alert("Enter wurde gedrückt")
    }
    */
    if (event.keyCode === KEY_ENTER) {
      alert("Enter wurde gedrückt!")
    }
    

  })
  
}) 