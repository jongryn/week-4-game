/*
// Created: July 4, 2017 4:00 AM
// Author: Jonathan Gryn
// Revisions: Jon (6/26/17) - Added js 
//            Jon (9/5/17) - Adjusted JS to restart after game is played
*/

// GLOBAL VARIABLES
// ---------------------------------------
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  },
};

// Score (Current and Target)
var currentScore    = 0;
var targetScore     = 0;

// Wins and Losses
var winCount        = 0;
var lossCount       = 0;

// Functions
// ---------------------------------------

// Helper function for get random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var startGame = function() {

  // Reset the Current Score
  currentScore = 0;

  // Set a new Target Score (between 19 and 120)

  targetScore = getRandom(19, 120);

  // Set different values for each of the crystals (between 1 and 12)
  crystal.blue.value    = getRandom(1, 12);
  crystal.red.value     = getRandom(1, 12);
  crystal.green.value   = getRandom(1, 12);
  crystal.yellow.value  = getRandom(1, 12);

  // Change the HTML to reflect all of these changes
  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);

  // Testing Console
  console.log("---------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
  console.log("---------------------------");
}

// Respond to clicks on the crystals
var addValues = function(crystal) {

  // Change currentScore
  currentScore = currentScore + crystal.value;

  // Change the HTML to reflect changes in currentScore
  $("#yourScore").html(currentScore);

  // Call the checkWin function
  checkWin();

  // Testing Console
  console.log("Your Score: " + currentScore);

}

// Check if user Won or Lost and Reset the Game
var checkWin = function() {

  // Check if currentScore is larger than targetScore
  if(currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("you Lost");

    // Add to Loss Counter
    lossCount++;

    // Change Loss Count HTML
    $("#lossCount").html(lossCount);

    // Restart the game
    startGame();
  }

  else if (currentScore == targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");

    // Add to the Win Counter
    winCount++;

    // Change Win Count HTML
    $("#winCount").html(winCount);

    // Restart the game
    startGame();
  }

}

// Main Process
// ---------------------------------------

// Starts the game
startGame();
$("#blue").click(function() {
  
  addValues(crystal.blue);

});

$("#red").click(function() {
  
  addValues(crystal.red);

});

$("#green").click(function() {

  addValues(crystal.green);

});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});




