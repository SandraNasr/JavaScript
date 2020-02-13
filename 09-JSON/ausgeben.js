"use strict"

const data = [
    {firstname: "Ambar", age: 12, enrolled: false},
    {firstname: "Ambarina", age: 10, enrolled: true}
]

//macht einen String aus data, funktioniert auf allen beliebigen Typen
const dataAsJson = JSON.stringify(data)

console.log("dataAsJson:", dataAsJson)
console.log("typeof:", typeof dataAsJson)

const fs = require("fs")
fs.writeFileSync("ausgeben.json", dataAsJson)