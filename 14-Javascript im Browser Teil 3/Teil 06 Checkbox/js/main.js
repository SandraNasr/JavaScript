"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")
  const nameInput = document.getElementById("nameInput")
  const studentList = document.getElementById("students-list")
  //checkbox
  const agbInput = document.getElementById("agbInput")


  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault()

    console.log("agbInput:", agbInput.checked)

    //wenn Checkbox nicht angehackt ist, soll Dialogbox ausgegeben werden 
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

  
}) 