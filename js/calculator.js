function add(num, num2) {
    return `${num + num2}`;
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

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, operator, secondNumber) {
    operator === '+' ? console.log(add(firstNumber, secondNumber)) :
        operator === '-' ? console.log(subtract(firstNumber, secondNumber)) :
            operator === '*' ? console.log(multiply(firstNumber, secondNumber)) :
                operator === '/' ? console.log(divide(firstNumber, secondNumber)) : console.log('Error')
    return
};

operate(10, "*", 6)