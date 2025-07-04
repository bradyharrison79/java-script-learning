// WAP for tea maker
// Boil Waer => return Promise
// Add Tea => return Promise
// Add Sugar and Milk => return Promise

function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");
        setTimeout(() => {
            let kettleOn = true;
            if (kettleOn) {
                resolve("Hot water +");
            } else {
                reject("Kettle is broken")
            }
        }, 2000);

    });
}

function addTeaLeaves(water) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let teaLeavesAvailable = true;
            if (teaLeavesAvailable) {
                resolve(water + " Added tea +");
            } else {
                reject("No tea")
            }
        }, 2000);
    });

}

function addSugarAndMilk(tea) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sugarAndMilkAvailable = true;
            if (sugarAndMilkAvailable) {
                resolve(tea + " Added sugar and milk");
            } else {
                reject("No sugar and milk")
            }
        }, 2000);
    });

}

// Let's make tea!
// boilWater().then(message =>{
//     console.log(message);

// }).catch(error =>{
//     console.log(error);

// });

boilWater().then(addTeaLeaves).then(addSugarAndMilk).then(message=> {
    console.log(message + " = Tea is Ready...");
}).catch(error =>{
    console.log(error);
});