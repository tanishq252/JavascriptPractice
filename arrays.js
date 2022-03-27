var countries = ["India", "USA", "Japan", "Russia"];

// console.log(countries[0]);

var states = new Array("Delhi",1 ,true, "Los Angeles");

// console.log(states);
// console.log(states.length);

//  we can update the values in arrays
// states[1] = 10;

console.log(states);

// push and pop operations work like queues

states.pop();
console.log(states);

states.push("OKOK I accept Javascript is fab");
console.log(states);

// shift and unshift operations work as stacks
// shift acts as pop of stack
// unshift acts as push of stack
states.shift();
states.shift();
console.log(states);

states.unshift("trial");
states.unshift("trial");
// states.unshift(123);
console.log(states);

states.shift();
console.log(states.indexOf("trial"));
console.log(states.indexOf(122343));
// if we get -1 as the output then particular element does not exist in the array

console.log(states.toString());

// creating array of characters in the string
console.log(Array.from("Hitesh"));

