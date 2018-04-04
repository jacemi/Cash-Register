let calc = calculatorModule();
let numButtons = document.getElementsByClassName('numButton');
let calcDisplay = document.getElementById('display');

let storedVal = "";
let lastOperator = "";
// be sure to switch to a method which will show what the last operator was.  

let addCheck = false;
let subCheck = false;
let mulCheck = false;
let divCheck = false;

let clearButton = document.getElementById('clear');

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', storeValue)
};

function storeValue() {

    storedVal += this.innerHTML;
    display.innerHTML = storedVal
};


function division() {
    calc.load(storedVal);
    divCheck = true;
    storedVal = "";
    display.innerHTML = "/";
};

function clearValue() {
    calc.clearMemory();
    storedVal = "";
    display.innerHTML = 0.00;
};

function multiplication() {
    calc.load(storedVal);
    mulCheck = true;
    storedVal = "";
    display.innerHTML = "*";
};

function subtraction() {
    calc.load(storedVal);
    subCheck = true;
    storedVal = "";
    display.innerHTML = "-";
};

function addition() {
    calc.load(storedVal);
    addCheck = true;
    storedVal = "";
    display.innerHTML = "+";
};

function equalSign() {
    if (divCheck === true) {
        calc.divide(storedVal);
        display.innerHTML = calc.getTotal();
    } else if (mulCheck === true) {
        calc.multiply(storedVal);
        display.innerHTML = calc.getTotal();
    } else if (subCheck === true) {
        calc.subtract(storedVal);
        display.innerHTML = calc.getTotal();
    } else if (addCheck === true) {
        calc.add(storedVal);
        display.innerHTML = calc.getTotal();
    }
};