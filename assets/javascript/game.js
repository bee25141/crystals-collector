//Assigns initial variables
var randomNumber = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;
var red = 0;
var blue = 0;
var yellow = 0;
var green = 0;

//Calls randomNumberGenerate at start of page
$(document).ready(function(){
randomNumberGenerate();
});

//This function resets the game after a win or loss, assigning new random values to the crystals and random number
function reset() {
    currentScore = 0;
    $(".score").text(currentScore);
    randomNumberGenerate();
};

//This function generates a random number for the randomNumber and crystals
function randomNumberGenerate() {
    randomNumber = [Math.floor(Math.random() * 102) + 19];
    red = [Math.floor(Math.random() * 12) + 1];
    blue = [Math.floor(Math.random() * 12) + 1];
    yellow = [Math.floor(Math.random() * 12) + 1];
    green = [Math.floor(Math.random() * 12) + 1];
    $(".computerNumber").text(randomNumber);
    console.log(randomNumber, red, blue, yellow, green);
};

/*This function calculates and displays the current user score with the crystal values, 
    and calculates wins and losses based on current score and the random computer number*/
    function scoreCalculate(x) {
        debugger;
        currentScore = (currentScore + x); 
        $(".score").text(currentScore);
        if (parseInt(currentScore) === parseInt(randomNumber)) {
            wins++;
            $(".wins").text("Wins: " + wins);
            reset();
        }
        if (parseInt(currentScore) > parseInt(randomNumber)) {
            losses++;
            $(".losses").text("Losses: " + losses);
            reset();
        }

    };

    //These functions add the crystal values upon user click
    $("#red").on("click", function () {
        
        scoreCalculate(parseInt(red));
        // return red;
    });
    $("#blue").on("click", function () {
        scoreCalculate(parseInt(blue));

    });
    $("#yellow").on("click", function () {
        scoreCalculate(parseInt(yellow));
    });
    $("#green").on("click", function () {
        scoreCalculate(parseInt(green));
    });

    //Start UI wins & losses
    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);

