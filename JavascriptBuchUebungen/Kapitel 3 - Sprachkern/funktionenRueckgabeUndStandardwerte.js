'use strict'

//Rückgabewerte definieren
function sum(x, y) {
    let result = x + y;
    return result;
}
let resultOne = sum(1,2);
console.log(resultOne)

function createUser(userName, email, password) {
    let user = {
        username: userName,
        email: email,
        password: password
    }
    return user;
}

let max = createUser('Max', 'max@mail.de', 123456);
console.log(max);
console.log(max.password);

//Standardwerte für Parameter
function createUserStandard(userName, email, password = 'Standardpasswort') {
    let user = {
        username: userName,
        email: email,
        password: password
    }
    return user;
}

let maxima = createUserStandard('Maxima', 'maxima@mail.de');
console.log(maxima);
console.log(maxima.password);

//alte Schreibweise für Standard
function createUserStandardOld(username, email, password) {
    password = password !== undefined ? password : 'Standardpasswort';
    let user = {
        username: username,
        email: email,
        password: password
    }
    return user;
}

let sabrina = createUserStandardOld('Sabrina', 'sabrina@mail.de');
console.log(sabrina);
console.log(sabrina.password)

//Elemente aus einem Array als Parameter verwenden

let user1 = ['Mira', 'mira@mail.de', 654321];
let user2 = ['Sonia', 'sonia@mail.de', 123456];

let mira = createUser(
    user1[0],
    user1[1],
    user1[2]
)

console.log(mira)

//mit Spread-Operator können die Elemente eines Arrays auf die Parameter einer Funktion verteilt werden
let sonia = createUser(...user2)
console.log(sonia)
