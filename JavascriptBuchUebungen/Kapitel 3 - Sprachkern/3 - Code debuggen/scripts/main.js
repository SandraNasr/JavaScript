'use strict'
/*
document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('simple-click')

    button.addEventListener('click', findDuplicates)
})
*/

function findDuplicates() {
    let numbers = [2, 4, 5, 2, 8, 5 ,4711];
    
    for (let i = 0; i <numbers.length; i++) {
        let number1 = numbers[i];
        debugger; //oder manuell breakpoint (Haltepunkt) am linken Rand setzen, funktioniert im Browser genauso, wenn über Sources der Quellcode aufgerufen wird
        for (let j = i+1; j < numbers.length; j++) {
            let number2 = numbers[j];
            debugger;
            if (number1 === number2) {
                console.log('Doppelte Zahl gefunden:', number1);
            }
        }
    }
}

findDuplicates()