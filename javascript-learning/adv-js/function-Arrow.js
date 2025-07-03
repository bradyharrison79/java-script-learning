        // Function declaration
        // 1. labeled function expression
//function showMessage() {
    //console.log("Today is a wonderful day!");
//}
        // 2. anonymous function expression
//function showData(greetings) {
    //console.log(`Today is a ${greetings} day!`);

//}

//showMessage();

//showData("sunny");

// Function expression
//let showText = function showMessage() {
    //console.log("Today is a wonderful day!");
//}

//let showData = function (greetings) {
    //console.log(`Today is a ${greetings} day!`);

//}

// showMessage();  //Error : showMessage is not defined
//call
//showText();

//showData('sunny');

//Function Hoisted:  You can call it before it's defined in code.
//showMessage();

//function showMessage() {
    //console.log("FX: Today is a wonderful day!");
//}

//function showData(greetings) {
    //console.log(`Today is a ${greetings} day!`);

//}





// NOT Hoisted:  You cannit call it before the line where it is defined
//showText();

let showText = () => {
    console.log("Today is a wonderful day!");
}

let showData = (greetings) => {
    console.log(`Today is a ${greetings} day!`);

}

// showText();  //Error : Cannot access show text before initialization
//call
showText();

showData('sunny');
//traditionally
// function add(num1, num2) {
//     return num1 + num2;
// }

let add = (num1, num2) => num1 +num2;

let result = add (1000, 3000);
console.log(result);

const calculateInterest = (principle, rate, time) => (principle* rate* time)/100;
console.log("Interest: ",calculateInterest(10000, 5, 1));