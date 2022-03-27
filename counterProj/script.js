var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let c = 1;

setInterval(() => {
    if(c<1000){
        c++;
        counter.innerText = c;
        if(c==1000){
            counter.innerText += "+";
        }
    }
    
}, 1)

followers.innerText = "";

setTimeout(() =>{
    followers.innerText = "Followers on LinkedIn";
}, 5000)