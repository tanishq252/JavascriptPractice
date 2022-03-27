var myMap = new Map();

myMap.set(1, "a");
myMap.set(2, "b");
myMap.set(3, "c");
myMap.set(4, "d");
console.log(myMap);

for(let k of myMap.entries()){
    console.log(`key is ${k[0]}, value is ${k[1]}`);
}
console.log(`------------`);
for(let [k, v] of myMap){
    console.log(`key is ${k}, value is ${v}`);
}
myMap.delete(7);
console.log(myMap);