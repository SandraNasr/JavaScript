"use strict"

document.addEventListener("DOMContentLoaded", () => {
  const firstCardHeader = document.getElementsByClassName("card-header")[0]
  /*
  console.log(firstCardHeader.attributes) //gibt namedNodeMap aus
  console.log(firstCardHeader.attributes[0])
  console.log(firstCardHeader.attributes[1])
  
  console.log(firstCardHeader.attributes["class"])
  //oder so geschrieben:
  console.log(firstCardHeader.attributes.class)
  console.log(firstCardHeader.attributes["data-extra"])
  */
 
  //zuerst wird das Attribut geholt, dann über value der eigentliche Wert
  const dataExtraAtribute = firstCardHeader.attributes["data-extra"].value

 console.log(dataExtraAtribute)

})