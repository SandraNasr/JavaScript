"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const cardHeaders = document.getElementsByClassName("card-header")
  console.log("cardHeaders: ", cardHeaders)

  //Die Liste muss Element für Element durchgegangen werden, dann kann man einzeln auf das Element zugreifen
  for (const cardHeader of cardHeaders) {
    console.log("cardHeader", cardHeader)

    cardHeader.addEventListener("click", () => {
      alert("Card-Header wurde angeklickt!")
    })
  }

  //Element nach Tag-Namen holen
  const paragraphs = document.getElementsByTagName("p")
  console.log("Paragraphs: ", paragraphs)

})