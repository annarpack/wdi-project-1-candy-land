$('document').ready(function(){


function checkValue() {
	$('#submit-button').click(function(){
		var players = window.localStorage.getItem('playersNum');
		if (players === '') {
			alert('Please choose a number between 1 and 4.')
		} 

	})
}



function setPlayers() {

	var players = window.localStorage.getItem('playersNum');
	console.log(players);
	return players;
}




	}) // end jQuery