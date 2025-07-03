//In Javascript, you can assign default values to function parameters so that if no value is passed, the default will be used.

function showMessage(message="Hello"){
    console.log(message);
}

showMessage();  //Hello
showMessage("Hello Customer!"); //Hello Customer!


//Create bank
function createAccount(name, balance, type="Savings"){ // can use balance=5000 and clear out the second value 40000 from lines 16 and 17
    console.log(`${name} opened a ${type} account and balance is ${balance}`);
}

createAccount("Alex", 5000);
createAccount("Miller", 40000, "Credit");
