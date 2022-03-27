tipper("69");
func("69");
// whenever we call functions before defining them we get proper output


function tipper(a){
    var bill = a+10;
    console.log(bill);
}

// passing an integer 
tipper(10);

// passing a string
tipper("10");
// pasing a string may ruin the function


// to avoid this thing we can use type casting
function func(a){
    console.log(parseInt(a)+10);
}

func(10);
func("10");

// console.log(newFunc(90));
// if we try to call a variable function before declaring it we get error
// where as when we call after declaring it we get no error

var newFunc = function(b){
    return parseInt(b)+12; 
}

// console.log(newFunc(90));



