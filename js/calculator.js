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

let secondNumber;
let operator;
let firstNumber;
const display = document.getElementById('display');

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

function writeToDisplay() {
    display.textContent = '';
    let displayValue = '';
    for (let i = 0; i < 10; i++) {
        document.getElementById(`button${i}`).addEventListener('click', () => {
            let currentValue = document.getElementById(`button${i}`).textContent;
            displayValue += currentValue.toString();
            const display = document.getElementById('display').textContent = `${displayValue}`;
        })
    };
    getFirstNumber();
};

function getFirstNumber() {
    let operators = document.getElementsByClassName('operatorButton');
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', () => {
            firstNumber = document.getElementById('display').textContent;
            operator = operators[i].textContent.toString();
            document.getElementById('display').textContent = `${operator}`;
            writeToDisplay()
            getSecondNumber();
        });
    };
};

function getSecondNumber() {
    document.getElementById('enter').addEventListener('click', () => {
        secondNumber = document.getElementById('display').textContent;
        document.getElementById('display').textContent = `${operate(firstNumber, operator, secondNumber)}`;
    })
};

function clearButton() {
    document.getElementById('clearButton').addEventListener('click', () => {
        clear()
        writeToDisplay()
        console.log('yippe')
    })
};

function clear() {
    firstNumber = ;
    secondNumber = null;
    operator = null;
    displayValue = null;
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(operator)
    console.log(displayValue)
    //display.textContent = '';

};


writeToDisplay()
clearButton()
