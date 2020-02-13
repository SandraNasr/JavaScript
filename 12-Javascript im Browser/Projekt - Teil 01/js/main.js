"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const clickElement = document.getElementById("click-button")
    const resetElement = document.getElementById("reset-button")
    /*const clickHeader = document.getElementById("click-header")
    
    let clickHeaderSubstr = ""
    let clickHeaderColon = 0
    let clickCount = 0
    

    clickElement.addEventListener("click", () => {
        clickCount++
        clickHeaderColon = clickHeader.innerText.indexOf(":")
        clickHeaderSubstr = clickHeader.innerText.substring(0, clickHeaderColon+2)
        clickHeader.innerText = clickHeaderSubstr + clickCount
        
    })

    resetElement.addEventListener("click", () => {
        clickCount = 0
        clickHeader.innerText = clickHeaderSubstr + clickCount
    })
    */
    //oder über span-ID, das spart viel Code, Hochzählinformation steht in der Variablen currentCounter und wird nicht jedes MAl aus dem Zustand genommen
    const counterNumber = document.getElementById("counter-number")
    let currentCounter = parseInt(counterNumber.innerText, 10)
    
    clickElement.addEventListener("click", () => {
        currentCounter++
        counterNumber.innerText = currentCounter
    })

    resetElement.addEventListener("click", () => {
        currentCounter = 0
        counterNumber.innerText = currentCounter
        })

})
 

