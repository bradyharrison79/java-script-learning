// Rest ...args   : Gathers remaining arguments into an array.
// Used in function parameters.
// Rest parameter in banking functions
function totalDeposits(...amounts) {
    // console.log(amounts);
    return amounts.reduce((sum, amount)=> sum + amount, 0);
    
}

console.log(
    "Total Sum", totalDeposits(10000, 20000, 30000, 50000)
)

function createTransaction(type, amount, ...tags) {
    return {
        type, amount, tags
    }
}
console.log(createTransaction("Debit", 500000, "food", "travel", "shopping"));


// Spread ...arr
// Spreads out (expands) elements of an array/object.
// Used in function calls or object/array cloning.

const bankAccount = {accountNumber: 'AC10293', type: "Savings"};
const userInfo = {accName: "Mohamed T Barber", Age: 40};

const fullAccount = {...bankAccount, ...userInfo};
console.log(fullAccount)

function maxTransaction(first , second , third) {
    return Math.max(first, second, third);
}

const txns = [4000, 15000, 9000];
//console.log(maxTransaction(txns[0], txns[1], txns [2]));
console.log ("maxTransaction:", maxTransaction(...txns));

