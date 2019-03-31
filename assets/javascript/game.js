var randomNumber = "";
var currentScore = 0;
var wins = 0;
var losses = 0;
var red = "";
var blue = "";
var yellow = "";
var green = "";

//This function generates a random number for the randomNumber and crystals
function randomNumberGenerate(){
    randomNumber = [Math.floor(Math.random() * 102) + 19];
    red = [Math.floor(Math.random() * 12) + 1];
    blue = [Math.floor(Math.random() * 12) + 1];
    yellow = [Math.floor(Math.random() * 12) + 1];
    green = [Math.floor(Math.random() * 12) + 1];
}
randomNumberGenerate();

function scoreCalculate(x){
   var newScore = (parseInt(currentScore) + x);
   return newScore;

}


$("#red").on("click", function(){
    console.log("red", red);
    score = parseInt(red) + parseInt(currentScore);
    console.log("score", score);
    $(".score").add(score);
})
$("#blue").on("click", function(){
    console.log("blue", blue);
    score = parseInt(blue) + parseInt(currentScore);
    console.log("score", score);
    
})
$("#yellow").on("click", function(){
    console.log("yellow", yellow);
    score = parseInt(yellow) + parseInt(currentScore);
    console.log("score", score);
})
$("#green").on("click", function(){
    console.log("green", green);
    score = parseInt(green) + parseInt(currentScore);
    console.log("score", score);
})


$(".score").text(currentScore);
$(".computerNumber").text(randomNumber);
console.log(randomNumber, red, blue, yellow, green);