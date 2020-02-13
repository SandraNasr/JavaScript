// Tag im Monat
let dayOfMonth = (new Date()).getDate()

//Name des aktuellen Monats
let monthName = (new Date()).toLocaleString(["de", "en"], {month: "long"})

//aktuelles Jahr (Schreibweise 1)
let year1 = (new Date()).getFullYear()

//aktuelles Jahr (Schreibweise 2)
let year2 = (new Date()).toLocaleString(["de", "en"], {year:"numeric"})

console.log(typeof dayOfMonth)
console.log(typeof monthName)
console.log(monthName)
console.log(typeof year1)
console.log(typeof year2)
console.log(year1 +5)
console.log(year2 +5)
let text = "Heute ist der "
console.log(text + dayOfMonth + ". " + monthName + " " + year2)
