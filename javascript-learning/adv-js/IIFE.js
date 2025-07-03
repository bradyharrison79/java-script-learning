// An IIFE is a function that runs immediately aftre it is defined -- No need to call a function
// Syntax:
(function() {
    //logic
})();

// Used to initialize data, run setup code, or create private scope.

(function() {
    //code initialiation
    console.log("Bank system initialized at: "+ new Date().toLocaleString())
})();


//Private Interest Rate Calculation
const interest = (function() {
    const rate = 5; // Private value
    return function (principal, years) {
        return (principal * rate * years) / 100;
    }
})();

// The rate is hidden from the outer scope - sucure for banking formulas
console.log(interest(10000, 5));


// Generate Unique Account ID (Self-contained)
const accountID = (function() {
    const prefix = "Bank"; // Private value
    const randomNo = Math.floor(Math.random() * 100000)
    return prefix+randomNo 
})();

console.log("Generated Account ID:", accountID)