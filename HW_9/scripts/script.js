'use strict'

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function guessNum(onCorrectAnswer, onSmallAnswer, onBigAnswer) {
    if (parseInt(userNumber) === hiddenNumber) {
        onCorrectAnswer();
    } else if (userNumber < hiddenNumber) {
        onSmallAnswer();
    } else {
        onBigAnswer();
    }
}

function tryAgain() {
    if (again) {
        hiddenNumber = getRandomNum(1, 100);
        console.log(hiddenNumber);
        userNumber = prompt("Enter your number to guess");
        return again;
    } else {
        return again = null;
    }
}

let hiddenNumber = getRandomNum(1, 100);
console.log(hiddenNumber);
let userNumber = prompt("Enter your number to guess");
let again;

do {
    guessNum(
        function () {
            console.log("You win!!!");
            again = confirm("Try one more time?");
            tryAgain();
        },
        function () {
            console.log('small');
            userNumber = prompt("Enter your number to guess");
        },
        function () {
            console.log('big');
            userNumber = prompt("Enter your number to guess");
        },
    );
} while (userNumber !== hiddenNumber && again !== null);