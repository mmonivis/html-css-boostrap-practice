
var whosTurn = 1;
var player1Squares = [];
var player2Squares = [];
var winningCombos = [
    ['A1', 'B1', 'C1'], // Row 1
    ['A2', 'B2', 'C2'], // Row 2
    ['A3', 'B3', 'C3'], // Row 3
    ['A1', 'A2', 'A3'], // Column 1
    ['B1', 'B2', 'B3'], // Column 2
    ['C1', 'C2', 'C3'], // Column 3
    ['A1', 'B2', 'C3'], // Diag 1
    ['A3', 'B2', 'C1'] // Diag 2
]

var gameOverBool = false;
// var onePlayerGame = true;

var squares = document.getElementsByClassName('square');
for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', function(event){
        // console.log("User clicked on a square!")
        if(!gameOverBool){
            markSquare(this)
        }
    });
}


function markSquare(currentSquare){
    console.log(currentSquare.id);
    var squareResult = "";
    if((currentSquare.innerHTML == "X") || (currentSquare.innerHTML == "O")){
        // console.log("This square is taken");
        squareResult = "Sorry, this square is taken.";
    }else if(gameOverBool){
        squareResult = "Someone has won the game!"
    }else if(whosTurn == 1){
        currentSquare.innerHTML = "X";
        whosTurn = 2;
        // squareResult = "";
        player1Squares.push(currentSquare.id);
        checkWin(player1Squares,1);
        // if(onePlayerGame){
        //     computerMove();
        // }
    }else{
        currentSquare.innerHTML = "O";
        whosTurn = 1;
        // squareResult = "";
        player2Squares.push(currentSquare.id);
        checkWin(player2Squares,2);
    }
    // console.log(player1Squares);
    // console.log(player2Squares);
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = squareResult;
}

// function computerMove(){
//     // Find a random square
//     // See if that square is empty
//     // If so, send it to square
//     // If not, keep looking
// }

function checkWin(currentPlayersSquares, whoJustWent){
    // Outter loop winning combos
    for(let i = 0; i < winningCombos.length; i++){
        // Inner loop (square inside a winning combo)
        var squareCount = 0;
        for(let j = 0; j <winningCombos[i].length; j++){
            var winningSquare = winningCombos[i][j];
            // Does the player have this square?
            if(currentPlayersSquares.indexOf(winningSquare) > -1){
                // The index is greater than -1, which means the player has this square.
                // We don't care when it happened, we just care that it happened.
                squareCount++;
            }
        }
        // if squareCount == 3, then the user had all 3 j's in this i. Winning!
        if(squareCount == 3){
            console.log("Player " + whoJustWent + " won the game!")
            // Stop checking i's, the game is over!
            gameOver(whoJustWent, winningCombos[i]);
            break;
        }
    }
}

function gameOver(whoJustWon, winningCombo){
    var messageElement = document.getElementById('message');
    var winningMessage = "Congratulations to player " + whoJustWon + ". You won with " + winningCombo;
    messageElement.innerHTML = winningMessage;
    for(let i = 0; i < winningCombo.length; i++){
        document.getElementById(winningCombo[i]).className += ' winning-square';
    }
    gameOverBool = true;
}

function resetBoard(){
    //iterate through all sqr buttons and clear their values
    var squares = document.getElementsByClassName('square');
    for (i = 0; i < squares.length; i++){
        squares[i].innerHTML = "&nbsp;";
    }
    gameOverBool = false;
}