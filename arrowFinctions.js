function isEven(num){
    return (num%2===0)?true:false;
}

console.log(isEven(909));

// array function
var isEven1 = (element)=>{
    return element%2===0;
}

console.log(isEven1(90));

// callback function
// arrow functions are used for callback operations
var res = [2,4,6,8,11].every(isEven1);
console.log(res);
// only if each and every element satisfies the function then it returns true
// even if one condition is not satisfying then it returns false


var result = [1,3,5,7,9].every((ele) => {
    return ele%2!==0; });
console.log(result);

var result1 = [1,3,5,7,9].every((ele) => ele*2);
console.log(result1);