//1
function pow(num1, num2) {
    let result = num1;
    for (let i = 1; i < num2; i++) {
        result *= num1;

    }
    return result;
}

const a = prompt("Enter 1 num");
const b = prompt("Enter 2 num");
console.log(pow(a, b));


//2
function createUser(firstName = null, lastName = null, age = null) {
    let user = new Object();

    return user = {
        userFirstName: firstName,
        userLastName: lastName,
        userAge: age,
    };
}

let firstName = 'Alisa';
let lastName;
let age = 20;

createUser(firstName, lastName, age);



//3
function comparison(num, ifMore, ifLess, ifHundred) {
    if (parseInt(num) === 100) {
        ifHundred();
    } else if (num > 100) {
        ifMore();
    } else {
        ifLess();
    }
}

let userNum = prompt("Enter num");

comparison(
    userNum,
    function () {
        console.log('More than 100');
    },
    function () {
        console.log('Less than 100');
    },
    function () {
        console.log('100');
    },
);