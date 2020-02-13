"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")
  const nameInput = document.getElementById("nameInput")
  
  addStudentButton.addEventListener("click", (event) => {
    event.preventDefault()
   
    console.log(nameInput.value) //steht auf Eingabefeldern zur Verfügung, um den Wert auszugeben
  })

  //change wenn Eingabefeld verändert wird und das Eingabefeld den Fokus verliert
  nameInput.addEventListener("change", (event) => {
    console.log("change:", nameInput.value)
  })
  
  //wenn eine Taste losgelassen wird, man wird über jede kleine Änderung in dem Eingabefeld informiert
  nameInput.addEventListener("keyup", (event) => {
    console.log("keyup:", nameInput.value)
  })

})