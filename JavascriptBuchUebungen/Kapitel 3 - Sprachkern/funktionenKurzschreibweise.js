'use strict'

//Fat Arrow Schreibweise

let sum = (x,y) => {return x + y}

//ist das GLeiche wie:
/*
let sum = function(x, y) {
    return x + y
}
*/

//das kann man noch mal so vereinfachen:
//{} und return können weggelassen werden, wenn im Funktionskörper nur eine Anweisung auftaucht
let sum1 = (x, y) => x + y;

//bei nur einem Parameter kann man auch noch () weglassen

let showMessage = message => console.log(message);

//Funktion ohne Parameter mit ()
let printHelloWorld = () => console.log('Hello World');

// möchte man keine {} verwenden, aber ein Objekt zurückgeben, muss das Objekt in () geschrieben werden

let createUser = (username, email, password) => 
(
    {
        username: username,
        email: email,
        password: password
    }
);