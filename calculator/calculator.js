const lcdDisplay = document.querySelector('.lcd-display')
let dynamicLcdContent = '';
let calculatedValue = 0;
let value1 = 0;
let value2 = 0;
let operatorButtonClicked = false;
let operatorSymbol = '';

document.querySelector('.calculator').addEventListener('click', function(event) {
    let buttonClass = event.target.className;
    if (buttonClass.includes('number-button') || buttonClass.includes('zero-button')) {
        console.log('number button clicked....');
        let buttonValue = event.target.innerText;
        if(!operatorButtonClicked) {
            console.log(`has an operator button been clicked: ${operatorButtonClicked}`);
            dynamicLcdContent = dynamicLcdContent + buttonValue;
            lcdDisplay.value = dynamicLcdContent;
            value1 = dynamicLcdContent;
            console.log(`value1 set to: ${value1}`);
        } else {
            console.log(`has an operator button been clicked: ${operatorButtonClicked}`);
            operatorButtonClicked = false;
            dynamicLcdContent = '';
            dynamicLcdContent = dynamicLcdContent + buttonValue;
            lcdDisplay.value = dynamicLcdContent;
            value2 = dynamicLcdContent;
            console.log(`value2 set to: ${value2}`);
        }
    }
    if(buttonClass.includes('operator-button')) {
        console.log(`Operator button hit: ${operatorSymbol}`);
        if(operatorButtonClicked === false) {
            operatorButtonClicked = true;
            operatorSymbol = event.target.innerText;
        } else {
            operatorButtonClicked = false;
        }
    }
    if(buttonClass.includes('equals-button')) {
        console.log('equals button selected');
        console.log(`value1 is: ${value1}`);
        console.log(`value2 is: ${value2}`);
        console.log(`math operator to use is: ${operatorSymbol}`);
        if(operatorSymbol === '+') {
            console.log('performing addition');
            calculatedValue = parseInt(value1, 10) + parseInt(value2, 10);
        } else if (operatorSymbol === '-') {
            console.log('performing subtraction');
            calculatedValue = parseInt(value1, 10) - parseInt(value2, 10);
        } else if (operatorSymbol === 'x') {
            console.log('performing mutiplication');
            calculatedValue = parseInt(value1, 10) * parseInt(value2, 10);
        } else {
            console.log('performing division');
            calculatedValue = parseInt(value1, 10) / parseInt(value2, 10);
        }
        lcdDisplay.value = calculatedValue;
        value1 = 0;
        value2 = 0;
    }
    if(buttonClass.includes('clear-button')) {
        dynamicLcdContent = '';
        lcdDisplay.value = '0';
        value1 = 0;
        value2 = 0;
    }
});
