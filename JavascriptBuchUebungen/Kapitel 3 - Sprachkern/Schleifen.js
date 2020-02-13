"use strict"

let coordinates = [
    [50.69, 8.94],
    [54.29, 11.97],
    [60.78, 9.94]
];
let iterationValue = 0;

for (let i = 0; i < coordinates.length; i++) {
    let coordinate = coordinates[i]
    iterationValue++
    console.log(iterationValue + ". Koordinaten")
    for (let j = 0; j < coordinate.length; j++) {
        console.log(coordinate[j])        
    }    
}

let numbers = [2, 4, 56, 22, 65, 2, 54, 88, 29];
console.log('Vor der Schleife');
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 === 1) {
        console.log('Ungerade Zahl gefunden');
        continue;
    }
    console.log(number);
}
console.log('Nach der Schleife');