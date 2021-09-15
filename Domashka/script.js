'use strict'
const firstValue = prompt("Enter first value");
const secondValue = prompt('Enter second value');
let operator = prompt('Enter operator', '+, -, *, /, **, omg');
let result;

if(isNaN(firstValue)||isNaN(secondValue) || (parseInt(firstValue)<0 ||parseInt(secondValue)<0))
{
    alert("Error values");
}
else {
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "**" && operator !== "/" && operator !== "omg") {
        alert("Error/Try one more time");
        do {
            operator = prompt('Enter operator', '+, -, *, /, **')
        } while (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "**" && operator !== "/" && operator !== "omg");
    }
    switch (operator) {
        case '+':
            result = parseInt(firstValue) + parseInt(secondValue);
            break;
        case '-':
            result = firstValue - secondValue;
            break;
        case '*':
            result = firstValue * secondValue;
            break;
        case '**':
            result = firstValue ** secondValue;
            break;
        case 'omg':
            if(parseInt(firstValue)>parseInt(secondValue)){
                let integerDivision = Math.round(firstValue / secondValue);
                //let integerDivision = Math.ceil(firstValue / secondValue);
               result = (integerDivision * secondValue);
            }
            else if(parseInt(firstValue)<parseInt(secondValue)){
                result=secondValue;
            }
            break;

        case '/':
            if (secondValue) {
                result = firstValue / secondValue;
            } else {
                result = 'infinity';
            }
            break;
    }
    alert('Result ' + result);
}