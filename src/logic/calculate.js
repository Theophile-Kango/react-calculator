import operate from './operate';

const calculate = ({total, operation, next}, buttonName) => {

    const operationButtons = ['+','-','x','÷','%'];
    const numericButtons = ['0','1','2','3','4','5','6','7','8','9'];

    if(numericButtons.includes(buttonName)){
        [operation, next] = [null, null];
        total += buttonName;
    }

    if(buttonName === "."){
        if(!total.split('').includes(buttonName)){
            [operation, next] = [null, null];
            total += buttonName;
        }
    }
    
    for(let i = 0; i < operationButtons.length; i += 1){
        if(buttonName === operationButtons[i]){
            operation = buttonName;
            total = operate(total, operation, next);
            return total;
        }
    }
  
    switch(buttonName){
        case "AC" :
            [total, operation, next] = ["0", null, null];
            break;
        case "+/-" :
            total = operate(total,"x","-1");
            break;
        case "=" :
            [operation, next] = [null, null];
            break;
    }

    return total;

};

export default calculate;