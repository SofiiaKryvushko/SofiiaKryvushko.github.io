//1
function isEmptyObject(object) {
    for (let i in object) {
        if (object.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

//2
function numericKey(obj){

for (let key in obj){
if(!isNaN(key)){
console.log(obj[key]);
}
}
}
numericKey(obj);

//3
function multiplyNumeric(salaries) {
let method3 = JSON.parse(JSON.stringify(salaries));
  for (let i in method3.HRs) {
      method3.HRs[i] *= 2; 
  }
for (let i in method3.Devs) {
      method3.Devs[i] *= 2; 
  }
for (let i in method3.QAs) {
      method3.QAs[i] *= 2; 
  }
return method3;
}
multiplyNumeric(salaries);