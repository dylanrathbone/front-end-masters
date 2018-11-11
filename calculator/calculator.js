let lcdDisplay = document.querySelector('.lcd-display')
let mathematicalExpression = [];

document.querySelector('.calculator').addEventListener('click', function(event) {
    let button = event.target.className;
    let buttonNumber = event.target.innerText;
    if (button.includes('number-button') || button.includes('zero-button')) {
        lcdDisplay.value = lcdDisplay.value + buttonNumber;
    }
    if (button.includes('division-button-text')) {
        mathematicalExpression.push(lcdDisplay.value);
        mathematicalExpression.push('/');
        lcdDisplay.value = '';
    }
    if (button.includes('multiplication-button-text')) {
        mathematicalExpression.push(lcdDisplay.value);
        mathematicalExpression.push('*');
        lcdDisplay.value = '';
    }
    if (button.includes('subtraction-button-text')) {
        mathematicalExpression.push(lcdDisplay.value);
        mathematicalExpression.push('-');
        lcdDisplay.value = '';
    }
    if (button.includes('addition-button-text')) {
        mathematicalExpression.push(lcdDisplay.value);
        mathematicalExpression.push('+');
        lcdDisplay.value = '';
    }
    if (button.includes('clear-button')) {
        mathematicalExpression = [];
        lcdDisplay.value = '';
    }
    if (button.includes('delete-button')) {
        lcdDisplay.value = lcdDisplay.value.substring(0, lcdDisplay.value.length - 1);
    }
    if (button.includes('equals-button-text')) {
        mathematicalExpression.push(lcdDisplay.value);
        let expression = '';
        mathematicalExpression.forEach(function(value) {
            expression = expression + value;
        });
        console.log(expression);
        console.log(eval(`${expression}`));
        lcdDisplay.value = eval(`${expression}`);
        mathematicalExpression = [];
    }
});