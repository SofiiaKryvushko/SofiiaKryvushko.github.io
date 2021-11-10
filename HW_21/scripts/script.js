'use strict';

const values = [1,{name: 'Alla', features: {age: 12, weight: 50}},10,7];
const copiedValues = deepClone(values);

function deepClone(values){
    if(values === null) return null;
    let clone = Object.assign({}, values);

    Object.values(clone).forEach(
        key => 
        (clone[key] = 
            typeof values[key]=== 'object' ? deepClone(values[key]): values[key])
    );

    return Array.isArray(values) && values.length 
    ? (clone.length = values.length) && Array.from(clone)
    : Array.isArray(values)
    ? Array.from(values)
    : clone;
}

console.log(copiedValues);