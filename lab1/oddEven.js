"use strict";

Array.prototype.even= function(){
let arr = this;
let newArr = arr.filter(element => element % 2 === 0);
return newArr;
};

Array.prototype.odd= function(){
    let arr = this;
    let newArr = arr.filter(element => element % 2 !== 0);
    return newArr;
    };

console.log([1,2,3,4,5,6,7,8].even());
console.log([1,2,3,4,5,6,7,8].odd());

