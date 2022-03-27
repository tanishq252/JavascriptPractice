var user = {
    fName : "Tanishq",
    lname : "Despo",
    age : 18,
    edu : "BTECH",
    gitHub : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getNumberOfCourses : function(){
        return `${this.fName} has registered for ${this.courseList.length} courses`;
    },
};

// console.log(user.age);
// console.log(user.fName);
// console.log(user["edu"]);
// console.table(user);

console.log(user.courseList);
user.buyCourse("Coursera TF dev");
console.log(user.courseList);
console.log(user.getNumberOfCourses());
user.buyCourse("Coursera Cloud Computing");
console.log(user.courseList);
console.log(user.getNumberOfCourses());


var User = {
    name : "",
    getUserName : function(){
        console.log(`user name is : ${this.name}`);
    }
}

var Tan = Object.create(User);
console.log(Tan);
Tan.name = "Tanannana";
Tan.getUserName();

