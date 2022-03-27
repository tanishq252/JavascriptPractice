const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const violet = document.querySelector(".violet");

const center = document.querySelector(".center");

// getComputed style gives us the CSS value of a particular element
console.log(window.getComputedStyle(red).backgroundColor);

const getBackGroundColor = (ele)=>{
    return window.getComputedStyle(ele).backgroundColor;
}

pink.backgroundColor = cyan;

console.log(getBackGroundColor(pink));
console.log(getBackGroundColor(red));
console.log(getBackGroundColor(cyan));

var orangeEle = getBackGroundColor(pink);

pink.addEventListener("click", () => {
    center.style.background = orangeEle;
});

// var arr = [red, orange, pink, cyan, violet];
// var count = 0;

// pink.addEventListener("click", 
// setInterval(() => {
//     if(count<arr.length){
//         center.style.background = arr[count];
//         count++
//     }
// }, 5000));


// setInterval(() => {
//     if(count<arr.length){
//         pink.addEventListener("mouseenter", ()=>{
//             center.style.background = arr[count];
//         })
//         count++
//     }
// }, 5000);