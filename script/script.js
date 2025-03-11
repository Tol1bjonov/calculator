const primary_NumberElement = document.querySelector(".primary-number")
const secondary_NumberElement = document.querySelector(".secondary-number")
let currentNumber = ""
let previousNumber = ""
let operator = ""


function appendNumber (num){
    currentNumber = currentNumber + num
    updateDisplay(currentNumber)
}

function appendOperator(op){
    operator = op
    previousNumber = currentNumber
    updateDisplay(currentNumber)
    updateSecondaryNumber(previousNumber)
    currentNumber = ""
}

function updateDisplay(num){
    primary_NumberElement.textContent = num
}

function clearDisplay(){
    currentNumber = ""
    previousNumber = ""
    updateSecondaryNumber(previousNumber)
    updateDisplay("0")
}
function calculate(){
    let result;

    const num1 = parseFloat(previousNumber)
    const num2 = parseFloat(currentNumber)

    switch(operator){
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
        case "%":
            result = (num1*num2) / 100
            break;

    }
    currentNumber = result.toString()
    updateDisplay(currentNumber)
    previousNumber = ""
    operator = ""
    updateSecondaryNumber(previousNumber)
    
}

function getPercentage(num1, num2){
    return (num1 * num2)/100;
}
function updateSecondaryNumber(num){
    secondary_NumberElement.textContent = num
}
function deleteLastNumber(){
    currentNumber = currentNumber.slice(0, -1)
    updateDisplay(currentNumber)
}
function PlusMinusNumber(){
    if(currentNumber.startsWith.slice("-")){
        currentNumber = currentNumber.slice(1)
    } else{
        currentNumber = "-" + currentNumber
    }
    updateDisplay(currentNumber)
}