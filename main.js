$('document').ready(function() {



function renderDiv() {
	var $board = $('#game-board');
	var $color = $('<div></div>')
			.addClass('color')
			.css('background-color', this.color);
 	var $space = $('<div></div>')
 			.addClass('space')
 			.attr('id','space-' + this.num);
	$color.appendTo($space);		
	$space.appendTo($board);


}//end render Div

function createDivObj(num, color) {
	//console.log('inside createDivObj');
		return({
			num: num,
			color: color,
			render: renderDiv
		})//end return
} // end function

// function renderDivObj() {
// 	this.divs.forEach(function(div){
// 		div.render();
// 	})
// }

function renderSpaces(elements) {
	 elements.forEach(function(elm){
	 	elm.render();
	 })

}

function renderBoard() {
	var colors = ['red', 'purple', 'yellow', 'cyan', 'orange', 'green'];
	var $board = $('#game-board');
	 this.divs = [];
	 var $space;


	 $space = this.createDivObj(0, '');
	this.divs.push($space);

	 
	 var colorsInt = 0;
	 for (var i = 1; i < 134; i++) {
	 			var $space = this.createDivObj(i, colors[colorsInt]);
	 			colorsInt++;
				this.divs.push($space);
				if (colorsInt === 6) {
					colorsInt = 0;
				}// end if
	 		
	 		//}//end for 
	 }//end for

	 
	 renderSpaces(this.divs);
}/// end render Div Obj


var gameObj = {
	"divs": [],
	players: 0,
	turn: '',
	createDivObj: createDivObj,
	renderSpaces: renderSpaces,

	// handleTurn: handleTurn,
	render: renderBoard

	
	// checkWin: checkWin();

}; // end gameObj

console.log(gameObj);
gameObj.render();






// ----------------------------------------------------------------------------------------------
function createGamePieces(players) {
	for (var i = 0; i < players; i++){
			var pieceDiv = $('<div></div>').attr('id', 'piece-' + i).addClass('pieces');
			var pieceImg = $('<img>');
			pieceImg.attr('src', './images/piece.png');
			pieceDiv.append(pieceImg)
			$('#space-0').append(pieceDiv);
		}//end for 


}
createGamePieces(1);

// ----------------------------------------------------------------------------------------------

// var divObjs = {
// 		'divs': [

// 		createDivObj('1', 'red', '920', '300'),
// 		createDivObj('2', 'red', '0', '0'),
// 		createDivObj('3', 'red', '0', '0')
// 	],
// 	render: renderDivObj
// 	} //end div object


// divObjs.render();

// ----------------------------------------------------------------------------------------------
// function createBoardGame() {



// 	for (i=0; i < 135; i++) {
// 		var colorDiv = $('<div></div>');
// 		colorDiv.addClass('color');
// 		var newDiv = $('<div></div>');
// 		newDiv.addClass('space').attr('id','space-' + i);
// 		$('#game-board').append(newDiv);
// 		newDiv.append(colorDiv);
// 	}
// 	var pieceDiv = $('<div></div>');
// 	pieceDiv.attr('id', 'piece')
// 	var pieceImg = $('<img>');
// 	pieceImg.attr('src', './images/piece.png');
// 	pieceDiv.append(pieceImg)
// 	$('#space-0').append(pieceDiv);


// }
// createBoardGame();

function rollDie() {
	var n = (Math.random() * 9);
	n = Math.ceil(n);
	console.log("Roll n:" + n);


	var img = $('#die-img');

	for (i=0; i < 10; i++) {
		if(n === i) {
			img.attr('src', './images/dice-' + i + '.jpg');
		}
	}
	return n;
}//end RollDie function

function takeTurn(num) {
	var space = $('#piece').parent();
	var spaceId = space.attr('id');
	var spaceArr = spaceId.split('-');
	var spaceNum = spaceArr[1];
	spaceNum = parseInt(spaceNum);
	var newNum = spaceNum + num;
	//var newNum = 5;
	console.log('newNum:' + newNum);

	if( newNum === 5 ){
		console.log('in the if');
		var newSpace = $('div').find( $('#space-59') );
		console.log(newSpace);
		var piece = $('#piece');
		newSpace.append(piece);
		return;
	}//end if
	if( newNum === 34 ){
		var newSpace = $('div').find( $('#space-47') );
		var piece = $('#piece');
		newSpace.append(piece);
		return;
	}//end if


	else {
		var newSpace = $('div').find( $('#space-' + newNum) );
		var piece = $('#piece');
		newSpace.append(piece);
	}//end else



	if (newNum === 9 ) {
		alert('Plumpy')
	}
	if (newNum === 18 ) {
		alert('Mr. Mint')
	}
	if (newNum === 86 ) {
		alert('Lost in Lollipop Woods. Lose One Turn.')
	}

}// end takeTurn function

$('#die').click(function(event) {
	var num = rollDie();
	takeTurn(num);

}); // end die click function

});// Document ready function