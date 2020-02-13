"use strict"

// https://github.com/r-spacex/SpaceX-API
// launches.json: https://api.spacexdata.com/v3/launches

// Datei einlesen. fs.readFileSync() ist ein Anti-Pattern, dazu
// aber später mehr.
const fs = require("fs")
const launches = JSON.parse(
  fs.readFileSync("spacex/launches.json", {encoding: "utf-8"})
)

console.log("Anzahl :", launches.length)

//Aufgabe1
let sum2018 = 0
for (const launch of launches)
{
    if (launch["launch_year"] === "2018")
    {
        sum2018 ++
    }
}

let sumSuccessful = 0
let sumNotSuccessful = 0 //oder einfacher sum2018 - sumSuccessful
for (const launch of launches)
{
    if (launch["launch_year"] === "2018")
    {
        if (launch["launch_success"] === true)
        {
            sumSuccessful++
        }
        else
        {
            sumNotSuccessful++
        }
    }
}

//console.log(launches[0]["launch_year"])
console.log("Anzahl der Launches für 2018:", sum2018)
console.log("Anzahl der erfolgreichen Launches: ", sumSuccessful)
console.log("Anzahl der nicht erfolgreichen Launches: ", sumNotSuccessful)

//Aufgabe2

//console.log(launches[0]["rocket"]["second_stage"]["payloads"][0]["payload_mass_kg"])

let sumPayload = 0
for (const launch of launches)
{
    if (launch["launch_year"] === "2018" && launch["launch_success"] === true)
    {
        for (const payload of launch["rocket"]["second_stage"]["payloads"])
        {
            sumPayload += payload["payload_mass_kg"]
        }
    }
}

console.log(sumPayload + " kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall befördert")

// Aufgaben:
// 
// 1) Wie viele Raketen hat SpaceX im Jahr 2018 gestartet?
//    1a) Wie viele davon erfolgreich
//    1b) Wie viele davon nicht erfolgreich?
// 
//    Hinweis: Schau' dir dazu die Eigenschaften "launch_year" und
//             "launch_success" an!
// 
//    Hinweis 2: Es kann sein, dass in manchen Jahren alle Rakentenstarts
//    zu 100% erfolgreich waren. In dem Fall soll dein Code trotzdem so
//    entwickelt sein, dass überprüft wird, ob der Startvorgang erfolgreich
//    war oder nicht! 
//
// 2) Wie viele kg Nutzlast wurden im Jahr 2018 *erfolgreich* ins Weltall 
//    gestartet?
//
//    Du findest die Nutzlast unter "rocket", "second_stage", "payloads",
//    dann das entsprechende Payload, und von dem die Eigenschaft
//    "payload_mass_kg".
//  
//    Hinweis: 
//    Bitte beachte, dass eine Rakete u.U. mehrere Satelliten haben kann!

