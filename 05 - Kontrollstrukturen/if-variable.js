"use strict"

let request = null

request = "GET /"

//Bedingung muss nicht unbedingt Boolean sein, kann auch Status sein, dann ist es true
if (request)
{
    console.log("Hallo Welt")
}

//Wenn der String leer ist, dann wird es zu false

request = ""

if (request)
{
    console.log("Hallo Welt")
}