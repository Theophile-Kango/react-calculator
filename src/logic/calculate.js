const calculate = (calculatorData, buttonName) => {
    calculatorData = {
        total: 0,
        next: 0,
        operation: ""
    }

    switch(buttonName){
        case "+/-" :
            calculatorData.total * calculatorData.next * -1;
            break;
    }
    if(buttonName === "+/-"){
        return calculatorData.total * calculatorData.next * -1;
    }
};

export default calculate;