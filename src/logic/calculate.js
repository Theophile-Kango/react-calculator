import operate from './operate';

const calculate = ({ ...dataObject }, buttonName) => {
  let { total, operation, next } = dataObject;
  const operationButtons = ['+', '-', 'x', '÷', '%'];
  const numericButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (numericButtons.includes(buttonName)) {
    if (total === null) total = "";
    if (operation !== null) next = "";
    operation === null ? total += buttonName : next += buttonName;
    return { total, operation, next };
  }


  if (buttonName === '.') {
    if (!total.split('').includes(buttonName)) {
      operation === null ? total += buttonName : next += buttonName;
      return { total, operation, next };
    }
  }

  for (let i = 0; i < operationButtons.length; i += 1) {
    if ((buttonName === operationButtons[i]) && (next != null)) {
      operation = buttonName;
      total = operate(total, operation, next);
      return { total, operation, next };
    }
  }

  switch (buttonName) {
    case 'AC':
      [total, operation, next] = [null, null, null];
      break;
    case '+/-':
      operation = buttonName;
      total = operate(total, 'x', '-1');
      break;
    case '=':
      [operation, next] = [null, null];
      break;
    default:
      return dataObject;
  }

  return { total, operation, next };
};

export default calculate;
