'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('weiter')
    
    button.addEventListener('click', enter)
})

function enter() {
    let age = document.getElementById('age').value;
    try {
        checkAge(age)
    } catch (error) {
        document.getElementById('message').textContent = error.message;
        return;
    }

}

function checkAge(age) {
    if (isNaN(parseFloat(age))) {
        throw new TypeError('Es muss eine Zahl eingegeben werden');
    } else if  (age < 0)
    {
        throw new RangeError('Alter darf nicht negativ sein')
    } 
    
    else {
        return true;
    }
}