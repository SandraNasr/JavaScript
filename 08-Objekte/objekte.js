"use strict"

//Objekt --> Schlüssel: Wert
const student =  
{name: "Max Mustermann",
age: 21
}

student["age"] = 24

/*console.log(student.name)
console.log(student.age)

console.log(student["name"])
console.log(student["age"])
console.log(student)
*/
//neue Eigenschaft setzen

student.subject = "Englisch"
student["interestedIn"] = "Arabic"

console.log(student)

//Wert der Eigenschaft löschen
student.age = null

console.log(student)

//Eigenschaft löschen
delete student.age
console.log(student)



