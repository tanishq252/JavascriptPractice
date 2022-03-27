function init(){
    var name = "Tan";
    function sayName(){
        console.log(name);
    }
    sayName();
}

// init();

function init2(){
    var firstName = "UWU";
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var fun = init2();
// fun();

//////////////////////////////////////////

function add(x){
    return function(y){
        return x+y;
    }
}

// var func2 = add(2);
// var ans = func2(3);
// console.log(ans);

console.log(add(10)(9));//curring

function add3(x) {
    return function(y){
        return function (z) {
            return x+y+z;
        }
    }
}

console.log(add3(5)(8)(9));

// borrow a method using bind
const tan = {
    fname :  "Tanishq",
    sname : "Deshpande",
    courses : 5,
    getDets : function(){
        console.log(`
        name is ${this.fname+" "+this.sname},
        total courses are ${this.courses}
        `);
    }
}

console.log(tan);
tan.getDets();

const man = {
    fname :  "Man",
    sname : "Human",
    courses : 69,
}

// using the bind function
// we need not create same function for all objects
// we can simply use bind and call instance of that function
tan.getDets.bind(man)();
