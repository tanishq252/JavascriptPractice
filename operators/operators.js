var n1 = 90;
var n2 = 8;

console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1%n2);
console.log(n1/n2);
console.log(Math.round(n1/n2));
console.log(n1>n2);
console.log(n1==n2);
console.log(n1<n2);

var temp = 69;
if(temp = 69){
    console.log("Hot");
}else{
    console.log("Cold");
}


(temp>20)?console.log("hottt"):console.log("Colddd");

var loggedIn = true;

loggedIn?console.log("LoggedIn"):console.log("Logged Out");

var a = 32121;
var b = 233;
var c = 33;

(a>b && a>c)?console.log("a is largest"):(b>c)?console.log("b largest"):console.log("c largest");

var d = 3;
switch(d){
    case 1:
        console.log(`value is ${d}`);
        break;
    case 2:
        console.log(`value is ${d}`);
        break;
    case 3:
        console.log(`value is ${d}`);
        break;
    default:
        console.log("none of the cases match");
}


var pos = "adminn";
switch(pos){
    case "user":
        console.log(`welcome ${pos}`);
        break;
    case "admin":
        console.log(`welcome ${pos}`);
        break;
    case "mod":
        console.log(`welcome ${pos}`);
        break;
    default:
        console.log("none of the cases match");
}