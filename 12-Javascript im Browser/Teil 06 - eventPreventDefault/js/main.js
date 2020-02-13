"use strict"

document.addEventListener("DOMContentLoaded", () => {

  const contactButton = document.getElementById("contact-me")

  /*
  //Variable event wird entgegengenommen
  const onClick = (event) => {
    console.log(event)
    alert("Kontakt wurde geklickt!")
  }
  contactButton.addEventListener("click", onClick)
  */

  
  //progressive enhancement
  contactButton.addEventListener("click", (event) => {
    event.preventDefault()
    alert("Kontakt wurde geklickt!")
  })
  
})
