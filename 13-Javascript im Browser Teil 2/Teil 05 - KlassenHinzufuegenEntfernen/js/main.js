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

  const cardElements = document.getElementsByClassName("card")
  for (const cardElement of cardElements) {
    console.log("contains: ", cardElement.classList.contains("card")) //Klassenliste bietet viele Funktionen

    //.add() fügt eine Klasse hinzu
    cardElement.classList.add("bg-success")
    //hier wird nicht erneut hinzugefügt, weil schon festgestellt wurde, dass es diese Klasse schon gibt
    cardElement.classList.add("bg-success")  
    
    //remove() entfernt eine Klasse, kein Fehler, wenn die Klasse sowieso nicht existiert
    cardElement.classList.remove("bg-success")

    //toggle() = Klasse umschalten: entfernt eine Klasse falls vorhanden bzw. fügt eine hinzu falls nicht vorhanden
    cardElement.classList.toggle("bg-warning")

  }

}) 