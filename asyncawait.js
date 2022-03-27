const one = () =>{
    return "one";
}

const two = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("I am two");
        }, 3000);
    }) 
}

const three = () =>{
    return "three";
}


const callMe = async()=>{
    let val1 = one();
    console.log(val1);

    let val2 = await two();
    console.log(val2);

    let val3 = three();
    console.log(val3);
}

callMe();