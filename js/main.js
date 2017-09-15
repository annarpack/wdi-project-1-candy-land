$('document').ready(function() {


function renderUnqSpacesObj () {
		var $space =  $('#space'+this.num+'');
		console.log('unique space'+ $space);
		var $iconDiv = $('<div></div>')
			.addClass('icon');
		var $iconImg = $('<img>')
			.attr('src', './images/icon-lolly.png');
		$iconImg.appendTo($iconDiv);
		$iconDiv.appendTo($space);
}//end function
function createUnqSpacesObj (num, img) {
	return({
		num: num, 
		img: img,
		render: renderUnqSpacesObj
	})// end return
}// end function
function renderUnqSpaces(elements) {
	 elements.forEach(function(elm){
	 	elm.render();
	 })//end for each
}//end function
// ----------------------------------------------------------------------------------------------

function renderSpaceObj() {

	var $space = $('<div></div>')
 		.addClass('space')
 		.attr('id','space-' + this.num)
 		.css('background-color', this.color);		
	$space.appendTo(this.position);	

	if ( this.num === 0) {
		var $para = $('<p></p>')
			.addClass('start')
			.text('START');
		$para.appendTo($space);
	}//end if

}//end render Space

function createSpaceObj(num, color, position) {
	//console.log('inside createDivObj');
		return({
			num: num,
			color: color,
			position: position,
			render: renderSpaceObj
		})//end return
} // end function


function renderSpaces(elements) {
	 elements.forEach(function(elm){
	 	elm.render();
	 })//end for each
}//end function

// ----------------------------------------------------------------------------------------------
function renderUnqSpacesObj () {
		var $space =  $('#space-'+this.num+'');
		//console.log($space);
		var $iconDiv = $('<div></div>')
			.addClass('icon');
		var $iconImg = $('<img>')
			.attr('src', this.img);
		$iconImg.appendTo($iconDiv);
		$iconDiv.appendTo($space);
}//end function
function createUnqSpacesObj (num, img) {
	return({
		num: num, 
		img: img,
		render: renderUnqSpacesObj
	})// end return
}// end function
function renderUnqSpaces(elements) {
	 elements.forEach(function(elm){
	 	elm.render();
	 })//end for each
}//end function


function renderCharObj() {
	var $board = $('#characters');
	var $space = $('<div></div>')
 		.addClass('characters')
 		.attr('id', this.name);
 	var $bubble = $(' <div></div> ')
 			.addClass('speach-bubble');
 	var $bubbleImg = $('<img>')
 			.attr('src', './images/speach-bubble.png');
 	var $bubbleText = $('<p></p>')
 			.addClass('bubble-text');
 	var $image = $('<img>')
 		.attr('src', './images/' + this.img + '.png');
 	$image.appendTo($space);
 	$bubbleImg.appendTo($bubble);
 	$bubbleText.appendTo($bubble);
 	$bubble.appendTo($space);
	$space.appendTo($board);	

}//end render Space

function createCharObj(name, img) {
	//console.log('inside createDivObj');
		return({
			name: name,
			img: img,
			
			render: renderCharObj
		})//end return
} // end function
function renderChars(elements) {
	 elements.forEach(function(elm){
	 	elm.render();
	 }) // end for each
} // end function


// -----------------------------------------------------------------------------------------------


function renderPlayerObj() {
	//console.log('inrender player');

	var pieceDiv = $('<div></div>').attr('id', 'piece-' + this.num).addClass('pieces');
	var pieceImg = $('<img>');
	var pieceSrc = './images/piece-'+ this.num + '.png';
	//console.log(src);
	pieceImg.attr('src', pieceSrc);
	pieceDiv.append(pieceImg);
	$('#space-0').append(pieceDiv);

	var playerDiv = $(' <div></div> ')
		.attr('id', 'player-' + this.num + '')
		.addClass('player-info');
	var playerP = $('<p></p>')
		.text('Player ' + this.num + '');
	var playerImgDiv = $(' <div></div> ')
		.addClass('player-turn');
	var playerImg = $('<img>');
	var playerSrc = './images/piece-'+ this.num + '.png';
	playerImg.attr('src', playerSrc);
	playerImg.appendTo(playerDiv);
	playerDiv.prepend(playerImgDiv);
	playerP.appendTo(playerDiv);
	playerDiv.appendTo($('#info'));



}//end render 

function createPlayerObj(num, position, turn) {
	//console.log('inside createPlayerObj');
		return({
			num: num,
			position: position,
			turn: turn,
			render: renderPlayerObj
		})//end return
} // end function
function renderPlayers(players) {
	//console.log('inside for each');
	 players.forEach(function(player){
	 	player.render();
	 }) // end for each
} // end function

// -----------------------------------------------------------------------------------------------
function renderBoard() {
	var colors = ['red', 'purple', 'yellow', 'lightpink', 'cyan', 'orange', 'green'];
	var $board = $('#game-board');
	 this.spaces = [];
	 var $space;

	 var colorsInt = 0;

	 	colorsInt = 4;
	 	var idNum = 52;
	 	for (s=0; s<10; s++) { 
	 		var position = $('#col1');
	 		var $space = this.createSpaceObj(idNum, colors[colorsInt], position);
	 		colorsInt++;
			this.spaces.push($space);
			if (colorsInt === 7) {
			colorsInt = 0;
			}//end if
			idNum++;
	 	}
	 	colorsInt = 0;
	 	var idNum = 34;
	 	for (s=0; s<18; s++) { 
	 		var position = $('#row1');
	 		var $space = this.createSpaceObj(idNum, colors[colorsInt], position);
	 		colorsInt++;
			this.spaces.push($space);
			if (colorsInt === 7) {
			colorsInt = 0;
			}//end if
			idNum++;
	 	}
	 	colorsInt = 5;
	 	var idNum = 33;
	 	for (s=0; s<16; s++) { 
	 		var position = $('#col2');
	 		var $space = this.createSpaceObj(idNum, colors[colorsInt], position);
	 		colorsInt++;
			this.spaces.push($space);
			if (colorsInt === 7) {
			colorsInt = 0;
			}//end if
			idNum--;
	 	}
	 	colorsInt = 0;
		 var idNum = 17;
	 	for (s=0; s<17; s++) { 
	 		var position = $('#row2');
	 		var $space = this.createSpaceObj(idNum, colors[colorsInt], position);
	 		colorsInt++;
			this.spaces.push($space);
			if (colorsInt === 7) {
			colorsInt = 0;
			}//end if
			idNum--;
			if (idNum === 0){
				var position = $('#row2');
	 			var $space = this.createSpaceObj(idNum, 'none', position);
				this.spaces.push($space);
			}
			
	 	}
	 	colorsInt = 6;
	 	var idNum = 67;
	 	for (s=0; s<6; s++) { 
	 		if (idNum === 67){
				var position = $('#row-finish');
	 			var $space = this.createSpaceObj(idNum, 'none', position);
				this.spaces.push($space);
			}
			else {
	 		var position = $('#row-finish');
	 		var $space = this.createSpaceObj(idNum, colors[colorsInt], position);
	 		colorsInt++;
			this.spaces.push($space);
			if (colorsInt === 7) {
			colorsInt = 0;
			}//end if
		}
			idNum--;
	 	}

	 
	 renderSpaces(this.spaces);

	 this.characters = [
	 		createCharObj('princess-lolly', 'princess-lolly'),
	 		createCharObj('lord-licorice', 'lord-licorice'),
	 		createCharObj('mrmint', 'mrmint'),
	 		createCharObj('queen-frostine', 'queen-frostine'),
	 		createCharObj('gloppy', 'gloppy'),
	 		createCharObj('candy-king', 'candy-king')
	 ]; // end characters
	 renderChars(this.characters);

	 this.players = [
	 		createPlayerObj('1', '0', '0'),
	 		createPlayerObj('2', '0', '0'),
	 		createPlayerObj('3', '0', '0'),
	 		createPlayerObj('4', '0', '0')
	 ]; //end players
	 renderPlayers(this.players);

	 this.unqSpaces = [
	 		createUnqSpacesObj('6', './images/icon-lolly.png'),
	 		createUnqSpacesObj('15', './images/icon-lord.png'),
	 		createUnqSpacesObj('28', './images/icon-mint.png'),
	 		createUnqSpacesObj('36', './images/icon-frost.png'),
	 		createUnqSpacesObj('54', './images/icon-gloppy.png')
	 ]; //end unqspaces
	 renderUnqSpaces(this.unqSpaces);

}/// end render Game Board

var gameObj = {
	"spaces": [],
	"unqSpaces": [],
	"characters" : [],
	"players": [],
	turn: 0,
	createSpaceObj: createSpaceObj,
	renderSpaces: renderSpaces,
	createUnqSpacesObj: createUnqSpacesObj,
	renderUnqSpaces: renderUnqSpaces,
	createCharObj: createCharObj,
	renderChars: renderChars,
	createPlayerObj: createPlayerObj,
	renderPlayers: renderPlayers,

	// handleTurn: handleTurn,
	render: renderBoard

	// checkWin: checkWin();

}; // end gameObj

console.log(gameObj);
gameObj.render();




//----------------------------------------------------------------------------------------------
// var players;
// function submitPlayers() {
// 	var $input = $('input#input').submit();

// 	if ($input === '' ) {
// 		$(' <div></div> ').text('That is not a valid input').appendTo($('h2'));
// 	}

// 	players = parseInt($input);

// 	return players;
// 	console.log(players);
// }
// var players = 4;
// var player = 1;


function getPlayer(turn) {
	var $player = gameObj.players[turn];
	var $turn = gameObj.players[gameObj.turn].turn;
	return $player.num;

} // end get player

// ----------------------------------------------------------------------------------------------


function rollDie() {
	var n = (Math.random() * 5);
	n = Math.ceil(n);
	//console.log("Roll n:" + n);

	var img = $('#die-img');
	for (i=0; i < 10; i++) {
		if(n === i) {
			img.attr('src', './images/dice-' + i + '.jpg');
		}
	}
	return n;
}//end RollDie function


function characterOptions(newNum) {
	if (newNum === 6 ) {
		$('.charDiv').show( "slow", function() {
			$('.charDiv').css('display', 'block');
			 $('#princess-lolly').css('display', 'block');
			 $('#princess-lolly .bubble-text').text('Princess Lolly wants to dance with you! Dance two spaces forward. ');		 
  		});// end slide
  		setTimeout(function(){
  			$('.charDiv').hide( "slow", function() {
			$('.charDiv').css('display', 'none');
			 $('#princess-lolly').css('display', 'none');
			});
		}, 3000);// end Timeout
		var $player = gameObj.players[gameObj.turn].num;
		setTimeout(function(){
				takeTurn(2, $player);
		}, 2000);

	}// end if


	if (newNum === 15 ) {
		$('.charDiv').show( "slow", function() {
			$('.charDiv').css('display', 'block');
			 $('#lord-licorice').css('display', 'block');
			 $('#lord-licorice .bubble-text').text('The evil Lord Licorice has stolen your next turn! MWAHAHA!');		 
  		});// end slide
  		setTimeout(function(){
  			$('.charDiv').hide( "slow", function() {
				$('.charDiv').css('display', 'none');
			 	$('#lord-licorice').css('display', 'none');
			});
		}, 3000);// end Timeout
  		var $player = gameObj.players[gameObj.turn];
  		$player.turn--;
		//console.log($player.turn);
	} // end if

	if (newNum === 28 ) {
		$('.charDiv').show( "slow", function() {
			 $('.charDiv').css('display', 'inline-block');
			 $('#mrmint').css('display', 'inline-block');
			 $('#mrmint .bubble-text').text('Mr. Mint says, "You oughta-gotta have fun!" Move two spaces forward.');
  		});// end slide
  		setTimeout(function(){
  			$('.charDiv').hide( "slow", function() {
				$('.charDiv').css('display', 'none');
			 	$('#mrmint').css('display', 'none');
			});
		}, 3000);// end Timeout
		var $player = gameObj.players[gameObj.turn].num;
		setTimeout(function(){
				takeTurn(2, $player);
		}, 2000);
	}// end if
	if (newNum === 38 ) {
		$('.charDiv').show( "slow", function() {
			$('.charDiv').css('display', 'block');
			 $('#queen-frostine').css('display', 'block');
			 $('#queen-frostine .bubble-text').text('Queen Frostine has summoned you to the Gumdrop Mountains! Move 4 spaces forward.');		 
  		});// end slide
  		setTimeout(function(){
  			$('.charDiv').hide( "slow", function() {
				$('.charDiv').css('display', 'none');
			 	$('#queen-frostine').css('display', 'none');
			});
		}, 3000);// end timeout
		var $player = gameObj.players[gameObj.turn].num;
		setTimeout(function(){
				takeTurn(4, $player);
		}, 2000);
	}// end if
	if (newNum === 54 ) {
		$('.charDiv').show( "slow", function() {
			$('.charDiv').css('display', 'block');
			 $('#gloppy').css('display', 'block');
			 $('#gloppy .bubble-text').text('Gloppy wants to be friends! Visit Gloppy in the Molasses Swamp and loose a turn.');		 
  		});// end slide
  		setTimeout(function(){
  			$('.charDiv').hide( "slow", function() {
			$('.charDiv').css('display', 'none');
			 $('#gloppy').css('display', 'none');
			});
		}, 3000);// end Timeout
		 var $player = gameObj.players[gameObj.turn];
  		$player.turn--;
	}// end if
	if (newNum === 67 ) {
		$('.charDiv').show( "slow", function() {
			$('.charDiv').css('display', 'block');
			 $('#candy-king').css('display', 'block');
			 var player = getPlayer(gameObj.turn);
			 $('#candy-king .bubble-text').text('Player ' + player + ' WINS! The Candy King congratulates you!');		 
  		});// end slide
  		setTimeout(function(){
  			$('.charDiv').hide( "slow", function() {
			$('.charDiv').css('display', 'none');
			 $('#candy-king').css('display', 'none');
			});
		}, 3000);// end Timeout
	}// end if

}

function changePlayerImg(num){
	var $playersArr = $('div').find( $('.player-turn'));

		$playersArr.removeClass('green');
	var $player = $('div').find( $('#player-' + num) ).children();
	//console.log($player);
	$($player[0]).addClass('green');

}

function takeTurn(num, piece) {
	//console.log(piece);
	var $piece = $('#piece-' + piece + '');
	//console.log($piece);
	var space = $piece.parent();
	var spaceId = space.attr('id');
	var spaceArr = spaceId.split('-');
	var spaceNum = spaceArr[1];
	spaceNum = parseInt(spaceNum);
	var newNum = spaceNum + num;
	//var newNum = 15;
	//console.log('newNum:' + newNum);

	var newSpace = $('div').find( $('#space-' + newNum) );
	newSpace.append($piece);

	characterOptions(newNum);
	changePlayerImg(piece);

}// end takeTurn function

$('#die').click(function(event) {
	if(gameObj.turn === gameObj.players.length ) { gameObj.turn = 0; }
	var turn = gameObj.turn;


	var $player = gameObj.players[gameObj.turn];
	var $turn = gameObj.players[gameObj.turn].turn;
	//console.log($player);

	if($turn === -1) { 
		var piece = getPlayer(turn);
		alert('Player ' + piece + ', your turn has been skipped.'); 
		gameObj.players[gameObj.turn].turn = 0;
		//console.log(gameObj.players[gameObj.turn].turn);
		gameObj.turn++;
		return;
	} // end if

	else {
	var piece = getPlayer(turn);
	//console.log('player:' + piece);
	var num = rollDie();
	takeTurn(num, piece);
	gameObj.turn++;
	} // end else 

}); // end die click function

});// Document ready function