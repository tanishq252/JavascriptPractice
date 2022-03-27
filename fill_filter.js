var arr = [2,3,4,5,1,6,4,7,8,9];
console.log(arr.fill("h"));
// all values are replaced with 0

console.log(arr.fill("t", 4));
// second argument is the start position of characters

console.log(arr.fill(0, 2,5));

/////////////////
// Filter

const myNum = [23,45,36,12,233,78,90,99,69];

const res = myNum.filter((x) =>x%2==0);
console.log(res);

const res1 = myNum.filter((x) =>x%2!=0);
console.log(res1);

const res2 = myNum.filter((x) =>x>0);
console.log(res2);

var pep = ["Tan", "qef", "Son", "Fun", "Mon", "Gun"];
console.log(pep);
console.log(pep[2]);
console.log(pep.slice(1));
console.log(pep.slice(1, 5));

// splice
// pep.splice(2,0,"hi");
// console.log(pep);

// pep.splice(2,2,"hi");
// console.log(pep);

// pep.splice(2,4,"hi");
// console.log(pep);

// pep.splice(2,2,"hi", "bye");
// console.log(pep);

pep.splice(2,0,"hi", "bye", "cry");
console.log(pep);