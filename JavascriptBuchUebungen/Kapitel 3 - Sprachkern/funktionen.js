"use strict"

//Funktionsausdrücke werden über die Variable aufgerufen
//anonyme Funktion möglich, d. h. eine Funktion ohne Namen
let showMessage = function () {
    console.log("Ahlan");
}
showMessage()

//Funktionsdeklarationen über Funktionsnamen aufgerufen

function showMessageFunc() {
    console.log("Bye")
}

showMessageFunc()

//Funktionen mit Parametern können mit weniger Argumenten als Parametern aufgerufen werden
//haben dann den Wert undefined, wie Variablen, die nicht initialisiert worden sind

/*function printPersonInformation (firstName, lastName, age) {
    console.log("Vorname:", firstName);
    console.log("Nachname:", lastName);
    console.log("Alter:", age)
}
*/
printPersonInformation("Mira", "Muster")

//das kann durch Prüfen ob undefined abgefangen werden, so nur Argumente ausgegeben, die defined sind
function printPersonInformation (firstName, lastName, age) {
    if (firstName !== undefined) {
        console.log("Vorname:", firstName);
    }
    if (lastName !== undefined) {
        console.log("Nachname:", lastName);
    }
    if (age !== undefined) {
        console.log("Alter:", age)
    }
}

printPersonInformation("Mira", "Muster")

//Funktionen mit mehr Argumenten als angegebenen Parametern aufrufen
printPersonInformation("Mira", "Muster", 5, 1.2, 22) //hier wird das 4. und 5. Argument ignoriert ohne Fehler, da es dazu keinen Parameter gibt

function printPersonInformationArg(firstName, lastName, age) {
    console.log("Vorname:", firstName);
    console.log("Nachname:", lastName);
    console.log("Alter:", age);

    if (arguments.length > 3) {
        console.log("Größe:", + arguments[3]); //arguments-Objekt ist ein arrayähnliches Objekt, Array-Methoden können nicht angewandt werden
    }

    if (arguments.length > 4) {
        console.log("Gewicht:", arguments[4]);
    }
}
console.log("-".repeat(50))
console.log("Mit arguments-Objekt")
printPersonInformationArg("Mira", "Muster", 5, 1.2, 22) //hier werden alle Argumente bearbeitet

//besser als arguments-Objekt sind die neueren Rest-Parameter
//ist ein echtes Array mit allen Array-Methoden
//Rest-Argumente fassen alle Argumente zusammen, für die kein Parameter vorgesehen ist
function printPersonInformationRest(firstName, lastName, age, ...restArgs) {
    console.log("Vorname:", firstName);
    console.log("Nachname:", lastName);
    console.log("Alter:", age);

    if (restArgs.length > 0) {
        console.log("Größe:", + restArgs[0]);
    }

    if (restArgs.length > 1) {
        console.log("Gewicht:", restArgs[1]);
    }
}
console.log("-".repeat(50))
console.log("Mit Restparametern:")
printPersonInformationRest("Mira", "Muster", 5, 1.2, 22)

//Funktionen mit einer variablen Anzahl an Argumenten = variadische Funktionen
//1. Funktion mit Array als Parameter
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    console.log("Die Summe der übergebenen Zahlen lautet:", sum)
}

console.log("-".repeat(50))
console.log("Funktion mit Array als Parameter:")
sum([1,2,3,4])


//2.Implementierung der Funktion mit Rest-Parametern, bei Aufruf der Funktion Übergabe von einzelnen Argumenten und nicht Array
function sumRest(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    console.log("Die Summe der übergebenen Zahlen lautet:", sum)
}

console.log("-".repeat(50))
console.log("Funktion mit Rest-Parametern, Übergabe von einzelnen Argumenten:")
sumRest(1,2,3,4)


//Funktionen innerhalb von Funktionen können nur innerhalb der Funktion aufgerufen werden
function sumNormalize(x, y) {
    let result =
        normalize(x) +
        normalize(y);
    function normalize(i) {
        if (i < 0) {
            return 0
        }
        return i
    }
    return result
}
console.log("-".repeat(50));
console.log("Funktion innerhalb einer Funktion");

console.log("negative Zahlen werden zu 0:", sumNormalize(-5,6));