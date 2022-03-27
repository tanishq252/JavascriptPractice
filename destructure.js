var user = ["tan", 89, "thanos"];

var [name, score, role] = user;

// console.log(name);
// console.log(score);
// console.log(role);

var myUser = {
    name : "tans",
    courseCount : 34,
    role: "admin"
}


// this is known as destructurize concept
var {name, courseCount, role}  = myUser;

console.log(name, courseCount, role);