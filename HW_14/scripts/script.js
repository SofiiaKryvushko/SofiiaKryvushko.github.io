//1.1
function sum(values) {
    let sumValue = 0;
    for (let i = 0; i < values.length; i++) {
        sumValue += values[i];
    }
    console.log(sumValue);
}

let nums = [10, 20, 11, 7, 8];
console.log(nums);
sum(nums);

//1.2

function sum(values) {
    let sumValue = values.reduce((result, elem) => result + elem);
    console.log(sumValue);
}

let nums = [1, 10, 1, 1, 1];
console.log(nums);
sum(nums);


//2.1
function mapToUpperCase(arr) {
    let upperCaseArr = [];
    for (let i = 0; i < arr.length; i++) {
        upperCaseArr[i] = arr[i].toUpperCase();
    }
    console.log(upperCaseArr);
}

let lines = ['hello', 'my', 'friend'];
console.log(lines);
mapToUpperCase(lines);


//2.2
function mapToUpperCase(arr) {
    let upperCaseArr = [];
    upperCaseArr = arr.map((elem, index, sourseArray) => {
        return elem.toUpperCase();
    });
    console.log(upperCaseArr);
}

let lines = ['hello', 'my', 'friend'];
console.log(lines);
mapToUpperCase(lines);
