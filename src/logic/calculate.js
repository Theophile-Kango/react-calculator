import operate from './operate';

const calculate = ({ ...dataObject }, buttonName) => {
  let { total, operation, next } = dataObject;
  const operationButtons = ['+', '-', 'x', '÷', '%'];
  const numericButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (numericButtons.includes(buttonName)) {
    [operation, next] = [null, null];
    if (total === null) total = "";
    total += buttonName;
  }

  if (buttonName === '.') {
    if (!total.split('').includes(buttonName)) {
      [operation, next] = [null, null];
      total += buttonName;
    }
  }

  for (let i = 0; i < operationButtons.length; i += 1) {
    if (buttonName === operationButtons[i]) {
      operation = buttonName;
      total = operate(total, operation, next);
      return total;
    }
  }

  switch (buttonName) {
    case 'AC':
      [total, operation, next] = [null, null, null];
      break;
    case '+/-':
      total = operate(total, 'x', '-1');
      break;
    case '=':
      [operation, next] = [null, null];
      break;
    default:
      return total;
  }

  return total;
};

export default calculate;
