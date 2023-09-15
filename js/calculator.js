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
        numberArray.push(stringForThaNumbers, operatorButtons[i].id);
        //// Clears the display so we can add more numbas ////
        calculatorDisplay.textContent = '';
        digitArray = [];
    });
};
///////////////////////////////////////////////////////////////////////////////
// Throw the last number into the array and do the calculation stuff        ///
///////////////////////////////////////////////////////////////////////////////
enterButton.addEventListener('click', () => {
    let anotherStringForMoarNumbers = digitArray.join('');
    numberArray.push(anotherStringForMoarNumbers);
    calculatorDisplay.textContent = `${calculate()}`;
    numberArray = [];
    digitArray = [];
});
///////////////////////////////////////////////////////////////////////////////
// Now the hard part ):                                                     ///
///////////////////////////////////////////////////////////////////////////////
function calculate() {
    const pemdas = ['*', '/', '+', '-'];
    for (let i = 0; i < numberArray.length; i++) {
        let calculatedNumber = [];
        if (numberArray[i] === pemdas[0]) {
            calculatedNumber.push(multiply(numberArray[i - 1], numberArray[i + 1]));
            let spliced = numberArray.splice(i - 1, 3, calculatedNumber.join(''));
        };
    };
    for (let i = 0; i < numberArray.length; i++) {
        let calculatedNumber = [];
        if (numberArray[i] === pemdas[1]) {
            calculatedNumber.push(divide(numberArray[i - 1], numberArray[i + 1]));
            let spliced = numberArray.splice(i - 1, 3, calculatedNumber.join(''));
        };
    };
    for (let i = 0; i < numberArray.length; i++) {
        let calculatedNumber = [];
        if (numberArray[i] === pemdas[2]) {
            calculatedNumber.push(add(numberArray[i - 1], numberArray[i + 1]));
            let spliced = numberArray.splice(i - 1, 3, calculatedNumber.join(''));
        };
    };
    for (let i = 0; i < numberArray.length; i++) {
        let calculatedNumber = [];
        if (numberArray[i] === pemdas[3]) {
            calculatedNumber.push(subtract(numberArray[i - 1], numberArray[i + 1]));
            let spliced = numberArray.splice(i - 1, 3, calculatedNumber.join(''));
        };
    };
    return numberArray;
};
///////////////////////////////////////////////////////////////////////////////
// Clear button                                                             ///
///////////////////////////////////////////////////////////////////////////////
clearButton.addEventListener('click', () => {
    numberArray = [];
    digitArray = [];
    calculatorDisplay.textContent = '';
});