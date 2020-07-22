//import Big from './big.mjs';

const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {

    numberOne = new Big(numberOne);
    numberTwo = new Big(numberTwo);
    let result = 0;

    switch(operation){
        case "+":
            result = Number(numberOne) + Number(numberTwo);
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "x":
            result = numberOne * numberTwo;
            break;
        case "÷":
            result = numberOne / numberTwo;
            break;
    }
    return result;
}

console.log(operate("10","2","÷"));

//export default operate;