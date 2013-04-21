$(document).ready(function() {
	var game = new Game();
  $('.game').delegate("td","click",function(){
    var td_index = $(this).parent().index() * 3 + $(this).index();
    alert(td_index);
  var currentTd = $(this)
  	$.ajax({
  		url: "/game/" + window.location.pathname.slice(6),
  		type: "post",
  		data: {td_index: td_index},
  		success: function(r) {
       $('.game').html(r);
  		}

  	});
  	// #Identify if it is player one or player two
  	// #If player 1 when he clicks assign X to him
  	// #If player 2 when he clicks assign 0 to him
  	// # Save the status of the game to the database with every click
  	// # load the status 
  });
});


function Game(player1,player2) {
	this.over =  false
	this.player1 = player1
	this.player2 = player2

}

function Player() {

}