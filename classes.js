class User{
    name = "";
    email = "";
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    courseList = [];
    getInfo(){
        return{name: this.name, email: this.email, courseList : this.courseList};
    }
    addCourse(courseName){
        this.courseList.push(courseName);
    }
    getCourseCount(){
        return this.courseList.length;
    }
    login(){
        return "You are logged in";
    }
}

var tan = new User("Tanishq", "tan@252002@gmail.com");
var {name, email, courseList} = tan.getInfo();

console.log(name, email, courseList);

tan.addCourse("TensorFlow Developer");

console.log(name, email, courseList);
console.log(tan.getCourseCount());
tan.addCourse("MERN Developer");
tan.addCourse("Flutter Developer");


console.log(name, email, courseList);
console.log(tan.getCourseCount());

tan.courseList.forEach((c)=>console.log(c));

module.exports = User;

class subAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }
    login(){
        return "sub-admin only";
    }
}

var child = new subAdmin("child", "child@gmail.com");

console.log(child.getInfo());
console.log(child.getAdminInfo());

const child2 = new subAdmin();

console.log(child2.login());  