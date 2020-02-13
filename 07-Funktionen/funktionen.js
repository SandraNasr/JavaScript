"use strict"

//name und language sind Funktionsparameter
function sayHello(name, language)
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

sayHello("Max", "de")
sayHello("Erika", "en")

console.log(Math.max(1,2,3,4,5))
