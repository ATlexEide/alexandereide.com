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

const numberButtons = document.getElementsByClassName('numberButton');
const operatorButtons = document.getElementsByClassName('operatorButton');
const enterButton = document.getElementById('=');
const clearButton = document.getElementById('clearButton');
let digitArray = [];
let numberArray = [];
const calculatorDisplay = document.getElementById('display');

// Push digits to an array for later use and display them on screen
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        digitArray.push(numberButtons[i].textContent);
        let digitString = digitArray.join('');
        calculatorDisplay.textContent = digitString;
    })
}

// Pushes another number and the operator to array 
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        calculatorDisplay.textContent = operatorButtons[i].id;
        numberObj = { number: digitArray.join(''), operator: operatorButtons[i].id };
        numberArray.push(numberObj)
        digitArray = [];

    })
};

// Finalizes the operation
enterButton.addEventListener('click', () => {
    numberObj = { number: digitArray.join(''), operator: '=' };
    //    numberArray.push(digitArray.join(''));
    numberArray.push(numberObj)
    // Sorts the operations with pemdas
    numberArray.forEach(numberObj => {
        numberObj.operator === '=' ? numberObj.weight = 5 :
            numberObj.operator === '-' ? numberObj.weight = 4 :
                numberObj.operator === '+' ? numberObj.weight = 3 :
                    numberObj.operator === '/' ? numberObj.weight = 2 :
                        numberObj.operator === '*' ? numberObj.weight = 1 : alert('Error')
    });
    console.table(numberArray)
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < numberArray.length - 1; i++) {
            if (numberArray[i]['weight'] > numberArray[i + 1]['weight']) {
                let temp = numberArray[i];
                numberArray[i] = numberArray[i + 1];
                numberArray[i + 1] = temp;
                swapped = true;
            }
            //console.table(numberArray)
        }
    } while (swapped);
    console.table(numberArray)
    digitArray = [];
    operationString = numberArray.join(' ');

});