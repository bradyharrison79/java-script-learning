// A closure happens when a function "remembers" variables from its outer scope
// even after the outer function has finished executing.

// global variable
//let lastName = "Miller"

// outer function
//function fullName () {
    //outer variable
    //let middleName = "Kim";

    // inner funtion: closure function
    //function combine() {
        //inner variable
        //let firstName = "John";
        //console.log(`${firstName} ${middleName} ${lastName}`)
    //}
    //combine();
//}

//fullName();

//Another way to write it

// global variable
let lastName = "Miller"

// outer function
function fullName () {
    //outer variable
    let middleName = "Kim";

    // inner funtion: closure function
    return function combine() {
        //inner variable
        let firstName = "John";
        return `${firstName} ${middleName} ${lastName}`;
    }
    combine();
}

let innerFunction = fullName();
let result = innerFunction();
console.log(result);


//Loan Interest Calculator
function loanCalculator(rate) {
    //closure
    return function(principle) {
        return (principle*rate)/100;
    }
}

let homeLoanInterest = loanCalculator(6.5);
console.log("Interest on home loan: ", homeLoanInterest(5000000));