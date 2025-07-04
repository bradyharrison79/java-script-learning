// modern.js
const greet = (name) => {
    console.log(`Hello, ${name}!`);
    
};

class Person {
    constructor(name) {
        this.name = name;
    
    }
    sayHello(){
        greet(this.name);
    }
}

const p = new Person ("Brad");
p.sayHello();
