const course = [
    {
        name : "TF course",
        price : "50",
    },
    {
        name : "Flutter course",
        price : "5.6",
    },
    {
        name : "MERN course",
        price : "10",
    },
    {
        name : "flask course",
        price : "1",
    },
]

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    course.forEach(course => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name  = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ "+course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}

// generateList();


const button = document.querySelector(".sort-btn");

button.addEventListener("click",()=>{
    course.sort((a,b)=>a.price-b.price);
    generateList();
})

const button1 = document.querySelector(".sortr-btn");

button1.addEventListener("click",()=>{
    course.sort((a,b)=>b.price-a.price);
    generateList();
})

window.addEventListener("load", generateList);
