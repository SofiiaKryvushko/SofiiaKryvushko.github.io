function keyBy(arr, key) {
    let result = arr.reduce(function (result, user) {
        let property = user[key];
        if (!result[property]) {
            result[property] = [];
        }
        result[property].push(user);
        return result;
    }, {});
    console.log(result);
}

const arr = [
    { name: 'Vasya', surname: 'Ivanov' },
    { name: 'Vanya', surname: 'Ivanov' },
    { name: 'Albert', surname: 'Vasyliev' },

];
console.log(arr);

keyBy(arr, 'name');
keyBy(arr, 'surname');


