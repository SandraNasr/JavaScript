"use strict"

const https = require("https")
const http = require("http")

const url = "https://api.spacexdata.com/v3/launches/latest"

//Anfrage an API, Anwort kommt an uns zurück
https.get(url, res => {
    
    let data = ""
    res.on("data", chunk =>  {
        console.log("data:", chunk) //Antwort nicht in einem Block geschickt, sondern kann in mehrere Packete aufgeteilt werden
        data += chunk
    })
    res.on("end", () => {
        const dataAsObj = JSON.parse(data)
        console.log(dataAsObj["mission_name"])
    })
    //console.log(res.statusCode) //statusCode 200 = alles durchgelaufen, 404 = nicht
})