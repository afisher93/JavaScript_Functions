console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds (count){
    if(count < 0)
    for (let i = 1; i >= count; i--){
       if (i % 2 !=0) {
        console.log(i);
       }    
    }
} else {
    for (let i = 1; i <= count; i++) {
        if(i % 2 != 0) {
            console.log(i0);
        }
    }
}

printOdds(10);
printOdds(100);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age){
    let oldEnough = `Congrats ${name}! You can drive!`;
    let tooYoung = `sorry ${name}, you need to wait ${16 - age} year(s) until you can drive.`;

    if(age < 16 ) {
        console.log(tooYoung)
    }else {
        console.log(oldEnough)
    }
}
checkAge("Ben", 12);
checkAge("Seth", 16);
checkAge("Cameron", 21);