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
    
        hiddenNumber = getRandomNum(1, 100);
        alert(hiddenNumber);
        userNumber = prompt("Enter your number to guess");
        return again;
}

let hiddenNumber = getRandomNum(1, 100);
alert(hiddenNumber);
let userNumber = prompt("Enter your number to guess");
let again;

do {
    guessNum(
        function () {
            alert("You win!!!");
            again = confirm("Try one more time?");
            if(again){
            tryAgain();
            } else {
                again = null;
            }
        },
        function () {
            alert('small');
            userNumber = prompt("Enter your number to guess");
        },
        function () {
            alert('big');
            userNumber = prompt("Enter your number to guess");
        },
    );
} while (userNumber !== hiddenNumber && again !== null);