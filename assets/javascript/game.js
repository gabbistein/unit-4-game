var myWins = 0;

var myLosses = 0;

var numOne = document.getElementById("crystalOne");
    numOne.setAttribute("value", "4");

var numTwo = document.getElementById("crystalTwo");
    numTwo.setAttribute("value", "7");

var numThree = document.getElementById("crystalThree");
    numThree.setAttribute("value", "10");

var numFour = document.getElementById("crystalFour");
    numFour.setAttribute("value", "5");


var myScore = document.getElementById("playerScore");
    myScore.innerHTML = 0;
var goalScore = document.getElementById("scoreToHit");
    goalScore.innerHTML = getRandomValue(19, 101);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(myScore.innerHTML);
  myScore.innerHTML = numberToAdd + currentScore;
}

numOne.addEventListener("click", function() {
  addToScore(this.value);
  checkPlayerScore();
});

numTwo.addEventListener("click", function() {
  addToScore(this.value);
  checkPlayerScore();
});

numThree.addEventListener("click", function() {
  addToScore(this.value);
  checkPlayerScore();
});

numFour.addEventListener("click", function() {
  addToScore(this.value);
  checkPlayerScore();
});


function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  var playerInt = parseInt(myScore.innerHTML);
  var targetInt = parseInt(goalScore.innerHTML);
  if (playerInt === targetInt) {
    // You're a winner! How to get this to add up?
  } else if (playerInt > targetInt) {
    // You lose the game. Restart?
  } 
}

// I can't quite figure out how to set the win condition here.