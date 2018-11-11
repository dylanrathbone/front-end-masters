// let lcdDisplay = document.querySelector('.lcd-display')
// let mathematicalExpression = [];

// document.querySelector('.calculator').addEventListener('click', function(event) {
//     let button = event.target.className;
//     let buttonNumber = event.target.innerText;
//     if (button.includes('number-button') || button.includes('zero-button')) {
//         lcdDisplay.value = lcdDisplay.value + buttonNumber;
//     }
//     if (button.includes('division-button-text')) {
//         mathematicalExpression.push(lcdDisplay.value);
//         mathematicalExpression.push('/');
//         lcdDisplay.value = '';
//     }
//     if (button.includes('multiplication-button-text')) {
//         mathematicalExpression.push(lcdDisplay.value);
//         mathematicalExpression.push('*');
//         lcdDisplay.value = '';
//     }
//     if (button.includes('subtraction-button-text')) {
//         mathematicalExpression.push(lcdDisplay.value);
//         mathematicalExpression.push('-');
//         lcdDisplay.value = '';
//     }
//     if (button.includes('addition-button-text')) {
//         mathematicalExpression.push(lcdDisplay.value);
//         mathematicalExpression.push('+');
//         lcdDisplay.value = '';
//     }
//     if (button.includes('clear-button')) {
//         mathematicalExpression = [];
//         lcdDisplay.value = '';
//     }
//     if (button.includes('equals-button-text')) {
//         mathematicalExpression.push(lcdDisplay.value);
//         let expression = '';
//         mathematicalExpression.forEach(function(value) {
//             expression = expression + value;
//         });
//         console.log(expression);
//         console.log(eval(`${expression}`));
//         lcdDisplay.value = eval(`${expression}`);
//         mathematicalExpression = [];
//     }
// });





const lcdDisplay = document.querySelector('.lcd-display')
let dynamicLcdContent = '';
let calculatedValue = 0;
let value1 = 0;
let value2 = 0;
let operatorButtonClicked = false;
let operatorSymbol = '';
let inputString = [];

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
            operatorSymbol = event.target.className;
        } else {
            operatorButtonClicked = false;
        }
    }
    if(buttonClass.includes('equals-button')) {
        console.log('equals button selected');
        console.log(`value1 is: ${value1}`);
        console.log(`value2 is: ${value2}`);
        console.log(`math operator to use is: ${operatorSymbol}`);
        if(operatorSymbol.includes("addition")) {
            console.log('performing addition');
            calculatedValue = parseInt(value1, 10) + parseInt(value2, 10);
        } else if (operatorSymbol.includes("subtraction")) {
            console.log('performing subtraction');
            calculatedValue = parseInt(value1, 10) - parseInt(value2, 10);
        } else if (operatorSymbol.includes("multiplication")) {
            console.log('performing mutiplication');
            calculatedValue = parseInt(value1, 10) * parseInt(value2, 10);
        } else if (operatorSymbol.includes("division")) {
            console.log('performing division');
            calculatedValue = parseInt(value1, 10) / parseInt(value2, 10);
        }
        console.log(`calculated value is: ${calculatedValue}`);
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


