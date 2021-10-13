let fruits = ['Apple', 'Banana', 'Pineapple'];
fruits.push('Orange', 'Grapes');
console.log(fruits);

const index = fruits.findIndex(fruit => fruit === "Banana");
fruits[index] = 'Peer';
console.log(fruits);

const deletedValue = fruits.pop();
console.log(deletedValue);
console.log(fruits);

fruits.unshift('Watermelon');
console.log(fruits);