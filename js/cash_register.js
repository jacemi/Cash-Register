let calc = calculatorModule();
let numButtons = document.getElementsByClassName('numButton');
let calcDisplay = document.getElementById('display');

let storedVal = "";
let modifyingVal = "";
let clearButton = document.getElementById('clear');

 for(let i = 0; i < numButtons.length; i++){
     numButtons[i].addEventListener('click', storeValue)
     };

 function storeValue(){ 
    
    storedVal += this.innerHTML;
     calc.load(storedVal);
     display.innerHTML = storedVal;
     console.log(calc.getTotal());
 };


clearButton.addEventListener('click', clearValue)

function clearValue(){
    calc.clearMemory();
    display.innerHTML = storedVal;
    console.log(storedVal.innerHTML);
};

function addition(){
    privStoredVa;
    storedVal += this.innerHTML;
    display.innerHTML = storedVal;
    calc.add(storedVal)
}

function division(){
    modifyingVal = storedVal;
}


