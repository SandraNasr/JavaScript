"use strict"

document.addEventListener("DOMContentLoaded", () => {
  //hier wird ein Element zurückgegeben
  const heading = document.querySelector(".container h1")
  console.log(heading)

  //hier werden alle Elemente gefunden über ein Array
  const cardHeadings = document.querySelectorAll(".card div.card-header")
  
  for (const e of cardHeadings) {
    console.log(e)
  }
 
  const container = document.querySelector(".container")
  const containerHeading = container.querySelectorAll("h1")

  console.log(containerHeading)

}) 