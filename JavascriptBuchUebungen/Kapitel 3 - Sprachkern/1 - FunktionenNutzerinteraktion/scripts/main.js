'use strict'

//anonyme Funktion wird dem EventListener übergeben
document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('button-calculate-sum');
    button.addEventListener('click', calculateSum)
});

function calculateSum() {
    let inputX = parseInt(document.getElementById('field1').value);
    let inputY = parseInt(document.getElementById('field2').value);

    let result = inputX + inputY
    showResult(result)
}

function showResult(result) {
    let resultField = document.getElementById('result');
    resultField.value = result;
}