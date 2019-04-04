// var randomNumber = "";
var currentScore = 0;
var wins = 0;
var losses = 0;
var red = 0;
var blue = 0;
var yellow = 0;
var green = 0;

//This function generates a random number for the randomNumber and crystals
function randomNumberGenerate() {
    var randomNumber = [Math.floor(Math.random() * 102) + 19];
    var red = [Math.floor(Math.random() * 12) + 1];
    var blue = [Math.floor(Math.random() * 12) + 1];
    var yellow = [Math.floor(Math.random() * 12) + 1];
    var green = [Math.floor(Math.random() * 12) + 1];
    $(".computerNumber").text(randomNumber);


    function scoreCalculate(x) {
        // debugger;
        currentScore = (currentScore + x);
        newCurrentScore = currentScore;
        $(".score").text(newCurrentScore);
        if (parseInt(newCurrentScore) === parseInt(randomNumber)) {
            wins++;
            reset();
        }
        if (parseInt(newCurrentScore) > parseInt(randomNumber)) {
            losses++;
            reset();
        }
        $(".wins").text("Wins: " + wins);
        $(".losses").text("Losses: " + losses);
        return x;
    }

    function reset() {
        currentScore = 0;
        newCurrentScore = 0;
        $(".score").text(currentScore);
        red = 0;
        blue = 0;
        yellow = 0;
        green = 0;
        randomNumberGenerate();
        console.log("red", red);
        console.log("blue", blue);
        console.log("yellow", yellow);
        console.log("green", green);
        console.log("currentScore", currentScore);
        console.log("newCurrentScore", newCurrentScore);
    }




    $("#red").on("click", function () {
        scoreCalculate(parseInt(red));
    })
    $("#blue").on("click", function () {
        scoreCalculate(parseInt(blue));

    })
    $("#yellow").on("click", function () {
        scoreCalculate(parseInt(yellow));
    })
    $("#green").on("click", function () {
        scoreCalculate(parseInt(green));
    })


    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);
    console.log(randomNumber, red, blue, yellow, green);
}
randomNumberGenerate();

