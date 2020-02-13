"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const closeButtons = document.querySelectorAll("[data-dismiss='alert']")

  
  //alert existiert noch im Objektbaum, nur mithilfe von css ausgeblendet, macht Seite langsamer bei vielen Elementen
  /*for (const closeButton of closeButtons) {
    closeButton.addEventListener("click", () => {
      closeButton.parentElement.style.display = "none"
    })
  }
  */

 //gesamtes Element aus Objektbaum entfernen
  for (const closeButton of closeButtons) {
  closeButton.addEventListener("click", () => {
    closeButton.parentElement.remove()
  })
}
})