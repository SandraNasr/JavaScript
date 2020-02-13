"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const helpElements = document.querySelectorAll("[data-help]")
  for(const helpElement of helpElements) {
    helpElement.addEventListener("click", (event) => {
      event.preventDefault()

      const helpText = helpElement.attributes["data-help"].value
      alert(helpText)
    })
  }

  //Die DOM navigieren
  const cardElement = document.querySelector(".card")
  
  //Elternelement und Kinder holen
  console.log("parent:", cardElement.parentElement)
  console.log("children:", cardElement.children)
  console.log("children of children", cardElement.children[0].children)

  //das nächste oder vorherige ELement, welches auf dieses ELement folgt auf der gleichen Ebene
  console.log("nextElementSibling:", cardElement.nextElementSibling)

  console.log("previousElementSibling", cardElement.previousElementSibling)

}) 