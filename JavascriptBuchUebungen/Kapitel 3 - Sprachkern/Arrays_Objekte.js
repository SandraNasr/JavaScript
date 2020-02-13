"use strict"

let dog =  {
    name: "Bello"
}

let person = {
    firstName: 'Max',
    lastName: 'Mustermann',
    pet: dog
}

console.log(person.pet)

let values = [
    'Max Mustermann',
    22,
    true
]


console.log(values)
delete values[2]
console.log(values)

delete person.lastName
console.log(person)
console.log(person instanceof Object)
console.log(typeof values)
console.log(typeof person)

