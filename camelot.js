var gameElement = "";
var excalTries = 0;
var excaliburPosition = -2;
var message =  "This is the current state of the game."

$(document).ready(function() {  // do when document is loaded
  $("#select-game").show(); // show buttons to selecdt game component
  $("#take-picture").hide();  // hide picture taking code
  $("#results").hide(); // hide results page

});

$("#excalibur").click(function(){

  $("#select-game").hide(); // show buttons to selecdt game component
  $("#take-picture").show();  // hide picture taking code
  $("#results").hide(); // hide results page
  gameElement = "excalibur";
});

$("#siege").click(function(){
  $("#select-game").hide(); // show buttons to selecdt game component
  $("#take-picture").show();  // hide picture taking code
  $("#results").hide(); // hide results page
  gameElement = "siege";
});

$("#round-table").click(function(){
  $("#select-game").hide(); // show buttons to selecdt game component
  $("#take-picture").show();  // hide picture taking code
  $("#results").hide(); // hide results page
  gameElement = "round-table";

});

$("#capture").click(function(){
  var num = Math.floor(Math.random() * 10);
  if ((num % 2) === 0){
    $("#select-game").hide(); // hide buttons to selecdt game component
    $("#take-picture").hide();  // hide picture taking code
    $("#results").show(); // show results page

    if(gameElement === 'excalibur'){
      if (excalTries == 0){
        document.getElementById('game-state').innerHTML="<h2>Excalibur is at position -3.</h2>";
        excalTries = excalTries + 1;
      }
      else {
        document.getElementById('game-state').innerHTML="<h2>Excalibur is at position -4.</h2>";
      }

    }
    if(gameElement === 'siege'){
      document.getElementById('game-state').innerHTML="<h2>There are 5 (out of 12) siege engines on the board.</h2>";
    }
    if(gameElement === 'round-table'){
      document.getElementById('game-state').innerHTML="<h2>There are 3 white swords and 2 black swords at the round table.</h2>";
    }
  }

  else {
    alert("Please retake the photo");
  }

});

$("#reset").click(function(){

  $("#select-game").show(); // show buttons to selecdt game component
  $("#take-picture").hide();  // hide picture taking code
  $("#results").hide(); // hide results page
  gameElement = "";
});
