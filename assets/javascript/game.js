$(document).ready(function () {

    // To generate the random score you're trying to reach.
    var minNumber = 19;
    var maxNumber = 120;
    var randomScore = randomFromRange(minNumber, maxNumber);

    function randomFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    $("#scoreToHit").text(randomScore);

    // These hold your win and loss counts.
    var playerWins = 0;
    var playerLosses = 0;

    // The total of your guesses each turn.
    var myScore = 0;

    // --GAME LOGIC BELOW--

    function gamePlay() {

        // Each crystal is randomly going to be worth 1-12.
        var numOne = Math.round((Math.random() * 12) + 1);
        var numTwo = Math.round((Math.random() * 12) + 1);
        var numThree = Math.round((Math.random() * 12) + 1);
        var numFour = Math.round((Math.random() * 12) + 1);

        // Each time you click a crystal you up your score and the game checks if you've won or lost yet.
        $("#crystalOne").click(function () {
            myScore = myScore + numOne;
            console.log(myScore);
            if (myScore == randomScore) {
                youWon();
            } else if (myScore > randomScore) {
                youLost();
            }
            $("#playerScore").text(myScore);
        });

        $("#crystalTwo").click(function () {
            myScore = myScore + numTwo;
            console.log(myScore);            
            if (myScore == randomScore) {
                youWon();
            } else if (myScore > randomScore) {
                youLost();
            }
            $("#playerScore").text(myScore);
        });

        $("#crystalThree").click(function () {
            myScore = myScore + numThree;
            if (myScore == randomScore) {
                youWon();
            } else if (myScore > randomScore) {
                youLost();
            }
            $("#playerScore").text(myScore);
        });

        $("#crystalFour").click(function () {
            myScore = myScore + numFour;
            if (myScore == randomScore) {
                youWon();
            } else if (myScore > randomScore) {
                youLost();
            }
            $("#playerScore").text(myScore);
        });
    }

    // Once you've won or lost, the game sets variables back to zero and assigns a new random number for you to reach.
    function reset() {
        numOne = 0;
        numTwo = 0;
        numThree = 0;
        numFour = 0;
        myScore = 0;
        $("#playerScore").text(myScore);
        console.log(myScore);

        minNumber = 19;
        maxNumber = 120;
        randomScore = randomFromRange(minNumber, maxNumber);
        $("#scoreToHit").text(randomScore);
        console.log(randomScore);
    }

    // If you win, the game alerts you and adds one to your win counter (#wins span).
    function youWon() {
        alert("You win!");
        playerWins++;
        $("#wins").text(playerWins);
        reset();
    }

    // If you lose, the game alerts you and adds one to your loss counter (#losses span).
    function youLost() {
        alert("You lose!");
        playerLosses++;
        $("#losses").text(playerLosses);
        reset();
    }

    gamePlay();

});