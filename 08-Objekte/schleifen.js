"use strict"

const student = 
{
    name: "Ambarinus Bambus",
    age: 12
}

for (const key in student)
{
    const value = student[key]
    console.log("key:", key)
    console.log("value:", value)
}

//Object.keys()
console.log("Object.keys:", Object.keys(student))

//Object.values()
const values = Object.values(student)
console.log("Object.values:", values)

//Object.entries()
const entries = Object.entries(student)
console.log("Object.entries:", entries)

let n = 0
for (const entry of Object.entries(student))
{
    n++
    console.log("entry "+ n + ": ", entry)
}