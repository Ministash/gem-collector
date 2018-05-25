var gemOne = Math.floor(Math.random() * 12) + 1;
var gemTwo = Math.floor(Math.random() * 12) + 1;
var gemThree = Math.floor(Math.random() * 12) + 1;
var gemFour = Math.floor(Math.random() * 12) + 1;
var currentTotal = 0;
var wins = 0;
var loses = 0;
const sum = $("#displayed_guessed_sum")

function randomNumber() {
    var stuff = Math.floor(Math.random() * 102) + 19;
    return stuff;
}

var guessNumber = randomNumber();
console.log(guessNumber);

function reset() {
    currentTotal = 0;
    guessNumber = randomNumber();
    sum.text(currentTotal);
    $("#random_number_displayed").text("Number to guess: " +  guessNumber );
    gemOne = Math.floor(Math.random() * 12) + 1;
    gemTwo = Math.floor(Math.random() * 12) + 1;
    gemThree = Math.floor(Math.random() * 12) + 1;
    gemFour = Math.floor(Math.random() * 12) + 1;
}

$("#random_number_displayed").text(guessNumber);


$("#button1_div").on("click", function () {
    currentTotal = gemOne + currentTotal;
    sum.text(currentTotal);
    compare(currentTotal, guessNumber);
})

$("#button2_div").on("click", function () {
    currentTotal = gemTwo + currentTotal;
    sum.text(currentTotal);
    compare(currentTotal, guessNumber);
})
$("#button3_div").on("click", function () {
    currentTotal = gemThree + currentTotal;
    sum.text(currentTotal);
    compare(currentTotal, guessNumber);
})
$("#button4_div").on("click", function () {
    currentTotal = gemFour + currentTotal;
    sum.text(currentTotal);
    compare(currentTotal, guessNumber);
})


function compare(currentTotal, guessNumber) {
    if (currentTotal === guessNumber) {
        wins++;
        $("#wins").text("Wins:" + wins);
        reset();
    }

    else if (guessNumber < currentTotal) {
        loses++
        $("#loses").text("Loses: " + loses);
        reset();

    }
}

reset();