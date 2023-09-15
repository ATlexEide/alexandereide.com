///////////////////////////////////////////////////////////////////////////////
// Operation functions                                                      ///
///////////////////////////////////////////////////////////////////////////////
function add(num, num2) {
    return Number(num) + Number(num2);
};

function subtract(num, num2) {
    return num - num2;
};

function multiply(num, num2) {
    return num * num2;
};

function divide(num, num2) {
    return num / num2;
};

function operate(firstNumber, operator, secondNumber) {
    let result;
    if (operator === '+') {
        result = add(firstNumber, secondNumber);
    } else if (operator === '-') {
        result = subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        result = multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        result = divide(firstNumber, secondNumber);
    } else {
        result = 'Error';
    }
    display.textContent = result.toString();
    return result;
};

function convertArrayToString(array) {
    array = array.join('');
    return array;
}

function clear() {
    displayValueArray = [];
    display.textContent = '';
};

///////////////////////////////////////////////////////////////////////////////
// Button variables and shit                                                ///
///////////////////////////////////////////////////////////////////////////////
const numberButtons = document.getElementsByClassName('numberButton');
const operatorButtons = document.getElementsByClassName('operatorButton');
const enterButton = document.getElementById('=');
const clearButton = document.getElementById('clearButton');
let digitArray = [];
let numberArray = [];
const calculatorDisplay = document.getElementById('display');
///////////////////////////////////////////////////////////////////////////////
// Push digits to an array for later use and display them on screen         ///
///////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        digitArray.push(numberButtons[i].id);
        calculatorDisplay.textContent = digitArray.join('')
    })
};
///////////////////////////////////////////////////////////////////////////////
// Put the number in another array to save for later                        ///
///////////////////////////////////////////////////////////////////////////////
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        let stringForThaNumbers = digitArray.join('');
        numberArray.push(stringForThaNumbers);
        //// Clears the display so we can add more numbas ////
        calculatorDisplay.textContent = '';
        digitArray = [];
        console.log(numberArray) // Reminder to self, remove this later
    });
};
///////////////////////////////////////////////////////////////////////////////
// Throw the last number into the array and do the calculation stuff        ///
///////////////////////////////////////////////////////////////////////////////
enterButton.addEventListener('click', () => {
    let anotherStringForMoarNumbers = digitArray.join('');
    numberArray.push(anotherStringForMoarNumbers); // Reminder to self, remove this later
    console.log(numberArray)
});
///////////////////////////////////////////////////////////////////////////////
// Now the hard part ):                                                     ///
///////////////////////////////////////////////////////////////////////////////