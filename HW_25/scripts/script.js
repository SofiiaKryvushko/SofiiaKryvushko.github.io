//1
if (!String.prototype.reverse) {
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  };
}

let string = 'a bcdr es';
console.log(string);
console.log(string.reverse());

//2
function sort(arr) {
   return Array.prototype.sort = Array.prototype.slice.call(arr).sort();
}

let array = ['hello', 'alla', 'brown'];
console.log(sort(array));
console.log(array);

//3
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.find = Array.prototype.find;
