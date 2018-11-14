let bankBalance = 0;
let spendingThreshold = 0;
let totalSpent = 0;
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
    return parseFloat(bankBalance).toFixed(2);
}

function getSpendingThreshold() {
    return spendingThreshold;
}

function calculateSubTotal() {
    return phonePrice + accessoryPrice;
}

function calculateTax() {
    return (taxRate / 100) * calculateSubTotal();
}

function calculateTotal() {
    return parseFloat(calculateSubTotal() + calculateTax()).toFixed(2);
}

function buyAPhone() {
    totalSpent += calculateSubTotal();
    return bankBalance -= calculateSubTotal();
}

function letsBuyPhones() {
    let phoneCounter = 0;
    while(totalSpent <= parseFloat(getSpendingThreshold())) {
        console.log(totalSpent);
        console.log(parseFloat(getSpendingThreshold()));
        console.log(totalSpent + parseFloat(getSpendingThreshold()));
        console.log(parseFloat(getBankBalance());
        if(parseFloat(getBankBalance()) >= parseFloat(calculateTotal())) {
            console.log(`Buying phone at: ${calculateTotal()} Balance is: ${getBankBalance()} `)
            buyAPhone();
            phoneCounter++;
        } else {
            console.log(`Bad luck, you do not have enough money for this phone. Balance is ${getBankBalance()} phone price ${calculateTotal()}`)
            break;
        }
    }
    console.log(`Balance exhausted. Phone bought ${phoneCounter}`);
}

setBankBalance();
setSpendingThreshold();
letsBuyPhones();