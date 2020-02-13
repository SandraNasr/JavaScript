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

  //mit .style komfortabel auf css-Eigenschaften zugreifen
  const cardElements = document.getElementsByClassName("card")
  for(const cardElement of cardElements) {
    //console.log(cardElement.attributes["style"].value)
    /*
    if (cardElement.style["background-color"] === "") {
      cardElement.style["background-color"] = "darkblue"
    }
    */
   //so Autocompletion besser mit instanceof, muss man nicht schreiben
   if (cardElement instanceof HTMLElement) {
    //andere Schreibweise:
    if (cardElement.style.backgroundColor === "") {
      cardElement.style.backgroundColor = "darkblue"
    }
  
      //so kann ein Element über css ausgeblendet werden
      cardElement.addEventListener("click", () => {
      cardElement.style.display = "none"
    })
   }
    

  } 

}) 