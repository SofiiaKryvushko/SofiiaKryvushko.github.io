'use strict';

//1
function createRangeFilter(min, max) {
    return function filter(num) {
        return num >= min && num <= max;
    };
}

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.filter(createRangeFilter(2, 5)));

//2

function createKeyBy(propName) {

    return function keyBy(arr) {
        arr = users.reduce(function (result, user) {
            let property = user[propName];
            if (!result[property]) {
                result[property] = [];
            }
            result[property].push(user);
            return result;
        }, {});
        console.log(arr);
    };
}

const users = [
    { name: 'Vasya', surname: 'Ivanov' },
    { name: 'Vanya', surname: 'Ivanov' },
    { name: 'Albert', surname: 'Vasyliev' },
];

let propName = 'surname';
let sortedValues = createKeyBy(propName);
(sortedValues());


//3
let percent = 50;
let number = 100;

let result = createCalcPercent(percent);
result();

function createCalcPercent(percent) {
    return function calcPercent(value) {
        value = (number * percent) / 100;
        console.log(value);
    };
}