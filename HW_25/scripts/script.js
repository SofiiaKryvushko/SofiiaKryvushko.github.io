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
Array.prototype.sorted = Array.prototype.sort;

Array.prototype.sort = function (func) {
    return [...this].sorted(func);
}

//3
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.find = Array.prototype.find;
