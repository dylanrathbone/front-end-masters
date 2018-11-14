let bankBalance = 0;
let spendingThreshold = 0;
let totalSpent = 0;
const TAX_RATE = 12.5;
const PHONE_PRICE = 1250.00;
const ACCESSORY_PRICE = 50.00;

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

function calculateSubTotal() {
    return PHONE_PRICE + ACCESSORY_PRICE;
}

function calculateTax() {
    return (TAX_RATE / 100) * calculateSubTotal();
}

function calculateTotal() {
    return (calculateSubTotal() + calculateTax());
}

function buyAPhone() {
    totalSpent += calculateTotal();
    return bankBalance -= calculateTotal();
}

function letsBuyPhones() {
    let phoneCounter = 0;
    
    while(totalSpent <= getSpendingThreshold()) {       
        if(getBankBalance() >= calculateTotal()) {
            let nextTotalSpent = totalSpent + calculateTotal();
            if (nextTotalSpent >= getSpendingThreshold()) {
                console.log(`Next purchase [${nextTotalSpent}] will exceed set threshold [${getSpendingThreshold()}]. Purchases cancelled.`);
                break;
            }
            console.log(`Buying phone at: $${calculateTotal()} Balance is: $${getBankBalance()} `)
            buyAPhone();
            phoneCounter++;
        } else {
            console.log(`Bad luck, you do not have enough money for this phone. Balance is ${getBankBalance()} phone price ${calculateTotal()}`)
            break;
        }
    }
    console.log(`Balance exhausted. Phone(s) bought ${phoneCounter}`);
    console.log(`Current balance: $${getBankBalance().toFixed(2)}`);
    console.log(`Total Spent: $${totalSpent.toFixed(2)}`);
}

setBankBalance();
setSpendingThreshold();
letsBuyPhones();
