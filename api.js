// this is how we can fetch data from an api present on web

fetch('https://api.chucknorris.io/jokes/random')
.then(response => {
    return response.json();
})
.then((data)=>{
    console.log(data["id"]);
})
