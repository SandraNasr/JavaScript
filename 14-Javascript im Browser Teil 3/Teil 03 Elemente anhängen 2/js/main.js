"use strict"

"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const addStudentButton = document.getElementById("add-student")

  addStudentButton.addEventListener("click", () => {
    
    //ein separater Objektbaum wird erstellt
    const liElement = document.createElement("li")
    liElement.classList.add("list-group-item")

    const strongElement = document.createElement("strong")
    /*const textNode = document.createTextNode("Hallo Welt")
    strongElement.appendChild(textNode)
    liElement.appendChild(strongElement)*/
    strongElement.appendChild(document.createTextNode("Hallo Welt"))

    //dann wird das Element in den Objektbaum geschrieben
    let ulElement = document.querySelector("ul.list-group")
    ulElement.appendChild(liElement)
  })
})

//Methoden statt appendChild(), um Elemente hinzuzufügen
//.prepend (als erstes eingefügt)
//.before()
//.after()