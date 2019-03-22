
$(document).ready(function() {

    // Each crystal is randomly going to be worth 1-12.
    var numOne = Math.floor(Math.random()* 13);
    var numTwo = Math.floor(Math.random()* 13);
    var numThree = Math.floor(Math.random()* 13);
    var numFour = Math.floor(Math.random()* 13);
    
    // The total of your guesses each turn.
    var myScore = 0;
    
    // To generate the random score you're trying to reach.
    var minNumber = 19;
    var maxNumber = 120;
    var randomScore = randomFromRange(minNumber, maxNumber);

        function randomFromRange(min,max) {
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        console.log(randomScore);
        $("#scoreToHit").text(randomScore);

    // These hold your win and loss counts.
    var playerWins = 0;
    var playerLosses = 0;

    // --GAME LOGIC BELOW--

    







    // function addToScore(val) {
    //     var numberToAdd = parseInt(val);
    //     var currentScore = parseInt(myScore.innerHTML);
    //     myScore.innerHTML = numberToAdd + currentScore;
    // }

    // numOne.addEventListener("click", function() {
    //     addToScore(this.value);
    //     checkPlayerScore();
    // });

    // numTwo.addEventListener("click", function() {
    //     addToScore(this.value);
    //     checkPlayerScore();
    // });

    // numThree.addEventListener("click", function() {
    //     addToScore(this.value);
    //     checkPlayerScore();
    // });

    // numFour.addEventListener("click", function() {
    //     addToScore(this.value);
    //     checkPlayerScore();
    // });

    // function checkPlayerScore() {
    //     var playerInt = parseInt(myScore.innerHTML);
    //     var targetInt = parseInt(randomScore.innerHTML);
    //     if (playerInt === targetInt) {
    //         // You're a winner! How to get this to add up?
    //     } else if (playerInt > targetInt) {
    //         // You lose the game. Restart?
    //     } 
    // }

    // // I can't quite figure out how to set the win condition here.

});