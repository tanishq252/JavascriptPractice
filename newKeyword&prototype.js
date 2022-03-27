var user = function(name, totalCourses){
    this.name = name;
    this.totalCourses = totalCourses;
    this.getCount = () => {
        console.log(`Count of courses of ${this.name} is ${this.totalCourses}`);
    }
}


// now we won't be updating the prototype of complex objects
// hence we might be doing "objectname.prototype.functionName"
user.prototype.getName =function(){
    console.log(`Name is ${this.name}`);
}

var Tan = new user("Tan", 69);
Tan.getCount();

if(Tan.hasOwnProperty("name")){
    Tan.getName();
}


var man = new user("man", 699);
man.getCount();