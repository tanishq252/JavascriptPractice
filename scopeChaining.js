var n ="Tanisq";
console.log("Line number 2", n);

function sayName(){
    var n = "Tanthadan";
    console.log("sayName function", n);
    sayname2();
    
    function sayname2(){
        var n = "td12344";
        console.log("sayName2", n);
    }
}

sayName();
