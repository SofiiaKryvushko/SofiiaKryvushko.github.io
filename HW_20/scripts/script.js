//1
let userNum;
do {
    userNum = prompt("Enter your num", 5);
} while (userNum < 1);

function fibonacci(userNum) {
    if (userNum === 1) return undefined;
    if (userNum === 1) return 1;
    if (userNum === 2) return 1;

    let f1 = 1;
    let f2 = 1;
    for (let i = 3; i <= userNum; i++) {
        let result = f1 + f2;
        f1 = f2;
        f2 = result;
    }
    return f2;
}

console.log('simple fibonachi: ' + fibonacci(userNum));

//2
function fibonacciRecursion(userNum) {
    return userNum <= 1 ? userNum : fibonacciRecursion(userNum - 1) + fibonacciRecursion(userNum - 2);
}

console.log('fibonachi recursion: ' + fibonacciRecursion(userNum));

//3
function factorial(userNum) {
    let result = 1;
    for (i = userNum; i > 1; i--) {
        result *= i;
    }
    return result;
}

console.log('factorial recursion: ' + factorial(userNum));

//4
function factorialRecursion(userNum) {
    return userNum != 1 ? userNum * factorialRecursion(userNum - 1) : 1;
}

console.log('factorial recursion: ' + factorialRecursion(userNum));

