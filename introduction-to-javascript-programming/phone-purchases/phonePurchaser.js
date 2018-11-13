let bankBalance = 0;
let spendingThreshold = 0;
const taxRate = 12.5;
const phonePrice = 1250.00;
const accessoryPrice = 50.00;

function setBankBalance() {
    bankBalance = prompt('Please enter your bank balance: ');
}

function setSpendingThreshold() {
    spendingThreshold = prompt('What is the maximum amount you are willing to spend? ');
}

function getBankBalance() {
    return bankBalance;
}

function getSpendingThreshold() {
    return spendingThreshold;
}

function calculateTotal() {
    let subTotal = phonePrice + accessoryPrice;
    let total = subTotal * taxRate / 100;
    return total;
}

setBankBalance();
setSpendingThreshold();


console.log(`Your bank balance is: ${getBankBalance()}`);
console.log(`Your spending threshold is: ${getSpendingThreshold()}`);
console.log(`total price is: ${calculateTotal()}`);