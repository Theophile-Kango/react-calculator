import Big from 'big.js';

const operate = (...args) => {

  let [numberOne, operation, numberTwo] = args;

  if ((operation === '÷') && (numberTwo === '0')) return 'Infinite';

  numberOne = new Big(numberOne);
  numberTwo = new Big(numberTwo);
  let result = 0;

  switch (operation) {
    case '+':
      result = numberOne.plus(numberTwo);
      break;
    case '-':
      result = numberOne.minus(numberTwo);
      break;
    case 'x':
      result = numberOne.times(numberTwo);
      break;
    case '÷':
      result = numberOne.div(numberTwo);
      break;
    case '%':
      numberOne = null;
      result = numberTwo.div(100);
      break;
    default:
      return result;
  }
  return result;
};

export default operate;
