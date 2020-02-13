"use strict"

//language ist Standardparameter
function sayHello(name, language = "de")
{
    if (language === "de")
    {
        console.log("Hallo Welt " + name + "!")
    }
    else if (language === "en")
    {
        console.log(("Hi " + name + "!"))
    }
    
}

sayHello("Max") //Standardparameter muss dann nicht mehr übergeben werden
sayHello("Erika", "en")

console.log(Math.max(1,2,3,4,5))
