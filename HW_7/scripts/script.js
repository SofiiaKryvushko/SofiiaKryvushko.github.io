const userNum = prompt("Enter your num", 5);
/*function fibonacci(userNum) {
    return userNum <= 1 ? userNum : fibonacci(userNum - 1) + fibonacci(userNum - 2);
}
console.log(fibonacci(userNum));*/
function fibonacci(userNum) {
    if (userNum == 1) return 0;
    if (userNum == 2) return 1;

    let f1 = 1;
    let f2 = 1;

    for (let i = 3; i <= userNum; i++) {
        let tmp = f1;
        f1 = f2;
        f2 = tmp + f1;
    }

    return f2;
}
console.log(fibonacci(userNum));

if (userNum < 2) {
    console.log("-");
}
else {
    nextStep:
    for (let i = 2; i < userNum; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextStep;
        }
        console.log(i);
    }
}