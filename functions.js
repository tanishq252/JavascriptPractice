function sayHello(name){
    console.log(`Hey hello ${name}`);
}

// if the parameter is not passed while calling the function we willl simply get undefined over there
sayHello();
sayHello("Tanishq");

function greet(){
    return "Namaskar";
}

greet();
console.log(greet());// will not give any output

// we have to store values in variables to print it
var nama = greet();
console.log(nama);

var getString = function(name){
    return `String with name : ${name}`;
}

var trial = getString("Tanishq");
console.log(trial);

console.log(getString("Uoioasjc"));

function init(){
    var name = "Tan";
    function sayName(){
        console.log(name);
    }
    sayName();
}

init();