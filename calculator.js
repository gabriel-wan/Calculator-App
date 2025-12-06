let firstNumber = '';
let operation = '';
let secondNumber = '';
let buttons = document.querySelectorAll('.btn.btn-secondary'); 
let display = document.querySelector('#calculator-display'); 
let clearButton = document.querySelector('#clear-button');
let operationButtons = document.querySelectorAll('.btn-warning');
let equalsButton = document.querySelector('#equals-button');
let decimalButton = document.querySelector('#decimal-button')

equalsButton.addEventListener('click', function() {
    let secondNumber = display.value; // Get the second number from the display
    let result;
    // if user clicks on the equals button without entering first or second number
    if (firstNumber === '' || secondNumber === '') {
        display.value = '';
        return
    } 
    // handles division by zero
    else if (operation === '/' && secondNumber === '0'){
        display.value = 'Division By Zero';
        return
    }
    else if (operation === '+') {    // addition
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } 
    else if (operation === '-') {    // subtraction
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } 
    else if (operation === '/') {    // division
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
    else if (operation === '*') {    // multiplication
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    }
    display.value = result; // Display the result
});

operationButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        firstNumber = display.value; // Store the current display value
        operation = button.textContent; // Store the operation
        display.value = ''; // Clear the display
    });
});
clearButton.addEventListener('click', function() {
    display.value = '';
});

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        display.value += button.textContent;
        // Display each number
    });
});

decimalButton.addEventListener('click', function() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
});