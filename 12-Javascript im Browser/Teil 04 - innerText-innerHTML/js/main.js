"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const dateElement = document.getElementById("date-countdown")
  console.log(dateElement.innerText)

  //dateElement.innerText = "<strong>15.05.2022</strong>"
  dateElement.innerHTML = "<strong onclick= \"alert('hi')\">15.05.2022</strong>"
})

