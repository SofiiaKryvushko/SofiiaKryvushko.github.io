//1
const findElem = document.querySelector(`#container`);
console.log(findElem);

const elem = document.getElementById('container');
console.log(elem);

//2
const liSecond = document.querySelectorAll('.second');
console.log(liSecond);
for (let elem of liSecond) {
    console.log(elem);
}

//3
const olThird = document.querySelector("ol .third");
console.log(olThird);

//4
const header = document.querySelector('.header');
header.innerHTML = '<span>"Hello"</span>';
console.log(header.innerHTML);

//5
const footerElem = document.querySelector('.footer');
footerElem.classList.add('main');
footerElem.classList.remove('main');

//6 7
const liFourth = document.createElement('li');
liFourth.innerHTML = 'four';
const ul = document.querySelector("ul");
ul.append(liFourth);
liFourth.classList.add('four');
console.log(findElem);

//8
let bckgrndColor = "#008000";
let child = document.querySelector("ol").children;
console.log(child);
for (let i = 0; i < child.length; i++) {
    child[i].style.backgroundColor = bckgrndColor;
}

//9
let delElem = document.querySelector('.footer');
delElem.remove();
console.log(document.body);