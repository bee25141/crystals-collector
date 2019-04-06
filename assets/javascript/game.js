var randomNumber = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;
var red = 0;
var blue = 0;
var yellow = 0;
var green = 0;

//This function generates a random number for the randomNumber and crystals
function randomNumberGenerate() {
    randomNumber = [Math.floor(Math.random() * 102) + 19];
    red = [Math.floor(Math.random() * 12) + 1];
    blue = [Math.floor(Math.random() * 12) + 1];
    yellow = [Math.floor(Math.random() * 12) + 1];
    green = [Math.floor(Math.random() * 12) + 1];
    $(".computerNumber").text(randomNumber);
    console.log(randomNumber, red, blue, yellow, green);

    function reset() {
        currentScore = 0;
        $(".score").text(currentScore);
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
        // return red;
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

    
    function scoreCalculate(x) {
        currentScore = (currentScore + x); 
        newCurrentScore = currentScore;
        // currentScore = 0;
        debugger;
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
        // return currentScore;
    }

    $(".wins").text("Wins: " + wins);
    $(".losses").text("Losses: " + losses);

}

    
  
    

randomNumberGenerate();

