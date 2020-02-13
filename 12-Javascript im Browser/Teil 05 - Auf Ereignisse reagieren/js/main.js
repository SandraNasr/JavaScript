"use strict"

//Code wird erst ausgeführt, wenn auf das Element geklickt wurde
document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("date-countdown")

  dateElement.addEventListener("click", () => {
    dateElement.innerText = "15.05.2024"
    console.log("dateElement wurde geklickt")
  })
  dateElement.addEventListener("mouseenter", () => {
    dateElement.innerText = "06.06.2026"
    console.log("Mouseover ausgeführt")

  })
  dateElement.addEventListener("mouseleave", () =>
  {
    dateElement.innerText = "01.07.1977"
    alert("Mouseleave ausgeführt")
  })

})

//auch die Schreibweise ist ok
/*
document.addEventListener("DOMContentLoaded", () => {
  
  const dateElement = document.getElementById("date-countdown")

  const onClickDateElement = () => {
    dateElement.innerText = "15.05.2024"
    console.log("dateElement wurde geklickt")
  }
   dateElement.addEventListener ("click", onClickDateElement)
  })
*/