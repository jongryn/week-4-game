/*
// Created: July 4, 2017 4:00 AM
// Author: Jonathan Gryn
// Revisions: Jon (6/26/17) - Added js   
*/

$(document).ready(function() {
  
  // Selects a random number to be shown at the start of the game
  // Number should be between 19-120
  var Random=Math.floor(Math.random()*101+19)

  // Appending a random number to the randomNumber id in the HTML doc
  $('#randomNumber').text(Random);

  // Setting up random number for each jewel
  // Random number has to be between 1-12
  var num1=Math.floor(Math.random()*11+1)
  var num2=Math.floor(Math.random()*11+1)
  var num3=Math.floor(Math.random()*11+1)
  var num4=Math.floor(Math.random()*11+1)

  // Declaring variables for tallies
  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  // Resets the game
  function reset() {
  	Random=Math.floor(Math.random()*101+19);
  	console.log(Random)
  	$('#randomNumber').text(Random);
  	num1=Math.floor(Math.random()*11+1);
  	num2=Math.floor(Math.random()*11+1);
  	num3=Math.floor(Math.random()*11+1);
  	num4=Math.floor(Math.random()*11+1);

  	// Adds the wins to the userTotal
  	userTotal = 0;
  	$('#finalTotal').text(userTotal);
  }

  function yay() {
  	alert("you won!");
  	wins++;
  	$('#numberWins').text(wins);
  	reset();
  }

  // Addes the losses to the userTotal
  function loser() {
  	alert("You lose!");
  	losses++;
  	$('#numberLosses').text(losses);
  	reset()
  }

  // Sets up click for jewels
  $('#one').on('click', function() {
    userTotal = userTotal + num1;
    console.log("New userTotal = " + userTotal);
    $('#finalTotal').text(userTotal);

    // Sets win/lose conditions
    if (userTotal == Random) {
      yay();
    } else if (userTotal > Random) {
      loser();
    }
  })

  $('#two').on('click', function() {
  	userTota = userTotal + num2;
  	console.log("New userTotal= " + userTotal);
  	$('#finalTotal').text(userTotal);

  	  // Sets win/lose conditions
  	  if(userTotal == Random) {
  	  	yay();
  	  } else if(userTotal > Random) {
  	  	loser();
  	  }
  })

  $('#three').on('click', function() {
  	userTotal = userTotal + num3;
  	console.log("New userTotal= " + userTotal);
  	$('#finalTotal').text(userTotal);

  	// Sets win/lose conditions
  	if(userTotal == Random) {
  	  yay();
  	} else if(userTotal > Random) {
  	  loser();
  	}
  })

  $('#four').on('click', function() {
  	userTotal = userTotal + num4;
  	console.log("New userTotal= " + userTotal);
  	$('#finalTotal').text(userTotal);

  	// Sets win/lose conditions
  	if(userTotal == Random) {
      yay();
  	} else if(userTotal > Random) {
  	  loser();
  	}
  });

});