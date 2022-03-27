const cards = document.querySelectorAll(".card");

cards.forEach((card)=>card.addEventListener("click", flip));

var isFlipped = false;
var firstCard;
var secondCard;

function flip(){
  // console.log("Flipped");
  this.classList.add("flip");
  if(isFlipped == false){
    isFlipped = true;
    firstCard = this;
  }else{
    secondCard = this;
    isFlipped = false;
    console.log(firstCard);
    console.log(secondCard);
    if(secondCard.dataset.image == firstCard.dataset.image){
      success();
    }
    else{
      setTimeout(fail(), 2000);
    }
  }
}

function success(){
  console.log("Match");
  try{firstCard.removeEventListner('click', flip);
  secondCard.removeEventListner("click", flip);}catch(e){console.log(e);}
  reset();
}

function fail(){
  
  setTimeout(()=>{
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset()}, 200);
}

function shuffle(){
  cards.forEach((card)=>{
    var ind = Math.floor(Math.random*16);
    card.getElementsByClassName.order = index;
  })
}

function reset(){
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}