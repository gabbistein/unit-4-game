
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
    
    function gamePlay() {
        
        $("#crystalOne").click(function () {
            myScore = myScore + numOne;
            $("#playerScore").text(myScore);
            console.log(myScore);
            endGame();
        })

        $("#crystalTwo").click(function () {
            myScore = myScore + numTwo;
            $("#playerScore").text(myScore);
            console.log(myScore);
            endGame();
        })

        $("#crystalThree").click(function () {
            myScore = myScore + numThree;
            $("#playerScore").text(myScore);
            console.log(myScore);
            endGame();
        })

        $("#crystalFour").click(function () {
            myScore = myScore + numFour;
            $("#playerScore").text(myScore);
            console.log(myScore);
            endGame();
        })
    }

    function reset() {
        var numOne = Math.floor(Math.random()* 13);
        var numTwo = Math.floor(Math.random()* 13);
        var numThree = Math.floor(Math.random()* 13);
        var numFour = Math.floor(Math.random()* 13);
        var myScore = 0;
        $("#playerScore").text(myScore);
        var minNumber = 19;
        var maxNumber = 120;
        var randomScore = randomFromRange(minNumber, maxNumber);
    
            function randomFromRange(min,max) {
                return Math.floor(Math.random()*(max-min+1)+min);
            }
            console.log(randomScore);
            $("#scoreToHit").text(randomScore);
        gamePlay();           
    }

    function endGame() {
        if (myScore === randomScore) {
            alert("You win!");
            playerWins++;
            $("#wins").text(playerWins);
            reset();        
        } 
        else if (myScore > randomScore) {
            alert("You lose!");
            playerLosses++;
            $("#losses").text(playerLosses);
            reset();
        }
    }

    gamePlay();

});