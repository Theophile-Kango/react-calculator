import operate from './operate';

const calculate = ({total, operation, next}, buttonName) => {

    const operationButtons = ['+','-','x','÷','%'];

    for(let i = 0; i < operationButtons.length; i += 1){
        if(buttonName === operationButtons[i]){
            operation = buttonName;
            total = operate(total, operation, next);
            return total;
        }
    }
  
    switch(buttonName){
        case "+/-" :
            total * next * -1;
            break;
    }

};

export default calculate;